import './App.css';
import {FaTwitter, FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import Projects from './projects';
import dp from "./dp.png";
import {HashLink as Link} from "react-router-hash-link";
  
function App() {
  return (
    <>
    <div className='home' id='home'>
      <div>
        <h3 style={{fontWeight: "500"}}>Hello there!</h3>
        <h1 style={{paddingTop: "0.25rem"}}>I'm Sahil Sait</h1>
      </div>
      <div >
        <img className='photo' src={dp} alt='👑'/>
      </div>
      <div className='bio'>
        Playing around with React & Smart Contracts
        <br />
        Software Engineer in the making
      </div>
      <div className='social-networks'>
        <a href='https://www.linkedin.com/in/sahilsait/' target="_blank" noopener noreferrer><FaLinkedin /></a>
        <a href='https://github.com/sahilsait' target="_blank" noopener noreferrer><FaGithub /></a>
        <a href='https://twitter.com/sahilsaitn' target="_blank" noopener noreferrer><FaTwitter/></a>
        <a href="mailto:sahilsaitofficial@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <div className='buttons'>
        <Link className='btn' to='#projects'  smooth>Projects</Link>
        <a className='btn' href='https://drive.google.com/file/d/1uM95blu1PTWI08KkIqBdbfJFB-AjiEzk/view?usp=sharing' target="_blank" noopener noreferrer>Resume</a>
      </div>
    </div>
    <div id='projects'>
      <Projects />
    </div>
    </>
  )
}

export default App
