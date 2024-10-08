"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AudiRAB",
    description:
      "An audiobook app featuring real-time audiobook generation, multilingual support, and AI-driven storytelling.",
    link: "/projects/audirab",
  },
  {
    title: "Self-Reading Electricity Bill",
    description:
      "A mobile app enabling users to self-read electricity meters, featuring image recognition and bill generation.",
    link: "/projects/electricity-bill",
  },
  {
    title: "Sinhala Text Recognition",
    description:
      "An OCR system capable of recognizing Sinhala text, optimized for 'Nirmala UI' and 'Iskoola Pota' fonts.",
    link: "/projects/sinhala-ocr",
  },
  {
    title: "Society of Computer Science Official Website - SUSL",
    description:
      "A website for the Society of Computer Science, focusing on real-time updates and interactive features.",
    link: "/projects/socs-website",
  },
  {
    title: "Rajarata Pawning Centre Website",
    description:
      "A responsive website developed for a pawning center, featuring Bootstrap and Tailwind CSS.",
    link: "/projects/rajarata-pawning",
  },
  {
    title: "Cafe Zero Website",
    description:
      "A dynamic website for a cafe, showcasing menu, online orders, and event booking capabilities.",
    link: "/projects/cafe-zero",
  },
];

const ProjectCard: React.FC<{
  title: string;
  description: string;
  link: string;
}> = ({ title, description, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300"
  >
    <h3 className="text-blue-900 text-xl font-bold mb-2">{title}</h3>
    <p className="text-blue-700 mb-4">{description}</p>
    <a
      href={link}
      className="text-white bg-gradient-to-br from-blue-500 to-blue-700 py-2 px-4 rounded-full hover:bg-blue-800 transition-all duration-300"
    >
      View Project
    </a>
  </motion.div>
);

const Projects: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-blue-900 text-5xl sm:text-6xl font-extrabold">My Projects</h1>
          <p className="text-blue-700 text-lg mt-4">
            Here are some of the projects I have worked on. Click on each to learn more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
