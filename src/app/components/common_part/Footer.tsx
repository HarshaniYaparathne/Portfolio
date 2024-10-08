"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        
        {/* Links Section */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="h-6 w-6 hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="h-6 w-6 hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="h-6 w-6 hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-6 w-6 hover:text-blue-400 transition-colors" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-4 border-t border-blue-700 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Harshani Yaparathne. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
