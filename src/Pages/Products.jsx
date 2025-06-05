import React, { useState } from 'react';
import { useProduct } from '../Context/ProductContext';
import { FiShoppingCart, FiStar, FiSearch } from 'react-icons/fi';
import { useCart } from '../Context/CartContext';

function Products() {
  const { products } = useProduct();
  const { addToCart } = useCart();

  const [text, setText] = useState("");
  const [option, setOption] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesText = product.title.toLowerCase().includes(text.toLowerCase());
    const matchesCategory = option === "" || product.category === option;
    return matchesText && matchesCategory;
  });
  console.log(filteredProducts);
  

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-12 border-b border-gray-200 pb-6">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Products</h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Quality items you'll love</p>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row gap-4">
        {/* Search Bar */}
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search products..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Category Filter */}
        <div className="w-full sm:w-48">
          <select
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
          >
            {/* Product Image */}
            <div className="relative pb-[100%] overflow-hidden border-b border-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="absolute h-full w-full object-contain p-4 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-1 line-clamp-2">{product.title}</h3>

              {/* Rating */}
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`${i < Math.round(product.rating.rate) ? 'fill-current' : ''}`}
                      size={16}
                    />
                  ))}
                </div>
                <span className="text-gray-500 text-sm ml-1">({product.rating.count})</span>
              </div>

              {/* Price & Add to Cart */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                <button
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                  onClick={() => addToCart(product)}
                >
                  <FiShoppingCart className="mr-2" size={16} />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
