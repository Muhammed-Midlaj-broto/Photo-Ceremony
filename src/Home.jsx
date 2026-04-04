import bg from "./assets/1st.jpg";
import logo from "./assets/logo.jpeg";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { QrCode } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  const [code, setCode] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const videoRef = useRef(null);

  // 🎥 Start camera
  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      alert("Camera access denied ❌");
    }
  };

  // ❌ Stop camera
  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-center text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Card */}
      <div className="relative z-10 w-[380px] p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl">

        {/* Logo */}
        <div className="w-20 h-20 mx-auto mb-5 rounded-2xl overflow-hidden border border-white/20">
          <img src={logo} className="w-full h-full object-cover" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Photo Ceremony
        </h1>

        <p className="text-sm text-gray-400 text-center mt-2 mb-6">
          Your digital lens for the moments that matter.
        </p>

        {/* Label */}
        <p className="text-[10px] tracking-widest text-cyan-400 mb-2">
          ENTER EVENT CODE
        </p>

        {/* Input */}
        <div className="relative mb-6">

          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder="e.g. CELESTIAL-2024"
            className="w-full px-5 py-4 rounded-full bg-black/50 border border-white/10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 pr-12"
          />

          {/* 🔥 QR Dialog */}
          <Dialog
            open={open}
            onOpenChange={(val) => {
              setOpen(val);
              if (!val) stopCamera();
              else setTimeout(openCamera, 200);
            }}
          >
            <DialogTrigger asChild>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 cursor-pointer hover:scale-110 transition">
                <QrCode size={18} />
              </div>
            </DialogTrigger>

            {/* ✅ ShadCN Styled Modal */}
            <DialogContent className="sm:max-w-sm bg-black/90 border border-white/20 text-white">

              <DialogHeader>
                <DialogTitle className="text-center">
                  Scan QR Code
                </DialogTitle>
              </DialogHeader>

              {/* Scanner Box */}
              <div className="relative w-full h-64 mt-4">

                {/* Camera */}
                <video
                  ref={videoRef}
                  autoPlay
                  className="w-full h-full object-cover rounded-xl"
                />

                {/* Border */}
                <div className="absolute inset-0 border-2 border-cyan-400 rounded-xl"></div>

                {/* Corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-cyan-400"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-cyan-400"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-cyan-400"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-cyan-400"></div>

              </div>

              {/* Helper text */}
              <p className="text-center text-xs text-white/60 mt-4">
                Align QR within frame to scan
              </p>

            </DialogContent>
          </Dialog>

        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/scan")}
          className="w-full py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-medium hover:scale-105 transition duration-300"
        >
          Join Ceremony →
        </button>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <div className="border-t border-white/10 pt-4">
            <p className="mb-2 tracking-widest text-[10px]">
              AUTHORIZED ENTRY ONLY
            </p>

            <div className="flex justify-center gap-6 text-gray-400">
              <span className="cursor-pointer hover:text-white">
                Support
              </span>
              <span className="cursor-pointer hover:text-white">
                Privacy
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}