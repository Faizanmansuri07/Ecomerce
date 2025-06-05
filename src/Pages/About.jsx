import { FiUsers, FiAward, FiShoppingBag, FiHeart, FiCheck } from 'react-icons/fi';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80')"
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            From a small idea to becoming your favorite shopping destination
          </p>
        </div>
      </div>

      {/* Our Journey */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right">
                  <h3 className="text-xl font-bold mb-2">2015 - Humble Beginnings</h3>
                  <p className="text-gray-600">
                    Founded in a small garage with just 5 products and a big dream to change e-commerce
                  </p>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-indigo-600 rounded-full items-center justify-center text-white font-bold mx-4">
                  1
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Our first office" 
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:order-last text-left">
                  <h3 className="text-xl font-bold mb-2">2018 - First Milestone</h3>
                  <p className="text-gray-600">
                    Reached 10,000 customers and expanded our product catalog to 200+ items
                  </p>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-indigo-600 rounded-full items-center justify-center text-white font-bold mx-4">
                  2
                </div>
                <div className="md:w-1/2 md:pl-12 md:pr-12 md:order-first">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Team celebration" 
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right">
                  <h3 className="text-xl font-bold mb-2">2022 - National Recognition</h3>
                  <p className="text-gray-600">
                    Won "Best E-commerce Platform" award and expanded our team to 50+ members
                  </p>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-indigo-600 rounded-full items-center justify-center text-white font-bold mx-4">
                  3
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Award ceremony" 
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:order-last text-left">
                  <h3 className="text-xl font-bold mb-2">2023 - Today</h3>
                  <p className="text-gray-600">
                    Serving 250,000+ happy customers with 10,000+ products and nationwide shipping
                  </p>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-indigo-600 rounded-full items-center justify-center text-white font-bold mx-4">
                  4
                </div>
                <div className="md:w-1/2 md:pl-12 md:pr-12 md:order-first">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="Modern office" 
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Promise */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Promise to You</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FiCheck className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Quality Guaranteed</h3>
              <p className="text-gray-600 text-center">
                Every product is carefully vetted and backed by our satisfaction guarantee
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FiCheck className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Fast Shipping</h3>
              <p className="text-gray-600 text-center">
                95% of orders ship within 24 hours with real-time tracking
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FiCheck className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">24/7 Support</h3>
              <p className="text-gray-600 text-center">
                Our customer service team is always ready to help with any questions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Become Part of Our Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their shopping needs
          </p>
          <button className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300">
            Start Shopping Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;