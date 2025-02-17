"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 bg-gradient-to-b from-black to-transparent z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-semibold tracking-wider">YMHD</div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href="#home" className="text-gray-300 hover:text-teal-400 text-lg font-medium transition-colors duration-200">
            Home
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-teal-400 text-lg font-medium transition-colors duration-200">
            About
          </Link>
          <Link href="#project" className="text-gray-300 hover:text-teal-400 text-lg font-medium transition-colors duration-200">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-teal-400 text-lg font-medium transition-colors duration-200">
            Contact
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 transition-transform duration-300">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link href="#home" className="text-gray-300 hover:text-teal-400 text-lg font-medium transition-colors duration-200" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-teal-400 text-lg font-medium transition-colors duration-200" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#project" className="text-gray-300 hover:text-teal-400 text-lg font-medium transition-colors duration-200" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-teal-400 text-lg font-medium transition-colors duration-200" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
