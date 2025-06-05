import { FiShoppingCart, FiTrash2, FiPlus, FiMinus, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeCart } = useCart();

  function handleChange(id, change) {
    if(change < 1) {
      removeCart(id)
    } else {
      updateQuantity(id, change)
    }
  }

  // Calculate order summary values
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // Example: 10% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/products" className="flex items-center text-indigo-600 hover:text-indigo-800">
            <FiArrowLeft className="mr-2" /> Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold flex items-center">
            <FiShoppingCart className="mr-3" /> Your Cart
            {cart.length > 0 && (
              <span className="ml-2 bg-indigo-600 text-white text-sm px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </h1>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <FiShoppingCart className="mx-auto text-gray-300" size={64} />
            <h2 className="text-2xl font-bold mt-4 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet</p>
            <Link 
              to="/products" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {cart.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm p-6 mb-6 hover:shadow-md transition duration-300">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/4 mb-4 sm:mb-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-40 object-contain rounded-lg"
                      />
                    </div>
                    <div className="sm:w-3/4 sm:pl-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                          <p className="text-gray-600 mb-2">Category: {item.category}</p>
                          <p className="text-green-600 font-medium mb-4">In Stock</p>
                        </div>
                        <button 
                          onClick={() => removeCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <FiTrash2 size={20} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border rounded-lg overflow-hidden">
                          <button 
                            onClick={() => handleChange(item.id, item.quantity -1)}
                            
                            className={`px-3 py-1 ${item.quantity <= 1 ? 'bg-gray-100 text-gray-400 ' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
                          >
                            <FiMinus />
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600"
                          >
                            <FiPlus />
                          </button>
                        </div>
                        <p className="text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
                <h2 className="text-2xl font-bold mb-6 pb-4 border-b">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cart.length} {cart.length === 1 ? 'item' : 'items'})</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-xl font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-2">Promo Code</label>
                  <div className="flex">
                    <input 
                      type="text" 
                      id="promo" 
                      placeholder="Enter code" 
                      className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                    />
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700">
                      Apply
                    </button>
                  </div>
                </div>

                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition duration-300 mb-4">
                  Proceed to Checkout
                </button>

                <div className="text-center text-sm text-gray-500">
                  <p>or</p>
                  <Link to="/" className="text-indigo-600 hover:text-indigo-800">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;