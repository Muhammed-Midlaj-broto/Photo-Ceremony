export default function Footer() {
  return (
    <div className="absolute bottom-0 left-0 w-full px-6 py-4 flex flex-col md:flex-row items-center justify-between bg-white/5 backdrop-blur-xl border-t border-white/10 text-xs text-gray-400 z-40">

      {/* LEFT */}
      <div className="mb-2 md:mb-0">
        © 2026 Photo Ceremony
      </div>

      {/* CENTER */}
      <div className="hidden md:flex items-center gap-4">
        <span className="hover:text-white cursor-pointer transition">
          Privacy
        </span>
        <span className="hover:text-white cursor-pointer transition">
          Terms
        </span>
        <span className="hover:text-white cursor-pointer transition">
          Contact
        </span>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <span className="hover:text-white cursor-pointer transition">
          Support
        </span>
        <span className="hover:text-white cursor-pointer transition">
          Help
        </span>
      </div>

    </div>
  );
}