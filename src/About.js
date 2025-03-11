import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <section className="about">
      <h1>About Me</h1>
      <div className="about-section">
        <div className="about-container">
          <div className="about-text">
            <p>
              I'm a passionate <strong>Frontend Developer</strong> who loves crafting 
              beautiful and interactive web applications. My expertise includes 
              modern technologies like <strong>React, JavaScript, CSS, and UI/UX Design</strong>.
            </p>
            <p>
              With a focus on responsive and accessible design, I ensure that 
              every website delivers a seamless user experience across all devices.
            </p>
          </div>
          {/* ✅ Resume Download Button */}
          <a href="./resume.pdf" download className="resume-btn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
