"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  drift: number;
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles on mount
    const colors = [
      "rgba(212, 168, 83, 0.8)",   // Gold
      "rgba(240, 198, 116, 0.7)",  // Light gold
      "rgba(245, 158, 11, 0.6)",   // Amber
      "rgba(255, 255, 255, 0.5)",  // White
      "rgba(255, 200, 100, 0.6)",  // Warm
    ];

    const newParticles: Particle[] = [];
    const count = 80;

    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 15,
        delay: Math.random() * -20,
        drift: (Math.random() - 0.5) * 30,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16162a] to-[#0f0f1a]" />
      
      {/* Light beam effect */}
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-full opacity-30"
        style={{
          background: "linear-gradient(135deg, transparent 0%, rgba(212, 168, 83, 0.1) 50%, transparent 100%)",
          transform: "skewX(-15deg)",
          filter: "blur(40px)",
        }}
      />
      
      {/* Secondary light beam */}
      <div 
        className="absolute bottom-0 left-0 w-[300px] h-[600px] opacity-20"
        style={{
          background: "radial-gradient(ellipse at bottom left, rgba(245, 158, 11, 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            bottom: `-5%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            animation: `floatUp ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Ambient glow spots */}
      <div 
        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-10 animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, rgba(212, 168, 83, 0.5) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      
      <div 
        className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full opacity-10 animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, transparent 70%)",
          filter: "blur(30px)",
          animationDelay: "-3s",
        }}
      />
    </div>
  );
}
