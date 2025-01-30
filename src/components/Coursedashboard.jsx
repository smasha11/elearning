import React, { useState, useEffect } from "react";

export default function CourseDashboard() {
  const [courses, setCourses] = useState([]);
  const [courseForm, setCourseForm] = useState({
    title: "",
    description: "",
    duration: "",
    difficulty: "",
    instructor: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleAddCourse = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseForm),
    })
      .then((response) => response.json())
      .then((data) => {
        setCourses((prevCourses) => [...prevCourses, data.course]);
        setCourseForm({
          title: "",
          description: "",
          duration: "",
          difficulty: "",
          instructor: "",
        });
      })
      .catch((error) => console.error("Error adding course:", error));
  };

  const handleDeleteCourse = (id) => {
    fetch(`http://127.0.0.1:5000/courses/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setCourses((prevCourses) =>
          prevCourses.filter((course) => course.id !== id)
        );
      })
      .catch((error) => console.error("Error deleting course:", error));
  };

  const handleEditCourse = (id) => {
    const course = courses.find((course) => course.id === id);
    setCourseForm({
      title: course.title,
      description: course.description,
      duration: course.duration,
      difficulty: course.difficulty,
      instructor: course.instructor,
    });

    fetch(`http://127.0.0.1:5000/courses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseForm),
    })
      .then((response) => response.json())
      .then((data) => {
        setCourses((prevCourses) =>
          prevCourses.map((course) =>
            course.id === id ? { ...course, ...courseForm } : course
          )
        );
      })
      .catch((error) => console.error("Error updating course:", error));
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4">Course Dashboard</h1>

      <form
        className="bg-white p-6 rounded-lg shadow-lg mb-8"
        onSubmit={handleAddCourse}
      >
        <h2 className="text-2xl font-medium mb-4">Add a New Course</h2>
        <div className="mb-4">
          <input
            type="text"
            name="title"
            value={courseForm.title}
            onChange={handleInputChange}
            placeholder="Course Title"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="description"
            value={courseForm.description}
            onChange={handleInputChange}
            placeholder="Course Description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="duration"
            value={courseForm.duration}
            onChange={handleInputChange}
            placeholder="Duration"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="difficulty"
            value={courseForm.difficulty}
            onChange={handleInputChange}
            placeholder="Difficulty"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="instructor"
            value={courseForm.instructor}
            onChange={handleInputChange}
            placeholder="Instructor"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Course
        </button>
      </form>

      <h2 className="text-2xl font-medium mb-4">Courses</h2>
      <div className="space-y-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <p className="mt-2">
              <span className="font-semibold">Duration:</span> {course.duration}
            </p>
            <p>
              <span className="font-semibold">Difficulty:</span>{" "}
              {course.difficulty}
            </p>
            <p>
              <span className="font-semibold">Instructor:</span>{" "}
              {course.instructor}
            </p>

            <div className="mt-4 flex gap-4">
              <button
                onClick={() => handleEditCourse(course.id)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteCourse(course.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
