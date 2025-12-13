"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy load the particle background
const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
});

interface WelcomeScreenProps {
  onSelect: (type: "recruiter" | "friend") => void;
}

export default function WelcomeScreen({ onSelect }: WelcomeScreenProps) {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (type: "recruiter" | "friend") => {
    setSelectedOption(type);
    // Delay to show selection animation
    setTimeout(() => {
      onSelect(type);
    }, 600);
  };

  const options = [
    {
      id: "recruiter",
      label: "Recruiter",
      icon: "💼",
      description: "View my professional portfolio",
    },
    {
      id: "friend",
      label: "Friend",
      icon: "👋",
      description: "See my personal side",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16162a] to-[#0f0f1a]" />
      
      {/* Particle effect */}
      <ParticleBackground />

      {/* Light beam effect (CSS fallback) */}
      <div className="absolute top-0 left-1/4 w-96 h-full bg-gradient-to-b from-amber-500/5 via-transparent to-transparent transform -skew-x-12 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Welcome to Rishi&apos;s Portfolio
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Who&apos;s using this webpage?
          </p>
        </motion.div>

        {/* Selection Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16"
        >
          {options.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
              onClick={() => handleSelect(option.id as "recruiter" | "friend")}
              onMouseEnter={() => setHoveredOption(option.id)}
              onMouseLeave={() => setHoveredOption(null)}
              className="group flex flex-col items-center gap-4 focus:outline-none"
            >
              {/* Avatar Circle */}
              <motion.div
                animate={{
                  scale: hoveredOption === option.id ? 1.1 : 1,
                  boxShadow: hoveredOption === option.id 
                    ? "0 0 40px rgba(255, 200, 100, 0.3), 0 0 80px rgba(255, 200, 100, 0.1)" 
                    : "0 0 0px rgba(255, 200, 100, 0)",
                }}
                transition={{ duration: 0.3 }}
                className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center transition-all duration-300 ${
                  selectedOption === option.id
                    ? "bg-gradient-to-br from-amber-400 to-amber-600"
                    : "bg-gradient-to-br from-[#2a2a3e] to-[#1a1a2e]"
                }`}
                style={{
                  border: hoveredOption === option.id 
                    ? "3px solid rgba(255, 200, 100, 0.6)" 
                    : "3px solid rgba(100, 100, 120, 0.3)",
                }}
              >
                {/* Icon */}
                <span className={`text-5xl md:text-6xl transition-transform duration-300 ${
                  hoveredOption === option.id ? "scale-110" : ""
                }`}>
                  {option.icon}
                </span>

                {/* Selection indicator ring */}
                <AnimatePresence>
                  {hoveredOption === option.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.2 }}
                      className="absolute inset-0 rounded-full border-2 border-amber-400/50"
                      style={{
                        boxShadow: "inset 0 0 20px rgba(255, 200, 100, 0.1)",
                      }}
                    />
                  )}
                </AnimatePresence>

              </motion.div>

              {/* Label */}
              <div className="text-center">
                <p className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
                  hoveredOption === option.id ? "text-white" : "text-gray-300"
                }`}>
                  {option.label}
                </p>
                <AnimatePresence>
                  {hoveredOption === option.id && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="text-amber-400/80 text-sm mt-1"
                    >
                      {option.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Options text (like PS5) */}
              <AnimatePresence>
                {hoveredOption === option.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-gray-500 text-xs"
                  >
                    <span className="px-2 py-0.5 bg-gray-700/50 rounded text-gray-400"></span>
                    <span>Select</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </motion.div>

        {/* Bottom power/select indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-8 text-gray-500 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Transition overlay */}
      <AnimatePresence>
        {selectedOption && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black z-50"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
