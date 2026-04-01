import Navbar from "../components/Navbar";

export default function LiveFeed() {
  const images = [
    { src: "/images/3.webp" },
    { src: "/images/2.webp" },
    { src: "/images/4.jpg" },
    { src: "/images/1.jpeg" },
    { src: "/images/5.webp" },
  ];

  return (
    <div className="min-h-screen relative text-white overflow-hidden">

      
      <div className="absolute inset-0 -z-10 pointer-events-none">

        <div className="absolute inset-0 bg-[#020617]" />

        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] 
        bg-purple-600/40 blur-[160px] rounded-full" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] 
        bg-blue-500/40 blur-[160px] rounded-full" />

        <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl" />

      </div>

      {/* EXTRA GLOWS */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-pink-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute top-[40%] left-[30%] w-60 h-60 bg-purple-500/20 rounded-full blur-3xl"></div>

      
      <Navbar />

     
      <div className="pt-32 px-6 pb-24 max-w-6xl mx-auto">

       
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            The Live Moment
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            Every capture, shared instantly. Join the story in real-time.
          </p>
        </div>

        {/* grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">

          {images.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid relative group overflow-hidden rounded-xl"
            >

              <img
                src={img.src}
                alt=""
                className="w-full rounded-xl transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>

              <span className="absolute top-3 right-3 bg-red-500 text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                LIVE
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}