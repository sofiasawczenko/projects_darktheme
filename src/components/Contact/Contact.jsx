import React from "react";
import "./contact.scss";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="parent contact-father">
        <div className="container contact">
          <div className="contact-header">
            <h1 data-aos="fade-up">/Contato</h1>
          </div>
          <div className="contact-description">
            <div className="row">
              <div className="title">
                <h2 data-aos="fade-up">Entre em Contato</h2>
              </div>
            </div>
            <div className="row">
              {/* <div className="get-touch">
                <p data-aos="fade-up">Entre em Contato</p>
              </div> */}
            </div>
            <div className="row">
              <div className="statement">
                <p data-aos="fade-up">
                Qualquer duvida ou se deseja apenas dar o seu Oi ou Feedback, estarei feliz em receber e assim que possivel irei te retornar!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="hello-button">
                <a href="mailto:sofiawko@gmail.com">
                  <button
                    className="btn btn-outline-primary"
                    data-aos="fade-up"
                  >
                    Diga Ola!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
