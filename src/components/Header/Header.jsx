import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import CV from "../../assets/CV.pdf"
import "./header.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import openIcon from "../../assets/open.svg"; 

export const Header = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
    new Typewriter(headingRef.current, {
      loop: false,
      cursor: "|",
    })
      .pauseFor(300)
      .typeString("Hi, I'm ")
      .typeString('<span style="color: #986DFF;">Sofia.</span>')
      .start();
  }, []);

  return (
    <section id="home-page">
      <div className="parent landing-par ">
        <div className="container landing-page">
          <div className="header-page">
            <div className="row header-title" data-aos="fade-up">
              <h1 ref={headingRef} aria-label="Hi, I'm Sofia.">Hi, I'm Sofia.</h1>
            </div>
            <div className="row header-two" data-aos="fade-up">
              <h2>welcome to my Portfolio</h2>
            </div>
            <div className="row landing-description" data-aos="fade-up">
              <p>
                <a className="work-link" href="https://www.thescore.com/">
                  Resolver problemas de forma logico-matematica
                </a>
                {" "}e{" "}
                <a className="work-link" href="https://fibra.com/">
                  encontrar padroes em um contexto de incerteza
                </a>
                {" "}sempre me fascinou. Aqui, compartilho um pouco mais sobre essa busca por respostas atraves dos dados enquanto navego pelo vasto mundo da tecnologia.
              </p>
            </div>
            <div className="resume-btn" data-aos="fade-up">
              <button 
                className="btn btn-outline-primary btn-lg resume-tag" 
                data-aos="fade-up"
                onClick={() => window.open(CV, '_blank')}
              >
                Curriculum
                <img 
                  src={openIcon} 
                  alt="open" 
                  style={{ marginLeft: '8px', width: 'auto', height: '16px' }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
