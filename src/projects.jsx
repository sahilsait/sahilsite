import React from 'react'
import "./projects.css"
import projectData from "./projectData"
import triangle from "./triangle.svg"

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
                <p style={{marginBottom: "0.5rem"}}>{project.description}</p>
                <a style={{textDecoration: "none", color: "black", fontWeight: "600"}} href='#'>Live Demo</a>
              </div>
            )
          })}
        </div>
        <a className='upBtn' href='#home'><img src={triangle}/></a>
    </div>

  )
}

export default Projects