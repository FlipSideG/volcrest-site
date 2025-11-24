"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 py-12 md:py-16">
      <div className="w-full px-6 md:px-12 lg:px-16 max-w-container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo/Brand */}
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl font-light tracking-tight text-white">
              Volcrest
            </span>
            <span className="font-sans text-[0.6rem] uppercase tracking-wide-caps text-white mt-0.5">
              Capital
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-8 md:gap-12">
            <a
              href="/about"
              className="text-sm uppercase tracking-wide-caps text-gray-400 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-sm uppercase tracking-wide-caps text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 font-light">
            © {currentYear} Volcrest Capital
          </div>
        </div>
      </div>
    </footer>
  );
}

