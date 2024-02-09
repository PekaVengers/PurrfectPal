import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}