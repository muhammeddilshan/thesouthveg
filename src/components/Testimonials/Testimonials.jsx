import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Anjali Menon",
    role: "Regular Customer",
    message:
      "The food here tastes just like home! Fresh, flavorful, and truly comforting. A perfect place for pure veg lovers.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Rohit Sharma",
    role: "Food Enthusiast",
    message:
      "Absolutely impressed with the quality and hygiene. Every dish is prepared with care and tastes amazing. Highly recommended!",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Neha Gupta",
    role: "Family Visitor",
    message:
      "A great spot for family dining! The ambience, service, and food are all top-notch. My kids loved it too!",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Arun Kumar",
    role: "Health Conscious Customer",
    message:
      "Loved the organic and healthy meal options. The food feels light, fresh, and full of natural flavor. Will visit again!",
    image: "https://i.pravatar.cc/100?img=4",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
        What Our Clients Say
      </h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="py-6"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <p className="text-gray-600 italic mb-4">“{t.message}”</p>
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
