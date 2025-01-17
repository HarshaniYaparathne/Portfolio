"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Society of Computer Science Official Website - SUSL",
    description:
      "A website for the Society of Computer Science, focusing on real-time updates and interactive features.",
    link: "https://github.com/GihanSVND/SOCS-Website-Front_end",
    image: "/images/My/image.png", // Replace with the actual image path
  },
  {
    title: "AudiRAB",
    description:
      "An audiobook app featuring real-time audiobook generation, multilingual support, and AI-driven storytelling.",
    link: "https://github.com/HarshaniYaparathne/Mini-Project",
    image: "/images/My/WhatsApp Image 2025-01-17 at 1.07.28 AM.jpeg", // Replace with the actual image path
  },
  {
    title: "AGRIZONE",
    description:
      "A mobile app connecting farmers and consumers directly to ensure fair pricing, increased farmer profits, and sustainable market access.",
    link: "https://github.com/HarshaniYaparathne/iwb102-team-novices",
    image: "/images/My/WhatsApp Image 2025-01-17 at 1.40.31 AM.jpeg", // Replace with the actual image path
  },
  {
    title: "Fridge Master",
    description:
      "Fridge Master is a smart app for managing food storage, tracking inventory, and reducing waste efficiently.",
    link: "/projects/electricity-bill",
    image: "/images/My/WhatsApp Image 2025-01-17 at 1.49.05 AM.jpeg", // Replace with the actual image path
  },
  {
    title: "Cafe Zero Website",
    description:
      "A dynamic website for a cafe, showcasing menu, online orders, and event booking capabilities.",
    link: "https://github.com/HarshaniYaparathne/Coffee-web",
    image: "/images/My/WhatsApp Image 2025-01-17 at 1.11.44 AM.jpeg", // Replace with the actual image path
  },
  {
    title: "Rajarata Pawning Centre Website",
    description:
      "A responsive website developed for a pawning center, featuring Bootstrap and Tailwind CSS.",
    link: "https://github.com/LakshanShalintha/Rajarata-Pawning-Centre",
    image: "/images/My/WhatsApp Image 2025-01-17 at 1.16.49 AM.jpeg", // Replace with the actual image path
  },
];

const ProjectCard: React.FC<{
  title: string;
  description: string;
  link: string;
  image: string;
}> = ({ title, description, link, image }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-gradient-to-b from-gray-800 to-gray-700 rounded-lg shadow-xl overflow-hidden"
  >
    <Image
      src={image}
      alt={title}
      className="w-full h-64 object-cover" // Increased height for larger images
    />
    <div className="p-6">
      <h3 className="text-xl font-bold text-teal-300 mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a
        href={link}
        className="inline-block bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500 transition duration-300"
      >
        View Project
      </a>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Projects</h2>
          <p className="mt-4 text-gray-400">
            A showcase of my work, ranging from web development to mobile apps.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
