// src/components/testimonials/TestimonialCard.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, role, rating, content }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-semibold">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="text-gray-700 italic leading-relaxed">"{content}"</p>
    </div>
  );
};

export default TestimonialCard;
