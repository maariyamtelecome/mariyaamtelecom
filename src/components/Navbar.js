import { useState } from 'react';
import { Linkedin, Facebook, MessageCircle, X, Menu, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-indigo-900 backdrop-blur-md px-4 sm:px-6 py-4">
        <div className="max-w-9xl mx-auto flex items-center justify-between">

          {/* LEFT — LOGO */}
          <div className="text-lg sm:text-xl">
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/assets/logo3.png" // Replace with your logo path
                alt="Logo"
                className="h-8 w-auto sm:h-10" // Adjust the height as needed
                style={{ width: "60px", height: "56px", marginRight: "15px" }}
              />
              <div className='flex hide-brand-text'>
                <span className="text-[25px] text-gray-400">MARIYAAM</span>
                <span className='text-[25px] text-yellow-400 ml-2'>TELECOM</span>
              </div>
            </Link>
          </div>


          {/* CENTER — DESKTOP MENU */}
          <ul className="hidden lg:flex items-center space-x-8 lg:space-x-10 text-white font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-gray-300 transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-gray-300 transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-gray-300 transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/faq"
                className="hover:text-gray-300 transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>
          </ul>

          {/* RIGHT — DESKTOP SOCIAL ICONS */}
          <div className="hidden lg:flex items-center space-x-3 lg:space-x-4">
            <a
              href="https://wa.me/447476680398"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:-translate-y-1 transition-transform duration-200 group"
            >
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                <MessageCircle className="text-white w-5 h-5" />
              </div>
            </a>


            <a
              href="https://www.linkedin.com/in/arshad-khan-7481482b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:-translate-y-1 transition-transform duration-200 group"
            >              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                <Linkedin className="text-white w-5 h-5" />
              </div>
            </a>

            <a
              href="https://t.me/mariyaamtelecom"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:-translate-y-1 transition-transform duration-200 group"
            >
              <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                <Send className="text-white w-5 h-5" />
              </div>
            </a>


            <a
              href="https://www.facebook.com/mariyaamtelecom?rdid=a09H8QZ4bBYr27LW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Hx4ZydpPs%2F#" className="transform hover:-translate-y-1 transition-transform duration-200 group">
              <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                <Facebook className="text-white w-5 h-5" />
              </div>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-indigo-900/95 backdrop-blur-lg transform transition-transform duration-300 z-50 lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >

        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="text-xl font-bold text-white">
            Menu
          </div>
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex-1 flex flex-col p-4 pt-6 overflow-y-auto" style={{ backgroundColor: "#312e81" }}>
          {/* Mobile Navigation Links */}
          <nav className="space-y-4 mb-8">
            <Link
              to="/"
              className="block py-3 px-4 text-white font-medium text-lg rounded-lg hover:bg-white/10 transition-colors duration-200 border-l-4 border-transparent hover:border-emerald-400"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block py-3 px-4 text-white font-medium text-lg rounded-lg hover:bg-white/10 transition-colors duration-200 border-l-4 border-transparent hover:border-emerald-400"
              onClick={closeMobileMenu}
            >
              About
            </Link>

            <Link
              to="/services"
              className="block py-3 px-4 text-white font-medium text-lg rounded-lg hover:bg-white/10 transition-colors duration-200 border-l-4 border-transparent hover:border-emerald-400"
              onClick={closeMobileMenu}
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="block py-3 px-4 text-white font-medium text-lg rounded-lg hover:bg-white/10 transition-colors duration-200 border-l-4 border-transparent hover:border-emerald-400"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>

            <Link
              to="/faq"
              className="block py-3 px-4 text-white font-medium text-lg rounded-lg hover:bg-white/10 transition-colors duration-200 border-l-4 border-transparent hover:border-emerald-400"
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>
          </nav>

          {/* Mobile Social Icons */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider">Connect With Us</h3>
            </div>

            <div className="flex justify-center space-x-4">
              <a
                href="https://wa.me/447476680398"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 transition-transform duration-200 group p-2 rounded-lg hover:bg-white/10"
                onClick={closeMobileMenu}
              >
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                  <MessageCircle className="text-white w-5 h-5" />
                </div>
              </a>


              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/arshad-khan-7481482b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="transform hover:-translate-y-1 transition-transform duration-200 group p-2 rounded-lg hover:bg-white/10"
                onClick={closeMobileMenu}
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                  <Linkedin className="text-white w-5 h-5" />
                </div>
              </a>

              <a
                href="https://t.me/mariyaamtelecom"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 transition-transform duration-200 group p-2 rounded-lg hover:bg-white/10"
                onClick={closeMobileMenu}
              >
                <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                  <Send className="text-white w-5 h-5" />
                </div>
              </a>


              <a
                href="/"
                className="transform hover:-translate-y-1 transition-transform duration-200 group p-2 rounded-lg hover:bg-white/10"
                onClick={closeMobileMenu}
              >
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
                  <Facebook className="text-white w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
      @media (max-width: 391px) {
  .hide-brand-text {
    display: none;
  }
}

      `}

      </style>
    </>
  );
};

export default Navbar;  
