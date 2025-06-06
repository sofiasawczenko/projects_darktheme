import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.scss";

export const About = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section>
      <div className="container about" id="about">
        <div className="row">
          <div className="about-header" data-aos="fade-up">
            <h1>/Sobre Mim</h1>
          </div>
        </div>
        <div className="row about-description" data-aos="fade-up">
        <p>
          Tenho experiencia em empresas multinacionais como a&nbsp;
          <a className="work-link" href="https://embraer.com/br/pt">
            Embraer
          </a>
          &nbsp;e a&nbsp;
          <a className="work-link" href="https://www.jnj.com/">
            Johnson & Johnson
          </a>, ambas localizadas em&nbsp;
          <a className="work-link" href="https://www.google.com/maps/place/S%C3%A3o+Jos%C3%A9+dos+Campos,+SP/@-23.1893269,-45.9455851,12z/data=!3m1!4b1!4m6!3m5!1s0x94cc4bb3858cc2e7:0xba25a33168f8c1!8m2!3d-23.2198396!4d-45.8915658!16zL20vMDNiY3F6?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D">
            Sao Jose dos Campos, Sao Paulo
          </a>.
          Nessas empresas, atuei em projetos de alta complexidade e em equipes globais. 
          Gosto de colocar a mao na massa e sempre busco abordagens simples, sistematicas e pragmaticas para resolver problemas. 
          Meu foco é desenvolver solucoes eficientes, sempre centradas no problema do negocio.
        </p>
      </div>
      <div className="row about-description">
        <p data-aos="fade-up">Possuo experiencia com as seguintes tecnologias:</p>
      </div>
        <ul className="skills">
          <li className="custom-list-item" data-aos="fade-up">
          Java
          </li>
          <li className="custom-list-item" data-aos="fade-up">
          Python
          </li>
          <li className="custom-list-item" data-aos="fade-up">
          R
          </li>
          <li className="custom-list-item" data-aos="fade-up">
          SQL
          </li>
          <li className="custom-list-item" data-aos="fade-up">
          Databricks 
          </li>
          <li className="custom-list-item" data-aos="fade-up">
          AWS
          </li>
          <li className="custom-list-item" data-aos="fade-up">
          GIT
          </li>
          <li className="custom-list-item" data-aos="fade-up">
          APIs REST
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
