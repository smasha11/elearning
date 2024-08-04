import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Courses from "./components/Courses";
import Mentorship from "./components/Mentorship";
import About from "./components/About";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Admin from "./components/Admin";
import Html from "./components/Html";
import ScrollToTop from "./components/Scrool";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/html" element={<Html />} />
        <Route path="/" element={<Home />} /> {/* Default route */}
      </Routes>
    </>
  );
}

export default App;
