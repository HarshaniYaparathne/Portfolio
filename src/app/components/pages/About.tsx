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
          I&apos;m Harshani Yaparathne, a Software Engineer passionate about building efficient and user-friendly applications. 
          I focus on clean, scalable code and robust system architecture, ensuring seamless and reliable performance. 
          By leveraging modern tools and technologies, I create software solutions that align with user needs and support business goals effectively.
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
            With over 5 years of experience in UI/UX design, I have honed my skills in creating user-centric interfaces 
            and enhancing user interactions. Proficient in design tools like Figma and Adobe XD, I specialize in crafting 
            wireframes, prototypes, and visually engaging designs that deliver exceptional user experiences across web 
            and mobile platforms.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-blue-900 text-2xl font-bold">Skills</h2>
            <p className="mt-4 text-blue-700">
            Programming Languages: C, JavaScript, Java, TypeScript, PHP, Python, HTML, CSS<br></br>
Web Development: Next.js, ReactJS, Tailwind CSS<br />
Mobile App Development: Flutter<br />
Database Management: MySQL, MongoDB, SQL<br />
Technologies & Tools: Canva, Firebase, Figma, Trello, Github
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
            B.Sc (Hons) in Computing & Information Systems
              Sabaragamuwa University of Sri Lanka
              2022 – Present<br />
              GCE A/L Examination in Physical Science Stream
                Mahamaya Girls&apos; College, Kandy
                2019
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
            Feel free to reach out to me via email at <a href="mailto:harshanidyaparathne@gmail.com" className="text-blue-600 underline">harshanidyaparathne@gmail.com</a> or connect with me on 
            <a href="https://www.linkedin.com/in/harshani-yaparathne-803284269/" className="text-blue-600 underline"> LinkedIn</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
