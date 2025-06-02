import React from "react";
import { Box, useTheme } from "@mui/material";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import UniversalImage from "./UniversalImg";
import Button from "./Button";
import CardDescription from "./CardDescrition";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/servicios"); // Aquí se llama a la función navigate
    };

    return (
        <HeroWrapper>
            <Overlay />

            {/* Contenedor en fila */}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    zIndex: 2,
                    px: 1,
                    py: 9,
                }}
            >
                {/* Columna izquierda con título, texto y botón */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "60%" }, // ancho total en móvil, 60% en escritorio
                        px: { xs: 4, md: 10 },             // padding horizontal
                        py: { xs: 2, md: 4 },             // padding vertical (opcional)
                        pr: { md: 2 },                    // padding-right extra en desktop
                        textAlign: { xs: "center", md: "left" }, // alineación de texto
                        flex: 1,                          // crecimiento flexible si está en display: flex
                    }}
                >
                    <SectionTitle align="left">
                        Innovación en Desarrollo de Software y Tecnología
                    </SectionTitle>

                    <CardDescription
                        variant="body1"
                        sx={{
                            mb: 3,
                            mt: 2,
                            color: theme.palette.grey[300],
                        }}
                    >
                        Somos una empresa especializada en <strong>soluciones tecnológicas a medida</strong>, enfocadas en <strong>ciberseguridad</strong>, <strong>desarrollo web</strong> y <strong>automatización de procesos</strong>. Potenciamos tu negocio con herramientas digitales modernas, eficientes y seguras.
                    </CardDescription>

                    <Button variant="contained" color="primary" onClick={handleClick}>
                        Conoce nuestros servicios
                    </Button>
                </Box>

                {/* Columna derecha con imagen */}
                <Box
                    sx={{
                        flex: 1,
                        mt: { xs: 4, md: 0 },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <UniversalImage
                        src="/images/lider.jpg"
                        alt="Decoración" />
                </Box>
            </Box>
        </HeroWrapper>
    );
};

export default Hero;

// Estilos futuristas
const HeroWrapper = styled.section`
  position: relative;
  min-height: 90vh;
  width: 100%;
  background-image: url("/images/hero.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(10, 10, 20, 0.85), rgba(10, 10, 30, 0.65));
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  strong {
    color: var(--color-light-blue);
    text-shadow: 0 0 5px var(--color-light-blue);
  }

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;
