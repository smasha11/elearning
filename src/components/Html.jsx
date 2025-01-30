import React, { useState } from "react";

const Html = ({ cart, onAddToCart, onRemoveFromCart }) => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "HTML",
      color: "blue",
      price: 0, // Set price to 0
      image:
        "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040425.jpg?t=st=1734001108~exp=1734004708~hmac=61a6d1152174be75b963adba57aa0e8643c0daa304c8f2765e4ebdd10c530dd6&w=740",
      content: (
        <div>
          <h3 className="text-xl font-semibold">Introduction to HTML</h3>
          <p className="mt-2">
            HTML is the standard language for creating web pages. It structures
            the content on the web.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>
              <strong>Tags:</strong> Learn about different HTML tags like
              <code>&lt;h1&gt;</code>, <code>&lt;div&gt;</code>,{" "}
              <code>&lt;p&gt;</code>.
            </li>
            <li>
              <strong>Attributes:</strong> Explore attributes like{" "}
              <code>class</code>,<code>id</code>, and more.
            </li>
            <li>
              <strong>Forms:</strong> Learn how to create forms using{" "}
              <code>&lt;form&gt;</code>,<code>&lt;input&gt;</code>, and other
              elements.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      name: "JavaScript",
      color: "pink",
      price: 0, // Set price to 0
      image:
        "https://img.freepik.com/premium-photo/css-javascript-html-usage-monitor-closeup-function-source-code-abstract-it-technology-background-software-source-code_372999-1057.jpg?ga=GA1.1.841413721.1720715939&semt=ais_hybrid",
      content: (
        <div>
          <h3 className="text-xl font-semibold">Introduction to JavaScript</h3>
          <p className="mt-2">
            JavaScript is a programming language used to create dynamic web
            content.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>
              <strong>Variables:</strong> Learn how to declare variables using{" "}
              <code>let</code>,<code>const</code>, and <code>var</code>.
            </li>
            <li>
              <strong>Functions:</strong> Understand how to create and use
              functions in JavaScript.
            </li>
            <li>
              <strong>Events:</strong> Learn how to handle user interactions
              with JavaScript events.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      name: "React",
      color: "pink",
      price: 0, // Set price to 0
      image:
        "https://img.freepik.com/premium-vector/ui-ux-agency-icon_990672-239.jpg?ga=GA1.1.841413721.1720715939&semt=ais_hybrid",
      content: (
        <div>
          <h3 className="text-xl font-semibold">Introduction to React</h3>
          <p className="mt-2">
            React is a JavaScript library for building user interfaces.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>
              <strong>Components:</strong> Learn the basics of creating
              components in React.
            </li>
            <li>
              <strong>State and Props:</strong> Understand how to manage data
              within components.
            </li>
            <li>
              <strong>Hooks:</strong> Learn about React hooks like{" "}
              <code>useState</code> and <code>useEffect</code>.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 4,
      name: "Python",
      color: "green",
      price: 0, // Set price to 0
      image:
        "https://img.freepik.com/premium-photo/programing-python_1292885-18831.jpg?ga=GA1.1.841413721.1720715939&semt=ais_hybrid",
      content: (
        <div>
          <h3 className="text-xl font-semibold">Introduction to Python</h3>
          <p className="mt-2">
            Python is a versatile programming language used in web development,
            data science, and automation.
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>
              <strong>Variables:</strong> Learn about variables and data types
              in Python.
            </li>
            <li>
              <strong>Loops:</strong> Explore loops like <code>for</code> and{" "}
              <code>while</code> to iterate over data.
            </li>
            <li>
              <strong>Functions:</strong> Understand how to create and use
              functions in Python.
            </li>
          </ul>
        </div>
      ),
    },
  ]);

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50">
      <div className="prose prose-lg max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Welcome to FutureDev Dashboard
        </h1>
        <p className="text-xl font-semibold mt-4 text-gray-600">
          Track your progress and master web development skills with our
          courses.
        </p>
      </div>

      <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => {
          const isInCart = cart?.some((item) => item.id === course.id);

          return (
            <div
              key={course.id}
              className={`border-2 border-${course.color}-500 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-300`}
            >
              <img
                src={course.image}
                alt={`${course.name} image`}
                className="w-full h-48 object-cover"
              />
              <div
                className={`bg-${course.color}-500 text-white p-5 flex justify-between items-center`}
              >
                <h2 className="text-xl font-semibold">{course.name} Course</h2>
                <span className="text-lg font-bold">${course.price}</span>
              </div>
              <div className="p-6 bg-white">
                {course.content}
                <div className="mt-4 flex justify-between">
                  {isInCart ? (
                    <button
                      onClick={() => onRemoveFromCart(course.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition duration-300"
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => onAddToCart(course)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition duration-300"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Html;
