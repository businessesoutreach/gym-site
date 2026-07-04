import GlassCard from "./GlassCard";

// ── Reusable Trainers Section ─────────────────────────────────────────────────
// Usage:
// <Trainers
//   eyebrow="Expert Coaches"
//   title="MEET OUR TRAINERS"
//   accentColor="#E50914"
//   background="#0d0e0f"
//   trainers={[
//     { name: "...", role: "...", exp: "...", bio: "...", avatar: "..." },
//   ]}
// />
export default function Trainers({
  eyebrow = "Expert Coaches",
  title = "MEET OUR TRAINERS",
  accentColor = "#E50914",
  background = "#0d0e0f",
  trainers = [
    {
      name: "Marcus Thorne",
      role: "Strength & Conditioning",
      exp: "12 Years Experience",
      bio: "Former national powerlifting champion specializing in progressive overload and elite strength programming.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPxvalZgonw173xHpKImmw_8mf-OG1AMQj6aA8xbLb68S13pZVk06w5_u4wVf86XuVeuo8h-Du9afXMpNXuJMHyRBWMlCUPd8wHTuklbc7GLKZFME-1bPvjYE_fTfpsvyh5dIWaWblG4_GHtrxSDPHo-iQKjBsal46--daNHnaKQGTsABc_S3QYO9yOHK4yuDNaD4cZ29Xsj3mgKON2hUj-MOik3o03LF1-G0EgWvrcevVU75kyP7CJorWPIlPVdCIobK_-YfyuA",
    },
    {
      name: "Elena Rodriguez",
      role: "Functional Training & Yoga",
      exp: "9 Years Experience",
      bio: "Certified yoga instructor and functional movement specialist helping athletes recover smarter and move better.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz7gFuVNNTITM3EMesSe8zYg-LgX6WeP4DBkK6XzRf8U4qUaUdJwtUeSzWmtEeqMqxdSWUMcYaKwgqIr3mnxWd4LINhNbdOiYiu-gpZdpOngVy4PoodqqKr3XUMfve3htECGdV5lO1cCzoetFXUpeYa7_lGhfE8yfeExa1B2RHFEp5Y8KghteiO-z9LO8qDpfywWH0quAYlMLXW8_qieTntWjHg8S2HsaEpa8nCiSkdX56ReNJtmX74PHggrGAiYrqlLa8mEVW7A",
    },
    {
      name: "Julian Vance",
      role: "HIIT & Boxing Coach",
      exp: "7 Years Experience",
      bio: "High-intensity performance coach blending combat sports conditioning with metabolic training for rapid results.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMkfTdMRohXZau-GmYr1lr2UUP1UaUbPK9Fvkk8ml2rpWjykxMHeGw_JtCCiGXMmr5t0y9eVVrI29d3PsTVR-9oR50LnNpUEf0Ukts2a-Jhv8dRpdTIksUVB_I8Z8bqF870ZmJVoImWL8TluJRyLTXLeEpzbHUcFyKXh_LeqqBPL25_B9r_FA0aCbWbwIiYpFiAg8ZuLhVcbylER7dL8MNuzfoebA5OWsm9tuwAl210MbQsLTtUf8BJSenl99FFo9Gh4OS_oxbxQ",
    },
  ],
}) {
  return (
    <section className="py-20 w-full" style={{ background }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="text-center mb-14">
          <p
            className="font-inter text-xs tracking-widest uppercase mb-2.5 font-bold"
            style={{ color: accentColor }}
          >
            {eyebrow}
          </p>
          <h2 className="font-montserrat font-extrabold text-[clamp(24px,4vw,36px)] text-white tracking-tight">
            {title}
          </h2>
          <div
            className="w-[60px] h-[3px] mx-auto mt-4"
            style={{ backgroundColor: accentColor }}
          />
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {trainers.map((t) => (
            <GlassCard key={t.name} className="overflow-hidden group feature-card">
              <div className="h-[260px] overflow-hidden">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div
                  className="inline-block px-2.5 py-1 font-inter text-[11px] font-semibold tracking-wider uppercase mb-3"
                  style={{
                    backgroundColor: `${accentColor}1f`,
                    color: accentColor,
                  }}
                >
                  {t.exp}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-white mb-1">{t.name}</h3>
                <p className="font-inter text-xs text-[#ebc23e] font-semibold tracking-wider mb-3">{t.role}</p>
                <p className="font-inter text-sm text-[#a0a0a0] leading-relaxed">{t.bio}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
