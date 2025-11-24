// src/components/Hero.tsx
import React from "react";
import { motion } from "motion/react";
import { ParticleBackground } from "./ParticleBackground";

export function Hero(): JSX.Element {
  return (
    <section
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      aria-labelledby="hero-heading"
    >
      {/* Particle background wrapper (constrained by CSS .hero-particle-wrapper) */}
      <div className="hero-particle-wrapper absolute inset-0 pointer-events-none z-0">
        <ParticleBackground />
      </div>

      {/* dark gradient overlay */}
      <div className="absolute inset-0 bg-[#0a0a0f] z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
      </div>

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
        {/* Eyebrow / Brand */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
          aria-hidden
        >
          <div className="relative flex items-center justify-center">
            {/* keep the simple marker icon — not the skull */}
            <span className="hero-eyebrow inline-block text-[#ff1e27] text-4xl leading-none translate-y-[2px]">
              ❕
            </span>

            {/* soft glow behind icon (purely decorative) */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                width: 44,
                height: 44,
                borderRadius: 9999,
                background: "rgba(255,30,39,0.18)",
                filter: "blur(18px)",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            />
          </div>

          <h1
            id="hero-heading"
            className={
              "hero-eyebrow uppercase tracking-wider " +
              "text-5xl sm:text-6xl md:text-7xl lg:text-[5rem]"
            }
            style={{
              fontWeight: 800,
              letterSpacing: "0.15em",
              color: "#ff1e27",
              textShadow: "0 0 30px rgba(255, 30, 39, 0.5)",
            }}
          >
            OROCHIMARU
          </h1>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ lineHeight: 1.02 }}
        >
          Professional Grade
          <br />
          <span className="text-[#ff1e27]">Panels &amp; Training</span>
        </motion.h2>

        {/* Subtitle (single instance) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="hero-subtitle text-lg md:text-xl text-[#a8a8b8] max-w-3xl mx-auto mb-8 leading-relaxed px-2"
          style={{ lineHeight: 1.6 }}
        >
          Unlock your potential with our elite tools and expert-led training
          courses. Join the OROCHIMARU community and elevate your skills to the
          next level.
        </motion.p>

        {/* Notice Banner (contains the long NOTE text requested) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-12 rounded-2xl backdrop-blur-sm hero-note"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 30, 39, 0.10) 0%, rgba(255, 30, 39, 0.05) 100%)",
            border: "1px solid rgba(255, 30, 39, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
            padding: "1.25rem 1.5rem",
          }}
          role="status"
          aria-live="polite"
        >
          <p
            className="text-sm md:text-base text-[#a8a8b8] leading-relaxed"
            style={{ margin: 0 }}
          >
            <strong>NOTE:</strong> Custom panel development is temporarily paused
            due to academic commitments. Ready-made projects are available.
            Please DM to purchase.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-cta-row flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ zIndex: 10 }}
        >
          <a
            href="#panels"
            className="hero-cta-primary group relative px-8 py-4 rounded-xl overflow-hidden w-full sm:w-auto text-center"
            style={{
              background: "linear-gradient(135deg, #ff1e27 0%, #ff6a6f 100%)",
              fontWeight: 600,
              boxShadow: "0 8px 28px rgba(255, 30, 39, 0.18)",
              color: "#fff",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="relative z-10">Explore Panels</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>

          <a
            href="#contact"
            className="hero-cta-outline group relative px-8 py-4 rounded-xl overflow-hidden w-full sm:w-auto text-center"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 30, 39, 0.2)",
              fontWeight: 600,
              backdropFilter: "blur(10px)",
              color: "#fff",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="relative z-10">Contact Us</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 30, 39, 0.06) 0%, rgba(255, 30, 39, 0.02) 100%)",
              }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
