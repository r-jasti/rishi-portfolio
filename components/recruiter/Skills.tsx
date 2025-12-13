"use client";

import { motion } from "framer-motion";
import { skills } from "@/constants";

export default function Skills() {
  const categories = [
    { key: "engineering", title: "Engineering", icon: "⚙️" },
    { key: "software", title: "Software", icon: "💻" },
    { key: "tools", title: "Tools", icon: "🛠️" },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#08080c]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subheading">Expertise</p>
          <h2 className="section-heading">Skills</h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#d4a853]/20 flex items-center justify-center">
                  <span className="text-xl">{category.icon}</span>
                </div>
                <h3 className="text-white text-lg font-bold">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {skills[category.key as keyof typeof skills].map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-[#d4a853] text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">Technologies I Work With</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Next.js", "TypeScript", "Python", "Node.js", "AWS", "Docker", "Git", "Figma", "SQL"].map(
              (tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e] text-gray-400 text-sm hover:border-[#d4a853]/50 hover:text-white transition-all duration-300"
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
