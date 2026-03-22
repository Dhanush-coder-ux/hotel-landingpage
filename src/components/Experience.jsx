import { Reveal } from "../hooks/useReveal";

const FEATURES = [
  {
    icon: "❧",
    label: "Complete Privacy",
    desc: "Only two suites. No shared spaces. No interruptions — just a truly private stay in Madurai.",
    note: "Always private",
  },
  {
    icon: "✦",
    label: "Personalised Arrival",
    desc: "A seamless, quiet welcome without queues or formal check-ins — designed entirely around your time.",
    note: "Tailored to you",
  },
  {
    icon: "◉",
    label: "In-Suite Dining",
    desc: "Enjoy curated meals in the comfort of your private space, with chef arrangements available on request.",
    note: "On request",
  },
  {
    icon: "◇",
    label: "Exclusive Stay",
    desc: "Reserve the entire property for a completely private boutique experience in Perungudi, Madurai.",
    note: "Full buyout available",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-40 px-6 md:px-14 xl:px-20 bg-[#F3E9DC] overflow-hidden">

      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3E9DC] via-[#f0e3d6] to-[#e7d4c3] opacity-70" />

      <div className="relative max-w-[1200px] mx-auto">

        {/* Header */}
        <Reveal>
          <div className="flex justify-between items-end mb-16 lg:mb-20 flex-wrap gap-8">

            <div>
              <p className="font-jost text-[12px] tracking-[0.4em] uppercase text-[#895737] mb-5 font-medium">
                Guest Experience
              </p>

              <h2 className="font-display text-[clamp(38px,5vw,68px)] leading-[1.05] text-[#5E3023]">
                A stay designed,
                <br />
                <span className="relative inline-block">
                  <em className="text-[#895737]">around you</em>
                  <span className="absolute left-0 bottom-1 w-full h-[6px] bg-[#C08552]/30 -z-10" />
                </span>
              </h2>
            </div>

            <p className="font-jost text-[16px] text-[#5E3023]/80 max-w-xs leading-[1.9]">
              Every element of your stay is thoughtfully curated — from your arrival to your final morning. Designed for privacy, comfort, and ease, this is a boutique stay experience in Madurai Perungudi where nothing feels rushed or impersonal.
            </p>

          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {FEATURES.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <div
  className="group relative h-full p-8 rounded-2xl overflow-hidden
  backdrop-blur-2xl bg-white/10 border border-white/20
  shadow-[0_10px_40px_rgba(94,48,35,0.15)]
  transition-all duration-500
  hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(94,48,35,0.25)]"
>

  {/* glass highlight layer */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 via-white/5 to-transparent opacity-60" />

  {/* edge light (top glow) */}
  <div className="absolute inset-0 rounded-2xl border border-white/30 pointer-events-none" />

  {/* hover glow */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
    bg-gradient-to-br from-[#C08552]/25 via-transparent to-transparent rounded-2xl" />

  {/* shine sweep */}
  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000
    bg-gradient-to-r from-transparent via-white/30 to-transparent" />

  {/* content */}
  <div className="relative z-10">

    {/* icon */}
    <div className="font-display text-[30px] text-[#895737] mb-6
      transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
      {item.icon}
    </div>

    {/* title */}
    <p className="font-display text-[22px] text-[#5E3023] mb-3 leading-[1.3] font-medium">
      {item.label}
    </p>

    {/* desc */}
    <p className="font-jost text-[15px] text-[#5E3023]/80 leading-[1.8] mb-6">
      {item.desc}
    </p>

    {/* divider */}
    <div className="w-8 h-[1.5px] bg-[#C08552] mb-4 opacity-70" />

    {/* note */}
    <span className="font-jost text-[11px] tracking-[0.3em] uppercase text-[#895737] font-medium">
      {item.note}
    </span>

  </div>
</div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}