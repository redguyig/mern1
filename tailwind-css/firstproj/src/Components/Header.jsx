import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-3">
        <img src="./assets/Logo.svg" alt="logo"></img>
        <button className="bg-gradient-to-tr from-orange-400 to bg-red-400 text-white px-2 py-2 rounded-2xl">STEEL BALL RUN</button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-comicn text-gray-400 gap-6">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Why Hosterr</a></li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-comicn gap-6">
        <a className="text-gray-400" href="#">Sign in </a>
        <button  className="bg-gradient-to-tr from-orange-400 to bg-red-400 text-white px-2 py-2 rounded-2xl">Join Waitlist</button>
      </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
