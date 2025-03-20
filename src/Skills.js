import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaCode } from "react-icons/fa";
import { SiTailwindcss,SiVsco,SiVercel , SiVscodium } from "react-icons/si";

import "./styles/Skills.css"; // Import CSS

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="icon" style={{ color: "#E44D26" }} /> },
  { name: "CSS3", icon: <FaCss3Alt className="icon" style={{ color: "#1572B6" }} /> },
  { name: "JavaScript", icon: <FaJs className="icon" style={{ color: "#F7DF1E" }} /> },
  { name: "React.js", icon: <FaReact className="icon" style={{ color: "#61DAFB" }} /> },
  { name: "Bootstrap", icon: <FaBootstrap className="icon" style={{ color: "#7952B3" }} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="icon" style={{ color: "#38B2AC" }} /> },
];

const tools = [
  { name: "Git & GitHub", icon: <FaGithub className="icon" style={{ color: "red" }} /> },
  { name: "Code Editor", icon: <FaCode className="icon" style={{ color: "#FF5733" }} /> },
  { name: "VS Code", icon: <SiVscodium className="icon" style={{ color: "#007ACC" }} /> },
  { name: "Vercel", icon: <SiVercel className="icon" style={{ color: "aqua" }} /> }, 
];

const Skills = () => {
  return (
    <section className="skills">
      <h1>My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill.icon}
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
      
      <h1>Tools</h1>
      <div className="tools-container">
        {tools.map((tool, index) => (
          <div key={index} className="tool-box">
            {tool.icon}
            <p className="tool-name">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
