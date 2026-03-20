import { Reveal } from "../hooks/useReveal";

const ROOMS = [
  {
    id: "I",
    name: "The Champagne Suite",
    area: "85 m²",
    tagline: "A private sanctuary of champagne hues and sculpted light.",
    body: "Bathed in soft gold and morning quiet, the Champagne Suite unfolds across 85 square metres of curated restraint. Hand-laid stone floors meet bespoke furnishings commissioned from a single Florentine atelier.",
    amenities: [
      "King Ciel · Cashmere Linens",
      "Hammered Brass Soaking Tub",
      "Private Walled Garden Terrace",
      "In-Suite Sommelier Service",
      "Bose Spatial Audio System",
      "Grasse Fragrance Collection",
    ],
    accent: "#C08552",
    image: "/images/image3.jpeg",
  },
  {
    id: "II",
    name: "The Charcoal Residence",
    area: "110 m²",
    tagline: "Where architecture becomes solitude.",
    body: "Conceived as a study in deliberate darkness — deep tones that absorb, soothe, and hold. Raw concrete walls meet silk drapery in a dialogue between weight and weightlessness.",
    amenities: [
      "Emperor Obsidian Headboard Bed",
      "Steam Room · Single Stone",
      "Curated Library of 200 Volumes",
      "Rooftop Meditation Platform",
      "Hästens Bespoke Mattress",
      "Private Chef Arrangement",
    ],
    accent: "#895737",
    image: "/images/image2.jpeg",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="bg-[#5E3023] py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 xl:px-20">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-20 lg:mb-28">
            <p className="font-jost text-[12px] tracking-[0.4em] uppercase text-[#C08552] mb-5 font-medium">
              Accommodations
            </p>
            <h2 className="font-display text-[clamp(38px,6vw,72px)] text-[#F3E9DC]">
              The Two Rooms
            </h2>
          </div>
        </Reveal>

        {/* Room cards */}
        <div className="flex flex-col gap-0.5">
          {ROOMS.map((room, i) => {
            const isEven = i % 2 === 0;
            return (
              <Reveal key={room.id} delay={0.08}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 min-h-[520px] lg:min-h-[620px]`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${isEven ? "md:order-1" : "md:order-2"}`}
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      className="room-img w-full h-full object-cover min-h-[300px] md:min-h-0"
                      style={{ filter: "brightness(0.7) saturate(0.9)" }}
                    />
                    {/* Oversized room numeral watermark */}
                    <div
                      className="absolute bottom-7 pointer-events-none select-none font-display leading-none"
                      style={{
                        [isEven ? "right" : "left"]: 28,
                        fontSize: "clamp(80px,14vw,160px)",
                        color: "transparent",
                        WebkitTextStroke: "1px rgba(243,233,220,0.15)",
                      }}
                    >
                      {room.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col justify-center px-10 lg:px-[72px] py-16 lg:py-20 ${
                      isEven ? "bg-[#6B3829]" : "bg-[#622F22]"
                    }`}
                  >
                    <p
                      className="font-jost text-[12px] tracking-[0.35em] uppercase mb-5 font-medium"
                      style={{ color: room.accent }}
                    >
                      Suite {room.id} · {room.area}
                    </p>
                    <h3 className="font-display text-[clamp(28px,3vw,44px)] text-[#F3E9DC] mb-4 leading-[1.1]">
                      {room.name}
                    </h3>
                    <p
                      className="font-baskerville text-[18px] italic mb-9 leading-[1.6] text-[#F3E9DC]/80"
                    >
                      {room.tagline}
                    </p>
                    <div
                      className="w-9 h-[1.5px] mb-9 opacity-80"
                      style={{ background: room.accent }}
                    />
                    <p className="font-jost text-[16px] leading-[1.8] text-[#F3E9DC]/90 mb-11">
                      {room.body}
                    </p>

                    {/* Amenities */}
                    <p className="font-jost text-[11px] tracking-[0.35em] uppercase text-[#F3E9DC]/70 mb-5 font-medium">
                      Inclusions
                    </p>
                    {room.amenities.map((amenity) => (
                      <div
                        key={amenity}
                        className="flex items-center gap-4 py-[11px] border-b border-[#F3E9DC]/10"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-90"
                          style={{ background: room.accent }}
                        />
                        <span className="font-jost text-[15px] text-[#F3E9DC]/90">
                          {amenity}
                        </span>
                      </div>
                    ))}

                    {/* CTA */}
                    <button
                      className="mt-11 self-start font-jost font-medium text-[12px] tracking-[0.25em] uppercase px-9 py-[14px] bg-transparent cursor-pointer transition-all duration-300"
                      style={{
                        border: `1.5px solid ${room.accent}`,
                        color: room.accent,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = room.accent;
                        e.currentTarget.style.color = "#5E3023";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = room.accent;
                      }}
                    >
                      Enquire About This Suite
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}