import { FaThumbsUp, FaUtensils, FaTruck } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaThumbsUp size={40} />,
      title: "Quality Food",
      desc: "We serve fresh, hygienic, and perfectly prepared vegetarian dishes made with high-quality ingredients to ensure the best taste and purity in every bite.",
    },
    {
      icon: <FaUtensils size={40} />,
      title: "Super Taste",
      desc: "Enjoy delicious flavors that make every meal memorable. Our recipes are crafted to bring you the perfect mix of taste, freshness, and satisfaction.",
    },
    {
      icon: <FaTruck size={40} />,
      title: "Fast Delivery",
      desc: "Craving good food? We deliver your favorite dishes quickly and with care, ensuring they reach you fresh, hot, and ready to enjoy.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-green-800 mb-12">
        Our Awesome Services
      </h2>

      <div className="w-[90%] mx-auto grid  md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-10 rounded-[60px_0_60px_0] shadow-md hover:shadow-lg transition-shadow duration-300 bg-white text-left relative overflow-hidden hover:bg-green-200`}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-green-700 text-white rounded-full mb-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-green-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-700 mb-4">{service.desc}</p>
            <a
              href="#"
              className="text-green-700 font-medium flex items-center gap-2 hover:underline"
            >
              → Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
