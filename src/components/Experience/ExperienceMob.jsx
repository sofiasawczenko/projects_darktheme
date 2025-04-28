import React from "react";
import "./experiencemob.scss";
import Johnson from "../../assets/j&j.png"
import embraer from "../../assets/embraer.png"
import "aos/dist/aos.css";

const ExperienceMob = () => {
  return (
    <section id="experience">
      <div className="container exp-mob">
        <div className="exp-header">
          <h1 data-aos="fade-up">/Experiencia</h1>
        </div>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item" data-aos="fade-left">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Extracurricular na Universidade
                {/* <img className="exp-logo-white" src={download}></img> */}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <div className="role-title" data-aos="fade-up">
                  <p>
                  <strong>Engenharia Mecanica @{" "}</strong>
                    <a href="https://google.com/">Universidade Estadual de Maringa</a>
                  </p>
                  </div>
                  <div className="role-time" data-aos="fade-up">
                    <p> Janeiro, 2019 - Dezembro, 2022</p>
                  </div>
                  <div className="role-description">
                    <ul>
                      <li data-aos="fade-up">
                      Intercambio Academico @{" "}
                      <a href="https://www.uq.edu.au/">University of Calgary</a>
                      </li>
                      <li data-aos="fade-up">
                      Monitoria na Disciplina Estatistica
                      </li>
                      <li data-aos="fade-up">
                      Monitoria na Disciplina de Algebra Linear
                      </li>
                      <li data-aos="fade-up">
                      Co-Fundadora e Assessora de Estruturas no Aerodesign (Modelagem)
                      </li>
                      <li data-aos="fade-up">
                      Assessora de Projetos na Empresa Junior de Engenharia (Top 5 Brasil)
                      </li>
                  </ul>
                </div>
                <div className="role-title" data-aos="fade-up">
                  <p>
                  <strong>Engenharia de Software @{" "}</strong>
                    <a href="https://google.com/">FIAP</a>
                  </p>
                  </div>
                  <div className="role-time" data-aos="fade-up">
                    <p> Janeiro, 2023 - Dezembro, 2026</p>
                  </div>
                  <div className="role-description">
                    <ul>
                      <li data-aos="fade-up">
                      Bolsa de Estudos por Excelencia Academica.
                      </li>
                      <li data-aos="fade-up">
                      Finalista +5 projetos academicos.
                      </li>
                      <li data-aos="fade-up">
                      Iniciacao Cientifica em Inteligencia Artificial (Em andamento).
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item" data-aos="fade-right">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Embraer
                {/* <img 
                src={embraer} 
                alt="Embraer" 
                style={{ marginLeft: '1px', width: '10%', height: 'auto' }}
                /> */}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body">
              <div className="role-title" data-aos="fade-up">
                  <p>
                  <strong>Estagio em Engenharia de Software @{" "}</strong>
                    <a href="https://embraer.com/br/pt">Embraer</a>
                  </p>
                </div>
                <div className="role-time">
                  <p> Janeiro, 2023 - Agosto de 2024</p>
                </div>
                <div className="role-description">
                  <ul>
                  <li data-aos="fade-up">
                    Refatorei o Front-End do processo de autenticacao do FlyEmbraer, a maior plataforma da Embraer (100K+ usuarios), utilizando AWS VM, PHP e JavaScript.
                  </li>
                  <li data-aos="fade-up">
                    Corrigi bugs no OnePlace, uma aplicacao interna de reservas de mesas de trabalho (20K usuarios), utilizando TypeScript e Next.js no front-end e Java no back-end.
                  </li>
                  <li data-aos="fade-up">
                    Utilizei metodologias ageis como Scrum e Kanban, e ferramentas como JIRA e Confluence para gerenciar o progresso dos projetos.
                  </li> 
                  <li data-aos="fade-up">
                    Realizei queries SQL para extrair e manipular dados de bancos de dados relacionais, utilizando DBeaver para interagir com o banco de dados PostgreSQL.
                  </li> 
                  <li data-aos="fade-up">
                  Em todos os projetos, segui principios de System Design e Clean Code para garantir a manutenibilidade do codigo.
                  </li> 
                  <li data-aos="fade-up">
                  Realizei testes unitarios e manuais para garantir a qualidade da entrega, utilizando ferramentas como JUnit e a criacao de scripts de teste.
                  </li> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item" data-aos="fade-left">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Johnson & johnson
                {/* <img 
                src={Johnson} 
                alt="Johnson & Johnson" 
                style={{ marginLeft: '1px', width: '12%', height: 'auto' }}
                /> */}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div class="accordion-body">
                <div className="role-title">
                  <p>
                  <strong>Estagio em IT Supply Chain @{" "}</strong>
                    <a href="https://www.jnj.com/">
                    Johnson & Johnson
                    </a>
                  </p>
                </div>
                <div className="role-time">
                  <p> Agosto, 2024 - Presente</p>
                </div>
                <div className="role-description">
                  <ul>
                    <li>
                    Estruturei queries em SQL e construi visualizacoes de dados com alta volumetria no Databricks.
                    </li>
                    <li>
                    Documentei processos tecnicos na plataforma Confluence, facilitando a comunicacao entre os times.
                    </li>
                    <li>
                    Automatizei processos internos utilizando Power Automate e Power Apps.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item" data-aos="fade-right">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                Voluntariado
                 {/* <img src={download}></img> */}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div class="accordion-body">
                <div className="role-title">
                  <p>
                  Voluntaria para desenvolvimento de {" "}
                    <a href="https://google.com/">meninas em STEM</a>
                  </p>
                </div>
                <div className="role-time">
                  {/* <p> January 1, 2000.-Present</p> */}
                </div>
                <div className="role-description">
                  <ul>
                    <li>
                    No projeto "Programadoras da Vida", atuo no desenvolvimento de carreira em tecnologia para meninas do Ensino Medio.
                    </li>
                    <li>
                    Mentora de carreira para meninas menores aprendizes na Johnson & Johnson.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="accordion-item" data-aos="fade-left">
            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                Company5
                <img src={download}></img>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div class="accordion-body">
                <div className="role-title">
                  <p>
                  Chief Happiness Officer @{" "}
                    <a href="https://google.com/">
                      Company5
                    </a>
                  </p>
                </div>
                <div className="role-time">
                  <p> January 1, 2000.-Present</p>
                </div>
                <div className="role-description">
                  <ul>
                    <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ExperienceMob;
