import { motion } from 'motion/react';
import { ParticleBackground } from './ParticleBackground';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="inline-block text-[#ff1e27] text-3xl sm:text-4xl leading-none translate-y-[2px]">
            ❕
          </span>

          <h1
            className="tracking-wider uppercase
                       text-[1.7rem] leading-tight
                       sm:text-5xl"
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

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bold leading-tight mb-6
                     text-3xl sm:text-5xl lg:text-7xl"
        >
          Professional Grade
          <br />
          <span className="text-[#ff1e27]">Panels & Training</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl text-[#a8a8b8] max-w-2xl sm:max-w-3xl mx-auto mb-8 px-3"
        >
          Unlock your potential with our elite tools and expert-led training courses.
          Join the OROCHIMARU community and elevate your skills to the next level.
        </motion.p>

        {/* Notice Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-12 p-4 sm:p-6 rounded-2xl backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 30, 39, 0.1), rgba(255, 30, 39, 0.05))',
            border: '1px solid rgba(255, 30, 39, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          }}
        >
          <p className="text-xs sm:text-base text-[#a8a8b8] px-2">
            <span className="font-semibold">NOTE:</span> Custom panel development is temporarily paused.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
        >
          <a
            href="#panels"
            className="group relative px-8 py-3 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #ff1e27, #ff6a6f)',
              fontWeight: 600,
              boxShadow: '0 4px 20px rgba(255,30,39,0.3)',
            }}
          >
            Explore Panels
          </a>

          <a
            href="#contact"
            className="group relative px-8 py-3 rounded-xl border border-[#ff1e274d] backdrop-blur-sm"
            style={{
              background: 'rgba(255,255,255,0.03)',
              fontWeight: 600,
            }}
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
