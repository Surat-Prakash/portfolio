"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "AI Chatbot",
    description: "AI-powered chatbot built for real-time natural language responses and assistance.",
    tech: ["React", "Flask"],
    liveUrl: "#",
    githubUrl: "#",
    color: "var(--color-neon-blue)"
  },
  {
    title: "Smart Shopping Assistant",
    description: "AI-based product comparison system with advanced recommendation features to enhance user shopping experience.",
    tech: ["React", "Python", "Machine Learning"],
    liveUrl: "#",
    githubUrl: "#",
    color: "var(--color-neon-purple)"
  },
  // {
  //   title: "Zoom Meeting App",
  //   description: "A comprehensive mobile video meeting application built leveraging the Zoom SDK for stable and scalable video conferencing.",
  //   tech: ["Flutter", "Zoom SDK"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   color: "var(--color-neon-cyan)"
  // },
  {
    title: "Step Counter App",
    description: "Mobile fitness application that accurately tracks daily steps using native device sensors.",
    tech: ["Flutter"],
    liveUrl: "#",
    githubUrl: "#",
    color: "var(--color-neon-blue)"
  },
  {
    title: "Weather App",
    description: "Application providing real-time weather forecasting through seamless third-party API integration.",
    tech: ["Python", "API"],
    liveUrl: "#",
    githubUrl: "#",
    color: "var(--color-neon-cyan)"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-neon-blue)]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-neon-blue)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card rounded-2xl p-6 flex flex-col h-full relative overflow-hidden group border border-[var(--color-glass-border)] hover:border-[var(--color-neon-cyan)]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]"
            >
              {/* Background Glow on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl z-0"
                style={{ backgroundColor: project.color }}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 glass rounded-xl text-[var(--color-neon-blue)]">
                    <FolderGit2 size={28} />
                  </div>
                  <div className="flex gap-3">
                    <Link href={project.githubUrl} target="_blank" className="text-[var(--color-fg)] opacity-70 hover:opacity-100 hover:text-[var(--color-neon-purple)] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </Link>
                    <Link href={project.liveUrl} target="_blank" className="text-[var(--color-fg)] opacity-70 hover:opacity-100 hover:text-[var(--color-neon-cyan)] transition-colors">
                      <ExternalLink size={22} />
                    </Link>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--color-neon-cyan)] transition-colors">{project.title}</h3>

                <p className="text-[var(--color-fg)] opacity-70 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1 bg-white/5 text-[var(--color-neon-blue)] rounded-full border border-[var(--color-neon-blue)]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
