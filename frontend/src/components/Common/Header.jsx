import IconSiMahir from "../../assets/si-mahir.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Header = ({ isLogIn = false, isSignUp = false }) => {
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? "text-primary" : "text-black hover:text-primary";
  };

  const navItems = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/services", text: "Services" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <div className="fixed top-0 flex h-20 w-full items-center justify-between bg-white px-6 shadow-lg">
      <img src={IconSiMahir} alt="Si Mahir" className="w-40" />
      <div className="hidden space-x-4 sm:inline">
        <Link
          to="/login"
          className={`${!isLogIn && "hidden"} rounded-xl bg-primary px-8 py-2 text-white`}
        >
          Login
        </Link>
        <Link
          to="/signup"
          className={`${!isSignUp && "hidden"} rounded-xl border-2 border-primary px-8 py-2 text-primary`}
        >
          Signup
        </Link>
      </div>
      <FiMenu size={30} className="cursor-pointer sm:hidden" />
    </div>
  );
};

export default Header;
