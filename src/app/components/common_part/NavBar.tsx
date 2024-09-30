"use client"; // Ensure it's a client component

import React, { useState } from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 bg-transperent p-3 h-20 w-full justify-center backdrop-blur-md">
      {/* Adjusted height with h-16 and padding with p-3 */}
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Container is set to full height */}
        <div className="text-white text-xl font-bold ml-12">YMHD</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-5 h-5"  // Adjusted the size of the menu icon
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
        <div className={`flex-col md:flex-row md:flex ${isOpen ? "block" : "hidden"} space-x-6 mr-[750px]`}>
          {/* Increased spacing between items with space-x-6 */}
          <Link href="#home" className="text-white hover:text-gray-400 text-lg">
            Home
          </Link>
          <Link href="#about" className="text-white hover:text-gray-400 text-lg">
            About
          </Link>
          <Link href="#projects" className="text-white hover:text-gray-400 text-lg">
            Projects
          </Link>
          <Link href="#contact" className="text-white hover:text-gray-400 text-lg">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
