import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <div className="flex items-center gap-4">
        <img src="./logo192.png" height={5} width={80} alt="logo"/>
        <Link to="/" className={`text-white text-xl font-bold ml-3 ${location.pathname === "/" && "underline underline-offset-8"} hover:underline hover:underline-offset-8 hover:decoration-1`}>
          Home
        </Link>
        <Link to="/game" className={`ml-4 text-white text-xl font-bold ${location.pathname === "/game" && "underline underline-offset-8"} hover:underline hover:underline-offset-8 hover:decoration-1`}>
          Game
        </Link>
        <Link to="/about" className={`ml-4 text-white text-xl font-bold ${location.pathname === "/about" && "underline underline-offset-8"} hover:underline hover:underline-offset-8 hover:decoration-1`}>
          About
        </Link>
        <Link to="/contact" className={`ml-4 text-white text-xl font-bold ${location.pathname === "/contact" && "underline underline-offset-8"} hover:underline hover:underline-offset-8 hover:decoration-1`}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;