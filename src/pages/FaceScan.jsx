import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import bg from "../assets/1st.jpg";
import logo from "../assets/logo.jpeg";

export default function FaceScan() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access denied:", err);
      }
    }

    startCamera();

    return () => {
      // Stop camera when leaving page
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div
      className="min-h-screen relative text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[85%] md:w-[70%] lg:w-[55%] max-w-6xl px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg z-50">
        
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            alt="logo"
          />
          <span className="font-semibold text-white text-sm sm:text-base">
            Photo Ceremony
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-red-400">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="hidden sm:inline">Live</span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-white/20"></div>

          <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition cursor-pointer">
            👤
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">

        <h1 className="text-3xl sm:text-4xl font-semibold">
          Identity Discovery
        </h1>

        <p className="text-gray-300 text-sm mb-10">
          Biometric authentication active
        </p>

        
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">

          {/* Glow */}
          <div className="absolute w-full h-full rounded-2xl bg-cyan-400/10 blur-2xl"></div>

          {/* camera container */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-cyan-400/30 bg-black/40 backdrop-blur flex items-center justify-center">

            {/* video */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="absolute w-full h-full object-cover"
            />

            {/* corners */}
            <div className="absolute w-full h-full pointer-events-none">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>
            </div>

            {/* CENTER DOTS */}
            <div className="flex gap-3 z-10">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>

            {/* border */}
            <div className="absolute w-[70%] h-[70%] border border-cyan-400/20 border-dashed rounded-lg"></div>
          </div>

          
          <div className="absolute bottom-[-25px] px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs text-cyan-300">
            Align your face to find your moments
          </div>
        </div>

        
        <button className="mt-12 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-105 transition duration-300">
          Start Scan →
        </button>

      </div>
    </div>
  );
}