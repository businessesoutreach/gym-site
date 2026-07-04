"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUs";
import Founder from "@/components/Founder";
import Trainers from "@/components/Trainers";
import FAQ from "@/components/Faq";
import GlassCard from "@/components/GlassCard";
import { Icon } from "@/components/Icons";

export default function AboutPage() {
  return (
    <div className="bg-[#121414] text-[#e3e2e2] overflow-x-hidden w-full">
      <Navbar brandName="TITAN" brandAccent="ELITE" />

      {/* Hero Banner */}
      <section className="relative min-h-screen pt-[68px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-top scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_Lp8JGq845QuxZxGXIec2MvqxepsItrQIIHzKankhmf6oFR0t5wH1YLGhOSdXs4nb33iDSrqL-xR9yi0uyWTiqVvVFhtCJS4ESb7BNFzsiV6279DYxUldjonFUXbW7mTt4TLuU-YnSptKolCU5uqLcf0wdf8y_WangBUqXs1bCgi_zyiwYVOFeyhKmyPSP20RsBz0fzc5jmw1F3Jgt9BRS_3biGV4Wy7RvtVLvTfYTjGlgzY_uxeL-bj1bqOZUwIZ0s7IrZokAA')",
              filter: "grayscale(1) contrast(1.25)",
              animation: "heroZoom 20s ease-out forwards",
            }}
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-transparent to-transparent" />
        </div>



        <div className="relative z-10 text-center px-6 md:px-8 lg:px-12 max-w-7xl mx-auto w-full">
          <p
            className="font-inter text-xs text-[#E50914] tracking-[0.3em] uppercase mb-3 font-bold opacity-0"
            style={{ animation: "heroRise 0.8s ease-out 0.15s forwards" }}
          >
            Forging Excellence Since 2014
          </p>

          <h1
            className="font-montserrat font-black text-white uppercase tracking-tight leading-[0.9] mb-5 opacity-0"
            style={{
              fontSize: "clamp(32px,5vw,60px)",
              textShadow: "0 0 40px rgba(229,9,20,0.3)",
              animation: "heroRise 0.9s ease-out 0.35s forwards",
            }}
          >
            <span className="block font-normal text-[#a0a0a0]" style={{ fontSize: "0.4em", letterSpacing: "0.15em" }}>
              THIS IS
            </span>
            OUR STORY
          </h1>

          <div
            className="w-[60px] h-[3px] bg-[#E50914] mx-auto mb-6 opacity-0"
            style={{ animation: "heroRise 0.7s ease-out 0.55s forwards" }}
          />

          <p
            className="font-inter text-base md:text-lg text-[#a0a0a0] max-w-xl mx-auto leading-relaxed opacity-0"
            style={{ animation: "heroRise 0.8s ease-out 0.7s forwards" }}
          >
            Built for the dedicated. Designed for the extraordinary.
          </p>

          {/* Values ticker */}
          <div
            className="mt-12 flex items-center justify-center gap-3 flex-wrap opacity-0"
            style={{ animation: "heroRise 0.8s ease-out 0.9s forwards" }}
          >
            {["STRENGTH", "DISCIPLINE", "POWER", "LEGACY"].map((word, i) => (
              <span key={word} className="flex items-center gap-3">
                <span className="font-inter text-[10px] text-[#6b6b6b] tracking-[0.25em] uppercase">
                  {word}
                </span>
                {i < 3 && <span className="w-1 h-1 rounded-full bg-[#E50914]" />}
              </span>
            ))}
          </div>
        </div>



        <style>{`
          @keyframes heroRise {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes heroZoom {
            from { transform: scale(1.05); }
            to { transform: scale(1); }
          }
          @keyframes scrollLine {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(140%); }
          }
          @media (prefers-reduced-motion: reduce) {
            *[style*="animation"] { animation: none !important; opacity: 1 !important; }
          }
        `}</style>
      </section>

      {/* Mission & Story */}
      <section className="py-24 w-full bg-[#121414]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="font-inter text-xs text-[#E50914] tracking-widest uppercase mb-3 font-bold">Who We Are</p>
              <h2 className="font-montserrat font-black text-white tracking-tight leading-tight mb-6" style={{ fontSize: "clamp(24px,4vw,42px)" }}>
                REDEFINING <span className="text-[#E50914]">FITNESS</span><br />EXCELLENCE
              </h2>
              <div className="w-[60px] h-[3px] bg-[#E50914] mb-8" />
              <p className="font-inter text-sm md:text-base text-[#a0a0a0] leading-relaxed mb-5">
                At TITAN ELITE, we believe that fitness is more than just a workout — it is a pursuit of peak human potential. Our mission is to provide an uncompromising environment where the dedicated can transcend their limits through elite coaching, world-class equipment, and a culture of relentless progress.
              </p>
              <p className="font-inter text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                Our vision is to be the regional benchmark for performance-driven fitness, fostering a community of titans who redefine what it means to be fit, healthy, and high-performing in every aspect of life.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "Years of Excellence", color: "#E50914" },
                { value: "1000+", label: "Lives Transformed", color: "#ebc23e" },
                { value: "15+", label: "Certified Coaches", color: "#E50914" },
                { value: "5★", label: "Member Rating", color: "#ebc23e" },
              ].map((stat) => (
                <GlassCard key={stat.label} className="p-6 text-center">
                  <div className="font-montserrat font-black text-3xl mb-1" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="font-inter text-xs text-[#a0a0a0] uppercase tracking-wider">{stat.label}</div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyUs />

      {/* Founder / CEO */}
      <Founder />

      {/* Elite Coaching Staff */}
      <Trainers eyebrow="The Team" title="ELITE COACHING STAFF" background="#121414" />

      {/* FAQ */}
      <FAQ
        eyebrow="Common Questions"
        title="FREQUENTLY ASKED"
        background="#0d0e0f"
        maxWidth={900}
        faqs={[
          { q: "What are your membership fees?", a: "We offer three tiers: Basic at PKR 2,500/month, Standard at PKR 4,500/month, and Premium at PKR 7,500/month. Each plan includes different levels of access and services." },
          { q: "Do you offer personal training?", a: "Yes! Our Premium plan includes 3 personal training sessions per week. Standalone packages are also available from PKR 1,500 per session." },
          { q: "Is parking available?", a: "Yes, we have a dedicated parking area with capacity for 50+ vehicles. Parking is complimentary for all members." },
          { q: "What are your opening hours?", a: "Monday-Friday: 5:00 AM-11:00 PM. Saturday-Sunday: 6:00 AM-10:00 PM. Premium members enjoy 24/7 access." },
          { q: "Do you have female trainers?", a: "Absolutely. We have a dedicated female training staff and a ladies-only workout zone. All our female trainers are internationally certified." },
        ]}
      />

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden text-center w-full flex items-center justify-center bg-[#0d0e0f]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-10 pointer-events-none" style={{ background: "#E50914" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full flex flex-col items-center">
          <p className="font-inter text-xs text-[#E50914] tracking-widest uppercase mb-3 font-bold">Take the First Step</p>
          <h2 className="font-montserrat font-black text-white uppercase tracking-tight leading-none mb-4" style={{ fontSize: "clamp(28px,5vw,52px)" }}>
            START YOUR STORY<br /><span className="text-[#E50914]">WITH US</span>
          </h2>
          <p className="font-inter text-sm md:text-base text-[#a0a0a0] max-w-lg mb-9 leading-relaxed">
            Ready to claim your place among the elite? Message our team to schedule your free assessment — no commitment required.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="https://wa.me/923001234567" target="_blank" className="inline-flex items-center gap-2.5 bg-[#25D366] text-white px-8 py-4 font-montserrat font-bold text-sm tracking-wider uppercase hover:brightness-110 transition-all duration-200">
              <Icon.Chat /> WhatsApp Concierge
            </a>
            <a href="/membership" className="inline-flex items-center gap-2.5 bg-transparent border-2 border-[#E50914] text-white px-8 py-4 font-montserrat font-bold text-sm tracking-wider uppercase hover:bg-[#E50914]/10 transition-all duration-200">
              View Memberships
            </a>
          </div>
        </div>
      </section>

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
          { day: "Monday - Friday", time: "5:00 AM - 11:00 PM" },
          { day: "Saturday", time: "6:00 AM - 10:00 PM" },
          { day: "Sunday", time: "6:00 AM - 10:00 PM" },
          { day: "Premium Members", time: "24 / 7 Access" },
        ]}
        year={2026}
      />
    </div>
  );
}