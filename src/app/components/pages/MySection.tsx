"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const MySection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative z-10 w-full h-full flex items-center justify-center ml-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 flex flex-col justify-center items-start text-center sm:text-left px-8"
          >
            <h1 className="text-white text-5xl sm:text-6xl lg:text-6xl mb-4 font-extrabold mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b171d1] to-[#ee2dc8]">
                Hello, I'm
              </span>
            </h1>
            <div className="text-white text-3xl sm:text-4xl lg:text-4xl mt-4">
              <TypeAnimation
                sequence={[
                  "Harshani Yaparathne",
                  1000,
                  "Web Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                ]}
                wrapper="div"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl mt-2">
              I bring energy and self-motivation to every task. I excel as a
              collaborative team member, contributing to the success of the
              company while pursuing continuous personal and professional
              growth. With dedication and ambition, I am enthusiastic about
              embracing new knowledge and prepared to tackle any challenges that
              arise, all while maintaining a positive approach to achieve
              expected outcomes.
            </p>
            <div>
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#a481b6] via-[#db37e1] to-[#ee2dc8] hover:bg-slate-200 text-white"
              >
                Contact Me
              </Link>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#a481b6] via-[#db37e1] to-[#ee2dc8] hover:bg-slate-800 text-white mt-3 justify-center">
                <a href="/CV/Harshani Yaparathne.pdf" download="Harshani Yarathne.pdf">
                  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2">
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
            className="col-span-1 flex justify-center items-center mt-4 lg:mt-0 mr-32"
          >
            <div className="rounded-full w-[250px] h-[250px] lg:w-[410px] lg:h-[410px] relative">
              <Image
                src="/images/My/My.jpg"
                alt="My image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
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
