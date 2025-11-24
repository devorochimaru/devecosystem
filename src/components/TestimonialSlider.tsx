import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  role?: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    text:
      "I’ve used many panels before, but the Internal Max+ from Orochimaru instantly felt different. Payment was smooth and secure, delivery was instant, and the support was personal. He helped me with setup, tuned the config and made sure everything ran perfectly. The stability and performance easily make this the most polished panel I’ve ever used.",
    author: "Ayush_12",
    role: "India • Competitive Player",
  },
  {
    text:
      "As a streamer, the Streamer Panel was a complete game changer. It stays fully undetected, runs perfectly on my PC with zero lag, and doesn’t mess with my stream quality at all. Payment was quick, and Orochimaru walked me through every step of the setup. 10/10 service and development.",
    author: "Warrior_μμ11",
    role: "India • Content Creator",
  },
  {
    text:
      "For serious regional pushing, consistency is everything — and this panel delivers exactly that. Payment was safe, activation was fast, and the panel stayed ultra-stable even during long grind sessions. No random crashes, no weird behavior, just clean and controlled performance. Orochimaru is the only dev I fully trust for rank grind.",
    author: "Arunkumar",
    role: "India • Regional Pusher",
  },
  {
    text:
      "From the UAE, it’s hard to find a reliable dev, but Orochimaru exceeded my expectations. The payment process was secure and transparent, and I received the panel instantly. Even on higher ping, the gameplay feels smooth and optimized. My regional push became much easier thanks to the clean, subtle assistance and professional-level development.",
    author: "abdullah19",
    role: "UAE • Regional Pusher",
  },
  {
    text:
      "At Grandmaster level, a tiny delay or unstable panel can cost you games. This setup from Orochimaru feels like it was built specifically for high-level players — precise tracking, no sudden flicks, and no performance drops. Payment was handled professionally and the support felt more like working with a teammate than just a seller.",
    author: "devex89",
    role: "KSA • Grandmaster Player",
  },
  {
    text:
      "We host daily room matches and scrims, and stability is our number one priority. Orochimaru’s panel has been rock solid every single session. Payment and delivery were fast, updates are clean, and he actually listens to feedback from our team. Perfect for shuffle roles, customs and serious room grind.",
    author: "nono89",
    role: "Indonesia • Room Matches / Scrims",
  },
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    // 🔹 Added id="testimonials"
    <section id="testimonials" className="relative py-20 px-6 overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255, 30, 39, 0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span
              className="px-4 py-2 rounded-full text-sm tracking-wider uppercase"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255, 30, 39, 0.1) 0%, rgba(255, 106, 111, 0.1) 100%)',
                border: '1px solid rgba(255, 30, 39, 0.2)',
                color: '#ff6a6f',
                fontWeight: 600,
              }}
            >
              Testimonials
            </span>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{ fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            What Our <span className="text-[#ff1e27]">Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="absolute top-0 left-0 opacity-5 pointer-events-none">
            <Quote className="w-32 h-32 text-[#ff1e27]" />
          </div>

          <div className="relative flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  scale: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                }}
                className="w-full"
              >
                <div
                  className="p-8 md:p-12 rounded-3xl backdrop-blur-sm"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(26, 26, 36, 0.6) 0%, rgba(18, 18, 26, 0.8) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <p
                    className="text-xl md:text-2xl mb-8 italic"
                    style={{
                      color: '#ffffff',
                      lineHeight: 1.6,
                    }}
                  >
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        background:
                          'linear-gradient(135deg, #ff1e27 0%, #ff6a6f 100%)',
                        fontWeight: 700,
                        fontSize: '1.25rem',
                      }}
                    >
                      {testimonials[currentIndex].author.charAt(0)}
                    </div>

                    <div>
                      <p
                        style={{
                          fontWeight: 600,
                          color: '#ffffff',
                        }}
                      >
                        {testimonials[currentIndex].author}
                      </p>
                      {testimonials[currentIndex].role && (
                        <p className="text-sm" style={{ color: '#a8a8b8' }}>
                          {testimonials[currentIndex].role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="p-3 rounded-xl transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 30, 39, 0.3)',
              }}
            >
              <ChevronLeft className="w-6 h-6 text-[#ff1e27]" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className="transition-all duration-300"
                  style={{
                    width: currentIndex === index ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background:
                      currentIndex === index
                        ? 'linear-gradient(90deg, #ff1e27 0%, #ff6a6f 100%)'
                        : 'rgba(255, 255, 255, 0.2)',
                  }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="p-3 rounded-xl transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 30, 39, 0.3)',
              }}
            >
              <ChevronRight className="w-6 h-6 text-[#ff1e27]" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
