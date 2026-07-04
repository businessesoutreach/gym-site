"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Membership from "@/components/Membership";
import FAQ from "@/components/Faq";
import { Icon } from "@/components/Icons";

export default function MembershipPage() {
  const plans = [
    {
      tier: "Basic",
      price: "PKR 2,500",
      color: "#c8c6c5",
      featured: false,
      features: [
        "Gym Access (Standard Hours)",
        "Locker Room & Showers",
        "Free Fitness Assessment",
      ],
    },
    {
      tier: "Standard",
      price: "PKR 4,500",
      color: "#E50914",
      featured: true,
      badge: "Most Popular",
      features: [
        "Everything in Basic",
        "Group Classes Included",
        "Diet & Nutrition Guidance",
        "Monthly Progress Audit",
      ],
    },
    {
      tier: "Premium",
      price: "PKR 7,500",
      color: "#ebc23e",
      featured: false,
      features: [
        "Everything in Standard",
        "Personal Trainer (3x/week)",
        "Custom Nutrition Plan",
        "Priority Support 24/7",
        "Private Recovery Suite",
      ],
    },
  ];


  const faqs = [
    {
      q: "How do I cancel my membership?",
      a: "We believe in our results, but if you need to leave, we offer a 30-day notice period for all Elite and Pro plans. Base Camp plans are month-to-month with no long-term commitment.",
    },
    {
      q: "Are guest passes included?",
      a: "Titan Elite members receive 4 premium guest passes per month. Pro Performers can purchase guest passes at a 50% discount. All guests must be registered 24 hours in advance.",
    },
    {
      q: "What are the Recovery Suite hours?",
      a: "The Recovery Suite is available 24/7 for Titan Elite members. We recommend booking your Cryotherapy or Infrared Sauna session through the Titan app to ensure availability.",
    },
  ];

  return (
    <div className="bg-[#121414] text-[#e3e2e2] font-sans selection:bg-[#e50914] selection:text-[#fff7f6] overflow-x-hidden w-full">
      <Navbar brandName="TITAN" brandAccent="ELITE" />

      {/* Hero Banner */}
      <section className="relative min-h-screen pt-[68px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-top scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnQjjIDvADCP9Bj1jbi0DBYFaO0y7fuTND3B3A8Qnx_vXwQtFenY8kVpbvYTs6WfAlCF43AtzzK-mGfiagb6NPGtEY72V6TQ7YZqF9zswwarjNyokSKCePWBTaQatcOWNrl3A9Iv8FEVoPVCgk6hRzC6yjwcPBD957-0c18xeStUTwdWc4o3HiiuqUtaa3XrDeE6ASDeG2HegnWQ6d1oBc1u-8R6Xnf5m7MQ1hCoJEOGcvS-62f_tneVEqJ1kwrp_9tFJHLc7-4A')",
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
            Unlock Your Potential
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
              CHOOSE YOUR
            </span>
            LEGACY
          </h1>

          <div
            className="w-[60px] h-[3px] bg-[#E50914] mx-auto mb-6 opacity-0"
            style={{ animation: "heroRise 0.7s ease-out 0.55s forwards" }}
          />

          <p
            className="font-inter text-base md:text-lg text-[#a0a0a0] max-w-xl mx-auto leading-relaxed opacity-0"
            style={{ animation: "heroRise 0.8s ease-out 0.7s forwards" }}
          >
            Forge your path in an environment designed for the top 1%. Elite coaching, professional-grade technology, and a recovery suite that redefines luxury.
          </p>



          {/* Values ticker */}
          <div
            className="mt-12 flex items-center justify-center gap-3 flex-wrap opacity-0"
            style={{ animation: "heroRise 0.8s ease-out 0.9s forwards" }}
          >
            {["ELITE", "ACCESS", "PERFORMANCE", "RECOVERY"].map((word, i) => (
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
          @media (prefers-reduced-motion: reduce) {
            *[style*="animation"] { animation: none !important; opacity: 1 !important; }
          }
        `}</style>
      </section>

      {/* Pricing Tiers via Membership Component */}
      <div id="pricing">
        <Membership 
          eyebrow="Membership Tiers"
          title="PRECISION-ENGINEERED PLANS"
          subtitle="Precision-engineered plans for every stage of your performance journey."
          plans={plans}
        />
      </div>

      {/* FAQ Section via FAQ Component */}
      <FAQ 
        eyebrow="Common Questions"
        title="FREQUENTLY ASKED QUESTIONS"
        faqs={faqs} 
      />

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