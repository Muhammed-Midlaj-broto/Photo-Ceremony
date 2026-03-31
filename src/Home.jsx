import bg from "./assets/1st.jpg";
import logo from "./assets/logo.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [mode, setMode] = useState("code");
  const navigate = useNavigate(); // 🔥 important

  return (
    <div
      className="h-screen w-full flex items-center justify-center relative text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 w-[380px] p-6 text-center rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

        <div className="text-xs text-gray-300 mb-2">● LIVE</div>

        <div className="w-16 h-16 mx-auto mb-4 rounded-xl">
          <img src={logo} className="w-full h-full object-cover" />
        </div>

        <h1 className="text-2xl font-semibold">Photo Ceremony</h1>

        <p className="text-sm text-gray-300 mb-4">
          Capture moments. Share memories Instantly.
        </p>

        <p className="text-xs text-gray-300 mb-5">
          CHOOSE ACCESS METHOD
        </p>

        <div className="flex justify-center items-center gap-10 mb-6">
          
          <div onClick={() => setMode("code")} className="cursor-pointer text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              {"</>"}
            </div>
            <span className="text-xs">Enter Code</span>
          </div>

          <div className="w-px h-10 bg-white/20"></div>

          <div onClick={() => setMode("qr")} className="cursor-pointer text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              QR
            </div>
            <span className="text-xs">Scan QR</span>
          </div>
        </div>

        {mode === "code" && (
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(6)].map((_, i) => (
              <input key={i} maxLength={1} className="w-10 h-12 text-center rounded-md bg-white/10 border border-white/20" />
            ))}
          </div>
        )}

        {/* 🔥 NAVIGATION BUTTON */}
        <button
          onClick={() => navigate("/scan")}
          className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-105 transition duration-300"
        >
          {mode === "code" ? "Join Album →" : "Open Camera →"}
        </button>

        <p className="text-xs text-gray-400 mt-4">
          Secure album access, managed by your photographer.
        </p>
      </div>

      
    </div>
  );
}