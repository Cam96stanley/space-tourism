import { Outlet, NavLink } from "react-router-dom";
import Header from "./Header";

export default function TechLayout() {
  const techbg = {
    backgroundImage:
      "url('../../public/technology/background-technology-mobile.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  const activeStyle = {
    backgroundColor: "white",
    color: "#1E3A8A",
  };

  return (
    <div style={techbg}>
      <Header />
      <div className="flex flex-col items-center min-h-screen">
        <p className="text-white font-bellefair">
          <span className="font-barlow opacity-50 mr-4">03</span> SPACE LAUNCH
          101
        </p>
        <nav className="flex mt-8">
          <NavLink
            to="."
            end
            className="flex items-center justify-center rounded-full text-black w-[40px] h-[40px] text-white font-bellefair border-2 mx-4"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            1
          </NavLink>
          <NavLink
            to="spaceport"
            className="flex items-center justify-center rounded-full text-black w-[40px] h-[40px] text-white font-bellefair border-2 mx-4"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            2
          </NavLink>
          <NavLink
            to="capsule"
            className="flex items-center justify-center rounded-full text-black w-[40px] h-[40px] text-white font-bellefair border-2 mx-4"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            3
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
