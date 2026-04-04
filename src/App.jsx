import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FaceScan from "./pages/FaceScan";
import LiveFeed from "./pages/LiveFeed"; 
import Footer from "./components/Footer";
import PhotoPreview from "./pages/PhotoPreview";
import Gallery from "./pages/gallery";
import Studio from "./pages/Studio";

export default function App() {
  return (
    <div className="h-screen relative">

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<FaceScan />} />
        <Route path="/live" element={<LiveFeed />} />
        <Route path="/preview" element={<PhotoPreview />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/studio" element={<Studio />} />
      </Routes>

      {/* ✅ Footer always visible */}
      <Footer />

    </div>
  );
} 