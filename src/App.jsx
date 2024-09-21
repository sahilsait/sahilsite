import React from 'react';
import './App.css';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Projects from './projects';
import dp from "./dp.png";
import { HashLink as Link } from "react-router-hash-link";

function App() {
  return (
    <>
      <div className='home' id='home'>
        <div className='header'>
          <h3>Hello there!</h3>
          <h1>I'm Sahil Sait</h1>
        </div>
        <div className='image-container'>
          <img className='photo' src={dp} alt='Sahil Sait' />
        </div>
        <div className='bio'>
          Playing around with LLMs and a bunch of other stuff :)
          <br />
          AI/ML Systems Engineer | Grad @SJSU
        </div>
        <div className='social-networks'>
          <a href='https://www.linkedin.com/in/sahilsait/' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href='https://github.com/sahilsait' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href='https://twitter.com/sahilsaitn' target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="mailto:sahilsaitn@gmail.com"><FaEnvelope /></a>
        </div>
        <div className='buttons'>
          <Link className='btn' to='#projects' smooth>Projects</Link>
          <a className='btn' href='https://drive.google.com/file/d/14MyX81vf32ODL9deOaODz_hlGfsWY0cy/view?usp=sharing' target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
      <div id='projects'>
        <Projects />
      </div>
    </>
  );
}

export default App;
