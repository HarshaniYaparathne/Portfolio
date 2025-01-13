"use client";
import React from "react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 py-16 flex flex-col items-center">
      <h1 className="text-teal-400 text-5xl sm:text-6xl mb-10 font-extrabold">Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-gray-200 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border border-gray-600 bg-gray-700 text-white rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-200 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border border-gray-600 bg-gray-700 text-white rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-200 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="border border-gray-600 bg-gray-700 text-white rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white font-bold hover:bg-teal-800 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
