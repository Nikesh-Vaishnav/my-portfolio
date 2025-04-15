import React from "react";
import "../styles/About.css";
import Skills from "../Components/Skills";

const About = () => {
  return (
    <section className="about">
      <div className="about-section">
        <div className="about-container">
          <h1>About Me</h1>
          {/* About Text */}
          <div className="about-text">
            <p>
              I'm a passionate <strong>Frontend Developer</strong> who loves
              crafting beautiful and interactive web applications. My expertise
              includes modern technologies like{" "}
              <strong>React, JavaScript, CSS, and UI/UX Design</strong>.
            </p>
            <p>
              With a focus on responsive and accessible design, I ensure that
              every website delivers a seamless user experience across all
              devices.
            </p>
          </div>

          {/* Education Section */}
          <div className="education-section">
            <h2>Education</h2>
            <ul>
              <li>
                <strong>Bachelor Of Computer Application</strong>
                <br /> st.Wilfred PG ollage, Jaipur (2023)
              </li>
              <li>
                <strong>Masters Of Computer Application</strong>
                <br /> Mohanlal Sukhadia University, Udaipur (2025)
              </li>
            </ul>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
