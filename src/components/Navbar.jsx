import { useState } from "react";
import { useScrollY } from "../hooks/useScrollY";

const NAV_LINKS = ["Rooms", "Philosophy", "Experience", "Contact"];

export default function Navbar() {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = scrollY > 60;

  return (
    <>
      {/* ── Desktop / shared nav ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[500] flex items-center justify-between transition-all duration-500 ease-in-out ${
          scrolled
            ? "px-8 lg:px-14 py-3 backdrop-blur-xl saturate-150 bg-[#F3E9DC]/90 border-b border-[#895737]/10"
            : "px-8 lg:px-14 py-6 bg-transparent border-b border-transparent"
        }`}
      >
        {/* Logo Container */}
        <div className="flex items-center">
          <a href="/" className="block">
            <img 
              src="/images/A1_logo_coffee.png" 
              alt="Logo" 
              // Using h-12 (48px) and h-20 (80px) for visible distinction
              // Added transition-all to sync with the nav height change
              className={`transition-all duration-500 object-contain w-auto ${
                scrolled ? 'h-12' : 'h-20'
              }`}
            />
          </a>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-12 items-center">
          {NAV_LINKS.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="font-jost text-[12px] tracking-widest uppercase text-[#895737] hover:opacity-60 transition-opacity"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a 
          href="#contact" 
          className="hidden md:block font-jost text-[11px] tracking-[0.2em] uppercase px-7 py-3 border-[1.5px] border-[#895737] text-[#895737] hover:bg-[#895737] hover:text-[#F3E9DC] transition-all duration-300"
        >
          Reserve Now
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden flex-col gap-[6px] cursor-pointer z-[600] bg-transparent border-none p-0"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-[26px] h-[1.5px] bg-[#895737] transition-all duration-300"
              style={{
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px,5px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(5px,-5px)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <div
        className={`fixed inset-0 z-[550] flex flex-col items-center justify-center gap-12 backdrop-blur-xl bg-[#5E3023]/95 transition-opacity duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="font-display text-[40px] italic text-[#F3E9DC] hover:text-[#C08552] transition-colors duration-300"
          >
            {link}
          </a>
        ))}
        <a 
          href="#contact"
          onClick={() => setMenuOpen(false)} 
          className="mt-2 font-jost text-[11px] tracking-[0.25em] uppercase px-12 py-4 bg-[#895737] text-[#F3E9DC] hover:bg-[#C08552] transition-colors duration-300"
        >
          Reserve Now
        </a>
      </div>
    </>
  );
}