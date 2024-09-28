"use client";
import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 p-4 w-full fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-6">
          <li>
            <Link href="/#about" className="text-white hover:text-gray-400">
              AboutMe
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="text-white hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
