import GlassCard from "./GlassCard";

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Join the Elite", desc: "Select a membership tier that aligns with your goals and gain access to our world-class facilities." },
    { num: "02", title: "Assessment", desc: "Undergo a full biometric analysis and fitness evaluation with our certified performance coaches." },
    { num: "03", title: "Custom Plan", desc: "Receive a tailored nutrition and training protocol designed specifically for your body type and objectives." },
    { num: "04", title: "Transform", desc: "Execute the plan, utilize our recovery suites, and watch your body and lifestyle transform." }
  ];

  return (
    <section className="py-20 bg-[#121414] w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="text-center mb-14">
          <p className="font-inter text-xs text-[#E50914] tracking-widest uppercase mb-2.5 font-bold">The Process</p>
          <h2 className="font-montserrat font-extrabold text-[clamp(24px,4vw,36px)] text-white tracking-tight">
            HOW IT WORKS
          </h2>
          <div className="w-[60px] h-[3px] bg-[#E50914] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          {steps.map((s, idx) => (
            <div key={s.num} className="relative group">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-[#E50914]/30 z-0" />
              )}
              <GlassCard className="p-8 h-full flex flex-col relative z-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#E50914]/40! feature-card">
                <div className="font-montserrat font-black text-5xl text-white/5 absolute top-4 right-6 leading-none">{s.num}</div>
                <div className="w-12 h-12 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-[#E50914] flex items-center justify-center font-montserrat font-bold text-lg mb-6">
                  {s.num}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-white mb-3">{s.title}</h3>
                <p className="font-inter text-sm text-[#a0a0a0] leading-relaxed">{s.desc}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
