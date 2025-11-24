import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  featured?: boolean;
  icon?: React.ReactNode;
  href?: string;
}

export function ProductCard({
  title,
  description,
  featured = false,
  icon,
  href,
}: ProductCardProps) {
  const CardWrapper = href ? 'a' : 'div';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <CardWrapper
        {...(href ? { href } : {})}
        className="block relative h-full p-6 md:p-8 rounded-2xl overflow-hidden transition-all duration-700"
        style={{
          background: 'linear-gradient(135deg, rgba(26, 26, 36, 0.8) 0%, rgba(18, 18, 26, 0.9) 100%)',
          border: featured 
            ? '1px solid rgba(255, 30, 39, 0.3)' 
            : '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
          transform: 'translateY(0)',
        }}
      >
        {/* Subtle Hover Glow Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 30, 39, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-6 right-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 30, 39, 0.2) 0%, rgba(255, 106, 111, 0.2) 100%)',
                border: '1px solid rgba(255, 30, 39, 0.3)',
                fontWeight: 600,
                color: '#ff6a6f'
              }}
            >
              <Sparkles className="w-3 h-3" />
              Featured
            </motion.div>
          </div>
        )}

        {/* Icon */}
        {icon && (
          <div className="mb-6 relative">
            <div
              className="inline-flex p-3 rounded-xl"
              style={{
                background: 'rgba(255, 30, 39, 0.1)',
                border: '1px solid rgba(255, 30, 39, 0.2)',
              }}
            >
              {icon}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <h3
            className="text-2xl md:text-3xl mb-4 transition-colors duration-500"
            style={{
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h3>

          <p
            className="flex-grow"
            style={{
              color: '#a8a8b8',
              lineHeight: 1.6,
            }}
          >
            {description}
          </p>
        </div>
      </CardWrapper>
    </motion.div>
  );
}
