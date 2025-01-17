"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const MySection = () => {
  return (
    <section className="bg-black text-gray-300 min-h-screen flex items-center justify-center py-16">
      <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-screen-xl gap-12">

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-1 flex flex-col justify-center space-y-6 text-left"
          >
            <h1 className="text-white text-5xl sm:text-6xl font-bold leading-tight">
              Hello! I&rsquo;m{" "}
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
                Harshani Yaparathne
              </span>
            </h1>
            <div className="text-gray-200 text-2xl sm:text-3xl">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Frontend Developer",
                  2000,
                ]}
                wrapper="div"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a dedicated software engineering student focused on creating
              scalable, efficient, and user-centered applications. My academic
              background and project experience have provided me with strong
              skills in system design, development, and debugging. I aim to
              deliver impactful solutions that address real-world challenges
              effectively.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/#contact"
                className="px-6 py-3 rounded-full bg-teal-500 text-white text-lg hover:bg-teal-600 transition-all duration-300"
              >
                Contact Me
              </Link>
              <a
                href="/CV/CV_Harshani Yaparathne.pdf"
                download="Harshani_Yaparathne.pdf"
                className="px-6 py-3 rounded-full border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white text-lg transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 10 }}
            transition={{ duration: 0.8 }}
            className="col-span-1 flex justify-center items-center"
          >
            <div className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden shadow-lg border-4 border-black">
              <Image
                src="/images/My/bbb new.png"
                alt="Harshani Yaparathne"
                className="object-cover w-full h-full"
                width={450}
                height={450}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MySection;
