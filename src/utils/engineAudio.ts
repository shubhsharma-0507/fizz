"use client";

// Web Audio API Synthesizer for Hypercar Engine Sound Effect
class HypercarEngineSound {
  private audioCtx: AudioContext | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private isRunning: boolean = false;

  public toggle(): boolean {
    if (this.isRunning) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    if (this.isRunning) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioCtx();
      
      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(0.08, this.audioCtx.currentTime);

      this.filter = this.audioCtx.createBiquadFilter();
      this.filter.type = "lowpass";
      this.filter.frequency.setValueAtTime(350, this.audioCtx.currentTime);

      // Main deep sub bass engine rumble
      this.osc1 = this.audioCtx.createOscillator();
      this.osc1.type = "sawtooth";
      this.osc1.frequency.setValueAtTime(55, this.audioCtx.currentTime);

      // Higher harmonic motor whine
      this.osc2 = this.audioCtx.createOscillator();
      this.osc2.type = "triangle";
      this.osc2.frequency.setValueAtTime(110, this.audioCtx.currentTime);

      this.osc1.connect(this.filter);
      this.osc2.connect(this.filter);
      this.filter.connect(this.gainNode);
      this.gainNode.connect(this.audioCtx.destination);

      this.osc1.start();
      this.osc2.start();
      this.isRunning = true;
    } catch {
      // Ignore audio autoplay policies if blocked
    }
  }

  public updateSpeed(rpmFactor: number) {
    if (!this.isRunning || !this.audioCtx || !this.osc1 || !this.osc2 || !this.filter) return;
    
    // Smooth pitch shift based on scroll progress or velocity (from 0 to 1)
    const targetFreq = 50 + rpmFactor * 160;
    const targetFilter = 300 + rpmFactor * 800;

    this.osc1.frequency.setTargetAtTime(targetFreq, this.audioCtx.currentTime, 0.1);
    this.osc2.frequency.setTargetAtTime(targetFreq * 2.2, this.audioCtx.currentTime, 0.1);
    this.filter.frequency.setTargetAtTime(targetFilter, this.audioCtx.currentTime, 0.1);
  }

  public stop() {
    if (!this.isRunning) return;
    try {
      if (this.osc1) {
        this.osc1.stop();
        this.osc1.disconnect();
      }
      if (this.osc2) {
        this.osc2.stop();
        this.osc2.disconnect();
      }
      if (this.audioCtx) {
        this.audioCtx.close();
      }
    } catch {
      // Audio cleanup safely
    }
    this.isRunning = false;
  }
}

export const engineSound = new HypercarEngineSound();
