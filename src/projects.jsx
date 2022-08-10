import React from 'react'
import "./projects.css"
import projectData from "./projectData"
import triangle from "./triangle.svg"
import {HashLink as Link} from "react-router-hash-link"
import {FaGithub} from "react-icons/fa";

const Projects = () => {
  return (
    <div className='projectPage'>
        <h1 style={{marginTop: "2rem"}}>Projects</h1>
        <p style={{marginTop: "0.5rem", marginBottom: "2rem", fontSize: "larger", fontWeight: "500"}}>Here's what I have been working on</p>
        <div className='projects'>
          {projectData.map((project) => {
            {console.log(project)}
            return(
              <div className='project' key={project.name}>
                <h3 style={{marginBottom: "1rem"}}>{project.name}</h3>
                <p style={{marginBottom: "0.75rem"}}>{project.description}</p>
                <div className='link-btns'>
                  {project.link != "#" && <a style={{textDecoration: "none", color: "black", fontWeight: "600",  marginRight: "1rem"}} href={project.link} target="_blank" noopener noreferrer>Show Me!</a>}
                  <a style={{fontSize: "larger", color:"black", fontWeight: "600"}} href={project.github} target="_blank" noopener noreferrer><FaGithub /></a>
                </div>
              </div>
            )
          })}
        </div>
        <Link className='upBtn' to='#home' smooth><img src={triangle}/></Link>
    </div>

  )
}

export default Projects