import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Heart, Flame, Share2, Info, Download } from "lucide-react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function PhotoPreview() {
  const navigate = useNavigate();

  return (
    
    <Layout>

        
        <Navbar />

        
        <div className="pt-28 px-4 flex flex-col items-center">

          {/* CARD */}
          <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden">

            
            <img
              src="/images/2.webp"
              className="w-full h-[65vh] md:h-[75vh] object-cover rounded-3xl shadow-2xl"
              alt=""
            />

            
            <div className="absolute bottom-0 left-0 w-full p-6 
            bg-gradient-to-t from-black/90 via-black/40 to-transparent">

              <div className="relative">

               
                <div>
                  <h2 className="text-lg md:text-xl font-semibold">
                    First Pic ✨
                  </h2>
                  <p className="text-xs text-gray-300">
                    Uploaded by Midlaj · 01:01 PM
                  </p>
                </div>

                
                <TooltipProvider delayDuration={200}>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 
                  items-center gap-4
                  bg-black/50 backdrop-blur-xl border border-white/20 
                  px-3 py-2 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)]">

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="hover:scale-110 transition rounded-full text-red-500 hover:text-red-400 hover:bg-white/10">
                          <Heart size={18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-black border-white/20 text-white"><p>Like</p></TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="hover:scale-110 transition rounded-full text-orange-400 hover:text-orange-300 hover:bg-white/10">
                          <Flame size={18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-black border-white/20 text-white"><p>Hot</p></TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="hover:scale-110 transition rounded-full text-white hover:text-gray-300 hover:bg-white/10">
                          <Share2 size={18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-black border-white/20 text-white"><p>Share</p></TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="hover:scale-110 transition rounded-full text-white hover:text-gray-300 hover:bg-white/10">
                          <Info size={18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-black border-white/20 text-white"><p>Info</p></TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" className="ml-2 hover:scale-110 transition rounded-full bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                          <Download size={18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-black border-white/20 text-white"><p>Download</p></TooltipContent>
                    </Tooltip>

                  </div>
                </TooltipProvider>

              </div>
            </div>

          </div>

          {/* responsive */}
          <div className="md:hidden flex justify-center mt-6">

            <div className="flex items-center gap-4
            bg-black/50 backdrop-blur-xl border border-white/20 
            px-4 py-2 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)]">

              <Button variant="ghost" size="icon" className="rounded-full text-red-500 hover:text-red-400 hover:bg-white/10">
                <Heart size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-orange-400 hover:text-orange-300 hover:bg-white/10">
                <Flame size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-gray-300 hover:bg-white/10">
                <Share2 size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-gray-300 hover:bg-white/10">
                <Info size={20} />
              </Button>

              <Button size="icon" className="ml-2 rounded-full bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                <Download size={18} />
              </Button>

            </div>

          </div>

        </div>
      
    </Layout>
  );
}