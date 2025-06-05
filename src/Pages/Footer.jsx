import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">FaxZ</h3>
            <p className="text-gray-400">
              Bringing you the best products with exceptional quality and customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Products</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Special Offers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">New Arrivals</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Returns & Refunds</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-gray-400" />
                <span className="text-gray-400">123 Business Ave, Suite 456, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-400" />
                <span className="text-gray-400">info@FaxZ.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaClock className="text-gray-400" />
                <span className="text-gray-400">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} FaxZ. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;