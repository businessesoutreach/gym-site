import GlassCard from "./GlassCard";
import { Icon } from "./Icons";

export default function WhyUs() {
  const cards = [
    { icon: <Icon.Star />, title: "Certified Trainers", body: "Elite performance coaches with international certifications and decades of combined expertise." },
    { icon: <Icon.Dumbbell />, title: "Latest Equipment", body: "Premium biomechanical machines and Olympic-grade lifting platforms for maximum efficiency." },
    { icon: <Icon.Nutrition />, title: "Nutrition Guidance", body: "Personalized macro-tracking and supplement protocols to fuel your transformation journey." },
    { icon: <Icon.Calendar />, title: "Flexible Membership", body: "No-contract options and 24/7 access designed around your demanding lifestyle." },
  ];
  return (
    <section className="py-20 bg-[#121414] w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="text-center mb-14">
          <p className="font-inter text-xs text-[#E50914] tracking-widest uppercase mb-2.5 font-bold">Why Choose Us</p>
          <h2 className="font-montserrat font-extrabold text-[clamp(24px,4vw,36px)] text-white tracking-tight mb-4">
            THE TITAN STANDARD
          </h2>
          <div className="w-[60px] h-[3px] bg-[#E50914] mx-auto" />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          {cards.map(c => (
            <GlassCard key={c.title} className="p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#E50914]/40! feature-card">
              <div className="text-[#E50914] mb-5 flex">{c.icon}</div>
              <h3 className="font-montserrat font-bold text-lg text-white mb-2.5">{c.title}</h3>
              <p className="font-inter text-sm text-[#a0a0a0] leading-relaxed">{c.body}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
