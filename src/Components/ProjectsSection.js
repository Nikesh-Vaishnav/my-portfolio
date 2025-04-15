import React from "react";
import '../styles/Project.css'

const projects = [
  {
    name: "DevWithNik (Blogging Website)",
    description: "A blogging website built with Bootstrap, covering basic web development topics.",
    githubLink: "https://Nikesh-Vaishnav.github.io/DevWithNik/", // Replace with your GitHub link
  },
  {
    name: "RajTrail (Rajasthan Tourism)",
    description: "A React project showcasing popular tourist destinations in Rajasthan.",
    githubLink: "https://rajtrail.vercel.app/", // Replace with your GitHub link
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-button">
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
