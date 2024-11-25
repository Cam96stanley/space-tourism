import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  const bgStyle = {
    backgroundImage: "url('../../public/home/background-home-mobile.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  return (
    <div style={bgStyle}>
      <Header />
      <Outlet />
    </div>
  );
}
