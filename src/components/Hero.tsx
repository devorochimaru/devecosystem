// file: src/components/Hero.tsx
import React from "react";
import { motion } from "motion/react";
import { ParticleBackground } from "./ParticleBackground";

export function Hero(): JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Logo + Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="relative flex items-center justify-center">
            <span className="text-[#ff1e27] text-4xl leading-none translate-y-[2px]">
              ❕
            </span>
            <div
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
            className="uppercase tracking-wider 
                       text-5xl sm:text-6xl md:text-7xl lg:text-[5rem]"
            style={{
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#ff1e27",
              textShadow: "0 0 30px rgba(255, 30, 39, 0.5)",
            }}
          >
            OROCHIMARU
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Professional Grade
          <br />
          <span className="text-[#ff1e27]">Panels & Training</span>
        </motion.h2>

        {/* Subtitle (single instance) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-[#a8a8b8] max-w-3xl mx-auto mb-10 leading-relaxed px-2"
          style={{ lineHeight: 1.6 }}
        >
          Unlock your potential with our elite tools and expert-led training
          courses. Join the OROCHIMARU community and elevate your skills to the
          next level.
        </motion.p>

        {/* NOTICE BOX — NOW CONTAINS ONLY THE NOTE (no duplicate subtitle) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-12 rounded-2xl backdrop-blur-sm hero-note"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 30, 39, 0.10) 0%, rgba(255, 30, 39, 0.05) 100%)",
            border: "1px solid rgba(255, 30, 39, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
            padding: "1rem 1.25rem", // reduced padding to be mobile-friendly
          }}
        >
          <p className="text-sm md:text-base text-[#a8a8b8] leading-relaxed">
            <strong>NOTE:</strong> Custom panel development is temporarily paused
            due to academic commitments. Ready-made projects are available.
            Please DM to purchase.
          </p>
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
