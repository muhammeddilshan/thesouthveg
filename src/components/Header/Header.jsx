import React from "react";
import Logo from "../../assets/THESOUTHVEGFINAL.jpg";
import "../Header/Header.css";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header className="w-full bg-white py-4 px-8 flex justify-center items-center">
      <div className="w-full max-w-[1200px] flex justify-between items-center">
        {/* Logo */}
        <div className="w-[120px]">
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

        {/* Buttons */}
        <div className=" nav_buttons flex items-center gap-2 ">
          <button className="px-6 py-3 border border-[#2c5234] text-[#2c5234] font-semibold rounded-[30px_0_30px_0] bg-transparent transition-transform duration-300 hover:-translate-y-1">
            Login
          </button>
          <button className="px-6 py-3 font-semibold rounded-[30px_0_30px_0] bg-[#2c5234] text-white border-none transition-transform duration-300 hover:-translate-y-1">
            Booking
          </button>
        </div>

        <div className="menu">
          <IoMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
