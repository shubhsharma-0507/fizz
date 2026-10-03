"use client";

import { ChevronUp, Github, Twitter, Globe } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 border-t border-white/10 bg-[#030306] py-12 px-4 md:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand & Copyright */}
        <div className="text-center md:text-left">
          <div className="font-orbitron font-extrabold text-xl text-white tracking-widest mb-1">
            W E L C O M E &nbsp; I T Z &nbsp; F I Z Z
          </div>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} ITZ FIZZ Hypercar Experience. High-Performance GSAP Motion Showcase.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/paraschaturvedi/car-scroll-animation"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300"
            title="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://paraschaturvedi.github.io/car-scroll-animation/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300"
            title="Inspired Reference Demo"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-cyan-400 transition-colors px-4 py-2 rounded-xl glass-panel"
        >
          BACK TO TOP
          <ChevronUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
