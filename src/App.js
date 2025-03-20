import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import ProjectsSection from "./ProjectsSection";
import Resume from "./Resume";
function App() {
  return (
    <div className="app-container">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
