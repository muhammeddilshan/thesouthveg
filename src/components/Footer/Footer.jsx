import {
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../../assets/THESOUTHVEGFINAL.png";

const Footer = () => {
  return (
    <footer className="bg-green-200 text-green-900 py-12 px-6 md:px-16">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="w-[150px] mb-4">
            <img src={Logo} alt="" />
          </h2>
          <p className="text-green-800 mb-6">
            Taste the magic of nature in every bite of our wholesome vegetarian
            meals.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="hover:text-[#4CAF50] transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-[#4CAF50] transition-colors"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#4CAF50] transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-[#4CAF50] transition-colors"
              >
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Booking</li>
            <li>Pages</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <div className="space-y-3">
            {/* Location */}
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-green-900 text-[22px] mt-[4px] flex-shrink-0" />
              <a
                href="https://www.google.com/maps?q=Royal+Trade+Centre,+Bypass+Road,+near+Al+Shifa+Hospital+Road,+Perinthalmanna,+Angadipuram,+Kerala+679322"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-green-900"
              >
                Royal Trade Centre, Bypass Road, near Al Shifa Hospital Road,
                Perinthalmanna, Angadipuram, Kerala 679322
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-900 text-[20px]" />
              <a href="tel:+919446766221" className=" text-green-900">
                +91 9446766221
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-900 text-[20px]" />
              <a
                href="mailto:thesouthveg@gmail.com"
                className=" text-green-900"
              >
                thesouthveg@gmail.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="hover:text-green-700">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-green-700">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-green-700">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-green-700 mt-10 pt-6 text-center text-green-800">
        © 2025 thesouthveg • All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
