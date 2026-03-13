import { Reveal } from "../hooks/useReveal";
import { useScrollY } from "../hooks/useScrollY";


export default function Quote() {
  const scrollY = useScrollY();

  return (
    <div className="relative h-[72vh] overflow-hidden">
      {/* Parallax image */}
      <img
        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=2400&q=90&auto=format&fit=crop"
        alt="Nature landscape"
        className="absolute inset-0 w-full object-cover"
        style={{
          height: "130%",
          transform: `translateY(${(scrollY - 2800) * 0.1}px)`,
          filter: "brightness(0.4) saturate(0.7) hue-rotate(-10deg)",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5E3023]/60 to-[#5E3023]/20" />

      {/* Quote content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
        <Reveal>
          <p className="font-jost text-[10px] tracking-[0.5em] uppercase text-[#C08552] mb-9 font-light">
            Provence, France
          </p>
          <h2 className="font-display text-[clamp(26px,5vw,62px)] text-[#F3E9DC] leading-[1.25] max-w-[820px] italic">
            "We built a place not to be visited —<br />but to be inhabited."
          </h2>
          <div className="w-10 h-px bg-[#C08552] mx-auto my-8 opacity-60" />
          <p className="font-jost text-[11px] tracking-[0.3em] text-[#F3E9DC]/35 font-light">
            — The Founders, Maison Aurel
          </p>
        </Reveal>
      </div>
    </div>
  );
}
