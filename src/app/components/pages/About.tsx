"use client";
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 text-gray-200">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400  text-teal-400">
            About Me
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Passionate Software Engineer creating impactful solutions that blend technology and creativity.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-b from-gray-700 to-gray-600 p-8 rounded-lg shadow-xl"
          >
            <h2 className="text-2xl font-bold text-teal-400 mb-4">Experience</h2>
            <p className="text-gray-300 leading-relaxed">
              My work focuses on creating intuitive, scalable, and innovative solutions. I enjoy solving problems with clean and maintainable code, and always strive to make user-centered designs come to life.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-b from-gray-700 to-gray-600 p-8 rounded-lg shadow-xl"
          >
            <h2 className="text-2xl font-bold text-teal-400 mb-4">Skills</h2>
            <ul className="text-gray-300 list-disc pl-5 leading-relaxed">
              <li>Programming: C, JavaScript, Python, TypeScript</li>
              <li>Web Development: React, Next.js, Tailwind CSS</li>
              <li>Mobile Development: Flutter</li>
              <li>Database Management: MySQL, MongoDB</li>
              <li>Tools: Figma, Firebase, Git, Trello</li>
            </ul>
          </motion.div>
        </div>

        {/* Secondary Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-b from-gray-700 to-gray-600 p-8 rounded-lg shadow-xl"
          >
            <h2 className="text-2xl font-bold text-teal-400 mb-4">Education</h2>
            <p className="text-gray-300 leading-relaxed">
              B.Sc (Hons) in Computing & Information Systems<br />
              Sabaragamuwa University of Sri Lanka (2022 – Present)
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              GCE A/L in Physical Science<br />
              Mahamaya Girls&apos; College, Kandy (2019)
            </p>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-b from-gray-700 to-gray-600 p-8 rounded-lg shadow-xl"
          >
            <h2 className="text-2xl font-bold text-teal-400 mb-4">Interests</h2>
            <p className="text-gray-300 leading-relaxed">
              Outside of work, I enjoy exploring emerging technologies, contributing to open-source projects, and honing my skills in design and development. I&apos;m also passionate about writing and teaching technical concepts.
            </p>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-gradient-to-b from-gray-700 to-gray-600 p-8 rounded-lg shadow-xl text-center"
        >
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Let&apos;s Connect</h2>
          <p className="text-gray-300">
            Feel free to reach out at{" "}
            <a href="mailto:harshanidyaparathne@gmail.com" className="text-teal-400 underline">
              harshanidyaparathne@gmail.com
            </a>{" "}
            or connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/harshani-yaparathne-803284269/"
              className="text-teal-400 underline"
            >
              LinkedIn
            </a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
