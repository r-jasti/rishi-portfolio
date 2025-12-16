"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/20 text-[#d4a853] text-sm font-medium mb-8">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">{personalInfo.name.split(" ")[0]}</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-400 mb-6"
            >
              Product Engineer
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-500 text-lg max-w-xl mb-10"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8 mb-10"
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "20+", label: "Projects Completed" },
                { value: "OSU", label: "Go Buckeyes!" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right side - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Photo container */}
              <div 
                className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#d4a853]/30 relative"
                style={{
                  background: 'linear-gradient(145deg, #1a1a2e 0%, #12121a 100%)',
                  boxShadow: '0 0 60px rgba(212, 168, 83, 0.15)'
                }}
              >
                {/* Replace this div with your image */}
                {/* <img 
                  src="/your-photo.jpg" 
                  alt="Rishi Jasti"
                  className="w-full h-full object-cover"
                /> */}
                
                {/* Placeholder - remove when adding real photo */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl mb-4 block">👤</span>
                    <p className="text-gray-600 text-sm">Your Photo Here</p>
                  </div>
                </div>
              </div>

              {/* Decorative ring */}
              <div 
                className="absolute -inset-4 rounded-full border-2 border-[#d4a853]/10 -z-10"
                style={{ animation: 'pulse 3s ease-in-out infinite' }}
              />
              
              {/* Decorative dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#d4a853]" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-[#d4a853]/60" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#d4a853] transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-current rounded-full"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
