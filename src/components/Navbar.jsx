"use client"
import { useState } from "react";
import { Icon } from "./Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({
  brandName = "TITAN",
  brandAccent = "ELITE",
  accentColor = "#E50914",
  whatsappColor = "#25D366",
  whatsappLabel = "WhatsApp",
  ctaLabel = "Join Now",
  logoIcon,
}) {
  const router = useRouter();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Facilities", href: "/facilities" },
    { label: "Membership", href: "/membership" },
    { label: "Contact", href: "/contact-us" }
  ];

  const onCtaClick = () => {
    router.push("/membership");
  };

  const onWhatsappClick = () => {
    window.open("https://wa.me/923001234567", "_blank");
  };
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0e0e]/92 backdrop-blur-md border-b border-white/6">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div 
            className="w-9 h-9 flex items-center justify-center text-white" 
            style={{ backgroundColor: accentColor }}
          >
            {logoIcon || <Icon.Dumbbell />}
          </div>
          <span className="font-montserrat font-extrabold text-xl text-white tracking-tight">
            {brandName}<span style={{ color: accentColor }}>{brandAccent}</span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <Link
              key={l.label}
              href={l.href}
              className="font-inter text-sm text-[#c8c6c5] hover:text-white uppercase tracking-wider font-medium transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex gap-2.5 items-center">
          <button
            onClick={onWhatsappClick}
            className="bg-transparent border border-[#25D366] text-[#25D366] px-4 py-2 font-inter text-xs font-semibold cursor-pointer flex items-center gap-1.5 tracking-wider hover:bg-[#25D366]/10 transition-colors duration-200"
            style={{ borderColor: whatsappColor, color: whatsappColor }}
          >
            <Icon.Chat /> {whatsappLabel}
          </button>
          <button
            onClick={onCtaClick}
            className="border-none text-white px-5 py-2 font-montserrat text-xs font-bold cursor-pointer tracking-wider uppercase hover:brightness-110 transition-all duration-200"
            style={{ backgroundColor: accentColor }}
          >
            {ctaLabel}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-none border-none text-white cursor-pointer p-1 flex md:hidden"
        >
          {open ? <Icon.Close /> : <Icon.Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="bg-[#0d0e0f] border-t border-white/6 px-6 py-4 md:hidden">
          {navLinks.map(l => (
            <Link 
              key={l.label} 
              href={l.href} 
              onClick={() => setOpen(false)} 
              className="block color-[#c8c6c5] hover:text-white font-inter text-base py-2.5 border-b border-white/4 tracking-wider uppercase"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2.5 mt-4">
            <button 
              onClick={onWhatsappClick} 
              className="flex-1 bg-transparent px-2.5 py-2.5 font-inter text-xs cursor-pointer border hover:bg-[#25D366]/10 transition-colors duration-200"
              style={{ borderColor: whatsappColor, color: whatsappColor }}
            >
              {whatsappLabel}
            </button>
            <button 
              onClick={onCtaClick} 
              className="flex-1 border-none text-white px-2.5 py-2.5 font-montserrat text-xs font-bold cursor-pointer tracking-wider uppercase hover:brightness-110 transition-all duration-200"
              style={{ backgroundColor: accentColor }}
            >
              {ctaLabel.toUpperCase()}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}