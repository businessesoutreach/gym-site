"use client";
import Contact from "@/components/Contact";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import Membership from "@/components/Membership";
import Navbar from "@/components/Navbar";
import Founder from "@/components/Founder";
import { Icon } from "@/components/Icons";
import HowItWorks from "@/components/HowItWorks";
import BmiCalculator from "@/components/BmiCalculator";
import WhyUs from "@/components/WhyUs";
import Facilities from "@/components/Facilities";
import Trainers from "@/components/Trainers";

import Link from "next/link";

// Hero Section 
function Hero() {
  const badges = [
    { icon: <Icon.Users />, label: "500+ Active Members" },
    { icon: <Icon.Trophy />, label: "10+ Years Experience" },
    { icon: <Icon.Star />, label: "Certified Trainers" },
    { icon: <Icon.Dumbbell />, label: "Modern Equipment" },
    { icon: <Icon.Clock />, label: "24/7 Support" },
  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0c0e0e] via-[#0c0e0e]/55 to-[#0c0e0e]/75" />
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_yyv4Y_EsJ6HwZoy-X_OxHlNwzTOm590IlWIHF6yGIiITXW0KzAJxl1-yqzpxSV1J7Uh-O5WYLg_I3thaER2QXXLXWmsbLHuvEF96jzWX8KUKrQo3GTszZZm7FlmA2e4XBNexJBJp4aBRCE1obgDf3Wyd2g5umfo6kAv0qVXEksQ1TvZGcQRKRE921ei0kzaDeos8W1xK6XAyqpulESesfrkWPIQ-AvLHjkTvTS8WtD9n6Z6r37bUbYuLuByyNfMEZUAmz6MtfQ"
          alt="Titan Elite gym"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 text-center px-6 md:px-8 lg:px-12 pt-24 pb-14 max-w-7xl mx-auto w-full flex flex-col items-center">
        <div className="inline-block bg-[#E50914]/15 border border-[#E50914]/40 text-[#ffb4aa] px-4.5 py-1.5 font-inter text-xs tracking-widest uppercase mb-6">
          Premier Fitness Club
        </div>
        <h1 className="font-montserrat font-black text-[clamp(36px,6vw,64px)] leading-none tracking-tight text-white mb-5 max-w-4xl">
          TRANSFORM YOUR BODY.<br />
          <span className="text-[#E50914]">TRANSFORM YOUR LIFE.</span>
        </h1>
        <p className="font-inter text-base md:text-lg text-[#c8c6c5] leading-relaxed max-w-2xl mb-9">
          Experience elite coaching and world-class facilities designed for high-performance athletes and those who demand nothing but the best.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap mb-14">
          <Link href="/membership" className="no-underline">
            <button className="bg-[#E50914] text-white border-none px-7 py-3.5 font-montserrat font-bold text-xs md:text-sm tracking-wider uppercase cursor-pointer hover:brightness-110 transition-all duration-200">
              View Plans
            </button>
          </Link>
          <button onClick={() => window.open("https://wa.me/923001234567", "_blank")} className="bg-[#25D366]/10 text-[#25D366] border border-[#25D366] px-7 py-3.5 font-montserrat font-semibold text-xs md:text-sm tracking-wider cursor-pointer flex items-center gap-2 hover:bg-[#25D366]/20 transition-colors duration-200">
            <Icon.Chat /> Get Quote
          </button>
        </div>
        {/* Trust badges */}
        <div className="flex gap-3 justify-center flex-wrap">
          {badges.map(b => (
            <div key={b.label} className="bg-white/6 border border-white/10 backdrop-blur-md px-4.5 py-2.5 flex items-center gap-2 text-white">
              <span className="text-[#E50914] flex">{b.icon}</span>
              <span className="font-inter text-xs md:text-sm font-semibold">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-40 animate-bounce">
        <Icon.ArrowDown />
      </div>
    </section>
  );
}



// ── Class Schedule ─────────────────────────────────────────────────────────────
function Schedule() {
  const classes = [
    { name: "HIIT", time: "6:00 AM", days: "Mon / Wed / Fri", trainer: "Julian Vance", color: "#E50914" },
    { name: "Yoga", time: "7:30 AM", days: "Tue / Thu / Sat", trainer: "Elena Rodriguez", color: "#9b59b6" },
    { name: "CrossFit", time: "9:00 AM", days: "Mon / Wed / Fri", trainer: "Marcus Thorne", color: "#e67e22" },
    { name: "Boxing", time: "5:00 PM", days: "Tue / Thu", trainer: "Julian Vance", color: "#e74c3c" },
    { name: "Strength Training", time: "6:30 PM", days: "Mon / Wed / Fri / Sat", trainer: "Marcus Thorne", color: "#ebc23e" },
    { name: "Zumba", time: "8:00 AM", days: "Sat / Sun", trainer: "Elena Rodriguez", color: "#1abc9c" },
  ];
  return (
    <section className="py-20 bg-[#121414] w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="text-center mb-14">
          <p className="font-inter text-xs text-[#E50914] tracking-widest uppercase mb-2.5 font-bold">Stay Active</p>
          <h2 className="font-montserrat font-extrabold text-[clamp(24px,4vw,36px)] text-white tracking-tight">
            WEEKLY CLASS SCHEDULE
          </h2>
          <div className="w-[60px] h-[3px] bg-[#E50914] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3.5">
          {classes.map(c => (
            <GlassCard key={c.name} className="px-6 py-5 flex items-center gap-4 transition-all duration-300 hover:border-[#E50914]/30! feature-card">
              <div className="w-1 h-15 shrink-0 rounded-sm" style={{ backgroundColor: c.color }} />
              <div className="flex-1">
                <div className="font-montserrat font-bold text-base text-white mb-1">{c.name}</div>
                <div className="font-inter text-xs font-semibold mb-1" style={{ color: c.color }}>{c.time} · {c.days}</div>
                <div className="font-inter text-xs text-[#a0a0a0]">with {c.trainer}</div>
              </div>
              <button className="bg-white/6 border-none text-white px-3.5 py-1.5 font-inter text-xs cursor-pointer whitespace-nowrap hover:bg-white/12 transition-colors">Book</button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Success Stories ────────────────────────────────────────────────────────────
function Stories() {
  const stories = [
    { name: "Raza Khan", lost: "18 kg", time: "4 months", quote: "I couldn't believe what Titan's program did for me. The trainers were relentless in the best way possible." },
    { name: "Ayesha Malik", lost: "12 kg", time: "3 months", quote: "From zero to confident. The nutrition guidance combined with training completely changed my lifestyle." },
    { name: "Usman Ali", lost: "22 kg", time: "6 months", quote: "Best investment of my life. The Premium plan is worth every rupee — I have my life back." },
  ];
  return (
    <section className="py-20 bg-[#0d0e0f] w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="text-center mb-14">
          <p className="font-inter text-xs text-[#E50914] tracking-widest uppercase mb-2.5 font-bold">Real Results</p>
          <h2 className="font-montserrat font-extrabold text-[clamp(24px,4vw,36px)] text-white tracking-tight">
            SUCCESS STORIES
          </h2>
          <div className="w-[60px] h-[3px] bg-[#E50914] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {stories.map(s => (
            <GlassCard key={s.name} className="overflow-hidden flex flex-col">
              <div className="grid grid-cols-2 h-[200px]">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] flex flex-col items-center justify-center gap-1.5">
                  <span className="font-inter text-[10px] text-[#666] tracking-wider uppercase font-bold">Before</span>
                  <div className="w-14 h-14 rounded-full bg-[#333]" />
                </div>
                <div className="bg-gradient-to-br from-[#1f0a0a] to-[#3d1010] flex flex-col items-center justify-center gap-1.5">
                  <span className="font-inter text-[10px] text-[#E50914] tracking-wider uppercase font-bold">After</span>
                  <div className="w-14 h-14 rounded-full bg-[#E50914]/30" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-4 mb-3.5">
                  <div className="text-center">
                    <div className="font-montserrat font-extrabold text-2xl text-[#E50914]">{s.lost}</div>
                    <div className="font-inter text-[11px] text-[#a0a0a0] uppercase tracking-wider">Lost</div>
                  </div>
                  <div className="w-px bg-white/8" />
                  <div className="text-center">
                    <div className="font-montserrat font-extrabold text-2xl text-[#ebc23e]">{s.time}</div>
                    <div className="font-inter text-[11px] text-[#a0a0a0] uppercase tracking-wider">Duration</div>
                  </div>
                </div>
                <h4 className="font-montserrat font-bold text-base text-white mb-2">{s.name}</h4>
                <p className="font-inter text-sm text-[#a0a0a0] leading-relaxed italic">"{s.quote}"</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ───────────────────────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    { name: "Marcus Thorne", role: "CEO, TechCore", quote: "Titan Elite isn't just a gym — it's a lifestyle upgrade. The trainers understand the schedule of a high-performance executive and deliver results that speak for themselves.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPxvalZgonw173xHpKImmw_8mf-OG1AMQj6aA8xbLb68S13pZVk06w5_u4wVf86XuVeuo8h-Du9afXMpNXuJMHyRBWMlCUPd8wHTuklbc7GLKZFME-1bPvjYE_fTfpsvyh5dIWaWblG4_GHtrxSDPHo-iQKjBsal46--daNHnaKQGTsABc_S3QYO9yOHK4yuDNaD4cZ29Xsj3mgKON2hUj-MOik3o03LF1-G0EgWvrcevVU75kyP7CJorWPIlPVdCIobK_-YfyuA" },
    { name: "Elena Rodriguez", role: "Professional Athlete", quote: "The facilities are unmatched. From the biomechanically perfect equipment to the recovery suite, everything here is designed to keep me at the top of my game.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz7gFuVNNTITM3EMesSe8zYg-LgX6WeP4DBkK6XzRf8U4qUaUdJwtUeSzWmtEeqMqxdSWUMcYaKwgqIr3mnxWd4LINhNbdOiYiu-gpZdpOngVy4PoodqqKr3XUMfve3htECGdV5lO1cCzoetFXUpeYa7_lGhfE8yfeExa1B2RHFEp5Y8KghteiO-z9LO8qDpfywWH0quAYlMLXW8_qieTntWjHg8S2HsaEpa8nCiSkdX56ReNJtmX74PHggrGAiYrqlLa8mEVW7A" },
    { name: "Julian Vance", role: "Entrepreneur", quote: "The community at Titan is what keeps me coming back. You're surrounded by people who are just as hungry for progress as you are. It's absolutely contagious.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMkfTdMRohXZau-GmYr1lr2UUP1UaUbPK9Fvkk8ml2rpWjykxMHeGw_JtCCiGXMmr5t0y9eVVrI29d3PsTVR-9oR50LnNpUEf0Ukts2a-Jhv8dRpdTIksUVB_I8Z8bqF870ZmJVoImWL8TluJRyLTXLeEpzbHUcFyKXh_LeqqBPL25_B9r_FA0aCbWbwIiYpFiAg8ZuLhVcbylER7dL8MNuzfoebA5OWsm9tuwAl210MbQsLTtUf8BJSenl99FFo9Gh4OS_oxbxQ" },
  ];
  return (
    <section className="py-20 bg-[#121414] w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="text-center mb-14">
          <p className="font-inter text-xs text-[#E50914] tracking-widest uppercase mb-2.5 font-bold">Member Reviews</p>
          <h2 className="font-montserrat font-extrabold text-[clamp(24px,4vw,36px)] text-white tracking-tight">
            TITAN STORIES
          </h2>
          <div className="w-[60px] h-[3px] bg-[#E50914] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {reviews.map(r => (
            <GlassCard key={r.name} className="p-7">
              <div className="text-[#ebc23e] text-xl tracking-wider mb-4">★★★★★</div>
              <p className="font-inter text-sm text-[#c8c6c5] leading-relaxed italic mb-6">"{r.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="w-11 h-11 rounded-full object-cover border-2 border-[#E50914]" />
                <div>
                  <div className="font-montserrat font-bold text-sm text-white">{r.name}</div>
                  <div className="font-inter text-[11px] text-[#ebc23e] tracking-wider uppercase font-semibold">{r.role}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ──────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="relative py-20 overflow-hidden text-center w-full flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkw-8wSXieso-VOJPpYKDf8UZG5OfVPYiQjCTkCmGF_IUQXv22DdzByGsFTpoc4v6tKcDaODmcU4DCbPkfXMmK-w98Nd17iZneA8w6KF_qRPe8W05Znsp40V1Ba4YTjXylIHfzruf2YiP2J1cnEWNKbGLYHQDw0IkSQ1daL6XbYik7ARVFeTb43oS7LpbpjVqwRqqP6gjkhBTRpDf6mOsXkwOYnslnpj40O_feLf7jgvlSl0qVz8PJf4ZjNYKfZrx1hLH4shreFQ"
          alt="CTA background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#E50914]/82" />
      </div>
      <div className="relative z-10 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="font-montserrat font-black text-[clamp(28px,5vw,48px)] text-white leading-tight mb-4">
          READY TO TRANSFORM<br />YOUR BODY?
        </h2>
        <p className="font-inter text-base text-white/90 max-w-lg mb-9 leading-relaxed">
          Join hundreds of members who already chose to invest in themselves. Book your free trial today — no commitment required.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <button onClick={() => window.open("https://wa.me/923001234567", "_blank")} className="bg-transparent border-2 border-white text-white px-7 py-3.5 font-montserrat font-semibold text-sm tracking-wider cursor-pointer flex items-center gap-2 hover:bg-white/10 transition-colors">
            <Icon.Chat /> Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function TitanGymHomepage() {
  return (
    <div className="bg-[#121414] text-[#e3e2e2] overflow-x-hidden w-full">
      <Navbar
        brandName="TITAN"
        brandAccent="ELITE"
      />
      <Hero />
      <WhyUs />
      <Founder/>
      <HowItWorks />
      <BmiCalculator />
      <Facilities />
      <Membership
        eyebrow="Choose Your Plan"
        title="ELITE ACCESS PLANS"
        subtitle="Invest in your greatest asset — select the tier that matches your ambition."
        plans={[
          { tier: "Basic", price: "PKR 2,500", features: ["Gym Access (Standard Hours)", "Locker Room & Showers", "Free Fitness Assessment"], color: "#c8c6c5", featured: false },
          { tier: "Standard", price: "PKR 4,500", features: ["Everything in Basic", "Group Classes Included", "Diet & Nutrition Guidance", "Monthly Progress Audit"], color: "#E50914", featured: true },
          { tier: "Premium", price: "PKR 7,500", features: ["Everything in Standard", "Personal Trainer (3x/week)", "Custom Nutrition Plan", "Priority Support 24/7", "Private Recovery Suite"], color: "#ebc23e", featured: false },
        ]}
      />
      <Trainers />
      <Schedule />
      <Stories />
      <Testimonials />
      <FAQ
        eyebrow="Common Questions"
        title="FREQUENTLY ASKED"
        faqs={[
          { q: "What are your membership fees?", a: "We offer three tiers: Basic at PKR 2,500/month, Standard at PKR 4,500/month, and Premium at PKR 7,500/month. Each plan includes different levels of access and services to suit your fitness goals and budget." },
          { q: "Do you offer personal training?", a: "Yes! Our Premium plan includes 3 personal training sessions per week with a certified coach. Standalone personal training packages are also available from PKR 1,500 per session." },
          { q: "Is parking available?", a: "Yes, we have a dedicated parking area with capacity for 50+ vehicles. Parking is complimentary for all members." },
          { q: "What are your opening hours?", a: "Our gym is open Monday to Friday from 5:00 AM to 11:00 PM, and Saturday to Sunday from 6:00 AM to 10:00 PM. Premium members enjoy 24/7 access." },
          { q: "Do you have female trainers?", a: "Absolutely. We have a dedicated female training staff and a ladies-only workout zone available during specific hours. All our female trainers are internationally certified." },
        ]}
      />
      <Contact
        eyebrow="Get In Touch"
        title="CONTACT US"
        info={[
          { icon: <Icon.Phone />, label: "Phone", value: "+92 300 1234567" },
          { icon: <Icon.Chat />, label: "WhatsApp", value: "+92 300 1234567" },
          { icon: <Icon.Mail />, label: "Email", value: "info@titanelite.pk" },
          { icon: <Icon.Location />, label: "Address", value: "D-Ground, Faisalabad, Punjab" },
          { icon: <Icon.Clock />, label: "Hours", value: "Mon–Fri: 5AM–11PM · Sat–Sun: 6AM–10PM" },
        ]}
        mapAddress="D-Ground, Faisalabad, Pakistan"
        mapEmbedUrl="https://maps.google.com/maps?q=31.4272638,73.1165593&hl=en&z=14&output=embed"
        onPrimaryCtaClick={() => window.location.href = "mailto:info@titanelite.pk"}
        onWhatsappClick={() => window.open("https://wa.me/923001234567", "_blank")}
        onMapClick={() => window.open("https://maps.google.com/?q=31.4272638,73.1165593", "_blank")}
      />
      <FinalCTA />
      <Footer
        brandName="TITAN"
        brandAccent="ELITE"
        tagline="Faisalabad's premier fitness destination — where ordinary people achieve extraordinary results."
        contactItems={[
          { icon: <Icon.Phone />, t: "+92 300 1234567" },
          { icon: <Icon.Mail />, t: "info@titanelite.pk" },
          { icon: <Icon.Location />, t: "D-Ground, Faisalabad" },
        ]}
        hours={[
          { day: "Monday – Friday", time: "5:00 AM – 11:00 PM" },
          { day: "Saturday", time: "6:00 AM – 10:00 PM" },
          { day: "Sunday", time: "6:00 AM – 10:00 PM" },
          { day: "Premium Members", time: "24 / 7 Access" },
        ]}
        year={2026}
      />
    </div>
  );
}