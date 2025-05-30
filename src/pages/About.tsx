import React from 'react';
import '../styles/about.css';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <div className="universal-container">
      {/* Historia de la empresa */}
      <section className="section">
        <SectionTitle>Nuestra Historia</SectionTitle>
        <div className="historia-content">
          <div className="historia-text">
            <p>
              <strong>ERICK SOFTWARE AND TECHNOLOGY</strong> nace de la iniciativa personal de Erick Hernández, apasionado por la tecnología,
              la automatización, la ciberseguridad y la educación autodidacta. <br /><br />
              Tras años de exploración práctica en herramientas digitales, seguridad de redes y creación de soluciones funcionales,
              identificó una necesidad urgente en su entorno: personas y empresas desconectadas del avance tecnológico, sin recursos ni
              formación para proteger o potenciar sus proyectos. <br /><br />
              La empresa surge como una respuesta social y técnica, buscando democratizar el acceso a herramientas útiles,
              formación clara y soluciones de seguridad accesibles. Con enfoque educativo, ético y funcional, <strong>ERICK SAT</strong> tiene como
              objetivo cerrar la brecha tecnológica en Colombia y Latinoamérica.
            </p>
          </div>
          <div className="universal-img-container">
            <img src="../images/ciudad-bogota.jpg" alt="Fundador de la empresa" className="universal-img" />
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="section cards-container">
        <div className="card mission">
          <h4 className="subtitle">Misión</h4>
          <p className="text">
            Brindar soluciones tecnológicas accesibles, seguras y personalizadas a través del desarrollo de software,
            automatizaciones, formación técnica y servicios de ciberseguridad.
          </p>
        </div>
        <div className="card vision">
          <h4 className="subtitle">Visión</h4>
          <p className="text">
            Ser reconocidos como una empresa líder en soluciones tecnológicas integrales en Latinoamérica, destacándose por nuestra
            capacidad técnica, innovación en ciberseguridad y formación educativa de calidad.
          </p>
        </div>
        <div className="card valores">
          <h4 className="subtitle">Valores</h4>
          <ul className="text list">
            <li>Innovación continua</li>
            <li>Ética profesional y responsabilidad</li>
            <li>Accesibilidad tecnológica</li>
            <li>Formación autodidacta y compartida</li>
            <li>Seguridad de la información</li>
            <li>Compromiso con el cliente</li>
          </ul>
        </div>
      </section>

      {/* Perfil del fundador */}
      <section className="section founder-container">
        <div className="founder-card">
          <div className="founder-image">
            <img src="../images/erick-hernandez.jpg" alt="Erick Hernández" className="universal-img"/>
          </div>
          <div className="founder-text">
            <h3 className="title">Erick Hernández</h3>
            <p className="text">
              Desarrollador autodidacta con enfoque en software funcional, automatización de procesos, ciberseguridad y educación tecnológica accesible. <br /><br />
              Especialista en herramientas libres y de código abierto como Linux, Python, Bash, Nmap, Wireshark y Metasploit. <br /><br />
              Experiencia en desarrollo full stack usando HTML, CSS, JavaScript, PHP, MySQL, Tailwind y Bootstrap. <br /><br />
              Promotor de la soberanía digital y el acceso libre al conocimiento, con visión crítica del modelo de exclusión tecnológica. <br /><br />
              Creativo, empático y con fuerte ética digital, orientado a enseñar, proteger y empoderar a usuarios, emprendedores y colectivos. <br /><br />
              Actualmente reside en Bogotá, Colombia y trabaja de forma remota con personas, empresas y comunidades educativas.
            </p>
          </div>
        </div>
      </section>

      {/* Propuesta de valor */}
      <section className="section elegirnos">
        <h2 className="subtitle highlight">¿Por qué elegirnos?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <i className="icon fa-solid fa-puzzle-piece"></i>
            <p>Soluciones personalizadas para cada cliente</p>
          </div>
          <div className="benefit">
            <i className="icon fa-solid fa-lightbulb"></i>
            <p>Enfoque en la innovación y eficiencia</p>
          </div>
          <div className="benefit">
            <i className="icon fa-solid fa-headset"></i>
            <p>Soporte experto y acompañamiento constante</p>
          </div>
          <div className="benefit">
            <i className="icon fa-solid fa-shield-alt"></i>
            <p>Compromiso con la seguridad y la ética digital</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
