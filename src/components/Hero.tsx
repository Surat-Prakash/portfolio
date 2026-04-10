"use client";

import { motion } from "framer-motion";
import CanvasContainer from "./CanvasContainer";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import developerPhoto from "@/app/photo.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <CanvasContainer />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[var(--color-neon-cyan)] text-xl font-medium tracking-widest uppercase mb-4"
            >
              Hi there, I am
            </motion.h2>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                Surat Prakash
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-2xl md:text-3xl text-[var(--color-fg)] font-semibold mb-6"
            >
              Full-Stack Developer <span className="text-[var(--color-neon-purple)]">|</span> React Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-lg text-[var(--color-fg)] opacity-70 font-light mb-10 max-w-lg leading-relaxed"
            >
              I build scalable web apps and AI-powered solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="#projects"
                className="group relative w-full sm:w-auto px-8 py-3 bg-[var(--color-neon-blue)] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_var(--color-neon-blue)] flex items-center justify-center gap-2"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" size={20} />
              </Link>

              <Link
                href="#contact"
                className="w-full sm:w-auto px-8 py-3 glass text-[var(--color-fg)] font-semibold rounded-full hover:bg-[var(--color-fg)] hover:text-[var(--color-bg)] transition-all hover:scale-105 hover:border-[var(--color-neon-purple)] hover:shadow-[0_0_15px_rgba(157,0,255,0.3)] text-center cursor-pointer"
              >
                Contact Me
              </Link>

              <a
                href="/fullstack resume.pdf"
                download="fullstack resume.pdf"
                className="w-full sm:w-auto px-6 py-3 border border-[var(--color-neon-cyan)] text-[var(--color-neon-cyan)] font-semibold rounded-full hover:bg-[var(--color-neon-cyan)] hover:text-[var(--color-bg)] transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] flex items-center justify-center gap-2"
              >
                <Download size={18} />
                <span>Resume</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center md:justify-end relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-[var(--color-neon-cyan)] via-transparent to-[var(--color-neon-purple)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-cyan)] to-[var(--color-neon-purple)] blur-[60px] opacity-30 rounded-full animate-pulse z-0" />

              <div className="w-full h-full rounded-full overflow-hidden border-4 border-black/50 relative z-10 bg-black/40 flex items-center justify-center">
                {/* Place profile image here. Using a generated AI aesthetic image or reliable unsplash placeholder */}
                <img
                  src={developerPhoto.src}
                  alt="Developer Avatar"
                  className="w-full h-full object-cover opacity-90 mix-blend-screen"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-[var(--color-fg)] opacity-50 mb-2 tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-[var(--color-neon-cyan)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
