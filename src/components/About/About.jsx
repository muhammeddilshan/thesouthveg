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
          Welcome to <b>thesouthveg </b>, your perfect spot for pure and
          delicious vegetarian food. We are dedicated to serving fresh,
          hygienic, and flavorful dishes that make you feel at home. Our goal is
          to offer a happy dining experience with tasty meals, friendly service,
          and a warm ambience. We prepare every dish with care, using quality
          ingredients to bring you natural flavors. Whether you're here for a
          family meal or a quick bite, we ensure you leave with a smile. Visit
          us and enjoy vegetarian food that’s simple, wholesome, and full of
          love!
        </p>
      </div>
    </section>
  );
};

export default About;
