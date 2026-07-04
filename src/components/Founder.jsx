export default function Founder() {
  return (
    <section className="py-24 bg-[#0d0e0f] w-full relative overflow-hidden">
      {/* subtle decorative accent */}
      <div 
        className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] rounded-full z-0" 
        style={{ background: "radial-gradient(circle, rgba(229,9,20,0.08) 0%, transparent 70%)" }} 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full relative z-10">
        <div className="text-center mb-16">
          <p className="font-inter text-xs text-[#E50914] tracking-widest uppercase mb-2.5 font-bold">
            The Person Behind The Mission
          </p>
          <h2 className="font-montserrat font-extrabold text-[clamp(24px,4vw,36px)] text-white tracking-tight">
            MEET OUR FOUNDER
          </h2>
          <div className="w-[60px] h-[3px] bg-[#E50914] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,420px)_1fr] gap-14 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 right-4 bottom-4 border border-[#E50914]/40 z-0" />
            <div className="relative z-10 aspect-[4/5] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPxvalZgonw173xHpKImmw_8mf-OG1AMQj6aA8xbLb68S13pZVk06w5_u4wVf86XuVeuo8h-Du9afXMpNXuJMHyRBWMlCUPd8wHTuklbc7GLKZFME-1bPvjYE_fTfpsvyh5dIWaWblG4_GHtrxSDPHo-iQKjBsal46--daNHnaKQGTsABc_S3QYO9yOHK4yuDNaD4cZ29Xsj3mgKON2hUj-MOik3o03LF1-G0EgWvrcevVU75kyP7CJorWPIlPVdCIobK_-YfyuA"
                alt="Founder & CEO, Titan Elite"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
              <div className="absolute bottom-5 left-5 bg-[#0c0e0e]/85 backdrop-blur-sm border border-white/10 p-3 md:p-4.5">
                <div className="font-montserrat font-bold text-base text-white">
                  Daniyal Ahmed
                </div>
                <div className="font-inter text-xs text-[#E50914] tracking-widest uppercase mt-1">
                  Founder & CEO
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="text-[#E50914] text-5xl font-serif leading-[0.6] mb-3">
              "
            </div>
            <p className="font-montserrat font-semibold text-[clamp(20px,2.4vw,26px)] text-white leading-normal mb-7">
              I didn't build Titan Elite to be just another gym. I built it to be a
              place where ordinary people discover they're capable of extraordinary things.
            </p>

            <p className="font-inter text-sm md:text-base text-[#a0a0a0] leading-relaxed mb-5">
              After more than a decade competing at a national level and coaching elite athletes
              across the region, I saw the same gap everywhere I went: gyms built for machines,
              not for people. Titan Elite was founded on a simple belief — that world-class
              facilities, expert coaching, and genuine community shouldn't be a luxury reserved
              for the few.
            </p>
            <p className="font-inter text-sm md:text-base text-[#a0a0a0] leading-relaxed mb-9">
              Today, Titan Elite stands as Faisalabad's premier fitness destination — but our
              mission hasn't changed since day one: transform bodies, transform mindsets, and
              build a community that pushes each other toward their full potential.
            </p>

            <div className="flex gap-10 flex-wrap mb-9">
              <div>
                <div className="font-montserrat font-black text-3xl text-[#E50914]">10+</div>
                <div className="font-inter text-xs text-[#a0a0a0] uppercase tracking-wider">Years Building Titan</div>
              </div>
              <div>
                <div className="font-montserrat font-black text-3xl text-[#ebc23e]">1000+</div>
                <div className="font-inter text-xs text-[#a0a0a0] uppercase tracking-wider">Lives Transformed</div>
              </div>
            </div>

            <div
              className="text-3xl text-white/85 border-t border-white/12 pt-4 inline-block"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Daniyal Ahmed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}