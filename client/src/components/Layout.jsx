import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Layout() {

  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("loggedIn", false)) || false);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="flex-1 flex justify-center items-center">
        <Outlet context={[isLoggedIn, setIsLoggedIn]} />
      </div>
      <Footer />
    </div>
  );
}