import React from "react";
import Ingre from "../../assets/ingreadiance.jpg";

const About = () => {
  return (
    <section className="flex flex-col lg:!flex-row">
      {/* Left Image Side */}
      <div className="relative flex-1">
        <img
          src={Ingre}
          alt=""
          className="w-full h-[300px] lg:!h-auto object-cover"
        />

        {/* Green overlay with 20% opacity */}
        <div className="absolute inset-0 bg-green-500 opacity-20"></div>
      </div>

      {/* Right Text Side */}
      <div className="flex flex-1 flex-col justify-center bg-[#226d47] text-white p-8 md:p-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Welcome To <br /> thesouthveg
        </h1>
        <p className="text-base md:text-lg leading-relaxed max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </section>
  );
};

export default About;
