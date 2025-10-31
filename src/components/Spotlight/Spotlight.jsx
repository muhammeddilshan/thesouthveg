import React from "react";
import heroImg from "../../assets/dosaa.jpg";

const Spotlight = () => {
  return (
    <section className="flex items-center justify-between gap-12 px-24 py-16 max-lg:flex-col max-lg:text-center max-lg:px-8">
      {/* Left Content */}
      <div className="max-w-[600px]">
        <h1 className="text-[#2c5234] text-[30px] md:!text-[60px] font-bold leading-[1.2] mb-4 ">
          Healty Food For <br /> The Good Life
        </h1>
        <p className="text-[#555] text-[1.1rem] mb-8 leading-relaxed">
          Discover food that not only fills your stomach, but also fills your
          heart.
        </p>

        <div className="flex gap-4 max-lg:justify-center">
          <button className="cursor-pointer px-6 py-3 font-semibold rounded-[30px_0_30px_0] bg-[#2c5234] text-white transition-colors duration-300 hover:bg-[#3e6b48]">
            Learn More
          </button>
          <button className="cursor-pointer px-6 py-3 font-semibold rounded-[30px_0_30px_0] bg-[#a7d3a6] text-[#2c5234] transition-colors duration-300 hover:bg-[#8fc98f]">
            Order Now
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div>
        <img
          src={heroImg}
          alt="Chef holding broccoli"
          className="max-w-[450px] w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Spotlight;
