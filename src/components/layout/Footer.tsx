import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-100">
      <div className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div>
            <h2 className="text-2xl font-bold">BookNest</h2>
            <p className="mt-3 text-gray-300 text-sm">
              Discover your next favorite book at BookNest. We offer a diverse collection of literature to enrich your mind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/products" className="hover:text-yellow-400">Books</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-yellow-400">FAQs</Link></li>
              <li><Link to="/support" className="hover:text-yellow-400">Support</Link></li>
              <li><Link to="/returns" className="hover:text-yellow-400">Return Policy</Link></li>
              <li><Link to="/terms" className="hover:text-yellow-400">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <p className="text-sm text-gray-300 mb-3">Get updates on new arrivals and exclusive offers.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered bg-gray-800 text-gray-100 border-gray-600 focus:border-yellow-400 w-full sm:w-auto"
              />
              <button className="btn bg-yellow-500 text-blue-900 hover:bg-yellow-600 w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} BookNest. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link to="/privacy" className="hover:text-yellow-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-yellow-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
