import { useState } from "react";

export default function CallSelector({ numbers = [], label = "Call Now" }) {
  const [open, setOpen] = useState(false);

  const handleCall = (num) => {
    window.location.href = `tel:${num}`;
  };

  return (
    <>
      {/* TRIGGER BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="group/btn relative inline-flex items-center justify-center gap-2
        font-jost text-[13px] tracking-[0.25em] uppercase
        px-12 py-[18px] rounded-xl overflow-hidden
        text-[#F3E9DC] bg-[#895737]
        shadow-[0_10px_50px_rgba(137,87,55,0.35)]
        transition-all duration-300 hover:scale-105"
      >
        {/* icon */}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.516 2.064a2 2 0 01-.45 1.94l-1.27 1.27a16.001 16.001 0 006.586 6.586l1.27-1.27a2 2 0 011.94-.45l2.064.516A2 2 0 0119.72 19H22a2 2 0 012 2v1a1 1 0 01-1 1C10.745 23 1 13.255 1 1a1 1 0 011-1h1a2 2 0 012 2v2.28z"
          />
        </svg>

        <span>{label}</span>
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          {/* GLASS CARD */}
          <div className="relative w-full max-w-sm rounded-2xl
            bg-white/10 backdrop-blur-2xl border border-white/20
            p-6 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">

            <h3 className="font-display text-xl text-[#F3E9DC] mb-4 text-center">
              Choose Number
            </h3>

            <div className="flex flex-col gap-3">

              {numbers.map((num, i) => (
                <button
                  key={i}
                  onClick={() => handleCall(num)}
                  className="w-full py-3 rounded-xl
                  bg-white/20 hover:bg-white/30
                  text-[#F3E9DC] font-jost tracking-wide
                  transition-all"
                >
                  {num}
                </button>
              ))}

            </div>

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="mt-5 w-full text-sm text-[#F3E9DC]/60 hover:text-[#F3E9DC]"
            >
              Cancel
            </button>

          </div>
        </div>
      )}
    </>
  );
}