import React from "react";
import "./projects.scss";
import { FiFolder } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { RiShareCircleLine } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  return (
    <section>
      <div className="container card-container" id="projects">
        <div className="proj-header">
          <h1 data-aos="fade-up">/Projetos</h1>
        </div>
        <div class="card-deck">
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Robo Autonomo</h5>
              <p class="card-text">
              Capaz de navegar de forma independente em um ambiente usando tecnicas de visao computacional para detectar obstaculos e tomar decisoes de navegacao. O robo integra hardware e software, com o Raspberry Pi lidando com o processamento de imagens e a tomada de decisoes, enquanto o Arduino controla os motores e sensores.
              </p>
            </div>
            <div class="card-footer">Eletronica, Python, C++</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/r">
                  <FiGithub />
                </a>
                <a
                  href="https://google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiShareCircleLine />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Chatbot</h5>
              <p class="card-text">
              Criacao de um chatbot no console utilizando RAG (Retrieval Augmented Generation) com LangChain e o LLM da OpenAI. O chatbot pode responder a perguntas com base em PDFs armazenados em uma pasta.
              </p>
            </div>
            <div class="card-footer">RAG, LangChain, OpenAI</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Previsao de Insuficiencia Cardiaca com Aprendizado Supervisidionado</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Previsão do Clima com Aprendizado Supervisidionado</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
                <a
                  href="https://google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiShareCircleLine />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Previsão do Preço de Imóveis com Aprendizado Supervisidionado</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Análise de Tendências de Vendas com Previsão de Séries Temporais</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Pipeline ETL de Dados Sensíveis de Funcionários</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Pipeline ETL de Estatísticas de Jogos</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Sudoku Solver</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Web Scraping de Produtos de Marketplace com Python</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Análise de Sentimento em Dados Textuais</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://google.com/">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Assistente Virtual na Extensão do Navegador</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
              </p>
            </div>
            <div class="card-footer">Lorem, ipsum, dolor</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
