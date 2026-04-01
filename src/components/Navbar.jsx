import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl px-6 py-3 flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg z-50">

        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            className="w-10 h-10 rounded-full object-cover"
            alt="logo"
          />
          <span className="font-semibold text-white">Photo Ceremony</span>
        </div>

        
        <div className="hidden md:flex items-center gap-4 text-base text-gray-300">

          
          <div className="flex items-center gap-2 text-sm text-red-400">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            LIVE
          </div>

          <span
            onClick={() => navigate("/live")}
            className="px-4 py-2 rounded-full hover:bg-white/10 hover:scale-105 cursor-pointer transition"
          >
            Live Feed
          </span>

          <span
            onClick={() => navigate("/gallery")}
            className="px-4 py-2 rounded-full hover:bg-white/10 hover:scale-105 cursor-pointer transition"
          >
            Gallery
          </span>

          <span
            onClick={() => navigate("/studio")}
            className="px-4 py-2 rounded-full hover:bg-white/10 hover:scale-105 cursor-pointer transition"
          >
            Studio
          </span>

          <div className="w-px h-6 bg-white/20 mx-2"></div>

          
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition cursor-pointer">
            👤
          </div>
        </div>

        {/* responsive */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </div>
      </div>

      
      <div
        className={`fixed top-20 right-4 w-48 transition-all duration-300 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        } bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex flex-col gap-4 text-sm z-50`}
      >
        <span
          onClick={() => {
            navigate("/live");
            setOpen(false);
          }}
          className="cursor-pointer hover:text-white"
        >
          Live Feed
        </span>

        <span
          onClick={() => {
            navigate("/gallery");
            setOpen(false);
          }}
          className="cursor-pointer hover:text-white"
        >
          Gallery
        </span>

        <span
          onClick={() => {
            navigate("/studio");
            setOpen(false);
          }}
          className="cursor-pointer hover:text-white"
        >
          Studio
        </span>

        <div className="flex items-center gap-2 text-red-400 mt-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          LIVE
        </div>
      </div>
    </>
  );
}