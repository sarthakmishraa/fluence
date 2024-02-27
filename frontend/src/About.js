// About.js

import { FaLinkedin, FaGithub, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <div className="About">

      <div className="Profile">
        <h2>Pratiksha Naik</h2>
        
        <div className="ProfilePic1"></div>
        
        <div className="ProfileLinks">
          <ul>
            <li><a href="https://www.linkedin.com/in/pratiksha-naikk/" target="_blank" rel="noreferrer"><FaLinkedin/>LinkedIn</a></li>
            <li><a href="https://github.com/adiimated" target="_blank" rel="noreferrer"><FaGithub/>GitHub</a></li>          
            <li><a href="https://adiimated.github.io/portfolio/" target="_blank" rel="noreferrer"><FaLaptopCode/>Portfolio</a></li>
          </ul>
        </div>

      </div>

      <div className="Profile">
        <h2>Sarthak Mishra</h2>
        
        <div className="ProfilePic2"></div>
        
        <div className="ProfileLinks">
          <ul>
            <li><a href="https://www.linkedin.com/in/sarthakmishraa/" target="_blank" rel="noreferrer"><FaLinkedin/>LinkedIn</a></li>
            <li><a href="https://github.com/sarthakmishraa" target="_blank" rel="noreferrer"><FaGithub/>GitHub</a></li>          
            <li><a href="http://sarthakmishra.lovestoblog.com/?i=2" target="_blank" rel="noreferrer"><FaLaptopCode/>Portfolio</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default About;