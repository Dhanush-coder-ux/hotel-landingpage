import { useState } from "react";
import { Reveal } from "../hooks/useReveal";


const FAQS = [
  {
    q: "How many rooms does the property have?",
    a: "We offer precisely two accommodations. This is a deliberate choice — not a limitation.",
  },
  {
    q: "Is exclusive buyout possible?",
    a: "The entire estate may be reserved exclusively. Contact our residence team for private arrangements.",
  },
  {
    q: "What is the minimum stay?",
    a: "We welcome guests for a minimum of two evenings, allowing time to truly inhabit the space.",
  },
  {
    q: "Do you accommodate special occasions?",
    a: "Intimate ceremonies, private dinners, and curated experiences are arranged with discretion.",
  },
  {
    q: "What is included in the room rate?",
    a: "Arrival welcome, daily breakfast prepared in-suite, estate access, and a personal host throughout your stay.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-28 lg:py-40 px-6 md:px-14 xl:px-20 bg-[#F3E9DC]">
      <div className="max-w-[720px] mx-auto">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-16 lg:mb-20">
            <p className="font-jost text-[10px] tracking-[0.45em] uppercase text-[#895737] mb-5 font-light">
              Questions
            </p>
            <h2 className="font-display text-[clamp(30px,4vw,52px)] text-[#5E3023]">
              Frequently Asked
            </h2>
          </div>
        </Reveal>

        {/* FAQ items */}
        {FAQS.map((faq, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="border-b border-[#895737]/15">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-7 bg-transparent border-none text-[#5E3023] cursor-pointer text-left"
              >
                <span className="font-display text-[19px] text-left">
                  {faq.q}
                </span>
                <span
                  className="text-[#895737] text-[24px] flex-shrink-0 ml-5 leading-none transition-transform duration-300"
                  style={{
                    transform: openIndex === i ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-[450ms] ease-in-out"
                style={{ maxHeight: openIndex === i ? "160px" : "0px" }}
              >
                <p className="font-jost pb-7 text-[14px] leading-[1.95] text-[#5E3023]/50 font-light">
                  {faq.a}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
