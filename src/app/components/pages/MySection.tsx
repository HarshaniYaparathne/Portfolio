"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const MySection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 min-h-screen flex items-center justify-center py-16">
      <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-screen-lg gap-12">

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 flex flex-col justify-center text-left space-y-6"
          >
            <h1 className="text-white text-5xl sm:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-teal-500 to-blue-400 text-transparent bg-clip-text">
                Hello, I&rsquo;m
              </span>
            </h1>
            <div className="text-gray-200 text-3xl sm:text-4xl">
              <TypeAnimation
                sequence={[
                  "Harshani Yaparathne",
                  1000,
                  "Software Engineer",
                  1000,
                  "Frontend Developer",
                  1000,
                ]}
                wrapper="div"
                speed={50}
                style={{ fontSize: "1.2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            I am a dedicated software engineering student focused on creating scalable, efficient, and user-centered applications. My academic background and project experience have provided me with strong skills in system design, development, and debugging.  

I take pride in writing clean, maintainable code and enjoy solving complex problems through innovative approaches. By combining technical expertise with an eye for practicality, I aim to deliver solutions that address real-world challenges effectively.  

I am motivated to contribute my skills to meaningful projects and collaborate with teams to create impactful and sustainable software solutions. 
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 hover:bg-teal-700 text-white text-center transition-all duration-300"
              >
                Contact Me
              </Link>
              <a
                href="CV\SE_20APC4579_Harshani.pdf"
                download="Harshani_Yaparathne.pdf"
                className="px-6 py-3 rounded-full border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white text-center transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 flex justify-center items-center"
          >
            <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[410px] lg:h-[410px] rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/My/prop.png"
                alt="Harshani Yaparathne"
                className="object-cover w-full h-full"
                width={350}
                height={350}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MySection;
