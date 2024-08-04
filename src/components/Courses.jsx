import { Link } from "react-router-dom";

export default function Courses() {
  const courses = [
    {
      title: "HTML",
      description:
        "Learn the structure and semantics of web pages with HTML, the backbone of the internet.",
      duration: "2 weeks",
      difficulty: "Beginner",
      instructor: "Abdifatah",
    },
    {
      title: "CSS",
      description:
        "Master the art of styling web pages with CSS, the language of design.",
      duration: "3 weeks",
      difficulty: "Beginner",
      instructor: "umulkheir",
    },
    {
      title: "JavaScript",
      description:
        "Dive into the world of dynamic web programming with JavaScript, the language that brings websites to life.",
      duration: "4 weeks",
      difficulty: "Intermediate",
      instructor: "mikael",
    },
    {
      title: "React.js",
      description:
        "Dive into the world of modern web development with React.js, the powerful JavaScript library for building user interfaces.",
      duration: "4 weeks",
      difficulty: "Advanced",
      instructor: "Rage",
    },
  ];

  return (
    <div className="bg-muted">
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/data-scientist-tech-entrepreneur-background_1103100-50549.jpg?uid=R155442167&ga=GA1.2.841413721.1720715939&semt=ais_user')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className=" fonts text-3xl font-bold tracking-tighter sm:text-5xl">
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
            {courses.map((course, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <div className="mb-4">
                  <h3 className=" fonts text-xl font-semibold">
                    {course.title}
                  </h3>
                  <p className=" font2 text-sm text-muted-foreground">
                    {course.description}
                  </p>
                </div>
                <div className="mb-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <span className="font-medium">Duration:</span>{" "}
                      {course.duration}
                    </li>
                    <li>
                      <span className="font-medium">Difficulty:</span>{" "}
                      {course.difficulty}
                    </li>
                    <li>
                      <span className="font-medium">Instructor:</span>{" "}
                      {course.instructor}
                    </li>
                  </ul>
                </div>
                <div>
                  <Link to="/signup">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-muted-foreground/10 mt-12 py-6 w-full">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 FutureDev. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <a href="#" className="text-sm hover:underline underline-offset-4">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:underline underline-offset-4">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline underline-offset-4">
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
