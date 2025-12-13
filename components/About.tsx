"use client";

import { motion } from "framer-motion";
import { services, personalInfo } from "@/constants";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#bb0000]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subheading">Introduction</p>
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🎓", label: "THE Ohio State University" },
                { icon: "📍", label: personalInfo.location },
                { icon: "🏎️", label: "Automotive Enthusiast" },
                { icon: "💡", label: "Problem Solver" },
              ].map((fact, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#282828]/50 border border-gray-800"
                >
                  <span className="text-xl">{fact.icon}</span>
                  <span className="text-gray-300 text-sm">{fact.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#bb0000] to-[#8b0000] flex items-center justify-center mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
