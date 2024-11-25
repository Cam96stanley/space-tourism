import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";

export default function CrewLayout() {
  const destinationbg = {
    backgroundImage: "url('../../public/crew/background-crew-mobile.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "white",
    opacity: "100%",
  };

  return (
    <div style={destinationbg}>
      <Header />
      <div className="flex flex-col items-center min-h-screen">
        <p className="text-white font-bellefair">
          <span className="font-barlow opacity-50 mr-4">02</span>MEET YOUR CREW
        </p>
        <nav className="mt-8 font-barlow text-blue-300">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="mr-8 hover:border-b-2 hover:opacity-50 hover:text-white"
          >
            I
          </NavLink>
          <NavLink
            to="specialist"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="mr-8 hover:border-b-2 hover:opacity-50 hover:text-white"
          >
            II
          </NavLink>
          <NavLink
            to="pilot"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="mr-8 hover:border-b-2 hover:opacity-50 hover:text-white"
          >
            III
          </NavLink>
          <NavLink
            to="engineer"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="hover:border-b-2 hover:opacity-50 hover:text-white"
          >
            IV
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
