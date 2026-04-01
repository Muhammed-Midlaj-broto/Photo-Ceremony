import Navbar from "../components/Navbar";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Studio() {

  const images = [
    { src: "/images/9.jpeg", title: "The Alphas", subtitle: "Signature Collection, 2020" },
    { src: "/images/8.jpg", title: "Celestial Frame", subtitle: "Aurora Series" },
    { src: "/images/7.jpg", title: "Midnight Glow", subtitle: "Darkroom Edition" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2500);{/* scroll time */}

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="min-h-screen relative text-white overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[#020617]" />

        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] 
        bg-purple-600/40 blur-[160px] rounded-full" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] 
        bg-blue-500/40 blur-[160px] rounded-full" />

        <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl" />
      </div>

      <Navbar />

      
      <div className="pt-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        
        <div>

          <span className="text-xs tracking-widest text-cyan-400">
            PREMIUM STUDIO
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
            Midnight
            <br />
            Aurora
          </h1>

          <p className="text-white/60 text-sm mt-4 max-w-md leading-relaxed">
            Pioneering the “Celestial Darkroom” aesthetic. We don’t just capture
            photos; we architect light and atmosphere to immortalize the soul of
            every ceremony.
          </p>

          {/* cards */}
          <div className="flex gap-4 mt-6">

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 w-40">
              <h3 className="text-sm font-semibold mb-1">
                Celestial Lighting
              </h3>
              <p className="text-xs text-white/60">
                Atmospheric light sculpting.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 w-40">
              <h3 className="text-sm font-semibold mb-1">
                Biometric Curation
              </h3>
              <p className="text-xs text-white/60">
                AI-driven emotional focus.
              </p>
            </div>

          </div>

          
          <div className="flex gap-8 mt-8">

            <div>
              <h3 className="text-lg font-semibold">500+</h3>
              <p className="text-xs text-white/60">Ceremonies</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-pink-400">1M+</h3>
              <p className="text-xs text-white/60">Memories Captured</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">100%</h3>
              <p className="text-xs text-white/60">Elite Rating</p>
            </div>

          </div>

          
          <div className="flex gap-4 mt-8">

             <button className="px-5 py-2 rounded-full bg-white text-black font-medium 
                transition-all duration-300 
                hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] 
                hover:bg-gray-200">
                    Book Consultation
            </button>


            <button className="px-5 py-2 rounded-full 
            bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium 
            transition-all duration-300 
            hover:scale-105 
            hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] 
            hover:brightness-110">
             Visit our shop
            </button>

          </div>

        </div>

        {/* carousel */}
        <div className="relative">

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">

              {images.map((img, index) => (
                <div className="min-w-full px-1" key={index}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">

                    <img
                      src={img.src}
                      className="w-full h-[500px] object-cover"
                    />

                    {/* labels */}
                    <div className="absolute bottom-6 left-6 
                    bg-black/50 backdrop-blur-xl border border-white/20 
                    px-4 py-2 rounded-full text-sm">

                      <p className="text-white font-medium">
                        {img.title}
                      </p>
                      <span className="text-xs text-cyan-400">
                        {img.subtitle}
                      </span>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}