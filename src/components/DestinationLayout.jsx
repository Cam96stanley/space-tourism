import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";

export default function Destination() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "white",
    opacity: "100%",
  };
  const destinationbg = {
    backgroundImage:
      "url('../assets/destination/background-destination-mobile.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  return (
    <div style={destinationbg}>
      <Header />
      <div className="flex flex-col items-center min-h-screen">
        <p className="text-white font-bellefair">
          <span className="font-barlow opacity-50 mr-4">01</span> PICK YOUR
          DESTINATION
        </p>
        <nav className="mt-8 font-barlow text-blue-300">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="mr-8 hover:border-b-2 hover:opacity-50 hover:text-white"
          >
            MOON
          </NavLink>
          <NavLink
            to="mars"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="mr-8 hover:border-b-2 hover:opacity-50 hover:text-white"
          >
            MARS
          </NavLink>
          <NavLink
            to="europa"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="mr-8 hover:border-b-2 hover:opacity-50 hover:text-white"
          >
            EUROPA
          </NavLink>
          <NavLink
            to="titan"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="hover:border-b-2 hover:opacity-50 hover:text-white"
          >
            TITAN
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
