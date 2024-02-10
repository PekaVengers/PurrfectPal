import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useAuth } from "../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import LoginButton from "./buttons/LoginButton";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  async function logOut() {
    const data = {
      'client_id': import.meta.env.VITE_CLIENT_ID,
      'client_secret': import.meta.env.VITE_CLIENT_SECRET,
      'token': localStorage.getItem('access_token'),
    };

    try {
      await axiosInstance({
        method: 'post',
        url: "/auth/revoke-token",
        data,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      });

      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.setItem("loggedIn", JSON.stringify(false));
      setIsLoggedIn(false);
      navigate("/login");

    } catch (error) {
      console.log(error.response.data);
    }
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <nav
        className={`md:bg-transparent px-2 pt-4 lg:pt-[3rem] vsm:p-4 font-primary uppercase absolute top-0 w-full z-10 ${menuOpen ? "bg-[#F8AA26]" : "bg-transparent"
          }`}
      >
        <div className="container min-w-[98%] flex flex-col justify-around items-center md:flex-row md:text-[1.3rem] md:justify-between text-[#080909] font-semibold mx-auto ease-in duration-300 md:px-2">
          <div className="logoIconContainer flex w-full md:w-fit justify-between items-center">
            <NavLink to="/" className="text-[1.5rem] font-semibold">
              <img
                src={logo}
                alt="logo"
                className="h-[3rem] vsm:h-[4rem] gsm:h-[5rem] md:h-[6rem]"
              />
            </NavLink>
            {!menuOpen ? (
              <IoMenu
                onClick={() => toggleMenu()}
                className="text-[1.5rem] gsm:text-[2rem] md:hidden"
              />
            ) : (
              <RxCross1
                onClick={() => toggleMenu()}
                className="text-[1.5rem] gsm:text-[2rem] md:hidden"
              />
            )}
          </div>

          <div
            className={`${menuOpen ? "block" : "hidden"
              } md:text-[1.5rem] md:font-bold md:block pt-2 flex flex-col md:flex-row w-full md:w-fit md:bg-transparent md:space-x-4 md:justify-center md:items-center text-right ease-in duration-300`}
          >
            <NavLink
              to="/pets"
              className={
                "md:text-[2rem] hover:bg-[#DFE8FD] rounded-[0.5rem] px-2"
              }
            >
              Pets
            </NavLink>
            {isLoggedIn ? (
              <>
                <NavLink
                  to="/profile"
                  className={
                    "md:text-[2rem] hover:bg-[#DFE8FD] rounded-[0.5rem] px-2"
                  }
                >
                  Profile
                </NavLink>
                <a
                  onClick={() => {
                    toast.success("Logout Successful!");
                    logOut();
                    localStorage.clear();
                    navigate("/");
                  }}
                  className="uppercase md:text-[2rem] hover:bg-[#DFE8FD] rounded-[0.5rem] px-2"
                >
                  Logout
                </a>
              </>
            ) : (
              <>
                <NavLink
                  to="/register"
                  className={
                    "md:text-[2rem] hover:bg-[#DFE8FD] rounded-[0.5rem] px-2"
                  }
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className={
                    "md:text-[2rem] hover:bg-[#DFE8FD] rounded-[0.5rem] px-2"
                  }
                >
                  Login
                </NavLink>
                <LoginButton />
              </>
            )}
          </div>
        </div>
      </nav>
      <ToastContainer position="top-center" />
    </>
  );
}
