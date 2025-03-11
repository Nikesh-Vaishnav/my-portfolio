import React from "react";
import { useState, useEffect } from "react";
import { FaLaptopCode, FaPalette, FaDatabase, FaMobileAlt, FaCode , FaEnvelope } from "react-icons/fa";
import "./styles/Home.css";


const slides = [
  { 
    title: "Welcome to My Portfolio", 
    description: "A showcase of my work and projects.", 
    icon: <FaLaptopCode className="slide-icon" /> 
  },
  { 
    title: "Frontend Development", 
    description: "Building beautiful and interactive user interfaces.", 
    icon: <FaCode className="slide-icon" /> 
},
  { 
    title: "Creative Web Solutions", 
    description: "Building sleek and user-friendly websites with a touch of innovation", 
    icon: <FaPalette className="slide-icon" /> 
  },
  { 
    title: "React Projects", 
    description: "Building dynamic UIs with React.js.", 
    icon: <FaDatabase className="slide-icon" /> 
  },
  { 
    title: "UI/UX Design", 
    description: "Designing intuitive and user-friendly interfaces.", 
    icon: <FaMobileAlt className="slide-icon" /> 
  },

  { 
    title: "Contact Me", 
    description: "Let's collaborate on something great!", 
    icon: <FaEnvelope className="slide-icon" /> 
  }
];

const Slider = () => {
  const [index, setIndex] = useState(0); // Start from slide 3

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <button className="nav-button left" onClick={() => setIndex(index > 0 ? index - 1 : slides.length - 1)}>◀</button>

      <div className="slider">
        <div className="slide-content">
          <h1>{slides[index].title}</h1>
          <p>{slides[index].description}</p>
        </div>
        <div className="slide-icon-container">
          {slides[index].icon}
        </div>
      </div>

      <button className="nav-button right" onClick={() => setIndex(index < slides.length - 1 ? index + 1 : 0)}>▶</button>
    </div>
  );
};


const Home = () => {
  return (
    <div className="home">
      <section className="slider-section">
        <Slider />
      </section>
    </div>
  );
};

export default Home;
