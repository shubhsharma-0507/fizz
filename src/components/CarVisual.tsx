"use client";

import { useId } from "react";

interface CarVisualProps {
  accentColor?: string;
  isDriving?: boolean;
  className?: string;
}

export default function CarVisual({
  accentColor = "#00f2fe",
  isDriving = true,
  className = "",
}: CarVisualProps) {
  const filterId = useId();
  const glowId = useId();
  const beamId = useId();

  return (
    <div className={`relative w-full max-w-4xl mx-auto pointer-events-none select-none ${className}`}>
      
      {/* Ground Neon Underglow */}
      <div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-24 blur-3xl rounded-full transition-colors duration-500 opacity-80"
        style={{
          backgroundColor: accentColor,
          boxShadow: `0 0 100px ${accentColor}`,
        }}
      />

      {/* Headlight Ray Flare Projection */}
      <div className="absolute top-1/2 -left-20 w-96 h-40 -translate-y-1/2 pointer-events-none opacity-60">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          <defs>
            <linearGradient id={beamId} x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="30%" stopColor={accentColor} stopOpacity="0.4" />
              <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="400,90 400,110 0,20 0,180" fill={`url(#${beamId})`} />
        </svg>
      </div>

      {/* Detailed Sleek Hypercar Cutout SVG */}
      <svg
        viewBox="0 0 1000 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] transition-all duration-300"
      >
        <defs>
          {/* Main Body Gradient */}
          <linearGradient id="carBody" x1="0" y1="0" x2="1000" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="40%" stopColor="#0f172a" />
            <stop offset="70%" stopColor="#020617" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>

          {/* Roof Line Metallic Metallic Shine */}
          <linearGradient id="roofShine" x1="200" y1="50" x2="800" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
          </linearGradient>

          {/* Accent Color Gradient */}
          <linearGradient id="accentGrad" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={accentColor} stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
          </linearGradient>

          {/* Glass Windshield Reflection */}
          <linearGradient id="glassGrad" x1="300" y1="50" x2="600" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#0284c7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
          </linearGradient>

          {/* Wheel Glow Filter */}
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" />
          </filter>
        </defs>

        {/* Shadow Ground Base */}
        <ellipse cx="500" cy="380" rx="460" ry="25" fill="#000000" opacity="0.9" />

        {/* Lower Chassis / Carbon Fiber Side Skirt */}
        <path
          d="M 120 340 L 220 350 L 780 350 L 880 340 L 920 310 L 860 300 L 140 300 Z"
          fill="#090d16"
          stroke="#1e293b"
          strokeWidth="2"
        />

        {/* Dynamic Underglow Strip */}
        <path
          d="M 180 348 L 820 348"
          stroke={accentColor}
          strokeWidth="8"
          strokeLinecap="round"
          filter={`url(#${filterId})`}
          opacity="0.9"
        />

        {/* Car Main Aerodynamic Body Monocoque */}
        <path
          d="M 80 300 
             C 120 280, 180 260, 260 250 
             C 320 200, 420 120, 520 110 
             C 660 100, 760 170, 840 230 
             C 890 260, 940 270, 960 290 
             C 970 310, 940 330, 910 335 
             L 90 335 
             C 70 330, 65 310, 80 300 Z"
          fill="url(#carBody)"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
        />

        {/* Metallic Roof & Bonnet Reflection Curve */}
        <path
          d="M 260 250 
             C 320 200, 420 120, 520 110 
             C 660 100, 760 170, 840 230"
          stroke="url(#roofShine)"
          strokeWidth="4"
          fill="none"
        />

        {/* Cockpit / Curved Windshield Glass */}
        <path
          d="M 320 235 
             C 380 180, 460 130, 540 125 
             C 620 122, 690 165, 730 220 
             L 320 235 Z"
          fill="url(#glassGrad)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.5"
        />

        {/* Cockpit Pillar Window Highlights */}
        <path
          d="M 520 126 L 535 228"
          stroke="rgba(15, 23, 42, 0.9)"
          strokeWidth="6"
        />

        {/* Custom Accent Body Decal / Side Air Intake Flank */}
        <path
          d="M 180 290 C 300 275, 450 280, 520 240 C 600 280, 750 270, 890 285"
          stroke="url(#accentGrad)"
          strokeWidth="3.5"
          fill="none"
          filter={`url(#${filterId})`}
        />

        {/* Aggressive Headlight LED Bar (Left/Front) */}
        <path
          d="M 80 295 L 150 285 L 180 298 L 90 310 Z"
          fill="#ffffff"
          filter={`url(#${filterId})`}
        />
        <path
          d="M 85 293 L 175 285"
          stroke={accentColor}
          strokeWidth="4"
          filter={`url(#${filterId})`}
        />

        {/* Tail Light Red LED Flare (Right/Rear) */}
        <path
          d="M 940 285 L 960 292 L 955 305 L 930 300 Z"
          fill="#ff0055"
          filter={`url(#${filterId})`}
        />
        <circle cx="950" cy="295" r="12" fill="#ff0055" opacity="0.6" filter={`url(#${glowId})`} />

        {/* Wheel Arches */}
        <path d="M 200 335 A 75 75 0 0 1 350 335 Z" fill="#05070a" />
        <path d="M 670 335 A 75 75 0 0 1 820 335 Z" fill="#05070a" />

        {/* Front Wheel (Spinning Rim Effect) */}
        <g transform="translate(275, 335)">
          {/* Tire Outer */}
          <circle cx="0" cy="0" r="68" fill="#111827" stroke="#374151" strokeWidth="8" />
          {/* Brake Caliper */}
          <path d="M -30 -30 A 45 45 0 0 1 20 -35" stroke={accentColor} strokeWidth="12" fill="none" />
          {/* Rim Alloy Spokes */}
          <g className={isDriving ? "animate-spin" : ""} style={{ animationDuration: "1.2s", transformOrigin: "center" }}>
            <circle cx="0" cy="0" r="50" fill="#1f2937" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
            <circle cx="0" cy="0" r="16" fill={accentColor} />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line
                key={angle}
                x1="0"
                y1="0"
                x2={48 * Math.cos((angle * Math.PI) / 180)}
                y2={48 * Math.sin((angle * Math.PI) / 180)}
                stroke="#e2e8f0"
                strokeWidth="4"
                strokeLinecap="round"
              />
            ))}
          </g>
        </g>

        {/* Rear Wheel (Spinning Rim Effect) */}
        <g transform="translate(745, 335)">
          {/* Tire Outer */}
          <circle cx="0" cy="0" r="68" fill="#111827" stroke="#374151" strokeWidth="8" />
          {/* Brake Caliper */}
          <path d="M -30 -30 A 45 45 0 0 1 20 -35" stroke={accentColor} strokeWidth="12" fill="none" />
          {/* Rim Alloy Spokes */}
          <g className={isDriving ? "animate-spin" : ""} style={{ animationDuration: "1.2s", transformOrigin: "center" }}>
            <circle cx="0" cy="0" r="50" fill="#1f2937" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
            <circle cx="0" cy="0" r="16" fill={accentColor} />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line
                key={angle}
                x1="0"
                y1="0"
                x2={48 * Math.cos((angle * Math.PI) / 180)}
                y2={48 * Math.sin((angle * Math.PI) / 180)}
                stroke="#e2e8f0"
                strokeWidth="4"
                strokeLinecap="round"
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
