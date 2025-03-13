import React from "react";
import { Routes, Route } from "react-router-dom";  // ✅ Only import Routes & Route
import "./index.css";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import Skills from "./Skills";
import ProjectsSection from "./ProjectsSection";

function App() {
  return (
    <div className="app-container">
      <Routes>  {/* ✅ Use Routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<ContactSection />} />
      
      </Routes>
      <Footer /> {/* Footer should be outside Routes */}
    </div>
  );
}

export default App;
