import Navbar from "../components/Navbar";

export default function Gallery() {
  return (
    <div className="min-h-screen relative text-white overflow-hidden">

      {/* bg */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[#020617]" />

        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] 
        bg-purple-600/40 blur-[160px] rounded-full" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] 
        bg-blue-500/40 blur-[160px] rounded-full" />

        <div className="absolute inset-0 bg-black/30 backdrop-blur-2xl" />
      </div>

    
      <Navbar />

      
      <div className="pt-28 px-6 max-w-6xl mx-auto">

       
        <div className="mb-12">
          <div className="inline-block px-4 py-1 text-xs bg-white/10 rounded-full border border-white/20 mb-4">
            Now capturing memories...
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Memories with you
              </h1>
              <p className="text-white/60 text-sm mt-2">
                Your exclusive moments captured with you
              </p>
            </div>

            <button className="bg-cyan-400 text-black px-5 py-2 rounded-full 
            font-medium hover:bg-cyan-300 transition">
              Upload Photo
            </button>
          </div>
        </div>

       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

  {[
    "/images/1.jpeg",
    "/images/2.webp",
    "/images/3.webp",
  ].map((src, index) => (
    <div
      key={index}
      className="relative rounded-xl overflow-hidden group cursor-pointer"
    >
      <img
        src={src}
        className="h-60 w-full object-cover 
        transition duration-500 group-hover:scale-110"
      />

    
      <div className="absolute inset-0 bg-black/20 opacity-0 
      group-hover:opacity-100 transition"></div>

    </div>
  ))}



        </div>

       
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">
            Featured Ceremony
          </h2>
          <p className="text-white/60 text-sm">
            A blend of photography highlighting few couples. Elegant perspectives of
            lifelong journey.
          </p>
        </div>

        {/* 2nd potion */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* the length card */}
          <div className="relative rounded-xl overflow-hidden group cursor-pointer">

            <img
              src="/images/4.jpg"
              className="w-full h-[400px] object-cover 
              transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20 opacity-0 
            group-hover:opacity-100 transition"></div>

            <div className="absolute bottom-0 p-4 
            bg-gradient-to-t from-black/80 to-transparent w-full">
              <h3 className="text-sm font-semibold">
                The First Talk
              </h3>
              <p className="text-xs text-white/60">Milan & Sophia</p>
            </div>

          </div>

          
          <div className="md:col-span-2 grid grid-cols-2 gap-6">

            
            <div className="relative rounded-xl overflow-hidden group cursor-pointer">
              <img
                src="/images/5.webp"
                className="h-[190px] w-full object-cover 
                transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 
              group-hover:opacity-100 transition"></div>
            </div>

           
            <div className="relative rounded-xl overflow-hidden group cursor-pointer">
              <img
                src="/images/7.jpg"
                className="h-[190px] w-full object-cover 
                transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 
              group-hover:opacity-100 transition"></div>
            </div>

            
            <div className="col-span-2 relative rounded-xl overflow-hidden group cursor-pointer">

              <img
                src="/images/8.jpg"
                className="w-full h-[190px] object-cover 
                transition duration-500 group-hover:scale-105"
              />

             
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

              
              <div className="absolute inset-0 bg-gradient-to-r 
              from-black/80 via-black/40 to-transparent"></div>

              {/* venue card */}
              <div className="absolute inset-0 p-5 flex flex-col justify-center">

                <span className="text-xs text-cyan-400 font-semibold tracking-wider mb-2">
                  VENUE SPOTLIGHT
                </span>

                <h3 className="text-lg md:text-xl font-semibold leading-snug">
                  Celestial Hall: A Night
                  <br />
                  Under the Stars
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}