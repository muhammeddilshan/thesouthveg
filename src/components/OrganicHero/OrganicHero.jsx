import React from "react";

const OrganicHero = () => {
  return (
    <section
      className="relative flex items-center justify-start h-[400px] md:h-[500px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1584270354949-1e46e8f6f60e?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-200 bg-opacity-40"></div>

      {/* Content */}
      <div className="relative max-w-2xl px-6 md:px-16 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-900">
          100% Organic
        </h2>
        <h3 className="text-3xl md:text-4xl font-semibold bg-green-700 px-4 py-2 inline-block rounded">
          Fresh &amp; Healthy
        </h3>
        <p className="mt-4 text-green-900 text-base md:text-lg leading-relaxed">
          From farm-fresh vegetables to chemical-free ingredients, we bring you
          food that is wholesome, nutritious, and truly organic. Eat clean, live
          healthy!
        </p>

        <button className="mt-6 bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-[30px_0_30px_0] font-medium transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default OrganicHero;
