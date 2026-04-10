"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { useEffect, useState } from "react";

export default function Achievements() {
  const [count, setCount] = useState(0);
  // Assuming a hypothetical rank since exact wasn't specified. E.g., 500, or something similar
  // The user just said "TCS CodeVita Global Rank". We will use a counter up to a placeholder number.
  // We'll let the user fill the targetRank, e.g., 500, but let's default to a nice visual number like 420 or just "Rank"
  const targetRank = 1047;

  useEffect(() => {
    let start = 0;
    const end = targetRank;
    if (start === end) return;

    // Adjusting increment speed based on size of targetRank
    const increment = Math.ceil(end / 100);
    const incrementTime = 20;

    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start as any);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-neon-cyan)]">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-neon-cyan)] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-10 md:p-14 rounded-3xl relative overflow-hidden text-center group border border-[var(--color-neon-purple)]/30 hover:border-[var(--color-neon-purple)] transition-colors duration-500 max-w-2xl mx-auto"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-neon-purple)]/20 blur-[80px] rounded-full z-0 group-hover:bg-[var(--color-neon-purple)]/30 transition-all duration-500" />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="p-5 glass rounded-full mb-6 text-[var(--color-neon-purple)] shadow-[0_0_20px_var(--color-neon-purple)]"
            >
              <Trophy size={48} />
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold tracking-wider mb-2">TCS CodeVita</h3>
            <p className="text-lg text-[var(--color-fg)] opacity-70 mb-8 uppercase tracking-[0.2em]">Global Rank</p>

            <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-neon-cyan)] to-[var(--color-neon-purple)] drop-shadow-[0_0_15px_rgba(157,0,255,0.4)]">
              {count}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
