import React from "react";
import './socials.scss'
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import "aos/dist/aos.css";

const Socials = () => {
  return (
    <div className="socials">
      <a 
        href="https://www.linkedin.com/in/sofia-sawczenko/" 
        target="_blank" 
        rel="noopener noreferrer"
        data-aos="fade-left"
      >
        <FiLinkedin />
      </a>
      <a 
        href="https://github.com/sofiasawczenko" 
        target="_blank" 
        rel="noopener noreferrer"
        data-aos="fade-right"
      >
        <FiGithub />
      </a>
      <a 
        href="mailto:sofiawkoe@gmail.com" 
        data-aos="fade-left"
      >
        <AiOutlineMail />
      </a>
    </div>
  );
};

export default Socials;
