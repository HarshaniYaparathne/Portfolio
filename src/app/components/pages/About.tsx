"use client";
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-blue-900 text-5xl sm:text-6xl font-extrabold">About Me</h1>
          <p className="text-blue-700 text-lg mt-4">
            I’m Harshani Yaparathne, a passionate Web and Mobile Developer. I thrive on solving
            challenges and delivering seamless user experiences with cutting-edge technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-blue-900 text-2xl font-bold">Experience</h2>
            <p className="mt-4 text-blue-700">
              With over 5 years of experience in Web Development, I have honed my skills in
              JavaScript, React, and building efficient, scalable applications.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-blue-900 text-2xl font-bold">Skills</h2>
            <p className="mt-4 text-blue-700">
              JavaScript, React, Next.js, TypeScript, Tailwind CSS, Node.js, Mobile App Development,
              and more.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
        >
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-blue-900 text-2xl font-bold">Education</h2>
            <p className="mt-4 text-blue-700">
              Bachelor of Science in Computer Science from XYZ University, where I developed a strong
              foundation in software engineering and project management.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-blue-900 text-2xl font-bold">Interests</h2>
            <p className="mt-4 text-blue-700">
              In my spare time, I enjoy exploring new technologies, contributing to open-source projects,
              and enhancing my skills in UI/UX design.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-lg rounded-lg p-6 mt-8"
        >
          <h2 className="text-blue-900 text-2xl font-bold">Contact</h2>
          <p className="mt-4 text-blue-700">
            Feel free to reach out to me via email at <a href="mailto:your-email@example.com" className="text-blue-600 underline">your-email@example.com</a> or connect with me on 
            <a href="https://linkedin.com/in/your-linkedin" className="text-blue-600 underline"> LinkedIn</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
