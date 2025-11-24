import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';

export function ContactCTA() {
  return (
    <section id="contact" className="relative py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        {/* Radial Gradient */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 30, 39, 0.2) 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="relative p-8 md:p-12 lg:p-16 rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(26, 26, 36, 0.9) 0%, rgba(18, 18, 26, 0.95) 100%)',
            border: '1px solid rgba(255, 30, 39, 0.3)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Top Glow Effect */}
          <div 
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #ff1e27, transparent)'
            }}
          />

          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 30, 39, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 30, 39, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex p-4 mb-6 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 30, 39, 0.2) 0%, rgba(255, 106, 111, 0.2) 100%)',
                border: '1px solid rgba(255, 30, 39, 0.3)'
              }}
            >
              <Send className="w-8 h-8 text-[#ff1e27]" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl mb-4"
              style={{ fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Ready to <span className="text-[#ff1e27]">Purchase?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-[#a8a8b8] max-w-2xl mx-auto mb-8"
              style={{ lineHeight: 1.6 }}
            >
              Contact us directly for a secure payment link and to finalize your order.
            </motion.p>

            {/* UPI ID */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-block mb-8 px-6 py-3 rounded-xl"
              style={{
                background: 'rgba(255, 30, 39, 0.1)',
                border: '1px solid rgba(255, 30, 39, 0.2)'
              }}
            >
              <p className="text-sm text-[#a8a8b8] mb-1" style={{ fontWeight: 500 }}>
                UPI ID for reference:
              </p>
              <p className="text-lg text-[#ff1e27]" style={{ fontWeight: 700, fontFamily: 'monospace' }}>
                6281867251gfam
              </p>
            </motion.div>

            {/* Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/+916381867251"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 flex items-center justify-center gap-3"
                style={{
                  background: 'linear-gradient(135deg, #25D366 0%, #1ebe57 100%)',
                  fontWeight: 600,
                  boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)'
                }}
              >
                <FaWhatsapp className="w-6 h-6 text-white relative z-10" />
                <span className="relative z-10">Contact on WhatsApp</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.a>

              {/* Discord Button */}
              <motion.a
                href="https://discord.com/users/981769019638030366"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 flex items-center justify-center gap-3"
                style={{
                  background: 'linear-gradient(135deg, #5865F2 0%, #4752d6 100%)',
                  fontWeight: 600,
                  boxShadow: '0 4px 20px rgba(88, 101, 242, 0.3)'
                }}
              >
                <SiDiscord className="w-6 h-6 text-white relative z-10" />
                <span className="relative z-10">Contact on Discord</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.a>
            </motion.div>
          </div>

          {/* Bottom Glow */}
          <div 
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 blur-3xl opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(255, 30, 39, 0.4) 0%, transparent 70%)'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
