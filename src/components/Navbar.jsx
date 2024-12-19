import React, { useState } from "react";
import logo from "../assets/vb-logo.png";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Avater from "../../src/assets/user profile img.png";
import { useLogoutUserMutation } from "../redux/features/auth/AuthApi";
import { logout } from "../redux/features/auth/authSlice";

const navLists = [
  { name: "Home", path: "/" },
  { name: "Destination", path: "/destination" },
  { name: "About us", path: "/about-us" },
  { name: "Contact us", path: "/contact-us" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const { user } = useSelector((state) => state.auth);
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
    } catch (err) {}
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white py-4 border-b z-50 shadow-md">
      <nav className="container mx-auto flex justify-between px-5">
        <a href="/">
          <img src={logo} alt="Voyagers Beat Logo" className="h-10" />
        </a>
        <ul className="sm:flex hidden items-center gap-8 text-[15px]">
          {navLists.map((list, index) => (
            <li key={index}>
              <NavLink
                to={list.path}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive ? "active" : ""
                  } hover:text-[#1e73be]`
                }
              >
                {list.name}
              </NavLink>
            </li>
          ))}
          {/* Hide Login link when the user is logged in */}
          {!user && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}

          {/* Display based on user role */}
          {user && user.role === "user" ? (
            <li className="flex items-center gap-3">
              <img src={Avater} alt="user profile " className="size-8" />
              <button
                className="bg-[#1e73be] px-4 py-1.5 text-white rounded-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          ) : null}

          {/* For admin */}
          {user && user.role === "admin" && (
            <li className="flex items-center gap-3">
              <img src={Avater} alt="user profile " className="size-8" />
              <Link to="/dashboard">
                <button className="bg-[#1e73be] px-4 py-1.5 text-white rounded-sm">
                  Dashboard
                </button>
              </Link>
            </li>
          )}
        </ul>
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-600 hover:text-gray-900"
          >
            {openMenu ? (
              <IoClose className="text-xl" />
            ) : (
              <IoMenu className="text-xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {openMenu && (
        <ul className="fixed top-[70px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-40">
          {navLists.map((list, index) => (
            <li key={index} className="mt-5 px-4">
              <NavLink
                onClick={() => setOpenMenu(false)}
                to={list.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {list.name}
              </NavLink>
            </li>
          ))}
          {/* Add Dashboard for Admin in Mobile Menu */}
          {user && user.role === "admin" && (
            <li className="mt-5 px-4">
              <NavLink
                to="/dashboard"
                onClick={() => setOpenMenu(false)}
                className="text-[#1e73be]"
              >
                Dashboard
              </NavLink>
            </li>
          )}
          {/* Hide Login link in mobile menu when logged in */}
          {!user && (
            <li className="px-4 mt-5">
              <NavLink to="/login" onClick={() => setOpenMenu(false)}>
                Login
              </NavLink>
            </li>
          )}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
