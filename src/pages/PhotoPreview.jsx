import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Heart, Flame, Share2, Info, Download } from "lucide-react";

export default function PhotoPreview() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative text-white overflow-hidden">

      
      <div className="absolute inset-0 -z-10 pointer-events-none">

        
        <div className="absolute inset-0 bg-[#020617]" />

        
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] 
        bg-purple-600/40 blur-[160px] rounded-full" />

       
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] 
        bg-blue-500/40 blur-[160px] rounded-full" />

        
        <div className="absolute inset-0 bg-black/30 backdrop-blur-2xl" />

      </div>

      
      <div className="relative z-10">

        
        <Navbar />

        
        <div className="pt-28 px-4 flex flex-col items-center">

          {/* CARD */}
          <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden">

            
            <img
              src="/images/2.webp"
              className="w-full h-[65vh] md:h-[75vh] object-cover rounded-3xl shadow-2xl"
              alt=""
            />

            
            <div className="absolute bottom-0 left-0 w-full p-6 
            bg-gradient-to-t from-black/90 via-black/40 to-transparent">

              <div className="relative">

               
                <div>
                  <h2 className="text-lg md:text-xl font-semibold">
                    First Pic ✨
                  </h2>
                  <p className="text-xs text-gray-300">
                    Uploaded by Midlaj · 01:01 PM
                  </p>
                </div>

                
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 
                items-center gap-7
                bg-black/40 backdrop-blur-xl border border-white/20 
                px-5 py-2 rounded-full shadow-lg">

                  <button className="hover:scale-110 transition">
                    <Heart size={18} className="text-red-500" />
                  </button>

                  <button className="hover:scale-110 transition">
                    <Flame size={18} className="text-orange-400" />
                  </button>

                  <button className="hover:scale-110 transition">
                    <Share2 size={18} />
                  </button>

                  <button className="hover:scale-110 transition">
                    <Info size={18} />
                  </button>

                  <button className="w-9 h-9 flex items-center justify-center 
                  rounded-full bg-cyan-400 text-black hover:bg-cyan-300 transition">
                    <Download size={18} />
                  </button>

                </div>

              </div>
            </div>

          </div>

          {/* responsive */}
          <div className="md:hidden flex justify-center mt-6">

            <div className="flex items-center gap-5 
            bg-black/40 backdrop-blur-xl border border-white/20 
            px-6 py-3 rounded-full shadow-lg">

              <Heart size={20} className="text-red-500" />
              <Flame size={20} className="text-orange-400" />
              <Share2 size={20} />
              <Info size={20} />

              <div className="w-10 h-10 flex items-center justify-center 
              rounded-full bg-cyan-400 text-black">
                <Download size={18} />
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}