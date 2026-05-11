import { useState, useEffect } from "react";

const links = ["About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080b10]/90 backdrop-blur-md border-b border-[#1e2a38]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-['Syne'] font-bold text-lg text-white tracking-tight"
        >
          <span className="text-[#00e5ff]">&lt;</span>
          CHINOMSO
          <span className="text-[#00e5ff]">/&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[#4d6072] hover:text-[#00e5ff] transition-colors duration-300 tracking-widest uppercase"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm px-4 py-2 border border-[#00e5ff] text-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#080b10] transition-all duration-300 tracking-widest uppercase"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-px w-6 bg-[#00e5ff] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-[#00e5ff] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-[#00e5ff] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-64" : "max-h-0"}`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 border-t border-[#1e2a38] bg-[#080b10]/95 backdrop-blur-md">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#4d6072] hover:text-[#00e5ff] transition-colors tracking-widest uppercase"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm px-4 py-2 border border-[#00e5ff] text-[#00e5ff] tracking-widest uppercase"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
