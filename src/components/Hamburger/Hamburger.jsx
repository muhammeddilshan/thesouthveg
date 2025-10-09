import React, { useState } from "react";
import { IoCloseOutline, IoMenu } from "react-icons/io5";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="menu" onClick={() => setIsActive(true)}>
        <IoMenu />
      </div>
      {isActive && (
        <div>
          <div className="w-full h-screen bg-white fixed top-0 left-0 pt-6  pr-6">
            <div
              className="flex justify-end"
              onClick={() => setIsActive(false)}
            >
              <IoCloseOutline className="w-10 h-10" />
            </div>
            <div className="pt-20 pl-20">
              <ul className="flex flex-col gap-6">
                <li className="text-xl font-bold">About Us</li>
                <li className="text-xl font-bold">Testimonials</li>
                <li className="text-xl font-bold">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hamburger;
