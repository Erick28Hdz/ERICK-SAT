import React from 'react';
import { Box, Typography } from "@mui/material";
import UniversalContainer from '../components/UniversalContainer';
import SectionTitle from '../components/SectionTitle';
import SectionSubtitle from '../components/SectionSubtitle';
import IntroSection from '../components/IntroSection';
import UniversalImage from '../components/UniversalImg';
import AboutCards from '../components/AboutCard';
import CardDescription from '../components/CardDescrition';
import UniversalCard from '../components/UniversalCard';
import { Build, Lightbulb, SupportAgent, Shield } from "@mui/icons-material";

const About: React.FC = () => {
  return (
    <UniversalContainer pt={6} pb={3}>
      {/* Historia de la empresa */}
      <SectionTitle>Nuestra Historia</SectionTitle>
      <Box><IntroSection
        description={
          <Typography
            variant="body1"
            className="description"
          >
            <strong>ERICK SOFTWARE AND TECHNOLOGY</strong> nace de la iniciativa personal de Erick Hernández, apasionado por la tecnología,
            la automatización, la ciberseguridad y la educación autodidacta. <br /><br />
            Tras años de exploración práctica en herramientas digitales, seguridad de redes y creación de soluciones funcionales,
            identificó una necesidad urgente en su entorno: personas y empresas desconectadas del avance tecnológico, sin recursos ni
            formación para proteger o potenciar sus proyectos. <br /><br />
            La empresa surge como una respuesta social y técnica, buscando democratizar el acceso a herramientas útiles,
            formación clara y soluciones de seguridad accesibles. Con enfoque educativo, ético y funcional, <strong>ERICK SAT</strong> tiene como
            objetivo cerrar la brecha tecnológica en Colombia y Latinoamérica.
          </Typography>
        }
        imageComponent={<UniversalImage src="/images/ciudad-bogota.jpg" alt="Fundador de la empresa" />}
      />
      </Box>
      {/* Misión, Visión y Valores */}
      <Box>
        <AboutCards />
      </Box>

      {/* Perfil del fundador */}
      <UniversalCard
        sx={{
          width: '80%',
          maxWidth: '100%',
          minHeight: 300,
          margin: '2rem auto',

        }}
      >
        {/* Título centrado */}
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <SectionSubtitle>Erick Hernández</SectionSubtitle>
        </Box>

        {/* Contenedor horizontal: Imagen + Descripción */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            alignItems: 'start',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          {/* Imagen redonda */}
          {<UniversalImage src="/images/ciudad-bogota.jpg" alt="Fundador de la empresa" sx={{
            width: 250,
            height: 250,
            borderRadius: '50%',
            objectFit: 'cover',
            flexShrink: 0,
          }} />}

          {/* Descripción al lado */}
          <Box sx={{ flex: 1, textAlign: 'left' }}>
            <CardDescription>
              Desarrollador autodidacta con enfoque en software funcional, automatización de procesos, ciberseguridad y educación tecnológica accesible. <br /><br />
              Especialista en herramientas libres y de código abierto como Linux, Python, Bash, Nmap, Wireshark y Metasploit. <br /><br />
              Experiencia en desarrollo full stack usando HTML, CSS, JavaScript, PHP, MySQL, Tailwind y Bootstrap. <br /><br />
              Promotor de la soberanía digital y el acceso libre al conocimiento, con visión crítica del modelo de exclusión tecnológica. <br /><br />
              Creativo, empático y con fuerte ética digital, orientado a enseñar, proteger y empoderar a usuarios, emprendedores y colectivos. <br /><br />
              Actualmente reside en Bogotá, Colombia y trabaja de forma remota con personas, empresas y comunidades educativas.
            </CardDescription>
          </Box>
        </Box>
      </UniversalCard>

      {/* Propuesta de valor */}
      <Box mb={2}>
        <SectionSubtitle>🌟 ¿Por qué elegirnos?</SectionSubtitle>
        <Box sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          gap: 3,
          margin: 2,
        }}>
          <UniversalCard>
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& svg": {
                  fontSize: 40,
                  color: "var(--color-black)",
                  mb: 1,
                  transition: "all 0.3s ease-in-out",
                },
                "&:hover svg": {
                  color: "var(--color-light-blue)",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Build />
              <CardDescription>
                Soluciones personalizadas para cada cliente
              </CardDescription>
            </Box>
          </UniversalCard>

          <UniversalCard>
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& svg": {
                  fontSize: 40,
                  color: "var(--color-black)",
                  mb: 1,
                  transition: "all 0.3s ease-in-out",
                },
                "&:hover svg": {
                  color: "var(--color-light-blue)",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Lightbulb />
              <CardDescription >
                Enfoque en la innovación y eficiencia
              </CardDescription>
            </Box>
          </UniversalCard>

          <UniversalCard>
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& svg": {
                  fontSize: 40,
                  color: "var(--color-black)",
                  mb: 1,
                  transition: "all 0.3s ease-in-out",
                },
                "&:hover svg": {
                  color: "var(--color-light-blue)",
                  transform: "scale(1.1)",
                },
              }}
            >
              <SupportAgent />
              <CardDescription >
                Soporte experto y acompañamiento constante
              </CardDescription>
            </Box>
          </UniversalCard>

          <UniversalCard>
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& svg": {
                  fontSize: 40,
                  color: "var(--color-black)",
                  mb: 1,
                  transition: "all 0.3s ease-in-out",
                },
                "&:hover svg": {
                  color: "var(--color-light-blue)",
                  transform: "scale(1.1)",
                },
              }}
            >
              <Shield />
              <CardDescription>
                Compromiso con la seguridad y la ética digital
              </CardDescription>
            </Box>
          </UniversalCard>
        </Box>
      </Box>

    </UniversalContainer >

  );
};

export default About;
