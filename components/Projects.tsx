"use client";

import { motion } from "framer-motion";
import { projects } from "@/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subheading">My Work</p>
          <h2 className="section-heading">Projects</h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card rounded-xl overflow-hidden h-full flex flex-col">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#282828] to-[#1a1a1a] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#bb0000]/5 group-hover:bg-[#bb0000]/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl opacity-30 group-hover:opacity-50 transition-opacity">🚀</span>
                      <p className="text-gray-600 text-xs mt-2">Project Image</p>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <a
                      href={project.link}
                      className="px-4 py-2 bg-[#bb0000] text-white text-sm font-medium rounded-lg hover:bg-[#8b0000] transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#bb0000] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View More on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
