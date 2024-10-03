import React from 'react';
import "./projects.css";
import projectData from "./projectData";
import triangle from "./triangle.svg";
import { HashLink as Link } from "react-router-hash-link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="project-page">
      <h1 className="project-title">Projects 🛠️</h1>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.name}>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <Link className="scroll-up-button" to="#home" smooth>
        <img src={triangle} alt="Go to top" />
      </Link>
    </div>
  );
};

export default Projects;
