import { Icon } from "./Icons";

// ── Reusable Contact Section ──────────────────────────────────────────────────────
// Usage:
// <Contact
//   eyebrow="Get In Touch"
//   title="CONTACT US"
//   accentColor="#E50914"
//   info={[
//     { icon: <Icon.Phone />, label: "Phone", value: "+1 555 0100" },
//     { icon: <Icon.Mail />, label: "Email", value: "hello@example.com" },
//   ]}
//   mapAddress="123 Main St, City"
//   onPrimaryCtaClick={() => {}}
//   onWhatsappClick={() => {}}
//   onMapClick={() => {}}
// />
export default function Contact({
  eyebrow = "Get In Touch",
  title = "CONTACT US",
  accentColor = "#E50914",
  background = "#121414",
  info = [
    { icon: <Icon.Phone />, label: "Phone", value: "+1 555 0100" },
    { icon: <Icon.Chat />, label: "WhatsApp", value: "+1 555 0100" },
    { icon: <Icon.Mail />, label: "Email", value: "hello@example.com" },
    { icon: <Icon.Location />, label: "Address", value: "123 Main St" },
    { icon: <Icon.Clock />, label: "Hours", value: "Mon–Fri: 9AM–5PM" },
  ],
  primaryCtaLabel = "Contact Us",
  whatsappLabel = "WhatsApp",
  onPrimaryCtaClick,
  onWhatsappClick,
  showMap = true,
  mapAddress = "",
  mapLabel = "Google Map Preview",
  mapCtaLabel = "Open in Maps",
  onMapClick,
  mapEmbedUrl,
}) {
  return (
    <section className="py-20 w-full" style={{ background }}>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-inter text-xs tracking-widest uppercase mb-2.5 font-bold" style={{ color: accentColor }}>{eyebrow}</p>
          <h2 className="font-montserrat font-extrabold text-[clamp(24px,4vw,36px)] text-white tracking-tight">
            {title}
          </h2>
          <div className="w-[60px] h-[3px] mx-auto mt-4" style={{ backgroundColor: accentColor }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex flex-col gap-5 mb-8">
              {info.map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0" style={{ color: accentColor }}>{item.icon}</div>
                  <div>
                    <div className="font-inter text-[11px] text-[#666] uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="font-inter text-sm text-[#e3e2e2]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button 
                onClick={onPrimaryCtaClick} 
                className="flex-1 text-white border-none py-3.5 font-montserrat font-bold text-xs tracking-wider uppercase cursor-pointer transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: accentColor }}
              >
                {primaryCtaLabel}
              </button>
              <button 
                onClick={onWhatsappClick} 
                className="flex-1 bg-transparent border border-[#25D366] text-[#25D366] py-3.5 font-inter text-xs cursor-pointer flex items-center justify-center gap-1.5 transition-all duration-200 hover:bg-[#25D366]/10"
              >
                <Icon.Chat /> {whatsappLabel}
              </button>
            </div>
          </div>
          {showMap && (
            <div className="bg-white/3 border border-white/8 min-h-[320px] flex flex-col items-center justify-center rounded-xl overflow-hidden relative w-full h-full">
              {mapEmbedUrl ? (
                <iframe 
                  src={mapEmbedUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: "320px" }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 p-6 w-full h-full">
                  <div style={{ color: accentColor }}><Icon.Location /></div>
                  <p className="font-inter text-sm text-[#666] text-center">
                    {mapLabel}<br />
                    {mapAddress && <span className="text-xs text-[#444]">{mapAddress}</span>}
                  </p>
                  <button 
                    onClick={onMapClick} 
                    className="bg-[#E50914]/10 border border-[#E50914]/30 py-2 px-5 font-inter text-xs cursor-pointer hover:bg-[#E50914]/20 transition-all duration-200"
                    style={{ color: accentColor }}
                  >
                    {mapCtaLabel}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}