import { Reveal } from "../hooks/useReveal";


const NAV_COLS = [
  { title: "Navigate", links: ["Rooms", "Philosophy", "Experience", "Reserve"] },
  { title: "Estate",   links: ["Privacy Policy", "Terms", "Press", "Careers"] },
];

const SOCIALS = ["Instagram", "Pinterest", "Telegram"];

function LeafLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 64 64" fill="none">
      <path
        d="M32 4 C32 4, 12 18, 12 36 C12 48, 21 58, 32 58 C43 58, 52 48, 52 36 C52 18, 32 4, 32 4Z"
        stroke="#C08552"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="32" cy="36" r="3" fill="#C08552" />
    </svg>
  );
}

function BotanicalDivider() {
  return (
    <div className="flex items-center justify-center gap-5 mb-12">
      <div className="h-px w-20 bg-[#C08552]/20" />
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
        <path
          d="M32 4 C32 4, 12 18, 12 36 C12 48, 21 58, 32 58 C43 58, 52 48, 52 36 C52 18, 32 4, 32 4Z"
          stroke="#C08552"
          strokeWidth="1.5"
          fill="rgba(192,133,82,0.1)"
        />
        <path d="M32 10 L32 54" stroke="rgba(192,133,82,0.4)" strokeWidth="1" />
        <circle cx="32" cy="36" r="3" fill="#C08552" />
      </svg>
      <div className="h-px w-20 bg-[#C08552]/20" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#5E3023] pt-24 lg:pt-32 pb-16 px-6 md:px-14 xl:px-20 border-t border-[#C08552]/10">

      {/* CTA block */}
      <Reveal>
        <div className="text-center mb-24 lg:mb-32">
          <BotanicalDivider />
          <h2 className="font-display text-[clamp(32px,6vw,72px)] text-[#F3E9DC] mb-11 leading-[1.05]">
            Begin your<br />
            <em className="text-[#C08552]">reservation</em>
          </h2>
    
            <a 
              href="tel:8899223344" // Added the tel: protocol here
              className="font-jost font-normal text-[12px] tracking-[0.25em] uppercase px-12 py-[18px] bg-[#895737] text-[#F3E9DC] border-none cursor-pointer transition-colors duration-300 shadow-[0_8px_48px_rgba(137,87,55,0.35)] hover:bg-[#C08552]"
            >
              8899223344
            </a>
        </div>
      </Reveal>

      {/* Divider */}
      <div className="h-px bg-[#C08552]/10 mb-16" />

      {/* Link grid */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 mb-16">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <LeafLogo />
            <span className="font-display text-[22px] text-[#F3E9DC] tracking-[0.04em]">
              Maison Aurel
            </span>
          </div>
          <p className="font-jost text-[13px] text-[#F3E9DC]/30 leading-[1.9] font-light max-w-[260px]">
            A private estate of two rooms in the heart of Provence. For those who understand
            that true luxury begins with stillness.
          </p>
        </div>

        {/* Nav link columns */}
        {NAV_COLS.map((col) => (
          <div key={col.title}>
            <p className="font-jost text-[9px] tracking-[0.4em] uppercase text-[#C08552] mb-7 font-normal">
              {col.title}
            </p>
            {col.links.map((link) => (
              <a
                key={link}
                href="#"
                className="block font-jost text-[13px] text-[#F3E9DC]/35 no-underline mb-3.5 font-light transition-colors duration-300 hover:text-[#F3E9DC]"
              >
                {link}
              </a>
            ))}
          </div>
        ))}

        {/* Contact column */}
        <div>
          <p className="font-jost text-[9px] tracking-[0.4em] uppercase text-[#C08552] mb-7 font-normal">
            Contact
          </p>
          <address className="not-italic font-jost text-[13px] text-[#F3E9DC]/35 leading-[2.1] font-light">
            12 Rue de l'Atelier<br />
            Provence, France<br />
            <br />
            residence@maisonaurel.com<br />
            +33 (0)4 90 00 00 00
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#C08552]/[0.08] pt-9 flex flex-wrap justify-between items-center gap-4">
        <p className="font-jost text-[10px] tracking-[0.25em] text-[#F3E9DC]/20 font-light">
          © {new Date().getFullYear()} Maison Aurel · All Rights Reserved
        </p>
        <div className="flex gap-8">
          {SOCIALS.map((s) => (
            <a
              key={s}
              href="#"
              className="font-jost text-[10px] tracking-[0.2em] text-[#F3E9DC]/22 no-underline font-light transition-colors duration-300 hover:text-[#C08552]"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
