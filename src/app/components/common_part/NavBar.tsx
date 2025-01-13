"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-5 bg-gray-900 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-white text-2xl font-bold tracking-wide">
          YMHD
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <div
          className={`md:flex space-x-8 ${
            isOpen ? "block" : "hidden"
          } md:block transition-all duration-300`}
        >
          <Link
            href="#home"
            className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#project"
            className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
