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
                <a href="https://github.com/sofiasawczenko/autonomous_robot_computer_vision">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Robo Autonomo</h5>
              <p class="card-text">
              Capaz de navegar de forma independente em um ambiente usando tecnicas de visao computacional para detectar obstaculos e tomar decisoes de navegacao. O robo utiliza Raspberry Pi e Arduino.
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
                <a href="https://github.com/sofiasawczenko/chatbot_rag_langchain_openai">
                  <FiGithub />
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
                <a href="https://github.com/sofiasawczenko/heart_failure_forecasting/tree/main">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Previsao de Insuficiencia Cardiaca com Aprendizado Supervisionado</h5>
              <p class="card-text">
              Projeto de predicao de insuficiencia cardiaca usando um conjunto de dados de Kaggle, com tecnicas de pre-processamento de dados e validacao com regressao logistica.
              </p>
            </div>
            <div class="card-footer">Python, Regressao Logistica</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/sofiasawczenko/weather_forecasting">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Previsao do Clima com Aprendizado Supervisionado</h5>
              <p class="card-text">
              Previsao de condicoes climaticas utilizando tecnicas de regressao linear e ridge regression com base em dados historicos de clima de Nova York.
              </p>
            </div>
            <div class="card-footer">Python, Regressao Linear</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/sofiasawczenko/forecasting_house_price">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Previsao do Preco de Imoveis com Aprendizado Supervisionado</h5>
              <p class="card-text">
              Desenvolvimento de um modelo de machine learning para prever o preco medio dos imoveis em Boston, utilizando analise de dados e tecnicas de regressao.
              </p>
            </div>
            <div class="card-footer">Python, Regressao polinomial</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/sofiasawczenko/sales_time_series_analysis">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Analise de Tendencias de Vendas com Previsao de Series Temporais</h5>
              <p class="card-text">
              Analise de dados de vendas para identificar tendencias e realizar previsoes com metodos de series temporais utilizando Python e bibliotecas como pandas e seaborn.
              </p>
            </div>
            <div class="card-footer">Pandas, Seaborn, Matplotlib</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/sofiasawczenko/ETL_employee_info_pipeline">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Pipeline ETL de Dados Sensiveis de Funcionarios</h5>
              <p class="card-text">
              Pipeline ETL para processar dados sensiveis de funcionarios usando Google Cloud Data Fusion, Cloud Composer, e BigQuery, com foco em eficiencia e seguranca.
              </p>
            </div>
            <div class="card-footer">Python, GCP, Google Data Fusion</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/sofiasawczenko/ETL_game_match_stats">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Pipeline ETL de Estatisticas de Jogos</h5>
              <p class="card-text">
              Pipeline para processar e analisar estatisticas de jogos de criquete utilizando servicos do Google Cloud (GCP), como Cloud Functions e Cloud Dataflow.
              </p>
            </div>
            <div class="card-footer">Python, GCP, Cloud Functions</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/sofiasawczenko/sudoku">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Sudoku Solver</h5>
              <p class="card-text">
              Back-end em Java para resolver um quebra-cabeca de Sudoku utilizando o algoritmo de retrocesso (backtracking), oferecendo uma solucao eficiente para o problema.
              </p>
            </div>
            <div class="card-footer">Java, Algoritmo de BackTracking</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/sofiasawczenko/meli_webscraping">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Web Scraping de Produtos de Marketplace com Python</h5>
              <p class="card-text">
              Scraping de dados de produtos de marketplaces usando Python, BeautifulSoup e Requests, com armazenamento em banco de dados SQLite para analise posterior.
              </p>
            </div>
            <div class="card-footer">Python, BeautifulSoup, Requests</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/sofiasawczenko/analyzing_text_sentiment">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Analise de Sentimento em Dados Textuais</h5>
              <p class="card-text">
              Projeto que analisa o sentimento de dados textuais, usando bibliotecas como NLTK, TextBlob e Newspaper3k para processamento e analise de artigos e textos.
              </p>
            </div>
            <div class="card-footer">NLTK, TextBlob, Newspaper3k</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/sofiasawczenko/aiva_virtual_assistant_ai">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Assistente Virtual na Extensao do Navegador</h5>
              <p class="card-text">
              Assistente virtual com IA integrado ao navegador para oferecer assistencia personalizada ao usuario em tempo real, utilizando a API do Google Gemini.
              </p>
            </div>
            <div class="card-footer">Java, Gemini API, REACT.js</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;