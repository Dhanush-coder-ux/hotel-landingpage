import { useState, useEffect } from "react";
import { useScrollY } from "./hooks/useScrollY";

import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import Philosophy   from "./components/Philosophy";
import Rooms        from "./components/Rooms";
import Experience   from "./components/Experience";
import Quote        from "./components/Quote";
import FAQ          from "./components/FAQ";
import Footer       from "./components/Footer";

/* ── Marquee strip ── */
const MARQUEE_ITEMS = [
  "Complete Privacy", "❧",
  "Bespoke Dining",   "❧",
  "Estate Exclusivity","❧",
  "Two Rooms Only",   "❧",
  "Curated Arrivals", "❧",
  "Since 2019",       "❧",
];

function Marquee() {
  return (
    <div className="bg-[#5E3023] py-[18px] overflow-hidden border-t border-[#C08552]/12">
      <div className="marquee-track">
        {[...Array(2)].flatMap((_, i) =>
          MARQUEE_ITEMS.map((text, j) => (
            <span
              key={`${i}-${j}`}
              className={`font-jost text-[10px] tracking-[0.4em] uppercase flex-shrink-0 font-light ${
                text === "❧" ? "text-[#C08552]" : "text-[#F3E9DC]/30"
              }`}
            >
              {text}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

/* ── Intro loader ── */
function IntroLoader({ loaded, out }) {
  return (
    <div className={`intro-overlay${out ? " out" : ""}`}>
      <svg
        width="64" height="64" viewBox="0 0 64 64" fill="none"
        className="mb-7 transition-opacity duration-[800ms]"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <path
          d="M32 4 C32 4, 12 18, 12 36 C12 48, 21 58, 32 58 C43 58, 52 48, 52 36 C52 18, 32 4, 32 4Z"
          stroke="#C08552" strokeWidth="1" fill="none"
        />
        <path
          d="M32 12 C32 12, 22 24, 22 36 C22 44, 26.5 52, 32 52"
          stroke="#895737" strokeWidth=".8" fill="none"
        />
        <path d="M32 12 L32 52" stroke="rgba(192,133,82,0.4)" strokeWidth=".6" />
        <circle cx="32" cy="36" r="3" fill="#C08552" />
      </svg>

      <div
        className="font-display text-[clamp(28px,5vw,46px)] text-[#F3E9DC] tracking-[0.06em] mb-5 transition-opacity duration-[800ms] delay-200"
        style={{
          opacity: loaded ? 1 : 0,
          animation: loaded ? "rise 0.9s 0.2s cubic-bezier(0.16,1,0.3,1) both" : "none",
        }}
      >
        Maison Aurel
      </div>

      {/* Loader bar */}
      <div className="relative w-[220px] h-px bg-[#C08552]/20 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-[#C08552] loader-bar"
          style={{ animation: loaded ? undefined : "none" }}
        />
      </div>

      <p
        className="font-jost mt-4 text-[10px] tracking-[0.35em] uppercase text-[#F3E9DC]/30"
      >
        Provence, France
      </p>
    </div>
  );
}

/* ── Page ── */
export default function LandingPage() {
  const scrollY = useScrollY();
  const [introOut, setIntroOut] = useState(false);
  const [loaded,   setLoaded]   = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLoaded(true),  200);
    const t2 = setTimeout(() => setIntroOut(true), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  /* Scroll progress width */
  const progressWidth =
    typeof document !== "undefined"
      ? Math.min(
          (scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1)) * 100,
          100
        )
      : 0;

  return (
    <div className="bg-[#F3E9DC] text-[#5E3023] overflow-x-hidden font-display">

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${progressWidth}%` }}
      />

      {/* Intro loader */}
      <IntroLoader loaded={loaded} out={introOut} />

      {/* Page sections */}
      <Navbar />
      <Hero introOut={introOut} />
      <Marquee />
      <Philosophy />
      <Rooms />
      <Experience />
      <Quote />
      <FAQ />
      <Footer />
    </div>
  );
}
