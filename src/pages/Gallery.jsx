import Navbar from "../components/Navbar";
import Layout from "../components/Layout"; // ✅ IMPORTANT (capital L)

export default function Gallery() {
  return (
    <Layout>

      <Navbar />

      <div className="pt-28 px-6 max-w-6xl mx-auto ">

        {/* Header */}
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

        {/* GRID 1 */}
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

        {/* GRID 2 */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="relative rounded-xl overflow-hidden group">
            <img
              src="/images/4.jpg"
              className="w-full h-[400px] object-cover transition group-hover:scale-105"
            />

            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/80 w-full">
              <h3 className="text-sm font-semibold">The First Talk</h3>
              <p className="text-xs text-white/60">Milan & Sophia</p>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-6">

            <div className="relative rounded-xl overflow-hidden group">
              <img
                src="/images/5.webp"
                className="h-[190px] w-full object-cover transition group-hover:scale-110"
              />
            </div>

            <div className="relative rounded-xl overflow-hidden group">
              <img
                src="/images/7.jpg"
                className="h-[190px] w-full object-cover transition group-hover:scale-110"
              />
            </div>

            <div className="col-span-2 relative rounded-xl overflow-hidden group">

              <img
                src="/images/8.jpg"
                className="w-full h-[190px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r 
              from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute inset-0 p-5 flex flex-col justify-center">
                <span className="text-xs text-cyan-400 mb-2">
                  VENUE SPOTLIGHT
                </span>

                <h3 className="text-lg font-semibold">
                  Celestial Hall: A Night Under the Stars
                </h3>
              </div>

            </div>

          </div>

        </div>

      </div>

    </Layout>
  );
}