"use client";

import { useState } from "react";
import { Volume2, VolumeX, Shield, Zap, Sparkles, Flame } from "lucide-react";
import { engineSound } from "@/utils/engineAudio";

interface NavbarProps {
  currentColor: string;
  onColorChange: (color: string) => void;
  driveMode: "COMFORT" | "SPORT" | "TRACK";
  onDriveModeChange: (mode: "COMFORT" | "SPORT" | "TRACK") => void;
}

export default function Navbar({
  currentColor,
  onColorChange,
  driveMode,
  onDriveModeChange,
}: NavbarProps) {
  const [audioActive, setAudioActive] = useState(false);

  const toggleSound = () => {
    const active = engineSound.toggle();
    setAudioActive(active);
  };

  const colors = [
    { name: "Cyber Cyan", hex: "#00f2fe", class: "bg-cyan-400" },
    { name: "Crimson Red", hex: "#ff0055", class: "bg-rose-500" },
    { name: "Neon Emerald", hex: "#10b981", class: "bg-emerald-400" },
    { name: "Solar Gold", hex: "#ffb703", class: "bg-amber-400" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl border border-white/10 backdrop-blur-md">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center font-orbitron font-black text-white text-lg shadow-lg shadow-cyan-500/20">
            F
          </div>
          <div>
            <span className="font-orbitron font-extrabold tracking-widest text-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyan-400">
              ITZ FIZZ
            </span>
            <span className="hidden sm:inline-block text-[10px] tracking-widest uppercase ml-2 text-cyan-400/80 font-mono bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-500/20">
              HYPER-EV
            </span>
          </div>
        </div>

        {/* Color Switcher & Sound Engine Controls */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Customizer Palette */}
          <div className="flex items-center gap-2 bg-slate-900/70 p-1.5 rounded-full border border-white/10">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider pl-2 pr-1 font-mono">
              FINISH:
            </span>
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => onColorChange(c.hex)}
                className={`w-6 h-6 rounded-full ${c.class} transition-all duration-200 hover:scale-110 flex items-center justify-center ${
                  currentColor === c.hex
                    ? "ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-110 shadow-md"
                    : "opacity-70 hover:opacity-100"
                }`}
                title={c.name}
              />
            ))}
          </div>

          {/* Drive Mode Selector */}
          <div className="flex items-center bg-slate-900/70 p-1 rounded-full border border-white/10 text-xs font-mono">
            {(["COMFORT", "SPORT", "TRACK"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => onDriveModeChange(mode)}
                className={`px-3 py-1 rounded-full transition-all duration-300 font-bold ${
                  driveMode === mode
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {mode === "TRACK" && <Flame className="w-3 h-3 inline mr-1 text-amber-400" />}
                {mode === "SPORT" && <Zap className="w-3 h-3 inline mr-1 text-cyan-400" />}
                {mode === "COMFORT" && <Shield className="w-3 h-3 inline mr-1 text-emerald-400" />}
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Audio Engine & CTA Button */}
        <div className="flex items-center gap-3">
          {/* Engine Audio Synth Switch */}
          <button
            onClick={toggleSound}
            className={`flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-xl border transition-all duration-300 ${
              audioActive
                ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/20 animate-pulse"
                : "bg-slate-900/60 border-white/10 text-slate-400 hover:text-white hover:border-white/30"
            }`}
            title="Toggle Engine Audio Synthesizer"
          >
            {audioActive ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden sm:inline">
              {audioActive ? "ENGINE SOUND ON" : "SOUND MUTE"}
            </span>
          </button>

          {/* CTA Button */}
          <button className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-orbitron font-semibold text-xs tracking-wider shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              BUILD YOURS
            </span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </header>
  );
}
