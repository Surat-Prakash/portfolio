"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Server, Smartphone, Code2, BrainCircuit } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <MonitorSmartphone className="text-[var(--color-neon-cyan)]" size={28} />,
      skills: ["React", "Next.js", "HTML", "CSS", "JavaScript"],
      color: "var(--color-neon-cyan)"
    },
    {
      title: "Backend",
      icon: <Server className="text-[var(--color-neon-purple)]" size={28} />,
      skills: ["Node.js", "Express", "Flask"],
      color: "var(--color-neon-purple)"
    },
    {
      title: "Mobile",
      icon: <Smartphone className="text-[var(--color-neon-blue)]" size={28} />,
      skills: ["Flutter"],
      color: "var(--color-neon-blue)"
    },
    {
      title: "Languages",
      icon: <Code2 className="text-[var(--color-neon-cyan)]" size={28} />,
      skills: ["Python", "JavaScript", "Java", "Dart"],
      color: "var(--color-neon-cyan)"
    },
    {
      title: "Concepts",
      icon: <BrainCircuit className="text-[var(--color-neon-purple)]" size={28} />,
      skills: ["DSA", "APIs", "Machine Learning"],
      color: "var(--color-neon-purple)"
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-neon-purple)]/10 blur-[150px] -z-10" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-[var(--color-neon-cyan)]/10 blur-[150px] -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-cyan)]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-cyan)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-[var(--color-neon-cyan)]/50 transition-colors duration-300"
            >
              <div 
                className="absolute -top-10 -right-10 w-32 h-32 blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 glass rounded-xl pointer-events-none">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold tracking-wide">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-[var(--color-fg)] opacity-90 hover:opacity-100 hover:border-[var(--color-neon-cyan)]/50 hover:bg-[var(--color-neon-cyan)]/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
