import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "WELCOME ITZ FIZZ | Next-Gen Scroll Hypercar Hero",
  description: "Experience the buttery-smooth, high-performance scroll-driven interactive hero section featuring next-gen sports car motion, GSAP ScrollTrigger, and 60FPS visuals.",
  keywords: ["ITZ FIZZ", "Next.js", "GSAP", "ScrollTrigger", "Sports Car Animation", "Lenis Smooth Scroll"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} dark antialiased scroll-smooth`}
    >
      <body className="bg-[#050509] text-slate-100 font-sans min-h-screen selection:bg-cyan-500 selection:text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
