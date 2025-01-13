"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const MySection = () => {
  return (
    <section className="bg-gray-900 text-gray-300 min-h-screen flex items-center justify-center">
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full max-w-screen-lg px-4">

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 flex flex-col justify-start items-start text-left mt-8 space-y-4"
          >
            <h1 className="text-gray-100 text-5xl sm:text-6xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                Hello, I&rsquo;m
              </span>
            </h1>
            <div className="text-gray-200 text-3xl sm:text-4xl lg:text-4xl">
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
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl text-justify">
              I&apos;m a motivated software engineer focused on creating efficient, scalable, and user-friendly solutions.
              I thrive in collaborative environments, dedicated to clean code and leveraging skills in development,
              debugging, and system design to solve complex challenges. I stay current with industry trends to ensure
              solutions meet user needs and drive business success.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/#contact"
                className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white text-center transition-all duration-300"
              >
                Contact Me
              </Link>
              <a
                href="/CV/Harshani Yaparathne.pdf"
                download="Harshani Yaparathne.pdf"
                className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white text-center transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 flex justify-center items-center mt-4 lg:mt-0 sm:justify-end"
          >
            <div className="rounded-full w-[250px] h-[250px] lg:w-[410px] lg:h-[410px] relative shadow-lg bg-gray-800">
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
