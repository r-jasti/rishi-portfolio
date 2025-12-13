"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const friendSections = [
  { id: "personal", title: "Personal Life", icon: "🏠", description: "Get to know the person behind the code" },
  { id: "hobbies", title: "Hobbies", icon: "🎮", description: "What I do for fun" },
  { id: "photos", title: "Photos", icon: "📸", description: "Moments captured" },
  { id: "social", title: "Social Media", icon: "📱", description: "Connect with me" },
];

export default function FriendPage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hey Friend! 👋
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          This section is where I&apos;ll share the personal side of my life. 
          Still working on it!
        </p>
      </motion.div>

      {/* Coming Soon Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <div className="px-6 py-3 rounded-full bg-gradient-to-r from-[#d4a853]/20 to-[#f59e0b]/20 border border-[#d4a853]/30">
          <span className="text-[#d4a853] font-semibold text-lg">Coming Soon :)</span>
        </div>
      </motion.div>

      {/* Section Preview Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-4xl"
      >
        <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
          What&apos;s Coming
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {friendSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-default ${
                hoveredSection === section.id
                  ? "bg-[#1a1a2e] border-[#d4a853]/50"
                  : "bg-[#12121a] border-[#1f1f2e]"
              }`}
            >
              {/* Icon */}
              <div className={`text-4xl mb-3 transition-transform duration-300 ${
                hoveredSection === section.id ? "scale-110" : ""
              }`}>
                {section.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-white font-semibold mb-1">{section.title}</h3>
              
              {/* Description - shows on hover */}
              <p className={`text-gray-500 text-xs transition-all duration-300 ${
                hoveredSection === section.id ? "opacity-100" : "opacity-0"
              }`}>
                {section.description}
              </p>

              {/* Lock icon overlay */}
              <div className="absolute top-3 right-3">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Fun message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-600 text-sm">
          In the meantime, feel free to check out my{" "}
          <span className="text-[#d4a853]">professional portfolio</span>! 🚀
        </p>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#d4a853]/30 animate-pulse" />
      <div className="absolute bottom-1/3 right-20 w-3 h-3 rounded-full bg-[#d4a853]/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/2 right-10 w-2 h-2 rounded-full bg-[#d4a853]/25 animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}
