import { useState, useEffect } from "react";
import { useScrollY } from "../hooks/useScrollY";

const NAV_LINKS = ["Rooms", "Philosophy", "Experience", "Contact"];

export default function Navbar() {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = scrollY > 60;

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          MAIN NAVIGATION - Glassmorphism Effect
          ═══════════════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-700 ease-out ${
          scrolled ? "py-3" : "py-5 lg:py-6"
        }`}
      >
        <div
          className={`max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-14 transition-all duration-700 ${
            scrolled
              ? "bg-white/50 backdrop-blur-3xl border border-[#895737]/10 rounded-2xl mx-4 sm:mx-8 shadow-[0_8px_32px_rgba(94,48,35,0.12)]"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* ── Logo ── */}
            <a
              href="/"
              className="relative z-[600] group flex items-center gap-3"
            >
              <div className="relative">
                <img
                  src="/images/hotel_logo.png"
                  alt="A1 Hotel"
                  className={`transition-all duration-700 object-contain ${
                    scrolled ? "h-10 sm:h-12" : "h-12 sm:h-16 lg:h-14"
                  }`}
                />
                {/* Logo glow effect on hover */}
                <div className="absolute inset-0 bg-[#C08552]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </a>

            {/* ── Desktop Navigation Links ── */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="relative font-jost text-[13px] tracking-[0.15em] uppercase font-semibold group py-2 overflow-hidden"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      scrolled ? "bg-clip-text text-transparent bg-gradient-to-r from-[#895737] via-[#C08552] to-[#895737]" : "text-white"
                    } group-hover:text-`}
                  >
                    {link}
                  </span>

                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#895737] to-[#C08552] transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* ── CTA Button (Desktop) ── */}
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-2 font-jost text-[12px] tracking-[0.2em] uppercase font-semibold
              px-7 py-3.5 relative overflow-hidden group/btn transition-all duration-500 hover:scale-105 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #895737 0%, #C08552 100%)",
                boxShadow: "0 4px 20px rgba(137, 87, 55, 0.3)",
              }}
            >
              {/* Gradient overlay (reverse on hover) */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#C08552] to-[#895737] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />

              {/* Glass overlay */}
              <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />

              {/* Shine sweep (NEW 🔥) */}
              <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              {/* Text */}
              <span className="relative z-10 text-[#F3E9DC]">
                Reserve Now
              </span>

              {/* Arrow */}
              <svg
                className="relative z-10 w-4 h-4 text-[#F3E9DC] transform transition-transform duration-500 group-hover/btn:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            {/* ── Mobile Menu Button ── */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative z-[600] w-12 h-12 flex flex-col items-center justify-center gap-[5px] group"
              aria-label="Toggle menu"
            >
              {/* Hamburger background circle */}
              <div className="absolute inset-0 bg-[#895737]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />

              {/* Hamburger lines */}
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block w-6 h-[2px] bg-[#895737] transition-all duration-500 ease-out ${
                    menuOpen && i === 0
                      ? "rotate-45 translate-y-[7px]"
                      : menuOpen && i === 2
                      ? "-rotate-45 -translate-y-[7px]"
                      : ""
                  } ${menuOpen && i === 1 ? "opacity-0 scale-0" : ""}`}
                  style={{
                    boxShadow: menuOpen ? "0 0 8px rgba(137, 87, 55, 0.4)" : "none",
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════
          MOBILE MENU - Full Screen Glassmorphism Overlay
          ═══════════════════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-[550] lg:hidden transition-all duration-700 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Animated Background Blur */}
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            menuOpen ? "backdrop-blur-3xl" : "backdrop-blur-none"
          }`}
          style={{
            background: menuOpen
              ? "linear-gradient(135deg, rgba(94, 48, 35, 0.97) 0%, rgba(107, 56, 41, 0.95) 50%, rgba(137, 87, 55, 0.97) 100%)"
              : "transparent",
          }}
          onClick={() => setMenuOpen(false)}
        />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top right glow */}
          <div
            className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[120px] transition-all duration-1000 ${
              menuOpen
                ? "opacity-30 scale-100"
                : "opacity-0 scale-50"
            }`}
            style={{
              background:
                "radial-gradient(circle, rgba(192, 133, 82, 0.6) 0%, transparent 70%)",
            }}
          />

          {/* Bottom left glow */}
          <div
            className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-[120px] transition-all duration-1000 delay-200 ${
              menuOpen
                ? "opacity-30 scale-100"
                : "opacity-0 scale-50"
            }`}
            style={{
              background:
                "radial-gradient(circle, rgba(137, 87, 55, 0.6) 0%, transparent 70%)",
            }}
          />

          {/* Decorative lines */}
          <div
            className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C08552]/40 to-transparent transition-all duration-1000 ${
              menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />
        </div>

        {/* Menu Content Container */}
        <div className="relative h-full flex flex-col items-center justify-center px-8">
          {/* Glassmorphic Card */}
          <div
            className={`relative bg-white/1 backdrop-blur-sm border border-white/10 rounded-3xl px-8 py-12 shadow-2xl transition-all duration-700 ${
              menuOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-8"
            }`}
            style={{
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            }}
          >
            {/* Navigation Links */}
            <nav className="flex flex-col items-center gap-6 mb-10">
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="relative font-display text-4xl sm:text-5xl text-[#F3E9DC] group overflow-hidden"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen
                      ? "translateY(0) scale(1)"
                      : "translateY(20px) scale(0.95)",
                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${
                      (index + 1) * 0.1
                    }s`,
                  }}
                >
                  {/* Text with gradient on hover */}
                  <span className="relative z-10 bg-clip-text transition-all duration-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F3E9DC] group-hover:to-[#C08552]">
                    {link}
                  </span>

                  {/* Underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#895737] to-[#C08552] transition-all duration-500 group-hover:w-full rounded-full" />

                  {/* Glow effect on hover */}
                  <span className="absolute -inset-4 bg-[#C08552]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </a>
              ))}
            </nav>

            {/* Divider */}
            <div
              className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C08552]/50 to-transparent mb-10"
              style={{
                opacity: menuOpen ? 1 : 0,
                transition: "opacity 0.6s ease-out 0.5s",
              }}
            />

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="relative font-jost text-[13px] tracking-[0.25em] uppercase font-semibold px-12 py-5 overflow-hidden group flex items-center justify-center gap-3 w-full"
              style={{
                background:
                  "linear-gradient(135deg, #895737 0%, #C08552 100%)",
                boxShadow:
                  "0 8px 32px rgba(137, 87, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "scale(1)" : "scale(0.9)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
              }}
            >
              {/* Animated gradient overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#C08552] to-[#895737] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glass shine effect */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%)",
                }}
              />

              <span className="relative z-10 text-[#F3E9DC]">
                Reserve Your Stay
              </span>

              <svg
                className="relative z-10 w-5 h-5 text-[#F3E9DC] transform transition-transform duration-500 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            {/* Contact Info */}
            <div
              className="mt-10 text-center"
              style={{
                opacity: menuOpen ? 1 : 0,
                transition: "all 0.6s ease-out 0.7s",
              }}
            >
              <p className="font-jost text-[11px] tracking-[0.3em] uppercase text-[#C08552] mb-3 font-semibold">
                Call Us Directly
              </p>
              <a
                href="tel:9677760535"
                className="font-display text-2xl text-[#F3E9DC] hover:text-[#C08552] transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                <svg
                  className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                9677760535
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          GLOBAL ANIMATION STYLES
          ═══════════════════════════════════════════════════════ */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Smooth hover transitions */
        a {
          -webkit-tap-highlight-color: transparent;
        }

        /* Better mobile touch feedback */
        @media (max-width: 1024px) {
          button:active {
            transform: scale(0.95);
          }
        }
      `}</style>
    </>
  );
}