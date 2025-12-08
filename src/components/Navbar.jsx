import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import userIcon from "../assets/user.png";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
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
    logOut()
      .then(() => {
        toast("Logged out Successfully!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="h-20">
      <div className="navbar bg-base-100 shadow-xl fixed top-0 z-50">
        <div className="navbar-start">
          {/* Mobile Dropdown Menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
                  {/* Mobile Only Logout */}
                  <li className="mt-2 border-t pt-2 sm:hidden">
                    <button onClick={handleLogout} className="text-error">
                      Logout
                    </button>
                  </li>
                </>
              )}
              {/* Mobile Only Login/Register */}
              {!user && (
                <div className="flex flex-col gap-2 mt-2 sm:hidden">
                  <li>
                    <NavLink to="/auth/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/auth/register">Register</NavLink>
                  </li>
                </div>
              )}
            </ul>
          </div>

          {/* Logo */}
          <a className="btn btn-ghost text-xl flex items-center justify-center">
            <img className="h-8" src="/paw.svg" alt="PawMart Logo" />
            <span className="text-primary font-bold hidden xs:block">
              PawMart
            </span>
          </a>
        </div>

        {/* Desktop Center Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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

        {/* Navbar End (Actions) */}
        <div className="navbar-end flex gap-2 sm:gap-4 items-center">
          {/* Theme Controller */}
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
              className="hidden xs:block" 
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              onClick={handleThemeChange}
              type="checkbox"
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
              className="hidden xs:block"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          {/* Tooltip for non-logged in users (Desktop Only) */}
          {!user && (
            <div className="hidden sm:flex border rounded-full h-10 items-center">
              <a className="my-anchor-element px-2">◕‿◕</a>
              <Tooltip anchorSelect=".my-anchor-element" place="left">
                Login to see yourself here! 👉
              </Tooltip>
            </div>
          )}

          <div className="login-btn flex gap-3 items-center">
            {/* User Profile Pic */}
            {user && (
              <div
                className="tooltip tooltip-bottom flex items-center"
                data-tip={user.email}
              >
                <img
                  className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full border border-primary"
                  src={`${user ? user.photoURL : userIcon}`}
                  alt="User Profile"
                />
              </div>
            )}

            {/* Action Buttons (Desktop Only - hidden on mobile) */}
            {user ? (
              <button
                onClick={handleLogout}
                className="btn btn-primary hidden sm:flex"
              >
                Logout
              </button>
            ) : (
              <div className="hidden sm:flex gap-2">
                <Link to="/auth/login" className="btn btn-secondary">
                  Login
                </Link>
                <Link to="/auth/register" className="btn btn-primary">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;