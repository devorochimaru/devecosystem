import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Are these panels safe to use?",
    answer: "Yes, our panels are designed with advanced security features including Anti-Debug and Anti-Crack protection. However, we always recommend using them responsibly and understanding the risks involved."
  },
  {
    question: "How does the 'Lifetime' license work?",
    answer: "A Lifetime license means you get permanent access to the panel or course with all future updates included. You'll never need to pay again for that specific product."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including cryptocurrency, PayPal, and other secure payment options. Contact us directly for specific payment arrangements."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // 🔹 Added id="faq"
    <section id="faq" className="relative py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-4xl mx-auto">
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
                background: 'linear-gradient(135deg, rgba(255, 30, 39, 0.1) 0%, rgba(255, 106, 111, 0.1) 100%)',
                border: '1px solid rgba(255, 30, 39, 0.2)',
                color: '#ff6a6f',
                fontWeight: 600
              }}
            >
              FAQ
            </span>
          </motion.div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{ fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Frequently Asked <span className="text-[#ff1e27]">Questions</span>
          </h2>

          <p 
            className="text-lg md:text-xl text-[#a8a8b8]"
            style={{ lineHeight: 1.6 }}
          >
            Find answers to common questions about our products and services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 rounded-2xl transition-all duration-500 group"
                style={{
                  background: openIndex === index
                    ? 'linear-gradient(135deg, rgba(255, 30, 39, 0.1) 0%, rgba(255, 30, 39, 0.05) 100%)'
                    : 'linear-gradient(135deg, rgba(26, 26, 36, 0.6) 0%, rgba(18, 18, 26, 0.8) 100%)',
                  border: openIndex === index
                    ? '1px solid rgba(255, 30, 39, 0.3)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: openIndex === index
                    ? '0 4px 24px rgba(255, 30, 39, 0.15)'
                    : '0 4px 16px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 
                    className="text-lg md:text-xl transition-colors duration-300"
                    style={{ 
                      fontWeight: 600,
                      color: openIndex === index ? '#ff1e27' : '#ffffff'
                    }}
                  >
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="flex-shrink-0"
                  >
                    <div 
                      className="p-2 rounded-lg transition-all duration-300"
                      style={{
                        background: openIndex === index
                          ? 'rgba(255, 30, 39, 0.2)'
                          : 'rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      <ChevronDown 
                        className="w-5 h-5 transition-colors duration-300"
                        style={{
                          color: openIndex === index ? '#ff1e27' : '#a8a8b8'
                        }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.2, delay: 0.1 }
                      }}
                      className="overflow-hidden"
                    >
                      <p 
                        className="mt-4 pr-12"
                        style={{ 
                          color: '#a8a8b8',
                          lineHeight: 1.7
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
