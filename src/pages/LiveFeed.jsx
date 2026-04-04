import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { liveFeedData } from "../data/livefeed.data";
import { Badge } from "@/components/ui/badge";

export default function LiveFeed() {
  return (
    <Layout>

      <Navbar />

      <div className="pt-32 px-6 pb-24 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            The Live Moment
          </h1>

          <p className="text-gray-300 text-sm md:text-base">
            Every capture, shared instantly. Join the story in real-time.
          </p>
        </div>

        {/* 🔥 MASONRY GRID */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">

          {liveFeedData.map((img) => (
            <div
              key={img.id}
              className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer"
            >

              {/* IMAGE */}
              <img
                src={img.src}
                alt=""
                className="w-full rounded-xl transition duration-500 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/20 opacity-0 
              group-hover:opacity-100 transition"></div>

              {/* 🔴 LIVE BADGE (ONLY ON HOVER) */}
              <Badge variant="destructive" className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition uppercase tracking-widest text-[10px] animate-pulse shadow-[0_0_10px_rgba(255,0,0,0.8)]">
                LIVE
              </Badge>

            </div>
          ))}

        </div>

      </div>

    </Layout>
  );
}