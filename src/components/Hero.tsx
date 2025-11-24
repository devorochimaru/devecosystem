// file: src/components/Hero.tsx
import React from "react";
import { motion } from "motion/react";
import { ParticleBackground } from "./ParticleBackground";

export function Hero(): JSX.Element {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
      style={{ paddingTop: 64, paddingBottom: 64 }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f] pointer-events-none">
        {/* Constrained wrapper prevents particles from pushing layout on mobile */}
        <div className="hero-particle-wrapper" aria-hidden>
          <ParticleBackground />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo + Icon */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="relative flex items-center justify-center">
            <span
              className="text-[#ff1e27]"
              style={{
                fontSize: "clamp(1.2rem, 4.5vw, 2rem)",
                lineHeight: 1,
                transform: "translateY(2px)",
              }}
            >
              ❕
            </span>

            <div
              aria-hidden
              style={{
                position: "absolute",
                width: 40,
                height: 40,
                borderRadius: 9999,
                background: "rgba(255,30,39,0.16)",
                filter: "blur(18px)",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Brand name — clamp keeps desktop identical while shrinking on phones */}
          <h1
            className="uppercase tracking-wider"
            style={{
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#ff1e27",
              textShadow: "0 0 30px rgba(255, 30, 39, 0.5)",
              fontSize: "clamp(1.6rem, 6.5vw, 5rem)",
              lineHeight: 1,
            }}
          >
            OROCHIMARU
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="font-bold leading-tight mb-6"
          style={{
            fontSize: "clamp(1.5rem, 7vw, 4.5rem)",
            lineHeight: 1.02,
          }}
        >
          Professional Grade
          <br />
          <span style={{ color: "#ff1e27" }}>Panels & Training</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="text-[#a8a8b8] mx-auto mb-8"
          style={{
            fontSize: "clamp(0.95rem, 2.8vw, 1.125rem)",
            maxWidth: "720px",
            lineHeight: 1.6,
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        >
          Unlock your potential with our elite tools and expert-led training
          courses. Join the OROCHIMARU community and elevate your skills to the
          next level.
        </motion.p>

        {/* Notice box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mb-10 rounded-2xl backdrop-blur-sm hero-note"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,30,39,0.08) 0%, rgba(255,30,39,0.03) 100%)",
            border: "1px solid rgba(255,30,39,0.14)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
            padding: "clamp(0.6rem, 1.6vw, 1.25rem)",
            maxWidth: "760px",
            textAlign: "center",
          }}
        >
          <p
            className="text-[#a8a8b8]"
            style={{
              fontSize: "clamp(0.78rem, 2.2vw, 1rem)",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            <strong>NOTE:</strong> Custom panel development is temporarily
            paused due to academic commitments. Ready-made projects are
            available. Please DM to purchase.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#panels"
            className="group relative px-8 py-4 rounded-xl overflow-hidden w-full sm:w-auto"
            style={{
              background: "linear-gradient(135deg, #ff1e27 0%, #ff6a6f 100%)",
              fontWeight: 600,
              boxShadow: "0 4px 20px rgba(255, 30, 39, 0.3)",
              textAlign: "center",
            }}
          >
            Explore Panels
          </a>

          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-xl overflow-hidden w-full sm:w-auto"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 30, 39, 0.3)",
              fontWeight: 600,
              backdropFilter: "blur(10px)",
              textAlign: "center",
            }}
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
