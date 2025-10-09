import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Pages</li>
            <li>About Us</li>
            <li>Services</li>
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
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-green-900 text-[22px] mt-[4px] flex-shrink-0" />
              <p>
                Royal Trade Centre, Bypass Road, near Al Shifa Hospital Road,
                Perinthalmanna, Angadipuram, Kerala 679322
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-900 text-[20px]" />
              <p>+91 9446766221</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-900 text-[20px]" />
              <p>thesouthveg@gmail.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="hover:text-green-700">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-green-700">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-green-700">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-green-700 mt-10 pt-6 text-center text-green-800">
        © 2021 Vegan Template • All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
