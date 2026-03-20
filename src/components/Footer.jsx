import { Reveal } from "../hooks/useReveal";

const NAV_COLS = [
  { title: "Explore", links: ["Suites", "Philosophy", "Guest Experience", "Check Availability"] },
  { title: "Estate", links: ["Privacy Policy", "Terms", "Press", "Careers"] },
];

const SOCIALS = ["Instagram", "Pinterest", "Telegram"];

export default function Footer() {
  return (
    <footer className="relative bg-[#F3E9DC] pt-28 lg:pt-36 pb-16 px-6 md:px-14 xl:px-20 overflow-hidden" id="contact">

      {/* soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3E9DC] via-[#efe2d5] to-[#e6d2c0] opacity-80" />

      {/* CTA Glass Block */}
      <Reveal>
        <div className="relative max-w-[950px] mx-auto text-center mb-28 lg:mb-36">

          <div className="relative p-10 md:p-16 rounded-[28px]
            backdrop-blur-2xl bg-white/20 border border-white/30
            shadow-[0_30px_100px_rgba(94,48,35,0.25)]
            transition-all duration-500 hover:scale-[1.02]">

            {/* glass highlight */}
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/30 via-white/5 to-transparent opacity-60" />

            {/* glow */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700
              bg-gradient-to-br from-[#C08552]/20 to-transparent rounded-[28px]" />

            {/* shine sweep */}
            <div className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-1000
              bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="relative z-10">

              <h2 className="font-display text-[clamp(36px,6vw,76px)] text-[#5E3023] mb-8 leading-[1.05]">
                Plan your
                <br />
                <em className="text-[#895737]">private stay</em>
              </h2>

              {/* subtext */}
              <p className="font-jost text-[14px] tracking-[0.15em] text-[#5E3023]/70 mb-10">
                Just 5 minutes from Madurai Airport · Two exclusive suites · Complete privacy
              </p>

              {/* CTA button */}
              <a
                href="tel:9677760535"
                className="group/btn relative inline-flex items-center justify-center
                font-jost text-[13px] tracking-[0.25em] uppercase
                px-12 py-[18px] rounded-xl overflow-hidden
                text-[#F3E9DC] bg-[#895737]
                shadow-[0_10px_50px_rgba(137,87,55,0.35)]
                transition-all duration-300 hover:scale-105"
              >
                {/* Icon */}
                <svg
                  className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.516 2.064a2 2 0 01-.45 1.94l-1.27 1.27a16.001 16.001 0 006.586 6.586l1.27-1.27a2 2 0 011.94-.45l2.064.516A2 2 0 0119.72 19H22a2 2 0 012 2v1a1 1 0 01-1 1C10.745 23 1 13.255 1 1a1 1 0 011-1h1a2 2 0 012 2v2.28z"
                  />
                </svg>
                <div className="mx-1"></div>
                <span className="relative z-10">Call to Check Availability</span>

                {/* shine */}
                <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700
                  bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* hover bg */}
                <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition" />
              </a>

            </div>
          </div>
        </div>
      </Reveal>

      {/* Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#895737]/30 to-transparent mb-16" />

      {/* Main grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-14 mb-16">

        {/* Brand */}
        <div>
          <img src="/images/hotel_logo.png" className="h-18 mb-6" alt="logo" />

          <p className="font-jost text-[16px] text-[#5E3023]/80 leading-[1.9] max-w-[300px]">
            A private boutique stay in Madurai offering two exclusive suites,
            designed for comfort, privacy, and a peaceful retreat in Perungudi.
          </p>
        </div>

        {/* Links */}
        {NAV_COLS.map((col) => (
          <div key={col.title}>
            <p className="font-jost text-[12px] tracking-[0.3em] uppercase text-[#895737] mb-6">
              {col.title}
            </p>

            {col.links.map((link) => (
              <a
                key={link}
                href="#"
                className="block font-jost text-[15px] text-[#5E3023]/70 mb-3
                transition-all duration-300 hover:text-[#895737] hover:translate-x-1"
              >
                {link}
              </a>
            ))}
          </div>
        ))}

        {/* Contact (glass card style) */}
        <div className="relative p-6 rounded-2xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-md">

          <p className="font-jost text-[12px] tracking-[0.3em] uppercase text-[#895737] mb-4">
            Contact
          </p>

          <p className="font-jost text-[16px] text-[#5E3023]/80 mb-2">
            +91 96777 60535
          </p>

          <p className="font-jost text-[14px] text-[#5E3023]/60 mb-4">
            Perungudi, Madurai
          </p>

          <p className="font-jost text-[12px] text-[#5E3023]/50 mb-6">
            5 minutes from Madurai Airport
          </p>

          {/* socials */}
          <div className="flex gap-3 flex-wrap">
            {SOCIALS.map((s) => (
              <a
                key={s}
                href="#"
                className="px-3 py-2 rounded-lg text-[11px] uppercase tracking-[0.2em]
                bg-white/30 backdrop-blur-md border border-white/30
                text-[#5E3023]/70 transition hover:bg-white/50"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="relative border-t border-[#895737]/20 pt-8 flex flex-wrap justify-between items-center gap-4">

        <p className="font-jost text-[11px] tracking-[0.2em] text-[#5E3023]/60 uppercase">
          © {new Date().getFullYear()} A1 Boutique Retreat · Madurai
        </p>

        <div className="flex gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s}
              href="#"
              className="font-jost text-[11px] tracking-[0.2em] text-[#5E3023]/60 uppercase
              transition hover:text-[#895737]"
            >
              {s}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}