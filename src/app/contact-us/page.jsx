"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FAQ from "@/components/Faq";
import { Icon } from "@/components/Icons";

export default function ContactPage() {
  const faqs = [
    { q: "What are your membership fees?", a: "We offer three tiers: Basic at PKR 2,500/month, Standard at PKR 4,500/month, and Premium at PKR 7,500/month. Each plan includes different levels of access and services." },
    { q: "Do you offer personal training?", a: "Yes! Our Premium plan includes 3 personal training sessions per week. Standalone packages are also available from PKR 1,500 per session." },
    { q: "Is parking available?", a: "Yes, we have a dedicated parking area with capacity for 50+ vehicles. Parking is complimentary for all members." },
    { q: "What are your opening hours?", a: "Monday-Friday: 5:00 AM-11:00 PM. Saturday-Sunday: 6:00 AM-10:00 PM. Premium members enjoy 24/7 access." },
    { q: "Do you have female trainers?", a: "Absolutely. We have a dedicated female training staff and a ladies-only workout zone. All our female trainers are internationally certified." },
  ];

  return (
    <div className="bg-[#121414] text-[#e3e2e2] font-sans selection:bg-[#e50914] selection:text-[#fff7f6] overflow-x-hidden w-full">
      <Navbar brandName="TITAN" brandAccent="ELITE" />

      {/* Hero Banner */}
      <section className="relative min-h-screen pt-[68px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-top"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_Lp8JGq845QuxZxGXIec2MvqxepsItrQIIHzKankhmf6oFR0t5wH1YLGhOSdXs4nb33iDSrqL-xR9yi0uyWTiqVvVFhtCJS4ESb7BNFzsiV6279DYxUldjonFUXbW7mTt4TLuU-YnSptKolCU5uqLcf0wdf8y_WangBUqXs1bCgi_zyiwYVOFeyhKmyPSP20RsBz0fzc5jmw1F3Jgt9BRS_3biGV4Wy7RvtVLvTfYTjGlgzY_uxeL-bj1bqOZUwIZ0s7IrZokAA')", filter: "grayscale(1) contrast(1.25)" }}
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-transparent to-transparent" />
        </div>
        


        <div className="relative z-10 text-center px-6 md:px-8 lg:px-12 max-w-7xl mx-auto w-full">
          <p className="font-inter text-xs text-[#E50914] tracking-[0.3em] uppercase mb-3 font-bold opacity-0" style={{ animation: "heroRise 0.8s ease-out 0.15s forwards" }}>We Are Here For You</p>
          <h1 className="font-montserrat font-black text-white uppercase tracking-tight leading-none mb-5 opacity-0" style={{ fontSize: "clamp(32px,5vw,60px)", textShadow: "0 0 40px rgba(229,9,20,0.3)", animation: "heroRise 0.9s ease-out 0.35s forwards" }}>
            CONTACT US
          </h1>
          <div className="w-[60px] h-[3px] bg-[#E50914] mx-auto mb-6 opacity-0" style={{ animation: "heroRise 0.7s ease-out 0.55s forwards" }} />
          <p className="font-inter text-base md:text-lg text-[#a0a0a0] max-w-xl mx-auto leading-relaxed opacity-0" style={{ animation: "heroRise 0.8s ease-out 0.7s forwards" }}>
            Have a question or ready to join? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <Contact 
        eyebrow="Reach Out"
        title="LET'S CONNECT"
        info={[
          { icon: <Icon.Phone />, label: "Phone", value: "+92 300 1234567" },
          { icon: <Icon.Chat />, label: "WhatsApp", value: "+92 300 1234567" },
          { icon: <Icon.Mail />, label: "Email", value: "info@titanelite.pk" },
          { icon: <Icon.Location />, label: "Address", value: "D-Ground, Faisalabad" },
          { icon: <Icon.Clock />, label: "Hours", value: "Mon–Fri: 5AM–11PM" },
        ]}
        mapAddress="D-Ground, Faisalabad, Pakistan"
        onPrimaryCtaClick={() => window.location.href = "mailto:info@titanelite.pk"}
        onWhatsappClick={() => window.open("https://wa.me/923001234567", "_blank")}
        onMapClick={() => window.open("https://maps.google.com/?q=31.4272638,73.1165593", "_blank")}
        mapEmbedUrl="https://maps.google.com/maps?q=31.4272638,73.1165593&hl=en&z=14&output=embed"
      />

      {/* FAQ Section */}
      <FAQ
        eyebrow="Common Questions"
        title="FREQUENTLY ASKED"
        background="#0d0e0f"
        maxWidth={900}
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
      <style>{`
        @keyframes heroRise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          *[style*="animation"] { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
    </div>
  );
}
