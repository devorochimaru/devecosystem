import { motion } from 'motion/react';
import { ProductCard } from './ProductCard';
import { 
  Settings, 
  Zap, 
  Award, 
  Shield, 
  Target, 
  Crosshair, 
  Radio, 
  GraduationCap,
  MessageCircle 
} from 'lucide-react';

export function ProductGrid() {
  const products = [
    {
      title: 'Customize panel & project',
      description: 'Fully custom solutions with top-tier security features like Anti-Debug, Anti-Crack and Discord RPC.',
      buttonText: 'View Details',
      icon: <Settings className="w-6 h-6 text-[#ff1e27]" />,
      featured: true,              // 🔴 FEATURED HERE
    },
    {
      title: 'Internal Max+',
      description: 'The ultimate toolkit for maximum performance and control.',
      buttonText: 'View Prices',
      icon: <Zap className="w-6 h-6 text-[#ff1e27]" />,
      featured: false,             // ❌ NOT FEATURED ANYMORE
      buttonVariant: 'primary' as const,
    },
    {
      title: 'Premium Panel',
      description: 'Advanced features for a smooth, competitive advantage.',
      buttonText: 'View Prices',
      icon: <Award className="w-6 h-6 text-[#ff1e27]" />,
      featured: false,
    },
    {
      title: 'Basic Panel',
      description: 'All the essential features for a basic panel! Simple, effective, and reliable.',
      buttonText: 'View Prices',
      icon: <Shield className="w-6 h-6 text-[#ff1e27]" />,
      featured: false,
    },
    {
      title: 'Aim Silent',
      description: 'Our advanced silent aim technology, completely invisible on-screen.',
      buttonText: 'View Prices',
      icon: <Target className="w-6 h-6 text-[#ff1e27]" />,
      featured: false,
    },
    {
      title: 'Aimkill',
      description: 'The most aggressive targeting for instant dominations.',
      buttonText: 'View Prices',
      icon: <Crosshair className="w-6 h-6 text-[#ff1e27]" />,
      featured: true,              // 🔴 FEATURED HERE
    },
    {
      title: 'Streamer Panel',
      description: '🔴 Undetectable panel - zero latency & lag you play stream anywhere.',
      buttonText: 'View Prices',
      icon: <Radio className="w-6 h-6 text-[#ff1e27]" />,
      featured: false,
    },
    {
      title: 'Training Course',
      description: 'Master C++, C#, and reverse engineering with expert-led courses.',
      buttonText: 'View Prices',
      icon: <GraduationCap className="w-6 h-6 text-[#ff1e27]" />,
      featured: true,              // 🔴 FEATURED HERE
    },
    {
      title: 'Contact Dev',
      description: 'Expert in C, C++, C#, HTML, CSS & Reverse Engineering.',
      buttonText: 'Show Info',
      icon: <MessageCircle className="w-6 h-6 text-[#ff1e27]" />,
      featured: false,
      buttonVariant: 'primary' as const,
      href: '#contact',
    },
  ];

  return (
    <section id="panels" className="relative pt-12 pb-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 30, 39, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 30, 39, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
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
              Our Products
            </span>
          </motion.div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{ fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Available Panels <span className="text-[#ff1e27]">& Courses</span>
          </h2>

          <p 
            className="text-lg md:text-xl text-[#a8a8b8] max-w-2xl mx-auto"
            style={{ lineHeight: 1.6 }}
          >
            Choose from our elite selection of gaming panels and professional training courses
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              featured={product.featured}
              icon={product.icon}
              href={product.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
