import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DestinationLayout from "./components/DestinationLayout";
import CrewLayout from "./components/CrewLayout";
import TechLayout from "./components/techLayout";
import Home from "./pages/Home";
import Moon from "./pages/destinations/Moon";
import Mars from "./pages/destinations/Mars";
import Europa from "./pages/destinations/Europa";
import Titan from "./pages/destinations/Titan";
import Commander from "./pages/crew/Commander";
import MissionSpecialist from "./pages/crew/MissionSpecialist";
import Pilot from "./pages/crew/Pilot";
import Engineer from "./pages/crew/Engineer";
import LauchVehicle from "./pages/technology/LaunchVehicle";
import Spaceport from "./pages/technology/Spaceport";
import Capsule from "./pages/technology/SpaceCapsule";

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
          <Route path="crew" element={<CrewLayout />}>
            <Route index element={<Commander />} />
            <Route path="specialist" element={<MissionSpecialist />} />
            <Route path="pilot" element={<Pilot />} />
            <Route path="engineer" element={<Engineer />} />
          </Route>
          <Route path="technology" element={<TechLayout />}>
            <Route index element={<LauchVehicle />} />
            <Route path="spaceport" element={<Spaceport />} />
            <Route path="capsule" element={<Capsule />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
