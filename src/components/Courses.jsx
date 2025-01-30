import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div className="bg-gray-50">
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/data-scientist-tech-entrepreneur-background_1103100-50549.jpg?uid=R155442167&ga=GA1.2.841413721.1720715939&semt=ais_user')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Unlock Your Full Potential with FutureDev
          </h2>
          <p className="max-w-[900px] mt-4 text-lg md:text-xl lg:text-2xl">
            Dive into the core fundamentals of web development and master the
            essential skills to build modern, responsive websites and
            applications.
          </p>
        </div>
      </div>

      <div className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.description}</p>
                </div>
                <div className="mb-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      <strong>Duration:</strong> {course.duration}
                    </li>
                    <li>
                      <strong>Difficulty:</strong> {course.difficulty}
                    </li>
                    <li>
                      <strong>Instructor:</strong> {course.instructor}
                    </li>
                  </ul>
                </div>
                <Link
                  to={`/Signup`}
                  className="inline-block bg-blue-500 text-white text-center rounded-md py-2 px-4 w-full hover:bg-blue-600"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
