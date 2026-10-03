"use client";

import { Award, Users, Star, Zap } from "lucide-react";

interface StatsProps {
  accentColor?: string;
}

export default function Stats({ accentColor = "#00f2fe" }: StatsProps) {
  const statsData = [
    {
      id: "stat-1",
      value: "99%",
      title: "Customer Satisfaction",
      description: "Ranked #1 in owner experience & loyalty",
      icon: Award,
    },
    {
      id: "stat-2",
      value: "10M+",
      title: "Active Drivers",
      description: "Over 500M Autonomous miles driven",
      icon: Users,
    },
    {
      id: "stat-3",
      value: "4.9/5",
      title: "Overall Rating",
      description: "From 50,000+ global verified reviews",
      icon: Star,
    },
    {
      id: "stat-4",
      value: "1,020 HP",
      title: "Hyper-EV Output",
      description: "0 to 60 mph in a blistering 1.9s",
      icon: Zap,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-6 md:mt-10 mb-8 z-20 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statsData.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              data-stat-card
              className="glass-panel group relative p-5 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl overflow-hidden cursor-default"
            >
              {/* Background ambient lighting accent */}
              <div
                className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundColor: accentColor }}
              />

              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-900/80 border border-white/10 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: accentColor }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase bg-slate-950/50 px-2 py-0.5 rounded-full border border-white/5">
                  VERIFIED
                </span>
              </div>

              {/* Metric Value */}
              <div className="font-orbitron font-black text-2xl md:text-3xl text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                {item.value}
              </div>

              {/* Title & Description */}
              <div className="font-semibold text-sm text-slate-200 mb-1">
                {item.title}
              </div>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
