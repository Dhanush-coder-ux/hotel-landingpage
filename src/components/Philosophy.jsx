import { Reveal } from "../hooks/useReveal";


const STATS = [
  { num: "02", label: "Private Rooms",          note: "Precisely two, always" },
  { num: "∞",  label: "Dedicated Attention",    note: "Without measure"       },
  { num: "01", label: "Guest Party at a Time",  note: "The estate is yours"   },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 lg:py-40 px-6 md:px-14 xl:px-20 max-w-[1400px] mx-auto">

      {/* ── Two-column layout ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28 xl:gap-36 items-center">

        {/* Left: text */}
        <Reveal>
          <div className="relative">
            {/* Watermark botanical */}
            <svg
              className="absolute -top-10 -right-5 opacity-[0.06] pointer-events-none hidden lg:block"
              width="240" height="280" viewBox="0 0 240 280" fill="none"
            >
              <path d="M120 10 C120 10, 60 60, 40 120 C20 180, 50 240, 120 260 C190 240, 220 180, 200 120 C180 60, 120 10, 120 10Z" stroke="#5E3023" strokeWidth="2" fill="none" />
              <path d="M120 10 L120 260" stroke="#5E3023" strokeWidth="1" />
              <ellipse cx="120" cy="100" rx="40" ry="60" stroke="#5E3023" strokeWidth="1" fill="none" transform="rotate(-20, 120, 100)" />
              <ellipse cx="120" cy="160" rx="35" ry="55" stroke="#5E3023" strokeWidth="1" fill="none" transform="rotate(15, 120, 160)" />
            </svg>

            <p className="font-jost text-[10px] tracking-[0.45em] uppercase text-[#895737] mb-6 font-normal">
              Our Philosophy
            </p>
            <h2 className="font-display text-[clamp(40px,5vw,68px)] leading-[0.95] mb-12 text-[#5E3023]">
              Rarity is<br />the only{" "}
              <em className="text-[#895737] italic">
                true<br />luxury
              </em>
            </h2>
            <div className="w-14 h-[1.5px] bg-[#C08552] mb-11 opacity-80" />
            <p className="font-jost text-[15px] leading-[2] text-[#5E3023]/55 font-light mb-7">
              Maison Aurel was born from a single conviction: that true hospitality cannot be scaled. We offer two rooms — not as a constraint, but as a commitment.
            </p>
            <p className="font-jost text-[15px] leading-[2] text-[#5E3023]/55 font-light">
              Each stay is attended to with the kind of unhurried attention that only extreme limitation allows. You will never share this place with a stranger.
            </p>
          </div>
        </Reveal>

        {/* Right: stacked images (hidden on mobile) */}
        <Reveal delay={0.18} className="hidden md:block">
          <div className="relative h-[580px]">
            {/* Main image */}
            <div className="absolute top-0 left-10 right-0 bottom-20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=90&auto=format&fit=crop"
                alt="Estate interior"
                className="phi-img w-full h-full object-cover"
                style={{ filter: "saturate(0.9) brightness(0.92)" }}
              />
            </div>

            {/* Accent small image */}
            <div className="absolute bottom-0 left-0 w-[180px] h-[220px] overflow-hidden border-4 border-[#F3E9DC] shadow-[0_20px_60px_rgba(94,48,35,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=90&auto=format&fit=crop"
                alt="Detail"
                className="w-full h-full object-cover"
                style={{ filter: "saturate(0.85)" }}
              />
            </div>

            {/* Label badge */}
            <div className="font-jost absolute bottom-6 right-0 bg-[#5E3023] text-[#C08552] px-5 py-[10px] text-[10px] tracking-[0.35em] uppercase font-light">
              Florentine Atelier
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── Stats grid ── */}
      <div className="mt-28 lg:mt-36 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#895737]/12">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div className="bg-[#F3E9DC] px-8 lg:px-12 py-16 lg:py-20 text-center">
              <div
                className="font-display text-[clamp(60px,8vw,96px)] text-[#895737] leading-none mb-4 opacity-20"
              >
                {stat.num}
              </div>
              <p className="font-jost text-[10px] tracking-[0.3em] uppercase text-[#5E3023]/40 mb-2.5 font-light">
                {stat.label}
              </p>
              <p className="font-baskerville text-[14px] italic text-[#5E3023]/35">
                {stat.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
