import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignupComponent() {
  const [tab, setTab] = useState("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("html"); // Default to "html"
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, email, password, course };
    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    navigate("/Html");
  };

  return (
    <div className="flex min-h-[100vh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 pt-24">
        <div>
          <img
            src="https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg?uid=R155442167&ga=GA1.2.841413721.1720715939&semt=sph"
            alt="Your Company"
            width={48}
            height={48}
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Sign up or login
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            to access your account
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex w-full justify-center space-x-4">
            <button
              className={`px-4 py-2 ${
                tab === "signup" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setTab("signup")}
            >
              Sign Up
            </button>
            <button
              className={`px-4 py-2 ${
                tab === "login" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setTab("login")}
            >
              Login
            </button>
          </div>
          {tab === "signup" && (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="course"
                  className="block text-sm font-medium text-foreground"
                >
                  Select Course
                </label>
                <select
                  id="course"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="javascript">JavaScript</option>
                  <option value="react">React</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Sign up
              </button>
            </form>
          )}
          {tab === "login" && (
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
