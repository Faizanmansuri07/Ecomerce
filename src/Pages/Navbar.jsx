import { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart, FiHome, FiInfo, FiPackage  } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {cart} = useCart()

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and company name */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-indigo-600">FaxZ</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className='className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center justify-around"'>
                <FiHome className="mr-2" /> Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <FiInfo className="mr-2" /> About
            </Link>
              <Link to="/products" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <FiPackage className="mr-2" /> Products
            </Link>
              <Link to="/cart" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center relative">
              <FiShoppingCart className="mr-2" /> Cart

               <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
              </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className='className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center justify-around"'>
                <FiHome className="mr-2" /> Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <FiInfo className="mr-2" /> About
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <FiPackage className="mr-2" /> Products
            </Link>
              <Link to="/cart" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center relative">
              <FiShoppingCart className="mr-2" /> Cart

               <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;