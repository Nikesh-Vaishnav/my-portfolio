import React from "react";
import "./styles/Resume.css"; // Import CSS

const Resume = () => {
  const resumePath = process.env.PUBLIC_URL + "/resume.pdf";

  return (
    <section className="resume-section">
      <h1>My Resume</h1>
      <div className="resume-container">
        {/* Embedded PDF using embed */}
        <embed src={resumePath} type="application/pdf" className="resume-viewer" />
      </div>
      {/* Download Button */}
      <a href={resumePath} download="resume.pdf" className="download-btn">
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
