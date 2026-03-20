import { Reveal } from "../hooks/useReveal";
import { useScrollY } from "../hooks/useScrollY";

export default function Quote() {
  const scrollY = useScrollY();

  return (
    <section className="relative h-[75vh] overflow-hidden flex items-center justify-center">

      {/* Parallax image */}
      <img
        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=2400&q=90&auto=format&fit=crop"
        alt="Nature"
        className="absolute inset-0 w-full object-cover"
        style={{
          height: "140%",
          transform: `translateY(${(scrollY - 2800) * 0.12}px) scale(1.05)`,
          filter: "brightness(0.45) saturate(0.75)",
        }}
      />

      {/* deep gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#5E3023]/40 to-black/60" />

      {/* Glass container */}
      <Reveal>
        <div className="relative z-10 px-8 py-12 md:px-14 md:py-16 max-w-[900px] text-center
          rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20
          shadow-[0_20px_80px_rgba(0,0,0,0.35)]
          transition-all duration-700 hover:scale-[1.02]">

          {/* glass light layer */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/25 via-white/5 to-transparent opacity-60" />

          {/* shine sweep */}
          <div className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-1000
            bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative z-10">

            {/* location */}
            <p className="font-jost text-[10px] tracking-[0.5em] uppercase text-[#ffe1c7] mb-8">
              Madurai · Tamil Nadu
            </p>

            {/* quote */}
            <h2 className="font-display text-[clamp(28px,5vw,64px)] text-[#F3E9DC] leading-[1.3] italic mb-8">
              “A private space to pause —
              <br />
              unwind, and simply be.”
            </h2>

            {/* divider */}
            <div className="w-12 h-[1.5px] bg-[#C08552] mx-auto mb-8 opacity-70" />

            {/* author */}
            <p className="font-jost text-[11px] tracking-[0.35em] text-[#F3E9DC]/60">
              — — A1 Private Stay
            </p>

          </div>
        </div>
      </Reveal>
    </section>
  );
}