"use client";
import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-4 w-full fixed top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-end items-center">
        <ul className="flex space-x-12">
          <li>
            <Link
              href="/#about"
              className="text-white text-2xl font-semibold hover:text-blue-300 transition duration-300 ease-in-out "
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className="text-white text-2xl font-semibold hover:text-blue-300 transition duration-300 ease-in-out "
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="text-white text-2xl font-semibold hover:text-blue-300 transition duration-300 ease-in-out "
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
