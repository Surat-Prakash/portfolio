"use client";

import { motion } from "framer-motion";
import { Code2, Code, Briefcase, Mail } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-4 shadow-lg shadow-cyan-500/10" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Code2 className="text-[var(--color-neon-cyan)] group-hover:text-[var(--color-neon-blue)] transition-colors" size={32} />
          <span className="font-bold text-xl tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Portfolio
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          {["About", "Skills", "Experience", "Projects", "Achievements", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-widest hover:text-[var(--color-neon-cyan)] transition-colors hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/Surat-Prakash" target="_blank" className="hover:text-[var(--color-neon-purple)] transition-colors">
            <Code size={20} />
          </Link>
          <Link href="https://linkedin.com/in/suratprakash" target="_blank" className="hover:text-[var(--color-neon-cyan)] transition-colors">
            <Briefcase size={20} />
          </Link>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=spsatsangi3009@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-neon-blue)] transition-colors">
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
