export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-[rgba(255,30,39,0.1)]">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            {/* ❕ Icon */}
            <span
              className="inline-block text-[#ff1e27] text-2xl leading-none translate-y-[1px]"
              style={{
                textShadow: '0 0 10px rgba(255,30,39,0.5)',
              }}
            >
              ❕
            </span>

            <span
              className="text-xl tracking-wider uppercase"
              style={{
                fontWeight: 700,
                color: '#ff1e27',
              }}
            >
              OROCHIMARU
            </span>
          </div>

          <p className="text-sm text-[#6b6b7a] text-center max-w-md">
            Professional grade gaming panels and training courses for competitive players
          </p>
        </div>

        {/* Divider */}
        <div
          className="h-[1px] mb-8"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255, 30, 39, 0.2), transparent)',
          }}
        />

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="#panels"
            className="text-sm text-[#a8a8b8] hover:text-[#ff1e27] transition-colors duration-300"
          >
            Panels
          </a>
          <a
            href="#testimonials"
            className="text-sm text-[#a8a8b8] hover:text-[#ff1e27] transition-colors duration-300"
          >
            Testimonials
          </a>
          <a
            href="#faq"
            className="text-sm text-[#a8a8b8] hover:text-[#ff1e27] transition-colors duration-300"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="text-sm text-[#a8a8b8] hover:text-[#ff1e27] transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#6b6b7a]">
          <p>© {currentYear} OROCHIMARU Ecosystem | All Rights Reserved</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-[#ff1e27] transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-[#ff1e27] transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
