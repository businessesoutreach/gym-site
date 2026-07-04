import { Icon } from "./Icons";

// ── Reusable Footer ──────────────────────────────────────────────────────────────
// Usage:
// <Footer
//   brandName="TITAN" brandAccent="ELITE"
//   tagline="Faisalabad's premier fitness destination..."
//   accentColor="#E50914"
//   quickLinks={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about-us" }]}
//   contactItems={[{ icon: <Icon.Phone/>, t: "+92 300 1234567" }]}
//   hours={[{ day: "Monday – Friday", time: "5:00 AM – 11:00 PM" }]}
//   socials={["FB", "IG", "YT", "TW"]}
//   year={2026}
// />
export default function Footer({
  brandName = "TITAN",
  brandAccent = "ELITE",
  tagline = "",
  accentColor = "#E50914",
  logoIcon,
  quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Facilities", href: "/facilities" },
    { label: "Membership", href: "/membership" },
    { label: "Contact", href: "/contact-us" },
  ],
  contactItems = [
    { icon: <Icon.Phone />, t: "+92 300 1234567" },
    { icon: <Icon.Mail />, t: "info@example.com" },
    { icon: <Icon.Location />, t: "Address line" },
  ],
  hours = [
    { day: "Monday – Friday", time: "5:00 AM – 11:00 PM" },
    { day: "Saturday", time: "6:00 AM – 10:00 PM" },
    { day: "Sunday", time: "6:00 AM – 10:00 PM" },
  ],
  socials = ["FB", "IG", "YT", "TW"],
  companyName,
  year = new Date().getFullYear(),
}) {
  const socialIcons = { FB: <Icon.FB />, IG: <Icon.IG />, YT: <Icon.YT />, TW: <Icon.TW /> };
  const fullName = companyName || `${brandName}${brandAccent}`;

  return (
    <footer className="bg-[#080909] border-t border-white/6 py-16 pb-7 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div 
                className="w-8 h-8 flex items-center justify-center text-white" 
                style={{ backgroundColor: accentColor }}
              >
                {logoIcon || <Icon.Dumbbell />}
              </div>
              <span className="font-montserrat font-extrabold text-lg text-white">
                {brandName}<span style={{ color: accentColor }}>{brandAccent}</span>
              </span>
            </div>
            {tagline && (
              <p className="font-inter text-xs text-[#666] leading-relaxed mb-5">
                {tagline}
              </p>
            )}
            <div className="flex gap-2.5">
              {socials.map(s => (
                <a 
                  key={s} 
                  href="#" 
                  aria-label={s} 
                  className="w-[34px] h-[34px] bg-white/5 border border-white/8 flex items-center justify-center text-[#a0a0a0] transition-colors duration-200"
                  style={{ 
                    "--hover-color": accentColor,
                    "--hover-border": `${accentColor}66`
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = "var(--hover-color)";
                    e.currentTarget.style.borderColor = "var(--hover-border)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = "#a0a0a0";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  {socialIcons[s]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-montserrat font-bold text-xs text-white tracking-wider uppercase mb-5">Quick Links</h4>
            {quickLinks.map(link => {
              const label = typeof link === "string" ? link : link.label;
              const href = typeof link === "string" ? "#" : link.href;
              return (
                <a 
                  key={label} 
                  href={href} 
                  className="block font-inter text-xs text-[#666] mb-2.5 transition-colors duration-200"
                  style={{ "--hover-color": accentColor }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--hover-color)"}
                  onMouseLeave={e => e.currentTarget.style.color = "#666"}
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-bold text-xs text-white tracking-wider uppercase mb-5">Contact</h4>
            {contactItems.map(item => (
              <div key={item.t} className="flex items-start gap-2.5 mb-3">
                <span className="shrink-0 mt-0.5" style={{ color: accentColor }}>{item.icon}</span>
                <span className="font-inter text-xs text-[#666]">{item.t}</span>
              </div>
            ))}
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-montserrat font-bold text-xs text-white tracking-wider uppercase mb-5">Opening Hours</h4>
            {hours.map(h => (
              <div key={h.day} className="mb-2.5">
                <div className="font-inter text-[11px] text-[#a0a0a0]">{h.day}</div>
                <div className="font-inter text-xs text-[#e3e2e2]">{h.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/6 pt-6 flex justify-between flex-wrap gap-3">
          <span className="font-inter text-xs text-[#444]">© {year} {fullName}. All rights reserved.</span>
          <span className="font-inter text-xs text-[#444]">Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}