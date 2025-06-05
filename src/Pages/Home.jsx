import { FiShoppingCart, FiStar, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Home = () => {
   const [imageLoaded, setImageLoaded] = useState(true);
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
    <div className="relative h-screen max-h-[900px] overflow-hidden bg-gray-900">
  {/* E-commerce focused background image */}
  <img
    src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1600"
    alt="Modern e-commerce shopping"
    className="absolute inset-0 w-full h-full object-cover opacity-80"
  />

  {/* Dark overlay for text contrast */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Main content */}
  <div className="relative z-10 h-full flex items-center justify-center px-6">
    <div className="text-center max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
        <span className="text-indigo-300">FaxZ</span> - Your Premium Shopping Destination
      </h1>
      
      <p className="text-lg md:text-xl text-white/90 mb-8 font-light">
        At FaxZ, we bring you quality products with seamless shopping experience
      </p>
      
      <div className="flex gap-4 justify-center">
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors duration-300">
          Shop Now
        </button>
        <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors duration-300 backdrop-blur-sm">
          New Arrivals
        </button>
      </div>
    </div>
  </div>
</div>
      {/* Featured Products Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
          <Link to="/products" className="text-indigo-600 hover:text-indigo-800 flex items-center">
            View all <FiArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Premium Wireless Headphones"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                20% OFF
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Premium Wireless Headphones</h3>
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current opacity-50" />
                </div>
                <span className="text-gray-600 ml-2">4.8 (120)</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-500 line-through mr-2">$249.99</span>
                  <span className="text-2xl font-bold text-gray-800">$199.99</span>
                </div>
                <button className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 p-2 rounded-full">
                  <FiShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Ultra HD Smart TV"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                15% OFF
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Ultra HD Smart TV</h3>
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current opacity-30" />
                </div>
                <span className="text-gray-600 ml-2">4.6 (89)</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-500 line-through mr-2">$1,059.99</span>
                  <span className="text-2xl font-bold text-gray-800">$899.99</span>
                </div>
                <button className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 p-2 rounded-full">
                  <FiShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Ergonomic Office Chair"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                10% OFF
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Ergonomic Office Chair</h3>
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                </div>
                <span className="text-gray-600 ml-2">4.9 (210)</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-500 line-through mr-2">$279.99</span>
                  <span className="text-2xl font-bold text-gray-800">$249.99</span>
                </div>
                <button className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 p-2 rounded-full">
                  <FiShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Special Offers</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Offer 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Smartphone Pro Max"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                  Limited Time Offer
                </div>
                <h3 className="text-2xl font-bold mb-3">Smartphone Pro Max</h3>
                <div className="mb-4">
                  <span className="text-gray-500 line-through text-lg mr-2">$1,299.99</span>
                  <span className="text-3xl font-bold text-gray-800">$1,099.99</span>
                </div>
                <p className="text-gray-600 mb-6">Our flagship smartphone with pro camera system and all-day battery life.</p>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 self-start">
                  Get This Deal
                </button>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Smart Watch Series 5"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                  New Arrival
                </div>
                <h3 className="text-2xl font-bold mb-3">Smart Watch Series 5</h3>
                <div className="mb-4">
                  <span className="text-gray-500 line-through text-lg mr-2">$399.99</span>
                  <span className="text-3xl font-bold text-gray-800">$349.99</span>
                </div>
                <p className="text-gray-600 mb-6">The ultimate device for a healthy life. Now with blood oxygen app.</p>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 self-start">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Shopping Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who shop with us every day.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300">
              Shop New Arrivals
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-700 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300">
              Learn About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;