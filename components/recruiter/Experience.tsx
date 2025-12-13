"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Role {
  title: string;
  date: string;
  points: string[];
}

interface ExperienceItem {
  company: string;
  logo: string | null;
  location: string;
  date: string;
  roles: Role[];
}

const experiences: ExperienceItem[] = [
  {
    company: "General Motors",
    logo: null,
    location: "Warren, MI",
    date: "2023 - Present",
    roles: [
      {
        title: "Software Release Engineer",
        date: "Sep2025 - Present",
        points: [
          "Lead the software release lifecycle for Continuous Damping Control (CDC) modules across 8 distinct vehicle programs, ensuring on-time delivery of software and calibration files from suppliers",
          "Spearheading the component rollout for the SDV 2.0 (Software Defined Vehicle) architecture; facilitating requirements alignment between Program Managers, Buyers, and Suppliers to establish feasibility, cost, and timelines",
          "Act as the primary technical point of contact for suppliers, reviewing release notes and ensuring all functional requirements and software bugs are addressed prior to production integration",
          "Own the Statement of Release documentation, validating that all engineering criteria are met before authorizing software for vehicle assembly plants.",
        ],
      },
      {
        title: "Product Safety & Investigation Engineer",
        date: "Nov2024 - Sep2025",
        points: [
          "Led cross-functional investigations into critical field safety issues; coordinated with suppliers, software engineers, and validation teams to identify technical breakpoints in vehicle software.",
          "Synthesized complex technical data into clear risk assessments presented to the Board of Directors/Safety Field Action Decision Authority to authorize recalls or OTA (Over-the-Air) updates.",
          "Managed the resolution pipeline for software defects, verifying that supplier countermeasures accurately addressed root causes before approving final Over-the-Air deployment to the fleet.",
        ],
      },
      {
        title: "ADAS Software Engineer (Map Data Quality)",
        date: "June2024 - Nov2024",
        points: [
          "Developed automated validation scripts using PyTorch to verify integrity of government and fleet map data, ensuring compatibility with Super Cruise autonomous driving systems.",
          "Engineered logic tests to improve lane-width recognition accuracy; identified edge cases in bike-lane detection to enhance vehicle safety and path-planning algorithms.",
          "Collaborated with the Map Data team to integrate Python-based data quality checks into the continuous development pipeline.",
        ],
      },
      {
        title: "Engine Calibration Software Engineer",
        date: "July2023 - June2024",
        points: [
          "Designed and deployed a custom Python GUI application to replace legacy Excel workflows, streamlining the data analysis process for the calibration team (DFSS Green Belt Project).",
          "Developed backend utility scripts to parse and process .arxml data, enabling engineers to visualize complex transmission logs more efficiently.",
        ],
      },
    ],
  },
  {
    company: "Battelle",
    logo: null,
    location: "Columbus, OH",
    date: "2023 - 2023",
    roles: [
      {
        title: "Software Engineering Co-Op",
        date: "Jan2023 - May2023",
        points: [
          "Refactored legacy C++ simulation codebases for chemical defense modeling, standardizing file structures to improve code readability and maintainability.",
          "Managed simulation parameters across 23 distinct facility configurations (e.g., airports, schools), ensuring accurate variable constraints for chemical attack scenarios.",
          "Assisted senior engineers in integrating building-layout files into the primary threat simulator, gaining exposure to complex file I/O and large-scale simulation architectures.",
        ],
      },
    ],
  },
];

export default function Experience() {
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({});

  const toggleRole = (expIndex: number, roleIndex: number) => {
    const key = `${expIndex}-${roleIndex}`;
    setExpandedRoles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isExpanded = (expIndex: number, roleIndex: number) => {
    return expandedRoles[`${expIndex}-${roleIndex}`] || false;
  };

  return (
    <section id="experience" className="py-24 px-6" style={{ backgroundColor: '#08080c' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p style={{ color: '#d4a853', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Career Path
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#ffffff' }}>
            Experience
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center vertical line */}
          <div 
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ backgroundColor: '#2a2a3e' }}
          />

          {experiences.map((exp, expIndex) => {
            const isLeft = expIndex % 2 === 0;
            
            return (
              <motion.div
                key={expIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: expIndex * 0.15 }}
                viewport={{ once: true }}
                className="relative mb-20 last:mb-0"
                style={{ minHeight: '150px' }}
              >
                {/* Center Logo Circle */}
                <div 
                  className="absolute left-1/2 -translate-x-1/2 z-20"
                  style={{ top: '20px' }}
                >
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: '#1a1a2e', 
                      border: '3px solid #08080c',
                      boxShadow: '0 0 0 3px #2a2a3e'
                    }}
                  >
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-10 h-10 object-contain rounded-full"
                      />
                    ) : (
                      <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#6b7280' }}>
                        {exp.company.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Grid layout for card and date */}
                <div className="grid grid-cols-2 gap-8">
                  {/* Left side */}
                  <div className={`${isLeft ? 'pr-12' : 'pr-12 flex justify-end'}`}>
                    {isLeft ? (
                      /* Card on left */
                      <div 
                        className="rounded-xl p-5 relative"
                        style={{ 
                          backgroundColor: '#12121a', 
                          border: '1px solid #1f1f2e' 
                        }}
                      >
                        {/* Arrow pointing right */}
                        <div 
                          className="absolute top-6 -right-2 w-4 h-4 rotate-45"
                          style={{ 
                            backgroundColor: '#12121a', 
                            borderTop: '1px solid #1f1f2e',
                            borderRight: '1px solid #1f1f2e'
                          }}
                        />
                        
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>
                          {exp.company}
                        </h3>
                        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                          {exp.location}
                        </p>

                        {/* Roles */}
                        <div className="space-y-2">
                          {exp.roles.map((role, roleIndex) => (
                            <div key={roleIndex}>
                              <button
                                onClick={() => toggleRole(expIndex, roleIndex)}
                                className="w-full text-left group flex items-center justify-between gap-2 py-1"
                              >
                                <div>
                                  <p style={{ color: '#ffffff', fontWeight: 500 }} className="group-hover:text-amber-400 transition-colors">
                                    {role.title}
                                  </p>
                                  <p style={{ color: '#d4a853', fontSize: '0.875rem' }}>{role.date}</p>
                                </div>
                                <motion.div
                                  animate={{ rotate: isExpanded(expIndex, roleIndex) ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                  style={{ color: '#d4a853' }}
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </motion.div>
                              </button>

                              <AnimatePresence>
                                {isExpanded(expIndex, roleIndex) && (
                                  <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden pl-4 mt-2 space-y-1"
                                  >
                                    {role.points.map((point, pointIndex) => (
                                      <li
                                        key={pointIndex}
                                        className="flex items-start gap-2"
                                        style={{ color: '#9ca3af', fontSize: '0.875rem' }}
                                      >
                                        <span style={{ color: '#d4a853' }}>•</span>
                                        <span>{point}</span>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Date on left */
                      <div className="pt-6 text-right">
                        <span style={{ color: '#9ca3af', fontWeight: 500 }}>{exp.date}</span>
                      </div>
                    )}
                  </div>

                  {/* Right side */}
                  <div className={`${isLeft ? 'pl-12' : 'pl-12'}`}>
                    {isLeft ? (
                      /* Date on right */
                      <div className="pt-6">
                        <span style={{ color: '#9ca3af', fontWeight: 500 }}>{exp.date}</span>
                      </div>
                    ) : (
                      /* Card on right */
                      <div 
                        className="rounded-xl p-5 relative"
                        style={{ 
                          backgroundColor: '#12121a', 
                          border: '1px solid #1f1f2e' 
                        }}
                      >
                        {/* Arrow pointing left */}
                        <div 
                          className="absolute top-6 -left-2 w-4 h-4 -rotate-[135deg]"
                          style={{ 
                            backgroundColor: '#12121a', 
                            borderTop: '1px solid #1f1f2e',
                            borderRight: '1px solid #1f1f2e'
                          }}
                        />
                        
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>
                          {exp.company}
                        </h3>
                        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                          {exp.location}
                        </p>

                        {/* Roles */}
                        <div className="space-y-2">
                          {exp.roles.map((role, roleIndex) => (
                            <div key={roleIndex}>
                              <button
                                onClick={() => toggleRole(expIndex, roleIndex)}
                                className="w-full text-left group flex items-center justify-between gap-2 py-1"
                              >
                                <div>
                                  <p style={{ color: '#ffffff', fontWeight: 500 }} className="group-hover:text-amber-400 transition-colors">
                                    {role.title}
                                  </p>
                                  <p style={{ color: '#d4a853', fontSize: '0.875rem' }}>{role.date}</p>
                                </div>
                                <motion.div
                                  animate={{ rotate: isExpanded(expIndex, roleIndex) ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                  style={{ color: '#d4a853' }}
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </motion.div>
                              </button>

                              <AnimatePresence>
                                {isExpanded(expIndex, roleIndex) && (
                                  <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden pl-4 mt-2 space-y-1"
                                  >
                                    {role.points.map((point, pointIndex) => (
                                      <li
                                        key={pointIndex}
                                        className="flex items-start gap-2"
                                        style={{ color: '#9ca3af', fontSize: '0.875rem' }}
                                      >
                                        <span style={{ color: '#d4a853' }}>•</span>
                                        <span>{point}</span>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/Users/rishijasti/Desktop/Resumes/Rishi-Jasti-Resume2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all"
            style={{ 
              border: '2px solid #2a2a3e', 
              color: '#e5e5e5',
              backgroundColor: 'transparent'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#d4a853';
              e.currentTarget.style.color = '#d4a853';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#2a2a3e';
              e.currentTarget.style.color = '#e5e5e5';
            }}
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