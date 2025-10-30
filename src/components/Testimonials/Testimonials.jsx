// src/components/testimonials/TestimonialsSection.jsx
import React, { useState, useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Food Blogger",
    rating: 5,
    content:
      "The most incredible vegetarian dining experience! Every dish is crafted with such care and creativity. The flavors are absolutely divine and I've never felt so satisfied with plant-based cuisine.",
  },
  {
    name: "Marcus Chen",
    role: "Regular Customer",
    rating: 5,
    content:
      "I've been coming here for three years and it never disappoints. The seasonal menu keeps things exciting, and the staff genuinely cares about sustainability and quality ingredients.",
  },
  {
    name: "Emma Rodriguez",
    role: "Yoga Instructor",
    rating: 5,
    content:
      "A haven for health-conscious foodies! The atmosphere is warm and inviting, and you can taste the freshness in every bite. Their beetroot burger changed my life!",
  },
  {
    name: "James Anderson",
    role: "Chef",
    rating: 5,
    content:
      "As a chef myself, I'm incredibly impressed by their innovative techniques and flavor combinations. They've elevated vegetarian cuisine to an art form. Absolutely phenomenal!",
  },
  {
    name: "Priya Sharma",
    role: "Nutritionist",
    rating: 5,
    content:
      "Finally, a restaurant that proves healthy eating doesn't mean sacrificing taste! The nutritional balance in their menu is perfect, and everything is made with organic, locally-sourced ingredients.",
  },
  {
    name: "David Thompson",
    role: "Environmental Activist",
    rating: 5,
    content:
      "Not only is the food outstanding, but their commitment to zero-waste and sustainability is truly inspiring. This is the future of dining, and it's delicious!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const delay = 4000;
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev + 1) % testimonials.length),
      delay
    );
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const getVisibleTestimonials = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const visible = getVisibleTestimonials();

  return (
    <section className="py-20 px-4 bg-green-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
          What Our Guests Say
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Join thousands of happy customers who have discovered the joy of
          plant-based dining
        </p>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(current * 100) / visible}%)`,
              width: `${(testimonials.length * 100) / visible}%`,
            }}
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / visible}%` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={() =>
              setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-green-700 text-white p-2 rounded-full hover:bg-green-800"
          >
            &#10094;
          </button>
          <button
            onClick={() => setCurrent((current + 1) % testimonials.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-700 text-white p-2 rounded-full hover:bg-green-800"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
