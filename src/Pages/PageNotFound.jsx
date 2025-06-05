import { FiFrown, FiHome, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Illustration Header */}
        <div className="bg-indigo-600 p-8 text-center">
          <div className="inline-flex items-center justify-center bg-white rounded-full p-4 mb-4">
            <FiFrown className="text-indigo-600 text-4xl" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">404 Error</h1>
          <p className="text-indigo-100">Page Not Found</p>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <p className="text-gray-600 mb-6">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-4">
            <Link
              to="/"
              className=" w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
            >
              <FiHome className="mr-2" />
              Go to Homepage
            </Link>

            <Link
              to="/search"
              className=" w-full border border-gray-300 hover:border-indigo-400 text-gray-700 font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
            >
              <FiSearch className="mr-2" />
              Search Our Site
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 text-center">
          <p className="text-sm text-gray-500">
            Need help? <Link to="/contact" className="text-indigo-600 hover:underline">Contact our support team</Link>
          </p>
        </div>
      </div>

      {/* Optional decorative elements */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 text-sm">
          Or try these helpful links:
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link to="/products" className="text-indigo-600 hover:underline text-sm">Products</Link>
          <Link to="/about" className="text-indigo-600 hover:underline text-sm">About Us</Link>
          <Link to="/blog" className="text-indigo-600 hover:underline text-sm">Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;