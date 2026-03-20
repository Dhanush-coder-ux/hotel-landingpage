import { Reveal } from "../hooks/useReveal";

const NAV_COLS = [
  { title: "Navigate", links: ["Rooms", "Philosophy", "Experience", "Reserve"] },
  { title: "Estate",   links: ["Privacy Policy", "Terms", "Press", "Careers"] },
];

const SOCIALS = ["Instagram", "Pinterest", "Telegram"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#F3E9DC] pt-24 lg:pt-32 pb-16 px-6 md:px-14 xl:px-20 border-t border-[#895737]/20">

      {/* CTA block */}
      <Reveal>
        <div className="text-center mb-24 lg:mb-32">
          <h2 className="font-display text-[clamp(32px,6vw,72px)] text-[#5E3023] mb-11 leading-[1.05]">
            Begin your<br />
            <em className="text-[#895737]">reservation</em>
          </h2>
    
          <a 
            href="tel:9677760535"
            className="font-jost font-medium text-[14px] tracking-[0.25em] uppercase px-12 py-[18px] bg-[#895737] text-[#F3E9DC] border-none cursor-pointer transition-colors duration-300 shadow-[0_8px_40px_rgba(137,87,55,0.2)] hover:bg-[#5E3023] inline-block"
          >
            9677760535
          </a>
        </div>
      </Reveal>

      {/* Divider */}
      <div className="h-px bg-[#895737]/20 mb-16" />

      {/* Link grid */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 mb-16">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="/images/A1_logo_coffee.png" className="h-20" alt="A1 Logo" />
          </div>
          <p className="font-jost text-[16px] text-[#5E3023]/80 leading-[1.8] max-w-[260px]">
            A peaceful retreat with just two rooms in the heart of Provence. A quiet place to rest, read, and recharge.
          </p>
        </div>

        {/* Nav link columns */}
        {NAV_COLS.map((col) => (
          <div key={col.title}>
            <p className="font-jost text-[12px] tracking-[0.3em] uppercase text-[#895737] mb-7 font-medium">
              {col.title}
            </p>
            {col.links.map((link) => (
              <a
                key={link}
                href="#"
                className="block font-jost text-[15px] text-[#5E3023]/70 no-underline mb-3.5 transition-colors duration-300 hover:text-[#895737]"
              >
                {link}
              </a>
            ))}
          </div>
        ))}

        {/* Contact column */}
        <div>
          <p className="font-jost text-[12px] tracking-[0.3em] uppercase text-[#895737] mb-7 font-medium">
            Contact
          </p>
          <address className="not-italic font-jost text-[15px] text-[#5E3023]/80 leading-[2.1]">
            9677760535
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#895737]/20 pt-9 flex flex-wrap justify-between items-center gap-4">
        <p className="font-jost text-[11px] tracking-[0.2em] text-[#5E3023]/60 uppercase font-medium">
          © {new Date().getFullYear()} A1 · All Rights Reserved
        </p>
        <div className="flex gap-8">
          {SOCIALS.map((s) => (
            <a
              key={s}
              href="#"
              className="font-jost text-[11px] tracking-[0.2em] text-[#5E3023]/60 no-underline uppercase font-medium transition-colors duration-300 hover:text-[#895737]"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}