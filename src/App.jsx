import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import FaceScan from "./pages/FaceScan";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="h-screen relative">

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<FaceScan />} />
      </Routes>

      {/* ✅ Footer always visible */}
      <Footer />

    </div>
  );
}