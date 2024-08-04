import React from "react";
import Event from "./Event";

function About() {
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
            <h1 className="">About Us</h1>
          </div>
        </div>
      </section>

      <div className="mt-0 bg-white text-black">
        <section className="mb8 px 4 md:px-10">
          <h2 className="fonts text-2xl font-semibold mb-2">Introduction</h2>
          <p className="font2">
            When we started FutureDev Online Courses back in 2023, our goal was
            to give the people of northern Kenya and from all across the world
            the ability to learn the skills they’d need to succeed in this
            modern century. We set out to create a new, interactive way of
            learning — making it engaging, flexible, and accessible for as many
            people as possible. Since then, we have helped hundreds of Somali
            people worldwide unlock modern technical skills and reach their full
            potential through code. There are two commitments we've made to the
            world. We've been grounded by these since day one:
          </p>
          <ul className=" font2 list-disc list-inside ml-4 mt-2">
            <li>
              Increase access to high-quality education for everyone,
              everywhere.
            </li>
            <li>Enhance teaching and learning through research.</li>
          </ul>
        </section>
        <section className="mb-8 px-4 md:px-6">
          <h2 className="fonts text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="font2">
            To reach out to all Somali communities through knowledge and to be a
            comprehensive online institute that offers quality-oriented
            education and accredited certification.
          </p>
        </section>
        <section className="mb-8 px-4 md:px-6">
          <h2 className=" fonts text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="font2">
            We want to create a world where anyone can build something
            meaningful with technology, and everyone has the learning tools,
            resources, and opportunities to do so. Code contains a world of
            possibilities — all that’s required is the curiosity and drive to
            learn. At FutureDev, we are dedicated to empowering all people,
            regardless of where they are in their coding journeys, to continue
            to learn, grow, and make an impact on the world around them.
          </p>
        </section>
        <Event />
        <section className="text-center mt-6">
          <a href="https://www.facebook.com" className="text-blue-600 mx-2">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://www.instagram.com" className="text-pink-600 mx-2">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.twitter.com" className="text-blue-400 mx-2">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://github.com/smasha11" className="text-gray-900 mx-2">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.youtube.com" className="text-red-600 mx-2">
            <i className="fab fa-youtube"></i> YouTube
          </a>
        </section>

        <footer className="text-center text-gray-600 mt-6">
          © 2024 FutureDev. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default About;
