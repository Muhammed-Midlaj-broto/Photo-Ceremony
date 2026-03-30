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
      {/* 🔥 DARK OVERLAY (same as home) */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* 🔥 NAVBAR */}
      <div className="absolute top-6 w-full flex justify-center z-20">
        <div className="flex items-center gap-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">

          {/* ✅ SAME LOGO */}
          <div className="flex items-center gap-2 text-sm font-medium">
            <img src={logo} className="w-6 h-6 rounded-full object-cover" />
            <span className="text-white">PHOTO CEREMONY</span>
          </div>

          {/* Live */}
          <div className="flex items-center gap-1 text-xs text-red-400">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            LIVE
          </div>

          {/* 🔥 MENU (NO ACTIVE COLOR, ONLY HOVER) */}
          <div className="flex items-center gap-4 text-sm text-gray-300">

            <span className="cursor-pointer hover:text-white hover:scale-105 transition">
              Gallery
            </span>

            <span className="cursor-pointer hover:text-white hover:scale-105 transition">
              Live Feed
            </span>

            <span className="cursor-pointer hover:text-white hover:scale-105 transition">
              Studio
            </span>

          </div>

          {/* Profile */}
          <div className="w-6 h-6 rounded-full bg-white/20"></div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        {/* TITLE */}
        <h1 className="text-4xl font-semibold mt-10">
          Identity Discovery
        </h1>

        <p className="text-gray-300 text-sm mb-10">
          Biometric authentication active
        </p>

        {/* 🔵 SCAN AREA */}
        <div className="relative w-80 h-80 flex items-center justify-center">

          {/* Glow */}
          <div className="absolute w-full h-full rounded-full bg-white/10 blur-3xl"></div>

          {/* Rings (soft white instead of blue) */}
          <div className="absolute w-full h-full rounded-full border border-white/20 "></div>
          <div className="absolute w-[90%] h-[90%] rounded-full border border-white/30 "></div>
          <div className="absolute w-[75%] h-[75%] rounded-full border border-white/40"></div>
          <div className="absolute w-[70%] h-[70%] rounded-full border border-white/40"></div>
          <div className="absolute w-[80%] h-[80%] rounded-full border border-white/38"></div>
          <div className="absolute w-[85%] h-[85%] rounded-full border border-white/36"></div>
          <div className="absolute w-[95%] h-[95%] rounded-full border border-white/34"></div>
          <div className="absolute w-[100%] h-[100%] rounded-full border border-white/28"></div>

          {/* INNER EMPTY CIRCLE */}
          <div className="w-56 h-56 rounded-full border border-white/20 bg-black/40 backdrop-blur flex items-center justify-center relative">

            {/* Scanner frame */}
            <div className="relative w-40 h-40">

              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white"></div>

            </div>

            {/* Scan line */}
            <div className="absolute w-full h-full overflow-hidden rounded-full">
              <div className="w-full h-1 bg-white/70 animate-[scan_2s_linear_infinite]"></div>
            </div>

          </div>
        </div>

        {/* TEXT */}
        <p className="text-xs text-gray-400 mt-8">
          Align your face to find your moments
        </p>

        {/* BUTTON (same style as home) */}
        <button className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-105 transition duration-300 shadow-lg">
          Start Scan →
        </button>

      </div>
      <div className="absolute bottom-4 text-xs text-gray-400">
        © 2026 Photo Ceremony
      </div>
    </div>
  );
}