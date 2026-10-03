"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureShowcase from "@/components/FeatureShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  const [accentColor, setAccentColor] = useState("#00f2fe");
  const [driveMode, setDriveMode] = useState<"COMFORT" | "SPORT" | "TRACK">("SPORT");

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#050509] text-white selection:bg-cyan-500 selection:text-black">
        {/* Fixed Header Navbar */}
        <Navbar
          currentColor={accentColor}
          onColorChange={setAccentColor}
          driveMode={driveMode}
          onDriveModeChange={setDriveMode}
        />

        {/* Hero Section with GSAP ScrollTrigger Motion */}
        <Hero accentColor={accentColor} driveMode={driveMode} />

        {/* Technical Showcase Section */}
        <FeatureShowcase accentColor={accentColor} />

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
