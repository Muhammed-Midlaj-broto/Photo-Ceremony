import { useState } from "react";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar size */}
      <div className="absolute top-5 left-0 w-full px-6 py-4 flex items-center justify-between bg-white/10 backdrop-blur-xl border-b border-white/10 z-50">

        {/* logo */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-10 h-10 rounded-full object-cover" />
          <span className="font-semibold">Photo Ceremony</span>
        </div>

        

        {/* buttons */}
        <div className="hidden md:flex items-center gap-4 text-base text-gray-300">

        <div className="hidden md:flex items-center gap-2 text-sm text-red-400">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          LIVE
        </div>
        <span className="px-4 py-2 rounded-full hover:bg-white/10 hover:scale-105 cursor-pointer transition">
            Gallery
        </span>

        <span className="px-4 py-2 rounded-full hover:bg-white/10 hover:scale-105 cursor-pointer transition">
            Live Feed
        </span>

        <span className="px-4 py-2 rounded-full hover:bg-white/10 hover:scale-105 cursor-pointer transition">
            Studio
        </span>

 
        <div className="w-px h-6 bg-white/20 mx-2"></div>

  {/* signup thing */}
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition cursor-pointer">
            👤
        </div>    

        </div>
        {/* 3 line thing */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </div>
      </div>

      {/* 3 line thing dropdown */}
      <div
        className={`absolute top-16 right-4 w-48 transition-all duration-300 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        } bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex flex-col gap-4 text-sm z-50`}
      >
        <span className="cursor-pointer hover:text-white">Gallery</span>
        <span className="cursor-pointer hover:text-white">Live Feed</span>
        <span className="cursor-pointer hover:text-white">Studio</span>

        {/* LIVE in mobile */}
        <div className="flex items-center gap-2 text-red-400 mt-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          LIVE
        </div>
      </div>
    </>
  );
}