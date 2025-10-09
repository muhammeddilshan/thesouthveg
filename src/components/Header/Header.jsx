import React from "react";
import Logo from "../../assets/THESOUTHVEGFINAL.jpg";
import "../Header/Header.css";
import { IoMenu } from "react-icons/io5";
import Hamburger from "../Hamburger/Hamburger";

const Header = () => {
  return (
    <header className="w-full bg-white py-4 px-8 flex justify-center items-center">
      <div className="w-full max-w-[1200px] flex justify-between items-center">
        {/* Logo */}
        <div className="w-[100px]">
          <img src={Logo} alt="logo" className="w-full block" />
        </div>

        {/* Nav Links */}
        <nav className="navbar">
          <ul className="flex gap-8 list-none">
            {["Home", "About Us", "Services", "Page", "Contact Us"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className={`text-[#2c5234] font-medium transition-colors duration-300 ${
                      item === "Home"
                        ? "text-[#4CAF50]"
                        : "hover:text-[#4CAF50]"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
