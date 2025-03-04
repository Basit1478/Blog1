"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" text-black sticky top-0 z-50 shadow-md bg-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-3xl font-bold font-sans text-orange-400"
            >
              Info<span className="text-orange-800">logy</span>
            </a>
          </div>

          {/* Menu for Desktop */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-orange-400">
              Home
            </a>
            <a href="/about" className="hover:text-orange-400">
              About
            </a>
            <a href="/blogs" className="hover:text-orange-400">
              Blogs
            </a>
            <a href="/new" className="hover:text-orange-400">
              New
            </a>
            <a href="/latest" className="hover:text-orange-400">
              Latest
            </a>
            <a href="/informative" className="hover:text-orange-400">
              Informative
            </a>
            <a href="/authors" className="hover:text-orange-400">
             Authors
            </a>
            <a href="/contact" className="hover:text-orange-400">
              Contact
            </a>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <a
              href="/signin"
              className="px-4 py-2 bg-orange-700 text-black hover:bg-yellow-800 hover:text-orange-400 rounded-full text-sm font-semibold "
            >
              Sign In
            </a>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-orange-500 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-800"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-600"
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-600"
            >
              About
            </a>
            <a
              href="/blogs"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-600"
            >
              Blogs
            </a>
            <a
              href="/new"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-600"
            >
             New
            </a>
            <a
              href="/latest"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-600"
            >
              Latest
            </a>
            <a
              href="/informative"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-600"
            >
            Informative
            </a>
            <a
              href="/authors"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-600"
            >
              Authors
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-600"
            >
              Contact
            </a>
            <a
              href="/signin"
              className="block px-3 py-2 bg-orange-500 rounded-full text-base text-white font-medium text-center hover:bg-orange-600"
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
