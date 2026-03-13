import { useState } from "react";
import { useScrollY } from "../hooks/useScrollY";

const NAV_LINKS = ["Rooms", "Philosophy", "Experience"];

/* ─── Leaf logo SVG ─── */
function LeafLogo({ size = 28, strokeColor = "#895737", fillColor = "rgba(192,133,82,0.12)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path
        d="M32 4 C32 4, 12 18, 12 36 C12 48, 21 58, 32 58 C43 58, 52 48, 52 36 C52 18, 32 4, 32 4Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        fill={fillColor}
      />
      <path d="M32 10 L32 54" stroke={`${strokeColor}4D`} strokeWidth="1" />
      <circle cx="32" cy="36" r="3" fill={strokeColor} />
    </svg>
  );
}

export default function Navbar() {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = scrollY > 60;

  return (
    <>
      {/* ── Desktop / shared nav ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[500] flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled
            ? "px-8 lg:px-14 py-4 backdrop-blur-xl saturate-150 bg-[#F3E9DC]/90 border-b border-[#895737]/10"
            : "px-8 lg:px-14 py-8 bg-transparent border-b border-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <LeafLogo />
          <span className="font-display text-[22px] text-[#5E3023] tracking-[0.04em]">
            Maison Aurel
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-12 items-center">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <button className="hidden md:block font-jost text-[11px] tracking-[0.2em] uppercase font-normal px-7 py-3 border-[1.5px] border-[#895737] text-[#895737] bg-transparent hover:bg-[#895737] hover:text-[#F3E9DC] transition-all duration-300 cursor-pointer">
          Reserve Now
        </button>

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
        className={`fixed inset-0 z-[550] flex flex-col items-center justify-center gap-12 backdrop-blur-xl bg-[#5E3023]/97 transition-opacity duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="font-display text-[44px] italic text-[#F3E9DC] no-underline hover:text-[#C08552] transition-colors duration-300"
          >
            {link}
          </a>
        ))}
        <button className="mt-2 font-jost text-[11px] tracking-[0.25em] uppercase px-12 py-4 bg-[#895737] text-[#F3E9DC] border-none cursor-pointer hover:bg-[#C08552] transition-colors duration-300">
          Reserve
        </button>
      </div>
    </>
  );
}
