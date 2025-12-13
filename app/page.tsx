"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

// Components
import WelcomeScreen from "@/components/WelcomeScreen";

// Recruiter Portfolio Components
import Navbar from "@/components/recruiter/Navbar";
import Hero from "@/components/recruiter/Hero";
import About from "@/components/recruiter/About";
import Experience from "@/components/recruiter/Experience";
import Projects from "@/components/recruiter/Projects";
import Skills from "@/components/recruiter/Skills";
import Contact from "@/components/recruiter/Contact";
import Footer from "@/components/recruiter/Footer";

// Friend Page Components
import FriendPage from "@/components/friend/FriendPage";

// Lazy load particle background
const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), {
  ssr: false,
});

export default function Home() {
  const [userType, setUserType] = useState<"recruiter" | "friend" | null>(null);
  const [showContent, setShowContent] = useState(false);

  const handleSelect = (type: "recruiter" | "friend") => {
    setUserType(type);
    // Delay showing content for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  const handleBackToWelcome = () => {
    setShowContent(false);
    setTimeout(() => {
      setUserType(null);
    }, 300);
  };

  return (
    <main className="relative min-h-screen bg-[#0a0a0f]">
      <AnimatePresence mode="wait">
        {!userType && (
          <motion.div
            key="welcome"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WelcomeScreen onSelect={handleSelect} />
          </motion.div>
        )}

        {userType === "recruiter" && showContent && (
          <motion.div
            key="recruiter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back button */}
            <button
              onClick={handleBackToWelcome}
              className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-[#1a1a2e]/80 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-400 hover:text-white hover:border-amber-500/50 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm">Back</span>
            </button>

            <ParticleBackground />
            <div className="relative z-10">
              <Navbar />
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </div>
          </motion.div>
        )}

        {userType === "friend" && showContent && (
          <motion.div
            key="friend"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back button */}
            <button
              onClick={handleBackToWelcome}
              className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-[#1a1a2e]/80 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-400 hover:text-white hover:border-amber-500/50 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm">Back</span>
            </button>

            <ParticleBackground />
            <div className="relative z-10">
              <FriendPage />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
