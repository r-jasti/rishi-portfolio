"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Generak Motors",
    logo: null, // Add your logo path here: "/logos/company.png"
    location: "Warren, MI",
    roles: [
      {
        title: "Software Release Engineer",
        date: "Sep2025 - Present",
        points: [
          "placeholder",
          "Implemented data-driven strategies resulting in measurable improvements",
          "Collaborated with stakeholders to define product roadmaps and priorities",
        ],
      },
      {
        title: "Product Safety Engineer",
        date: "Nov2024 - Sep2025",
        points: [
          "Developed and deployed software solutions for vehicle safety systems, integrating multiple automotive modules to deliver Over-the-Air (OTA) updates for production vehicles",
          "Collaborated closely with cross-functional teams including software engineers, release engineers, and external partners to debug and optimize vehicle software performance",
          "Took automotive R&D concepts from initial investigation through production deployment, ensuring functional safety standards and quality requirements were met",
        ],
      },
      {
        title: "ADAS Software Engineer",
        date: "June2024 - Nov2024",
        points: [
          "Designed and developed core services for autonomous vehicle systems, building scalable geospatial data processing frameworks integrated with Kubernetes and distributed computing platforms",
          "Maintained and improved existing software modules for Super Cruise map validation, optimizing multi-threaded PySpark applications and achieving 24% performance improvement",
          "Integrated various software solutions into unified development pipeline, enabling seamless data processing for next-generation autonomous vehicle experiences",
        ],
      }
    ],
  },
  {
    company: "FlexdayAI",
    logo: null, // Add your logo path here: "/logos/another.png"
    location: "Remote",
    roles: [
      {
        title: "Project Manager",
        date: "Sep2023 - Present",
        points: [
          "Collaborated with founding team to develop software system architecture for AI-powered diagnostic platform, focusing on scalability and performance optimization",
          "Facilitated integration between various software components and external partners, ensuring unified development experience for medical imaging applications",
          "Demonstrated passion for taking R&D concepts from prototype phase to production-ready solutions in fast-paced development environment",
        ],
      },
    ],
  },
  {
    company: "Battelle",
    logo: null, // Add your logo path here: "/logos/previous.png"
    location: "Colombus, OH",
    roles: [
      {
        title: "Software Engineer",
        date: "Jan2023 - May2023",
        points: [
          "Designed and implemented multi-threaded C++ simulation applications for real-time system modeling, incorporating complex data processing across 23 different system configurations",
          "Developed embedded system architecture improvements by refactoring legacy multi-core processing systems, achieving 8% performance optimization and enhanced system reliability",
          "Built scalable software frameworks for automated testing and validation, enabling rapid prototyping and iterative development cycles",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subheading">Career Path</p>
          <h2 className="section-heading">Experience</h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={expIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: expIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Company Card */}
              <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] overflow-hidden hover:border-[#3a3a3a] transition-colors duration-300">
                {/* Company Header */}
                <div className="p-6 pb-4 border-b border-[#2a2a2a] bg-[#161616]">
                  <div className="flex items-center gap-4">
                    {/* Logo Placeholder */}
                    <div className="w-14 h-14 rounded-xl bg-[#222222] border border-[#333333] flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {exp.logo ? (
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <span className="text-2xl text-gray-600">
                          {exp.company.charAt(0)}
                        </span>
                      )}
                    </div>
                    
                    {/* Company Info */}
                    <div className="flex-1">
                      <h3 className="text-white text-xl font-bold">{exp.company}</h3>
                      <p className="text-gray-500 text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </p>
                    </div>

                    {/* Role Count Badge */}
                    {exp.roles.length > 1 && (
                      <div className="px-3 py-1 rounded-full bg-[#bb0000]/10 border border-[#bb0000]/20">
                        <span className="text-[#bb0000] text-xs font-medium">
                          {exp.roles.length} roles
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Roles */}
                <div className="p-6">
                  <div className="space-y-6">
                    {exp.roles.map((role, roleIndex) => (
                      <div 
                        key={roleIndex} 
                        className={`relative ${roleIndex !== exp.roles.length - 1 ? 'pb-6 border-b border-[#2a2a2a]' : ''}`}
                      >
                        {/* Role Timeline Indicator (for multiple roles) */}
                        {exp.roles.length > 1 && (
                          <div className="absolute -left-6 top-0 bottom-0 flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full ${roleIndex === 0 ? 'bg-[#bb0000]' : 'bg-[#444444]'} border-2 border-[#1a1a1a]`} />
                            {roleIndex !== exp.roles.length - 1 && (
                              <div className="w-0.5 flex-1 bg-gradient-to-b from-[#444444] to-[#2a2a2a] mt-1" />
                            )}
                          </div>
                        )}

                        <div className={exp.roles.length > 1 ? 'ml-2' : ''}>
                          {/* Role Header */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <h4 className="text-white font-semibold text-lg">{role.title}</h4>
                            <span className="text-[#bb0000] text-sm font-medium bg-[#bb0000]/5 px-3 py-1 rounded-full">
                              {role.date}
                            </span>
                          </div>

                          {/* Role Points */}
                          <ul className="space-y-2">
                            {role.points.map((point, pointIndex) => (
                              <li 
                                key={pointIndex} 
                                className="text-gray-400 text-sm flex items-start gap-3"
                              >
                                <span className="text-[#bb0000] mt-1.5 flex-shrink-0">
                                  <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                                    <circle cx="4" cy="4" r="3" />
                                  </svg>
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
