import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import FaceScan from "./pages/FaceScan";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scan" element={<FaceScan />} />
    </Routes>
  );
}