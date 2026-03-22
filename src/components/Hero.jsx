import { useScrollY } from "../hooks/useScrollY";

/* Corner botanical flourish */
function CornerFlourish({ style = {} }) {
  return (
    <svg style={style} width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path d="M4 4 Q40 4, 40 40" stroke="#C08552" strokeWidth="1" fill="none" />
      <path d="M4 4 Q4 40, 40 40" stroke="#C08552" strokeWidth="1" fill="none" />
      <circle cx="4" cy="4" r="2" fill="#C08552" />
      <path d="M12 4 Q28 4, 28 20" stroke="rgba(192,133,82,0.4)" strokeWidth=".7" fill="none" />
      <path d="M4 12 Q4 28, 20 28" stroke="rgba(192,133,82,0.4)" strokeWidth=".7" fill="none" />
    </svg>
  );
}

// Updated words to focus on nature and grounding
const HERO_WORDS = [
  { text: "Luxury Stay", italic: false, delay: "0.35s", color: "#F3E9DC" },
  { text: "in", italic: true, delay: "0.50s", color: "#C08552" },
  { text: "Madurai", italic: false, delay: "0.65s", color: "#F3E9DC" },
];

export default function Hero({ introOut }) {
  const scrollY = useScrollY();

  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden bg-[#5E3023]">

      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2400&q=90&auto=format&fit=crop')",
          transform: `scale(1.06) translateY(${scrollY * 0.18}px)`,
          filter: "brightness(0.38) saturate(0.85)",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5E3023]/20 via-[#5E3023]/10 to-[#5E3023]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(192,133,82,0.15)_0%,transparent_60%)]" />

      {/* Corner flourishes */}
      <CornerFlourish style={{ position: "absolute", top: 40, left: 40, opacity: 0.35 }} />
      <CornerFlourish style={{ position: "absolute", top: 40, right: 40, opacity: 0.35, transform: "scaleX(-1)" }} />
      <CornerFlourish style={{ position: "absolute", bottom: 40, left: 40, opacity: 0.35, transform: "scaleY(-1)" }} />
      <CornerFlourish style={{ position: "absolute", bottom: 40, right: 40, opacity: 0.35, transform: "scale(-1,-1)" }} />

      {/* Center content */}
      <div className="relative z-[2] text-center px-8 max-w-[900px]">

        {/* Eyebrow - Updated copy for a grounded feel */}
        <div className="overflow-hidden mb-9">
          <div
            className="font-jost text-[14px] tracking-[0.4em] uppercase text-[#e4be9d] font-medium max-sm:text-[10px]"
            style={{
              opacity: introOut ? 1 : 0,
              animation: introOut ? "rise 0.9s 0.1s both" : "none",
            }}
          >
            Luxury Boutique Stay &nbsp;·&nbsp; Madurai &nbsp;·&nbsp; Perungudi
          </div>
        </div>

        {/* Main headline — animated word reveal */}
        <h1 className="font-display font-normal leading-[0.9] mb-12 text-[clamp(62px,11vw,130px)]">
          {HERO_WORDS.map(({ text, italic, delay, color }) => (
            <div key={text} className="word-wrap block">
              <div
                className="word-inner"
                style={{
                  fontStyle: italic ? "italic" : "normal",
                  color,
                  animationDelay: introOut ? delay : "0s",
                  animationPlayState: introOut ? "running" : "paused",
                }}
              >
                {text}
              </div>
            </div>
          ))}
        </h1>

        {/* Tagline - Updated copy and visibility */}
        <div className="overflow-hidden">
          <div
            className="font-jost text-[16px] tracking-[0.15em] text-[#F3E9DC]/80 font-medium"
            style={{
              opacity: introOut ? 1 : 0,
              animation: introOut ? "rise 0.9s 0.85s both" : "none",
            }}
          >
            Located just minutes from Madurai International Airport, offering effortless arrival and departure.
          </div>
        </div>

        {/* CTAs */}
        <div
          className="mt-12 flex gap-5 items-center justify-center flex-wrap rounded-2xl"
          style={{
            opacity: introOut ? 1 : 0,
            animation: introOut ? "rise 0.9s 1.05s both" : "none",
          }}
          
        >
          <a
            href="#rooms"
            className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2
            rounded-2xl font-jost font-medium text-[12px] tracking-[0.22em] uppercase
            px-12 py-[18px]
            bg-[#895737] text-[#F3E9DC]
            border-none cursor-pointer
            transition-all duration-[350ms]
            shadow-[0_8px_40px_rgba(137,87,55,0.4)]
            hover:bg-[#C08552]
            hover:shadow-[0_12px_56px_rgba(192,133,82,0.45)]"
          >
            <span className="relative z-10">Explore Our Suites ↓</span>

            {/* Shine Effect */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
          </a>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: introOut ? 1 : 0,
          animation: introOut ? "rise 0.9s 1.4s both" : "none",
        }}
      >
        <span className="font-jost text-[11px] tracking-[0.5em] uppercase text-[#F3E9DC]/70 font-medium">Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-[#C08552] to-transparent leaf-float" />
      </div>
    </section>
  );
}