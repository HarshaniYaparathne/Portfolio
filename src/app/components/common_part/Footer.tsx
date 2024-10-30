"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        
        {/* Links Section */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="#project" className="hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Contact Icons */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://github.com/HarshaniYaparathne" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-6 w-6 hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/harshani-yaparathne-803284269/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="h-6 w-6 hover:text-blue-400 transition-colors" />
          </a>
          <a href="mailto:harshanidyaparathne@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="h-6 w-6 hover:text-blue-400 transition-colors" />
          </a>
          <a href="tel:+94770856542" target="_blank" rel="noopener noreferrer">
            <FaPhone className="h-6 w-6 hover:text-blue-400 transition-colors" />
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