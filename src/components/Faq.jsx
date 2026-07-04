"use client"
import { useState } from "react";
import { Icon } from "./Icons";

// ── Reusable FAQ Accordion ────────────────────────────────────────────────────────
// Usage:
// <FAQ
//   eyebrow="Common Questions"
//   title="FREQUENTLY ASKED"
//   accentColor="#E50914"
//   faqs={[{ q: "Question?", a: "Answer text." }, ...]}
//   background="#0d0e0f"
//   defaultOpenIndex={null}
// />
export default function FAQ({
  eyebrow = "Common Questions",
  title = "FREQUENTLY ASKED",
  accentColor = "#E50914",
  faqs = [],
  background = "#0d0e0f",
  defaultOpenIndex = null,
  maxWidth = 800,
}) {
  const [open, setOpen] = useState(defaultOpenIndex);
  return (
    <section className="py-20 w-full" style={{ background }}>
      <div className="mx-auto px-6 md:px-8 lg:px-12 w-full" style={{ maxWidth }}>
        <div className="text-center mb-14">
          <p className="font-inter text-xs tracking-widest uppercase mb-2.5 font-bold" style={{ color: accentColor }}>{eyebrow}</p>
          <h2 className="font-montserrat font-extrabold text-[clamp(24px,4vw,36px)] text-white tracking-tight">
            {title}
          </h2>
          <div className="w-[60px] h-[3px] mx-auto mt-4" style={{ backgroundColor: accentColor }} />
        </div>
        <div className="flex flex-col gap-0.5">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`transition-all duration-300 border ${open === i ? "bg-[#E50914]/6 border-[#E50914]/25" : "bg-white/2 border-white/6"}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full bg-transparent border-none px-6 py-5 flex items-center justify-between cursor-pointer text-left gap-4"
              >
                <span className="font-montserrat font-semibold text-base text-white">{f.q}</span>
                <span 
                  className="flex shrink-0 transition-transform duration-300"
                  style={{ color: accentColor, transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <Icon.ChevronDown />
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 font-inter text-sm text-[#a0a0a0] leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}