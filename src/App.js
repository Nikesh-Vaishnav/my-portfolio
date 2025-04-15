import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import ContactSection from "./Components/ContactSection";
import ProjectsSection from "./Components/ProjectsSection";
import Resume from "./Components/Resume";
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
