import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import Skills from "./Skills";
import ProjectsSection from "./ProjectsSection";
import Resume from "./Resume"; // ✅ Import the Resume component

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />  {/* ✅ Added Resume Route */}
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
