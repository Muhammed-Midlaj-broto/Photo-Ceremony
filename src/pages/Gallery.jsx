import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { galleryData } from "../data/gallery.data";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

function ImageWithDialog({ src, altClass = "", children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={`relative rounded-xl overflow-hidden group cursor-pointer ${altClass}`}>
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] md:max-w-5xl bg-black/90 backdrop-blur-xl border-white/20 p-2 md:p-4 rounded-xl flex justify-center items-center shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        <img src={src} className="max-h-[85vh] w-auto rounded-lg object-contain shadow-2xl" />
      </DialogContent>
    </Dialog>
  );
}

export default function Gallery() {
  const smallImages = galleryData.filter((img) => img.type === "small");
  const gridImages = galleryData.filter((img) => img.type === "grid");
  const tallImage = galleryData.find((img) => img.type === "tall");
  const wideImage = galleryData.find((img) => img.type === "wide");

  return (
    <Layout>
      <Navbar />

      <div className="pt-28 px-6 pb-24 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <Badge variant="outline" className="mb-6 text-cyan-400 border-cyan-400/30 bg-cyan-400/10 tracking-widest uppercase text-[10px] py-1 px-3">
            Now capturing memories...
          </Badge>

          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Memories with you
          </h1>

          <p className="text-white/60 text-sm md:text-base mt-4 max-w-lg leading-relaxed">
            Your exclusive moments captured with you, framed for eternity in our digital darkroom.
          </p>
        </div>

        {/* 🔥 GRID 1 (TOP SMALL IMAGES) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

          {smallImages.map((img) => (
            <ImageWithDialog key={img.id} src={img.src}>
              <img
                src={img.src}
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </ImageWithDialog>
          ))}

        </div>

        {/* SECTION HEADER */}
        <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2 tracking-wide">
              Featured Ceremony
            </h2>
            <p className="text-white/60 text-sm">
              A blend of photography highlighting a few special couples.
            </p>
          </div>
        </div>

        {/* 🔥 GRID 2 (FIXED STRUCTURE) */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* LEFT BIG IMAGE */}
          {tallImage && (
            <ImageWithDialog src={tallImage.src}>
              <img
                src={tallImage.src}
                className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent w-full">
                <h3 className="text-lg font-semibold tracking-wide">{tallImage.title}</h3>
                <p className="text-sm text-cyan-400 mt-1 font-medium">{tallImage.subtitle}</p>
              </div>
            </ImageWithDialog>
          )}

          {/* RIGHT SIDE */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6">

            {/* TWO SMALL GRID IMAGES */}
            {gridImages.slice(0, 2).map((img) => (
              <ImageWithDialog key={img.id} src={img.src}>
                <img
                  src={img.src}
                  className="h-[213px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </ImageWithDialog>
            ))}

            {/* WIDE IMAGE */}
            {wideImage && (
              <ImageWithDialog src={wideImage.src} altClass="col-span-2">
                <img
                  src={wideImage.src}
                  className="w-full h-[213px] object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-center">
                  <span className="text-xs tracking-widest uppercase text-cyan-400 mb-2 font-medium">
                    {wideImage.subtitle}
                  </span>
                  <h3 className="text-2xl font-semibold max-w-[60%] leading-tight">
                    {wideImage.title}
                  </h3>
                </div>
              </ImageWithDialog>
            )}

          </div>

        </div>

      </div>
    </Layout>
  );
}