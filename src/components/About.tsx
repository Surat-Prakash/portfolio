"use client";

import { motion } from "framer-motion";
import { Terminal, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Terminal className="text-[var(--color-neon-blue)]" size={32} />,
      title: "Clean Code",
      description: "Writing scalable, maintainable, and elegant solutions using modern frameworks.",
    },
    {
      icon: <Lightbulb className="text-[var(--color-neon-purple)]" size={32} />,
      title: "Creative Design",
      description: "Crafting beautiful UI/UX with attention to detail and smooth animations.",
    },
    {
      icon: <Rocket className="text-[var(--color-neon-cyan)]" size={32} />,
      title: "Fast Performance",
      description: "Optimizing web experiences for blazing fast load times and interaction.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-neon-purple)]/20 blur-[50px] -z-10 group-hover:bg-[var(--color-neon-purple)]/30 transition-all duration-500" />
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-32 h-32 shrink-0 rounded-full border-2 border-[var(--color-neon-cyan)]/30 overflow-hidden relative group-hover:border-[var(--color-neon-cyan)] transition-colors duration-500 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=400&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-500"
                />
              </div>
              <div>
                <p className="text-lg text-[var(--color-fg)] opacity-80 leading-relaxed mb-6">
                  I am a <strong className="text-[var(--color-fg)]">Full Stack Developer</strong> graduating in 2026 with a Bachelor of Vocation in AI & Robotics. I specialize in building scalable web applications and modern user interfaces using React, Node.js, and Python.
                </p>
                <p className="text-lg text-[var(--color-fg)] opacity-80 leading-relaxed">
                  I enjoy solving real-world problems and have developed projects including AI-powered chatbots, smart recommendation systems, and mobile applications.

                  I’m passionate about creating clean, efficient, and user-friendly digital experiences, and I’m actively seeking opportunities to grow as a developer and contribute to impactful projects.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass p-6 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors border hover:border-[var(--color-neon-cyan)]/50 cursor-default"
              >
                <div className="p-3 glass rounded-lg">{card.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-[var(--color-fg)] opacity-70 text-sm leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
