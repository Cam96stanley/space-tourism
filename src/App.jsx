import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import DestinationLayout from "./components/DestinationLayout";
import Moon from "./pages/destinations/Moon";
import Mars from "./pages/destinations/Mars";
import Europa from "./pages/destinations/Europa";
import Titan from "./pages/destinations/Titan";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="destination" element={<DestinationLayout />}>
            <Route index element={<Moon />} />
            <Route path="mars" element={<Mars />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
