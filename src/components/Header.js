import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FaHeart , FaBars} from 'react-icons/fa';
import cartLogo from '../assets/Cart-Logo (2).png';

const Header = ({ searchQuery, onSearchChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (window.innerWidth < 1024) {
        setDropdownOpen(null); 
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <header className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white fixed top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center">
            <img
              src={cartLogo}
              alt="Cart Logo"
              className="h-14 w-10 object-contain"
            />
            <span className="ml-2 text-2xl font-bold tracking-wide">
              ProductApp
            </span>
          </Link>
        </div>

        {isDesktop ? (
          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className="hover:text-teal-200 transition text-xl"
            >
              Home
            </Link>

            <div className="relative group">
              <button
                className="hover:text-teal-200 transition text-xl"
              >
                Products
              </button>
              <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg">
                <Link
                  to="/category1"
                  className="block px-4 py-2 hover:bg-teal-100 transition"
                >
                  Category 1
                </Link>
                <Link
                  to="/category2"
                  className="block px-4 py-2 hover:bg-teal-100 transition"
                >
                  Category 2
                </Link>
                <Link
                  to="/category3"
                  className="block px-4 py-2 hover:bg-teal-100 transition"
                >
                  Category 3
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button
                className="hover:text-teal-200 transition text-xl"
              >
                Services
              </button>
              <div className="absolute hidden group-hover:block mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg">
                <Link
                  to="/service1"
                  className="block px-4 py-2 hover:bg-teal-100 transition"
                >
                  Service 1
                </Link>
                <Link
                  to="/service2"
                  className="block px-4 py-2 hover:bg-teal-100 transition"
                >
                  Service 2
                </Link>
              </div>
            </div>

           
            <Link
              to="/cart"
              className="flex items-center hover:text-teal-200 transition text-xl"
            >
              <FaHeart className="mr-1" />
              Favorites
            </Link>
          </nav>
        ) : (
          <button
            className="lg:hidden flex items-center text-2xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBars />
          </button>
        )}

        <div className="hidden lg:block relative w-1/5">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-full bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          />
        </div>
      </div>

      {isMobileMenuOpen && !isDesktop && (
        <div className="lg:hidden bg-teal-600 ">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              to="/"
              className="hover:text-teal-200 transition text-xl"
            >
              Home
            </Link>

            <div className="relative">
              <button
                className="hover:text-teal-200 transition text-xl"
                onClick={() => toggleDropdown('mobileProducts')}
              >
                Products
              </button>
              {dropdownOpen === 'mobileProducts' && (
                <div className="bg-white text-gray-800 rounded-md shadow-lg">
                  <Link
                    to="/category1"
                    className="block px-4 py-2 hover:bg-teal-100 transition"
                  >
                    Category 1
                  </Link>
                  <Link
                    to="/category2"
                    className="block px-4 py-2 hover:bg-teal-100 transition"
                  >
                    Category 2
                  </Link>
                  <Link
                    to="/category3"
                    className="block px-4 py-2 hover:bg-teal-100 transition"
                  >
                    Category 3
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="hover:text-teal-200 transition text-xl"
                onClick={() => toggleDropdown('mobileServices')}
              >
                Services
              </button>
              {dropdownOpen === 'mobileServices' && (
                <div className="bg-white text-gray-800 rounded-md shadow-lg mt-2">
                  <Link
                    to="/service1"
                    className="block px-4 py-2 hover:bg-teal-100 transition"
                  >
                    Service 1
                  </Link>
                  <Link
                    to="/service2"
                    className="block px-4 py-2 hover:bg-teal-100 transition"
                  >
                    Service 2
                  </Link>
                </div>
              )}
            </div>

            
            <Link
              to="/cart"
              className="flex items-center hover:text-teal-200 transition text-xl"
            >
              <FaHeart className="mr-1" />
              Favorites
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
