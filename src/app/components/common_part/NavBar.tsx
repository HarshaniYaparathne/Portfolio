"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-5 bg-transparent backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-blue-500 text-2xl font-bold tracking-wide">
          YMHD
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-500">
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
        <div className={`md:flex space-x-8 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link href="#home" className="text-blue-500 hover:text-gray-400 text-lg">
            Home
          </Link>
          <Link href="#about" className="text-blue-500 hover:text-gray-400 text-lg">
            About
          </Link>
          <Link href="#project" className="text-blue-500 hover:text-gray-400 text-lg">
            Projects
          </Link>
          <Link href="#contact" className="text-blue-500 hover:text-gray-400 text-lg">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
