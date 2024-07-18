import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-3">
        <img src="./assets/Logo.svg" alt="logo"></img>
        <button className="bg-gradient-to-tr from-orange-400 to bg-red-400 text-white px-2 py-2 rounded-2xl">STEEL BALL RUN</button>
      </div>
      <div>
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
