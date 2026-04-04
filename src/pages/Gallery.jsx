import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { galleryData } from "../data/gallery.data";

export default function Gallery() {
  const smallImages = galleryData.filter((img) => img.type === "small");
  const gridImages = galleryData.filter((img) => img.type === "grid");
  const tallImage = galleryData.find((img) => img.type === "tall");
  const wideImage = galleryData.find((img) => img.type === "wide");

  return (
    <Layout>
      <Navbar />

      <div className="pt-28 px-6 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <div className="inline-block px-4 py-1 text-xs bg-white/10 rounded-full border border-white/20 mb-4">
            Now capturing memories...
          </div>

          <h1 className="text-3xl md:text-4xl font-bold">
            Memories with you
          </h1>

          <p className="text-white/60 text-sm mt-2">
            Your exclusive moments captured with you
          </p>
        </div>

        {/* 🔥 GRID 1 (TOP SMALL IMAGES) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

          {smallImages.map((img) => (
            <div
              key={img.id}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img.src}
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 
              group-hover:opacity-100 transition"></div>
            </div>
          ))}

        </div>

        {/* SECTION */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">
            Featured Ceremony
          </h2>

          <p className="text-white/60 text-sm">
            A blend of photography highlighting few couples.
          </p>
        </div>

        {/* 🔥 GRID 2 (FIXED STRUCTURE) */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* LEFT BIG IMAGE */}
          {tallImage && (
            <div className="relative rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={tallImage.src}
                className="w-full h-[400px] object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/80 w-full">
                <h3 className="text-sm font-semibold">{tallImage.title}</h3>
                <p className="text-xs text-white/60">{tallImage.subtitle}</p>
              </div>
            </div>
          )}

          {/* RIGHT SIDE */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6">

            {/* TWO SMALL GRID IMAGES */}
            {gridImages.slice(0, 2).map((img) => (
              <div
                key={img.id}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={img.src}
                  className="h-[190px] w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 
                group-hover:opacity-100 transition"></div>
              </div>
            ))}

            {/* WIDE IMAGE */}
            {wideImage && (
              <div className="col-span-2 relative rounded-xl overflow-hidden group cursor-pointer">

                <img
                  src={wideImage.src}
                  className="w-full h-[190px] object-cover transition duration-500 group-hover:scale-105"
                />

                {/* hover overlay */}
                <div className="absolute inset-0 bg-black/40 
                group-hover:bg-black/60 transition"></div>

                {/* gradient */}
                <div className="absolute inset-0 bg-gradient-to-r 
                from-black/80 via-black/40 to-transparent"></div>

                {/* text */}
                <div className="absolute inset-0 p-5 flex flex-col justify-center">
                  <span className="text-xs text-cyan-400">
                    {wideImage.subtitle}
                  </span>

                  <h3 className="text-lg font-semibold">
                    {wideImage.title}
                  </h3>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </Layout>
  );
}