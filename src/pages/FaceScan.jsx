import { useNavigate } from "react-router-dom";
import bg from "../assets/1st.jpg";
import logo from "../assets/logo.jpeg";

export default function FaceScan() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen relative flex flex-col items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* NAVBAR */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[40%] max-w-5xl px-6 py-3 flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_0_25px_rgba(0,0,0,0.4)] z-50">

        
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={logo}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-semibold text-white">
            Photo Ceremony
          </span>
        </div>

       
        <div className="flex items-center gap-4">

         
          <div className="flex items-center gap-2 text-sm text-red-400">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]"></span>
            LIVE
          </div>

          
          <div className="w-px h-6 bg-white/20"></div>

          
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition cursor-pointer">
            👤
          </div>

        </div>
      </div>

      
      <div className="relative z-10 flex flex-col items-center">

        <h1 className="text-4xl font-semibold mt-10">
          Identity Discovery
        </h1>

        <p className="text-gray-300 text-sm mb-10">
          Biometric authentication active
        </p>

        
        <div className="relative w-80 h-80 flex items-center justify-center">

          
          <div className="absolute w-full h-full rounded-2xl bg-cyan-400/10 blur-2xl"></div>

         
          <div className="relative w-64 h-64 rounded-2xl border border-cyan-400/30 bg-black/40 backdrop-blur flex items-center justify-center">

            
            <div className="absolute w-full h-full">

              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-lg"></div>

            </div>

            
            <div className="absolute flex gap-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            </div>

            
            <div className="absolute w-[70%] h-[70%] border border-cyan-400/20 border-dashed rounded-lg"></div>

          </div>

          
          <div className="absolute bottom-[-25px] px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs text-cyan-300 shadow-lg">
            Align your face to find your moments
          </div>

        </div>

        
        <button className="mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-105 transition duration-300 shadow-lg">
          Start Scan →
        </button>

      </div>
    </div>
  );
}