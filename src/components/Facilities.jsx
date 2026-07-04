export default function Facilities() {
  const imgs = [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBJAM4ML4OJ_LFDk3fZCapGSSnJRRjQ_L3QPKJq93-tNtYFB8luEq_LlliDaFXY1DBw6suDT4c6S-tm1PV0-KKSCE49He0k0Yq4oGlDfxf4PIOHwqb_4S6Qy0lay86TBljGE913ocyA_KWlIf8ao60ViRwjJLgT3adCxT_SXL0saN_aemQHhKhyaUyDgDlPu5rPimIpPYmS5x-YR49A3WVATugSOte4g7anrw5739s-PnaY11RA0X_Gxj6QcmGMw_jUZqRBOYpsg", label: "Cardio Area" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw-23ZiUbeYp2d6ZdQ_hIlbhUWV6WR-T-WOxHU1qnjuUaI1KPPVMtlh3NtD67Q5ECco7OuczMrU7rY9rv7TBMHW3z-SviH7lLURJumdZmR_JExNHHfVJFEr6kUzCwyb5vg6GvTuoKU9qxsLOkuq9CCALq3rAcfllQP8Ynbau99UuljW5W84UHCXpUJuCR95JYnANXt3kYlFIeT44heFggqxmaKC3Ee-ubg4y2i1UOzh3sHdiYt5ynpnL89zzXvw-60d6PQYKsanw", label: "Strength Training" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAIOn1igwtlFK4I-FtWy4Uh3qDlQll6myxbN1ClToj4Gf7ATlRLJ4Du1ui1uRkcTfkNNuxR0YIw1z_lpiIICBTljdSbrW3rBDq-Xobt92xmPOGfQgE0WpzrWY1huqqv1UiyJeRIfz0lwUoU4E5npvXPYbzn75oIxwmVKooZ3gQJIkiU4sTa3GdXFRIEHrV3ivft8RXM5sSMbWm93oUjxNqAORk1u1xz91CB9Mh1C7BUy2IycHBk5obRouh30Xy4X2TmKJIftoDdw", label: "Group Classes" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6iAQkLRDyueyWJGuAkBy-s80iHUgex5oXklagjFr_QNwckHjD9SQ1L-tkqfXSWa6S7bphkceirRWgdyhPeD22lzL3yQY1O2PdDvKo2QQbidVgpRrTXOvcp17Yqdxn5K8Q0vdsIF3M_ciTZSHpr-Ao4far9yeb76qy81bnKBFIkquenxapVyDOBPn7v1A7ApA1iL_xpOeJjWq5uVG-pyncSI89hZ-T3-xAsj9VDxQ7TXBfwDaD33UJ62GHKphpZdmMpqVebVlxAA", label: "Personal Training" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPxvalZgonw173xHpKImmw_8mf-OG1AMQj6aA8xbLb68S13pZVk06w5_u4wVf86XuVeuo8h-Du9afXMpNXuJMHyRBWMlCUPd8wHTuklbc7GLKZFME-1bPvjYE_fTfpsvyh5dIWaWblG4_GHtrxSDPHo-iQKjBsal46--daNHnaKQGTsABc_S3QYO9yOHK4yuDNaD4cZ29Xsj3mgKON2hUj-MOik3o03LF1-G0EgWvrcevVU75kyP7CJorWPIlPVdCIobK_-YfyuA", label: "Free Weights" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz7gFuVNNTITM3EMesSe8zYg-LgX6WeP4DBkK6XzRf8U4qUaUdJwtUeSzWmtEeqMqxdSWUMcYaKwgqIr3mnxWd4LINhNbdOiYiu-gpZdpOngVy4PoodqqKr3XUMfve3htECGdV5lO1cCzoetFXUpeYa7_lGhfE8yfeExa1B2RHFEp5Y8KghteiO-z9LO8qDpfywWH0quAYlMLXW8_qieTntWjHg8S2HsaEpa8nCiSkdX56ReNJtmX74PHggrGAiYrqlLa8mEVW7A", label: "Locker Rooms" },
  ];
  return (
    <section id="facilities" className="py-20 bg-[#0d0e0f] w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="text-center mb-14">
          <p className="font-inter text-xs text-[#E50914] tracking-widest uppercase mb-2.5 font-bold">Explore Our Space</p>
          <h2 className="font-montserrat font-extrabold text-[clamp(24px,4vw,36px)] text-white tracking-tight">
            WORLD-CLASS FACILITIES
          </h2>
          <div className="w-[60px] h-[3px] bg-[#E50914] mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          {imgs.map(img => (
            <div key={img.label} className="relative overflow-hidden aspect-[4/3] group gallery-item">
              <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08] gallery-img" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-5">
                <span className="font-montserrat font-bold text-base text-white uppercase tracking-wider">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
