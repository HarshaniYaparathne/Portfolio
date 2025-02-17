"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBriefcase, FaTools, FaGraduationCap, FaHeart } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-gray-200">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Passionate Software Engineer creating impactful solutions that blend
            technology and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center items-center"
          >
            <motion.div
              className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-lg border-4 border-teal-500 relative" // Added relative for positioning overlay
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/My/WhatsApp Image 2025-01-17 at 1.31.35 AM.jpeg"
                alt="Harshani Yaparathne"
                className="object-cover w-full h-full"
                width={400}
                height={400}
                priority 
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h2 className="text-2xl font-bold text-teal-400">Who Am I?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a dedicated software engineering student focused on creating
              scalable, efficient, and user-centered applications. With a
              strong foundation in system design, development, and debugging, I
              take pride in writing clean, maintainable code.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I enjoy solving complex problems through innovative approaches
              and delivering impactful solutions that address real-world
              challenges effectively. I am eager to contribute my skills to
              meaningful projects and collaborate with teams to create
              sustainable software solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          <MotionDivWithAnimation className="bg-gradient-to-b from-gray-700 to-gray-600 p-8 rounded-lg shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <FaBriefcase className="text-3xl text-teal-400" />
              <h2 className="text-2xl font-bold text-teal-400">Experience</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              My work focuses on creating intuitive, scalable, and innovative
              solutions. I enjoy solving problems with clean and maintainable
              code, and always strive to make user-centered designs come to
              life.
            </p>
          </MotionDivWithAnimation>

          <MotionDivWithAnimation className="bg-gradient-to-b from-gray-700 to-gray-600 p-8 rounded-lg shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <FaTools className="text-3xl text-teal-400" />
              <h2 className="text-2xl font-bold text-teal-400">Skills</h2>
            </div>
            <ul className="text-gray-300 list-disc pl-5 leading-relaxed">
              <li>Programming: C, JavaScript, Python, TypeScript</li>
              <li>Web Development: React, Next.js, Tailwind CSS</li>
              <li>Mobile Development: Flutter</li>
              <li>Database Management: MySQL, MongoDB</li>
              <li>Tools: Figma, Firebase, Git, Trello</li>
            </ul>
          </MotionDivWithAnimation>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <MotionDivWithAnimation className="bg-gradient-to-b from-gray-700 to-gray-600 p-8 rounded-lg shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <FaGraduationCap className="text-3xl text-teal-400" />
              <h2 className="text-2xl font-bold text-teal-400">Education</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              B.Sc (Hons) in Computing & Information Systems
              <br />
              Sabaragamuwa University of Sri Lanka (2022 – Present)
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              GCE A/L in Physical Science
              <br />
              Mahamaya Girls&apos; College, Kandy (2020)
            </p>
          </MotionDivWithAnimation>

          <MotionDivWithAnimation className="bg-gradient-to-b from-gray-700 to-gray-600 p-8 rounded-lg shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <FaHeart className="text-3xl text-teal-400" />
              <h2 className="text-2xl font-bold text-teal-400">Interests.</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Outside of work, I enjoy exploring emerging technologies,
              contributing to open-source projects, and honing my skills in
              design and development. I&apos;m also passionate about writing and
              teaching technical concepts.
            </p>
          </MotionDivWithAnimation>
        </div>
      </div>
    </section>
  );
};

const MotionDivWithAnimation = ({ ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    {...props}
  >
  </motion.div>
);

export default About;