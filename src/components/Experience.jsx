import { Reveal } from "../hooks/useReveal"

const FEATURES = [
  {
    icon: "❧",
    label: "Complete Privacy",
    desc: "No shared spaces. No strangers. Ever.",
    note: "At all times",
  },
  {
    icon: "✦",
    label: "Curated Arrivals",
    desc: "A personal welcome — no check-in desk.",
    note: "Personalised",
  },
  {
    icon: "◉",
    label: "Bespoke Dining",
    desc: "Private chef arranged upon request.",
    note: "On arrangement",
  },
  {
    icon: "◇",
    label: "Exclusive Buyout",
    desc: "The entire estate may be reserved privately.",
    note: "On request",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 lg:py-40 px-6 md:px-14 xl:px-20">
      <div className="max-w-[1200px] mx-auto">

        {/* Header row */}
        <Reveal>
          <div className="flex justify-between items-end mb-16 lg:mb-20 flex-wrap gap-8">
            <div>
              <p className="font-jost text-[10px] tracking-[0.45em] uppercase text-[#895737] mb-5 font-light">
                The Experience
              </p>
              <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-none text-[#5E3023]">
                Every detail,<br />
                <em className="text-[#895737]">considered</em>
              </h2>
            </div>
            <p className="font-jost text-[15px] text-[#5E3023]/40 max-w-xs leading-[1.9] font-light">
              Nothing at Maison Aurel is accidental. From your arrival to your last morning,
              every element has been thought through.
            </p>
          </div>
        </Reveal>

        {/* Feature cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <div className="feature-card bg-[#F3E9DC] px-8 py-12 lg:py-[52px] h-full cursor-default">
                <div className="font-display text-[28px] text-[#895737] mb-7">
                  {item.icon}
                </div>
                <p className="font-display text-[22px] text-[#5E3023] mb-3.5 leading-[1.2]">
                  {item.label}
                </p>
                <p className="font-jost text-[13px] text-[#5E3023]/45 leading-[1.8] font-light mb-7">
                  {item.desc}
                </p>
                <span className="font-jost text-[9px] tracking-[0.35em] uppercase text-[#C08552] font-normal">
                  {item.note}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
