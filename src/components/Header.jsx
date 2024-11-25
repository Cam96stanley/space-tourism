import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="flex justify-between items-center p-6">
        <Link to="/">
          <img src="../../public/shared/logo.svg" />
        </Link>
        <button className="hamburger" onClick={toggleSidebar}>
          <img src="../../public/shared/icon-hamburger.svg" />
        </button>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/">
              <span>00</span>HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="destination">
              <span>01</span>DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink to="crew">
              <span>02</span>CREW
            </NavLink>
          </li>
          <li>
            <NavLink to="technology">
              <span>03</span>TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
