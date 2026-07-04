import { Icon } from "./Icons";

export default function Membership({
  eyebrow = "Choose Your Plan",
  title = "MEMBERSHIP PLANS",
  subtitle = "",
  accentColor = "#E50914",
  currencySuffix = "/month",
  plans = [],
  background = "#121414",
}) {
  const handleGetStarted = (planName) => {
    const message = encodeURIComponent(`Hi, I'm interested in the ${planName} plan.`);
    window.open(`https://wa.me/923001234567?text=${message}`, "_blank");
  };

  return (
    <section className="py-24 w-full relative overflow-hidden" style={{ background }}>
      {/* Decorative background glows */}
      <div 
        className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-[120px] opacity-5 pointer-events-none z-0" 
        style={{ background: accentColor }} 
      />
      <div 
        className="absolute bottom-[10%] right-[-10%] w-[30vw] h-[30vw] rounded-full blur-[100px] opacity-5 pointer-events-none z-0" 
        style={{ background: accentColor }} 
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full relative z-10">
        <div className="text-center mb-16">
          <p className="font-inter text-xs tracking-widest uppercase mb-2.5 font-bold" style={{ color: accentColor }}>{eyebrow}</p>
          <h2 className="font-montserrat font-extrabold text-[clamp(24px,4vw,36px)] text-white tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="font-inter text-sm md:text-base text-[#a0a0a0] mt-3">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          {plans.map(p => (
            <div
              key={p.tier}
              className="flex-[1_1_320px] max-w-[400px] backdrop-blur-md rounded-3xl px-8 py-10 relative flex flex-col transition-all duration-300 hover:-translate-y-2"
              style={{
                background: p.featured ? "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)" : "rgba(255,255,255,0.02)",
                border: p.featured ? `1px solid ${p.color}` : "1px solid rgba(255,255,255,0.05)",
                boxShadow: p.featured ? `0 24px 48px -12px ${p.color}30` : "0 10px 30px -10px rgba(0,0,0,0.5)",
              }}
            >
              {p.featured && (
                <div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full font-inter text-[11px] font-bold tracking-widest uppercase whitespace-nowrap shadow-lg"
                  style={{ background: `linear-gradient(90deg, ${p.color}, #ff4040)`, color: "#fff" }}
                >
                  {p.badge || "Most Popular"}
                </div>
              )}
              <div className="mb-3">
                <span className="font-inter text-xs tracking-widest uppercase font-bold" style={{ color: p.color }}>{p.tier}</span>
              </div>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="font-montserrat font-black text-3xl text-white">{p.price}</span>
                <span className="font-inter text-xs text-[#a0a0a0]">{currencySuffix}</span>
              </div>
              
              <div className="h-px bg-gradient-to-r from-white/10 to-transparent mb-8" />
              
              <ul className="list-none p-0 m-0 mb-10 flex-grow">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-3 mb-3.5 font-inter text-sm text-[#e3e2e2] leading-relaxed">
                    <span className="text-[#25D366] mt-0.5 flex-shrink-0 flex bg-[#25D366]/15 rounded-full p-0.5"><Icon.Check /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <button
                  onClick={() => handleGetStarted(p.tier)}
                  className="w-full py-4 text-white border-none rounded-xl font-montserrat font-bold text-xs tracking-wider uppercase cursor-pointer transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                  style={{ backgroundColor: p.featured ? p.color : "rgba(255,255,255,0.08)" }}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}