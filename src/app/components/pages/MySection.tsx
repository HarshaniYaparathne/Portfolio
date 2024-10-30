"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const MySection = () => {
  return (
    <section>
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full max-w-screen-lg">

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 flex flex-col justify-start items-start text-left pl-6 pr-4 mt-8" // Adjusted left padding
          >
            <h1 className="text-blue-900 text-5xl sm:text-6xl lg:text-6xl mb-4 font-extrabold mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Hello, I&rsquo;m
              </span>
            </h1>
            <div className="text-blue-800 text-3xl sm:text-4xl lg:text-4xl mt-4">
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
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <p className="text-blue-700 text-base sm:text-lg mb-6 lg:text-xl mt-2 text-justify">
            I'm a motivated software engineer focused on creating efficient, scalable, and user-friendly solutions. 
            I thrive in collaborative environments, dedicated to clean code and leveraging skills in development, 
            debugging, and system design to solve complex challenges. I stay current with industry trends to ensure 
            solutions meet user needs and drive business success.
            </p>
            <div>
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-blue-800 text-white"
              >
                Contact Me
              </Link>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-blue-800 text-white mt-3 justify-center">
                <a href="/CV/Harshani Yaparathne.pdf" download="Harshani Yaparathne.pdf">
                  <span className="block rounded-full px-6 py-3 bg-white text-blue-700 border-2 border-blue-600 hover:bg-blue-700 hover:text-white">
                    Download CV
                  </span>
                </a>
              </button>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 flex justify-center items-center mt-4 lg:mt-0 sm:justify-end"
          >
            <div className="rounded-full w-[250px] h-[250px] lg:w-[410px] lg:h-[410px] relative shadow-lg bg-white">
              <Image
                src="/images/My/InShot_20230102_071900024.jpg"
                alt="My image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
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
