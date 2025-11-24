import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { TestimonialSlider } from './components/TestimonialSlider';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(
          this.getAttribute('href') as string
        );
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      <main>
        <Hero />
        <ProductGrid />
        <TestimonialSlider />
        <FAQ />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
