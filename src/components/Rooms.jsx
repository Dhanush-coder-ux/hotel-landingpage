import { Reveal } from "../hooks/useReveal";

const ROOMS = [
  {
    id: "I",
    name: "The Champagne Suite",
    area: "85 m²",
    tagline: "A refined sanctuary of warm tones, natural light, and quiet elegance.",
    body: "The Champagne Suite is designed as a private luxury retreat in Madurai, where soft tones and natural textures create a calm, welcoming atmosphere. Spanning 85 square metres, the space blends handcrafted materials with modern comfort, offering a stay that feels both refined and deeply relaxing. Ideal for guests seeking privacy and quiet, this suite provides a seamless balance between comfort, design, and personal space. Near Madurai Perungudi Airport",
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
    tagline: "A bold, architectural space designed for stillness and deep rest.",
    body: "The Charcoal Residence offers a more immersive and introspective stay experience, where deep textures and minimal design create a sense of complete calm. Spread across 110 square metres, it is designed for those who appreciate space, privacy, and thoughtful detail. Every element is curated to reduce noise, enhance comfort, and allow you to fully unwind in a private setting near Madurai Perungudi Airport.",
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
    <section id="rooms" className="relative bg-[#5E3023] py-28 lg:py-20 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5E3023] via-[#5E3023] to-[#3d1f18] opacity-80" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-14 xl:px-20">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-20 lg:mb-28">
            <p className="font-jost text-[12px] tracking-[0.4em] uppercase text-[#C08552] mb-5 font-medium">
              Private Suites
            </p>
            <h2 className="font-display text-[clamp(40px,6vw,80px)] text-[#F3E9DC]">
              Two Exclusive Suites
            </h2>
            <p className="text-white/40 text-[14px]">Only two private suites in Madurai, designed for complete privacy, comfort, and a truly personal stay experience.</p>
          </div>
        </Reveal>

        {/* Rooms */}
        <div className="flex flex-col gap-16">
          {ROOMS.map((room, i) => {
            const isEven = i % 2 === 0;

            return (
              <Reveal key={room.id} delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                  {/* Image */}
                  <div
                    className={`relative group overflow-hidden rounded-2xl ${
                      isEven ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-[420px] md:h-[560px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* number */}
                    <div className="absolute bottom-6 right-6 font-display text-[clamp(80px,10vw,140px)] text-white/10">
                      {room.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`relative p-8 lg:p-12 rounded-2xl backdrop-blur-xl border border-white/10
                    ${isEven ? "md:order-2" : "md:order-1"}
                    bg-white/5`}
                  >

                    {/* accent line */}
                    <div
                      className="w-12 h-[2px] mb-6"
                      style={{ background: room.accent }}
                    />

                    <p
                      className="font-jost text-[14px] tracking-[0.35em] uppercase mb-4 font-bold"
                      style={{ color: room.accent }}
                    >
                      Suite {room.id} · {room.area}
                    </p>

                    <h3 className="font-display text-[clamp(28px,3vw,44px)] text-[#F3E9DC] mb-4">
                      {room.name}
                    </h3>

                    <p className="font-baskerville italic text-[#F3E9DC]/80 mb-6">
                      {room.tagline}
                    </p>

                    <p className="font-jost text-[#F3E9DC]/90 leading-[1.8] mb-8">
                      {room.body}
                    </p>

                    {/* Amenities */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                      {room.amenities.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 text-sm text-[#F3E9DC]/85"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: room.accent }}
                          />
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* CTA (Shine Button 🔥) */}
                    <button
                      className="group/btn relative overflow-hidden inline-flex items-center gap-2
                      font-jost text-[12px] tracking-[0.25em] uppercase px-8 py-3.5 rounded-xl
                      transition-all duration-300"
                      style={{
                        border: `1px solid ${room.accent}`,
                        color: room.accent,
                      }}
                    >
                      <a href="tel:9677760535">
                        <span className="relative z-10">
                          Check Availability
                        </span>
                      </a>

                      {/* shine */}
                      <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                      {/* hover bg */}
                      <span
                        className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition"
                        
                      />

                      {/* text invert */}
                      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/btn:opacity-100 text-[#5E3023]">
                        Check Availability
                      </span>
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