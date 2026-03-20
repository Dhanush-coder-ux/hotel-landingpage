import { useState } from "react";
import { Reveal } from "../hooks/useReveal";

const FAQS = [
  {
    q: "How many rooms are available at the property?",
    a: "We offer only two private suites. This ensures a quiet, exclusive boutique stay experience in Madurai with complete privacy at all times.",
  },
  {
    q: "Is the property located near Madurai Airport?",
    a: "Yes, we are located in Perungudi, just a few minutes from Madurai International Airport — offering both convenience and a peaceful environment away from the city.",
  },
  {
    q: "Can I book the entire property for private use?",
    a: "Yes, the entire property can be reserved for a fully private stay. This is ideal for couples, families, or special occasions seeking exclusivity.",
  },
  {
    q: "What is the minimum stay requirement?",
    a: "We recommend a minimum stay of two nights to fully experience the calm and comfort of the space.",
  },
  {
    q: "Do you offer food or dining options?",
    a: "Yes, curated in-suite dining and private chef arrangements are available on request, allowing you to enjoy meals in complete privacy.",
  },
  {
    q: "Is this suitable for couples or special occasions?",
    a: "Absolutely. The property is designed for intimate stays, making it ideal for couples, anniversaries, and private celebrations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-28 lg:py-20 px-6 md:px-14 xl:px-20 bg-[#F3E9DC] overflow-hidden">

      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3E9DC] via-[#f1e4d7] to-[#e8d6c5] opacity-70" />

      <div className="relative max-w-[760px] mx-auto">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-16 lg:mb-20">
            <p className="font-jost text-[10px] tracking-[0.45em] uppercase text-[#895737] mb-5">
              Guest Queries
            </p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] text-[#5E3023]">
              Frequently Asked Questions
            </h2>
          </div>
        </Reveal>

        {/* FAQ list */}
        <div className="flex flex-col gap-5">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  className={`group relative rounded-2xl overflow-hidden
                  backdrop-blur-2xl bg-white/20 border border-white/30
                  shadow-[0_10px_40px_rgba(94,48,35,0.12)]
                  transition-all duration-500
                  ${isOpen ? "shadow-[0_20px_60px_rgba(94,48,35,0.2)]" : ""}`}
                >

                  {/* glass light */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent opacity-60" />

                  {/* hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
                    bg-gradient-to-br from-[#C08552]/20 to-transparent" />

                  {/* content */}
                  <div className="relative z-10">

                    {/* button */}
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : i)
                      }
                      className="w-full flex justify-between items-center px-7 py-6 text-left"
                    >
                      <span className="font-display text-[18px] text-[#5E3023]">
                        {faq.q}
                      </span>

                      {/* icon */}
                      <span
                        className="text-[#895737] text-[22px] transition-all duration-400"
                        style={{
                          transform: isOpen
                            ? "rotate(45deg) scale(1.2)"
                            : "rotate(0deg)",
                        }}
                      >
                        +
                      </span>
                    </button>

                    {/* answer */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-7 pb-6 font-jost text-[14px] leading-[1.9] text-[#5E3023]/70">
                          {faq.a}
                        </p>
                      </div>
                    </div>

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