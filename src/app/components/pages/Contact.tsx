"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <motion.h1 className="text-teal-400 text-4xl sm:text-5xl font-extrabold mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.h1>
            <p className="text-gray-400 text-lg">
              Whether you have a question, want to collaborate, or just want to
              say hi, feel free to send me a message.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-teal-400 text-2xl" />
                <p className="text-gray-300">harshanidyaparathne@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-teal-400 text-2xl" />
                <p className="text-gray-300">+947 7085 6542</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 shadow-lg rounded-lg p-8 sm:p-10">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-200 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-700 bg-gray-700 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-200 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-700 bg-gray-700 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-200 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-700 bg-gray-700 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-md bg-gradient-to-r from-teal-500 to-teal-700 text-white font-bold hover:opacity-90 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
