"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Facilities from "@/components/Facilities";
import { Icon } from "@/components/Icons";

export default function FacilitiesPage() {
  return (
    <div className="bg-[#121414] text-[#e3e2e2] overflow-x-hidden w-full">
      <Navbar brandName="TITAN" brandAccent="ELITE" />

      {/* Hero Banner */}
      <section className="relative min-h-screen pt-[68px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-top scale-105"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAw-23ZiUbeYp2d6ZdQ_hIlbhUWV6WR-T-WOxHU1qnjuUaI1KPPVMtlh3NtD67Q5ECco7OuczMrU7rY9rv7TBMHW3z-SviH7lLURJumdZmR_JExNHHfVJFEr6kUzCwyb5vg6GvTuoKU9qxsLOkuq9CCALq3rAcfllQP8Ynbau99UuljW5W84UHCXpUJuCR95JYnANXt3kYlFIeT44heFggqxmaKC3Ee-ubg4y2i1UOzh3sHdiYt5ynpnL89zzXvw-60d6PQYKsanw')",
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
            Explore Our Space
          </p>
          <h1 
            className="font-montserrat font-black text-white uppercase tracking-tight leading-[0.9] mb-5 opacity-0" 
            style={{ 
              fontSize: "clamp(32px,5vw,60px)", 
              textShadow: "0 0 40px rgba(229,9,20,0.3)",
              animation: "heroRise 0.9s ease-out 0.35s forwards"
            }}
          >
            <span className="block font-normal text-[#a0a0a0]" style={{ fontSize: "0.4em", letterSpacing: "0.15em" }}>
              ELITE
            </span>
            FACILITIES
          </h1>
          <div 
            className="w-[60px] h-[3px] bg-[#E50914] mx-auto mb-6 opacity-0" 
            style={{ animation: "heroRise 0.7s ease-out 0.55s forwards" }}
          />
          <p 
            className="font-inter text-base md:text-lg text-[#a0a0a0] max-w-xl mx-auto leading-relaxed opacity-0"
            style={{ animation: "heroRise 0.8s ease-out 0.7s forwards" }}
          >
            State-of-the-art equipment and specialized zones designed for elite performance.
          </p>
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

      {/* Shared Facilities Component */}
      <Facilities />

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
