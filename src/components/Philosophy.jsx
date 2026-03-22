import { Reveal } from "../hooks/useReveal";

const STATS = [
  { 
    num: "02", 
    label: "Exclusive Suites", 
    note: "Designed for privacy and quiet comfort" 
  },
  { 
    num: "∞", 
    label: "Moments of Stillness", 
    note: "Unhurried, uninterrupted living" 
  },
  { 
    num: "01", 
    label: "Private Experience", 
    note: "Entirely yours, always personal" 
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative px-6 md:px-12 lg:px-20 py-24 lg:py-32 bg-[#F3E9DC] overflow-hidden">

      {/* subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F3E9DC] to-[#EAD9C7] opacity-60" />

      {/* ── Two-column layout ── */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28 xl:gap-36 items-center">

        {/* Left */}
        <Reveal>
          <div className="relative max-w-xl">

            <p className="font-jost text-[12px] tracking-[0.4em] uppercase text-[#895737] mb-6 font-medium">
              Our Philosophy
            </p>

            <h2 className="font-display text-[clamp(42px,5vw,72px)] leading-[1] mb-10 text-[#5E3023]">
              Space to<br />
              <span className="relative inline-block">
                breathe,
                <span className="absolute left-0 bottom-2 w-full h-[6px] bg-[#C08552]/40 -z-10" />
              </span>{" "}
              <em className="text-[#895737] italic">
                time to pause
              </em>
            </h2>

            <div className="w-16 h-[2px] bg-[#C08552] mb-10" />

            <p className="font-jost text-[16px] leading-[1.9] text-[#5E3023]/80 mb-6">
              A1 is a private boutique stay in Madurai, created for those who value stillness over excess. With only two exclusive rooms, every detail is intentionally minimal, personal, and quietly refined.
            </p>

            <p className="font-jost text-[16px] leading-[1.9] text-[#5E3023]/80">
              Set in Perungudi, away from the noise of the city, this is a place to slow down — to rest deeply, read without distraction, and experience a more peaceful way of staying.
            </p>
          </div>
        </Reveal>

        {/* Right */}
        <Reveal delay={0.2} className="hidden md:block">
          <div className="relative h-[580px]">

            {/* Main image */}
            <div className="absolute top-0 left-12 right-0 bottom-20 rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(94,48,35,0.25)] group">
              <img
                src="/images/image1.jpeg"
                alt="Estate"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* dark overlay */}
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Small card image */}
            <div className="absolute bottom-0 left-0 w-[190px] h-[230px] rounded-xl overflow-hidden border border-white/40 backdrop-blur-md bg-white/10 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=90&auto=format&fit=crop"
                alt="Detail"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-8 right-0 px-6 py-3 text-[11px] tracking-[0.3em] uppercase font-medium
              bg-[#5E3023]/90 backdrop-blur-md text-[#F3E9DC] rounded-xl shadow-lg">
              Quiet Corners
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── Stats ── */}
      <div className="relative mt-28 lg:mt-36 grid grid-cols-1 sm:grid-cols-3 gap-6">

        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div className="group relative bg-white/40 backdrop-blur-xl border border-[#895737]/20
              px-10 py-16 rounded-2xl text-center transition-all duration-500
              hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(94,48,35,0.15)]">

              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
                bg-gradient-to-br from-[#C08552]/20 to-transparent rounded-2xl" />

              <div className="relative z-10">

                <div className="font-display text-[clamp(60px,8vw,96px)] text-[#895737] leading-none mb-4 opacity-40 group-hover:opacity-70 transition">
                  {stat.num}
                </div>

                <p className="font-jost text-[12px] tracking-[0.25em] uppercase text-[#5E3023]/80 mb-2 font-medium">
                  {stat.label}
                </p>

                <p className="font-baskerville text-[16px] italic text-[#5E3023]/70">
                  {stat.note}
                </p>

              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}