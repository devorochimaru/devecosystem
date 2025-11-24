import { motion } from 'motion/react';
import { ParticleBackground } from './ParticleBackground';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <ParticleBackground />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Logo with ❕ icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="relative flex items-center justify-center">
            {/* ❕ Icon (aligned with text) */}
            <span
              className="inline-block text-[#ff1e27] text-4xl leading-none translate-y-[2px]"
            >
              ❕
            </span>

            {/* Soft red glow behind the icon */}
            <div className="absolute inset-0 blur-xl bg-[#ff1e27] opacity-35 pointer-events-none" />
          </div>

          <h1
            className="text-5xl md:text-6xl tracking-wider uppercase"
            style={{
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: '#ff1e27',
              textShadow: '0 0 30px rgba(255, 30, 39, 0.5)',
            }}
          >
            OROCHIMARU
          </h1>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl mb-6"
          style={{ fontWeight: 700, lineHeight: 1.2 }}
        >
          Professional Grade
          <br />
          <span className="text-[#ff1e27]">Panels & Training</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg md:text-xl text-[#a8a8b8] max-w-3xl mx-auto mb-8"
          style={{ lineHeight: 1.6 }}
        >
          Unlock your potential with our elite tools and expert-led training courses.
          Join the OROCHIMARU community and elevate your skills to the next level.
        </motion.p>

        {/* Notice Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl backdrop-blur-sm"
          style={{
            background:
              'linear-gradient(135deg, rgba(255, 30, 39, 0.1) 0%, rgba(255, 30, 39, 0.05) 100%)',
            border: '1px solid rgba(255, 30, 39, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          }}
        >
          <p className="text-sm md:text-base text-[#a8a8b8]">
            <span style={{ fontWeight: 600 }}>NOTE:</span> Custom panel development
            is temporarily paused due to academic commitments. Ready-made projects
            are available. Please DM to purchase.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#panels"
            className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #ff1e27 0%, #ff6a6f 100%)',
              fontWeight: 600,
              boxShadow: '0 4px 20px rgba(255, 30, 39, 0.3)',
            }}
          >
            <span className="relative z-10">Explore Panels</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>

          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 30, 39, 0.3)',
              fontWeight: 600,
              backdropFilter: 'blur(10px)',
            }}
          >
            <span className="relative z-10">Contact Us</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255, 30, 39, 0.1) 0%, rgba(255, 30, 39, 0.05) 100%)',
              }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
