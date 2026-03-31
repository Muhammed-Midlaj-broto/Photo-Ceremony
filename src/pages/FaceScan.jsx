import { useNavigate } from "react-router-dom";
import bg from "../assets/1st.jpg";
import Navbar from "../components/Navbar";

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
      {/* BACKGROUND OVERLAY */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* 🔥 NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        <h1 className="text-4xl font-semibold mt-10">
          Identity Discovery
        </h1>

        <p className="text-gray-300 text-sm mb-10">
          Biometric authentication active
        </p>

        {/* SCAN AREA */}
        <div className="relative w-80 h-80 flex items-center justify-center">

          {/* Glow */}
          <div className="absolute w-full h-full rounded-full bg-cyan-400/10 blur-3xl"></div>

          {/* Rings */}
          <div className="absolute w-full h-full rounded-full border border-cyan-400/20"></div>
          <div className="absolute w-[90%] h-[90%] rounded-full border border-cyan-400/30"></div>
          <div className="absolute w-[75%] h-[75%] rounded-full border border-cyan-400/40"></div>
          <div className="absolute w-[60%] h-[60%] rounded-full border border-cyan-400/50"></div>

          {/* INNER CIRCLE */}
          <div className="relative w-56 h-56 rounded-full overflow-hidden bg-black/40 backdrop-blur border border-white/10 flex items-center justify-center">

            {/* Scanner square */}
            <div className="absolute w-40 h-40">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>
            </div>

            {/* Top dots */}
            <div className="absolute top-3 flex gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
            </div>

          </div>

          {/* Message */}
          <div className="absolute bottom-[-20px] px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs text-cyan-300 shadow-lg">
            Align your face to find your moments
          </div>

        </div>

        {/* BUTTON */}
        <button className="mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-105 transition duration-300 shadow-lg">
          Start Scan →
        </button>

      </div>
    </div>
  );
}