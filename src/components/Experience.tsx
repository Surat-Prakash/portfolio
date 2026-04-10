"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Igniis",
      duration: "Present",
      points: [
        "Built responsive UI using React and Flutter",
        "Developed reusable components",
        "Integrated APIs",
        "Worked with Git in a team environment"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-cyan)]">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-cyan)] mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-[var(--color-glass-border)] ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-10 ml-8 md:ml-12 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[57px] mt-1.5 w-5 h-5 rounded-full bg-[var(--color-neon-blue)] ring-4 ring-black shadow-[0_0_15px_var(--color-neon-blue)]" />
              
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-[var(--color-neon-blue)]/50 transition-all duration-300">
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-neon-blue)]/10 blur-[50px] -z-10 group-hover:bg-[var(--color-neon-blue)]/20 transition-all duration-500" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 glass rounded-lg text-[var(--color-neon-blue)]">
                      <Briefcase size={20} />
                    </div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                  </div>
                  <span className="text-[var(--color-neon-cyan)] font-medium text-sm px-3 py-1 bg-[var(--color-neon-cyan)]/10 rounded-full w-max">
                    {exp.duration}
                  </span>
                </div>
                
                <h4 className="text-lg text-[var(--color-fg)] opacity-80 mb-6 font-medium tracking-wide">
                  {exp.company}
                </h4>
                
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--color-fg)] opacity-70">
                      <span className="text-[var(--color-neon-blue)] mt-1.5 leading-none">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
