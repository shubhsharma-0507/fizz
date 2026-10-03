"use client";

import { Gauge, ShieldCheck, Compass, Radio } from "lucide-react";

interface FeatureShowcaseProps {
  accentColor?: string;
}

export default function FeatureShowcase({ accentColor = "#00f2fe" }: FeatureShowcaseProps) {
  const features = [
    {
      icon: Gauge,
      badge: "PROPULSION",
      title: "Tri-Motor Vector Drive",
      desc: "Instant torque split across all four wheels with millisecond precision active vectoring.",
      stat: "1,400 Nm",
      statLabel: "TORQUE",
    },
    {
      icon: Compass,
      badge: "AERODYNAMICS",
      title: "Active Rear Wing & Diffuser",
      desc: "Adaptive downforce management automatically adjusts angle of attack based on telemetry.",
      stat: "0.19 Cd",
      statLabel: "DRAG COEFF",
    },
    {
      icon: ShieldCheck,
      badge: "CHASSIS",
      title: "Carbon Monocoque",
      desc: "Formula-1 grade structural rigidity delivering unmatched safety & lightweight agility.",
      stat: "52,000 Nm",
      statLabel: "TORSIONAL RIGIDITY",
    },
    {
      icon: Radio,
      badge: "AUTONOMOUS",
      title: "Neural Vision Telemetry",
      desc: "360-degree LiDAR and neural vision processing 120 frames per second for ultimate safety.",
      stat: "600 Metre",
      statLabel: "LIDAR RANGE",
    },
  ];

  return (
    <section className="relative z-20 py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          TECHNICAL TELEMETRY
        </div>
        <h2 className="font-orbitron font-extrabold text-3xl md:text-5xl text-white tracking-wider mb-4">
          ENGINEERED FOR <span style={{ color: accentColor }}>EXTREMES</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
          Scroll down to experience the vehicle driving through dynamic spatial environments with 60FPS scrubbed scroll physics.
        </p>
      </div>

      {/* Feature Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => {
          const IconComponent = f.icon;
          return (
            <div
              key={i}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ color: accentColor }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 px-2 py-1 rounded bg-slate-900 border border-white/5 uppercase">
                    {f.badge}
                  </span>
                </div>

                <h3 className="font-orbitron font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {f.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-baseline justify-between">
                <span className="text-[11px] font-mono text-slate-400 uppercase">
                  {f.statLabel}
                </span>
                <span className="font-orbitron font-extrabold text-lg text-white" style={{ color: accentColor }}>
                  {f.stat}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
