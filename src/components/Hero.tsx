"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CarVisual from "./CarVisual";
import Stats from "./Stats";
import { engineSound } from "@/utils/engineAudio";
import { Gauge, Zap, Wind, Eye } from "lucide-react";

interface HeroProps {
  accentColor: string;
  driveMode: "COMFORT" | "SPORT" | "TRACK";
}

export default function Hero({ accentColor, driveMode }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const carWrapperRef = useRef<HTMLDivElement>(null);
  const speedLinesRef = useRef<HTMLDivElement>(null);
  const gridPerspectiveRef = useRef<HTMLDivElement>(null);
  const hudPanelRef = useRef<HTMLDivElement>(null);
  
  const [speedMeter, setSpeedMeter] = useState(0);

  const headlineText = "W E L C O M E   I T Z   F I Z Z";
  // Split words & letters for staggered reveal animation
  const characters = headlineText.split("");

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current) return;

      // 1. Initial Load Animation (Entry Timeline)
      const entryTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Staggered text reveal for characters
      entryTl.fromTo(
        ".char-span",
        { opacity: 0, y: 40, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, stagger: 0.03 }
      );

      // Subtitle & Badge fade in
      entryTl.fromTo(
        ".hero-sub-element",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
        "-=0.4"
      );

      // Stats cards sequential slide up
      entryTl.fromTo(
        "[data-stat-card]",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
        "-=0.3"
      );

      // Car initial subtle entrance
      entryTl.fromTo(
        carWrapperRef.current,
        { opacity: 0, scale: 0.88, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "back.out(1.2)" },
        "-=0.6"
      );

      // 2. Scroll-Driven Animation (Core Feature with GSAP ScrollTrigger)
      // Scrubbed animation tied directly to page scroll progress
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.2, // Buttery smooth scrub parameter
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Update live telemetry speedometer based on scroll progress & velocity
            const currentSpeed = Math.round(self.progress * 240 + Math.abs(self.getVelocity() / 30));
            setSpeedMeter(Math.min(320, currentSpeed));
            engineSound.updateSpeed(self.progress);
          },
        },
      });

      // Headline Parallax float up & fade out
      scrollTl.to(
        headlineRef.current,
        {
          y: -120,
          opacity: 0,
          scale: 0.95,
          filter: "blur(8px)",
          duration: 0.5,
        },
        0
      );

      // Stats cards collapse/fade on scroll
      scrollTl.to(
        "[data-stat-card]",
        {
          opacity: 0.2,
          y: -60,
          stagger: 0.05,
          duration: 0.4,
        },
        0
      );

      // Main Car Object Scroll Translation & 3D Drive Perspective Forward
      scrollTl.to(
        carWrapperRef.current,
        {
          y: 110,
          scale: 1.35,
          rotateX: 12,
          transformPerspective: 800,
          duration: 1,
          ease: "none",
        },
        0
      );

      // 3D Perspective Road Grid Parallax scroll
      if (gridPerspectiveRef.current) {
        scrollTl.to(
          gridPerspectiveRef.current,
          {
            backgroundPositionY: "400px",
            opacity: 0.9,
            duration: 1,
          },
          0
        );
      }

      // Speed lines zip past
      if (speedLinesRef.current) {
        scrollTl.to(
          speedLinesRef.current,
          {
            opacity: 0.7,
            scaleY: 1.8,
            duration: 1,
          },
          0
        );
      }

      // HUD panel translation parallax
      if (hudPanelRef.current) {
        scrollTl.to(
          hudPanelRef.current,
          {
            y: 40,
            opacity: 1,
            duration: 0.8,
          },
          0.2
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-hidden pt-28 pb-10 bg-[#050509]"
    >
      {/* 3D Perspective Cyber Road Grid Layer (Parallax Depth) */}
      <div
        ref={gridPerspectiveRef}
        className="absolute inset-0 cyber-grid perspective-grid opacity-30 pointer-events-none transition-opacity duration-500"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8) 40%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8) 40%, transparent)",
        }}
      />

      {/* Speed lines overlay */}
      <div
        ref={speedLinesRef}
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300"
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-4 flex flex-col items-center">
        
        {/* Top Hypercar Category Badge */}
        <div className="hero-sub-element inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4 shadow-lg shadow-cyan-500/10">
          <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>NEXT-GEN ELECTRIC HYPERCAR</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-slate-400 font-semibold">{driveMode} MODE</span>
        </div>

        {/* High-Impact Headline with Tracking & Letter Spacing */}
        <h1
          ref={headlineRef}
          className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] py-2 select-none"
        >
          {characters.map((char, index) => (
            <span
              key={index}
              className="char-span inline-block transition-colors duration-300 hover:text-cyan-400"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Subtitle / Tagline */}
        <p className="hero-sub-element max-w-2xl text-xs sm:text-sm md:text-base text-slate-300 font-medium tracking-wide mt-2 mb-6">
          Precision engineered scroll dynamics with GSAP ScrollTrigger physics & 60FPS GPU acceleration.
        </p>

        {/* Key Impact Statistics/Metrics (Requirements #1 & #2) */}
        <Stats accentColor={accentColor} />

      </div>

      {/* Central Visual Asset Container (Requirements #1 & #3) */}
      <div
        ref={carWrapperRef}
        className="relative z-20 w-full max-w-5xl px-4 my-auto cursor-pointer"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        <CarVisual accentColor={accentColor} isDriving={speedMeter > 0} />
      </div>

      {/* Floating HUD Speedometer Overlay Panel */}
      <div
        ref={hudPanelRef}
        className="relative z-30 w-full max-w-md mx-auto px-4 mt-4 pointer-events-none opacity-90"
      >
        <div className="glass-panel px-6 py-3 rounded-2xl border border-white/10 flex items-center justify-between shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Gauge className="w-5 h-5 text-cyan-400" />
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">VELOCITY</div>
              <div className="font-orbitron font-extrabold text-xl text-white">
                {speedMeter} <span className="text-xs font-normal text-cyan-400">MPH</span>
              </div>
            </div>
          </div>

          <div className="h-8 w-px bg-white/10" />

          <div className="flex items-center gap-3">
            <Wind className="w-5 h-5 text-indigo-400" />
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">SCRIB FORCE</div>
              <div className="font-orbitron font-semibold text-sm text-cyan-300">
                GSAP 60 FPS
              </div>
            </div>
          </div>

          <div className="h-8 w-px bg-white/10" />

          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-emerald-400" />
            <span className="text-[11px] font-mono text-emerald-400 font-bold">READY</span>
          </div>
        </div>
      </div>

    </section>
  );
}
