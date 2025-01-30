import React, { useState } from "react";
import axios from "axios";
import Event from "./Event";

function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/contact", // Ensure this URL matches the Flask endpoint
        formData
      );
      if (response.status === 201) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting the form:", error.message);
      setStatus("error");
    }
  };

  return (
    <div className="pt-24 pb-8">
      <section className="w-full relative h-[500px] overflow-hidden">
        <img
          src="https://img.freepik.com/premium-photo/modern-computer-setup-with-highresolution-monitor-minimalist-desk-enhanced-productivity_981640-60345.jpg?w=740"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <div className="h-full flex flex-col items-center justify-center text-center z-20 px-4 md:px-6">
          <div className="space-y-4">
            <h1>About Us</h1>
          </div>
        </div>
      </section>

      <div className="mt-0 bg-white text-black">
        <section className="mb-8 px-4 md:px-10">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p>
            When we started FutureDev Online Courses back in 2023, our goal was
            to give the people of northern Kenya and from all across the world
            the ability to learn the skills they’d need to succeed in this
            modern century...
          </p>
        </section>

        <Event />

        <section className="mb-10 px-4 md:px-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </form>
          {status === "loading" && (
            <p className="text-blue-500 mt-4">Sending your message...</p>
          )}
          {status === "success" && (
            <p className="text-green-500 mt-4">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 mt-4">
              Failed to send message. Try again.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

export default About;
