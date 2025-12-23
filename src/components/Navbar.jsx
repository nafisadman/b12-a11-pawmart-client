import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
// import { ToastContainer, toast } from "react-toastify";
import userIcon from "../assets/user.png";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [hover, setHover] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  };

  const handleLogout = () => {
    // console.log("User trying to logout");
    logOut()
      .then(() => {
        toast("Logged out Successfully!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      <div class="navbar bg-base-100 shadow-xl">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/public/pets-and-suppliers">
                  Pets & Suppliers
                </NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink to="/auth/add-services">Add Listing</NavLink>
                  </li>
                  <li>
                    <NavLink to="/auth/my-services">My Listings</NavLink>
                  </li>
                  <li>
                    <NavLink to="/auth/my-orders">My Orders</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <a class="btn btn-ghost text-xl flex items-center justify-center">
            <img className="h-8" src="/paw.svg" alt="" />
            <span className="text-primary font-bold">PawMart</span>
          </a>
        </div>

        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/public/pets-and-suppliers">
                Pets & Suppliers
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/auth/add-services">Add Listing</NavLink>
                </li>
                <li>
                  <NavLink to="/auth/my-services">My Listings</NavLink>
                </li>
                <li>
                  <NavLink to="/auth/my-orders">My Orders</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        <div class="navbar-end flex gap-5 items-center">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              onClick={handleThemeChange}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {!user && (
            <div className="border rounded-full h-10 flex items-center">
              <a className="my-anchor-element">◕‿◕</a>
              <Tooltip anchorSelect=".my-anchor-element" place="left">
                Login to see yourself here! 👉
              </Tooltip>
            </div>
          )}
          <div className="login-btn flex gap-5 items-center">
            {user && (
              <div
                className="tooltip tooltip-bottom flex items-center hidden sm:block"
                data-tip={user.email}
              >
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src={`${user ? user.photoURL : userIcon}`}
                  alt="User Profile"
                />
              </div>
            )}
            {user ? (
              <>
                <button onClick={handleLogout} class="btn btn-primary">
                  Logout
                </button>
                {/* <ToastContainer></ToastContainer> */}
              </>
            ) : (
              <>
                <div className="flex gap-2">
                  <Link to="/auth/login" className="btn btn-secondary">
                    Login
                  </Link>
                  <Link to="/auth/register" className="btn btn-primary">
                    Register
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;