import React from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import Hero from "../components/Hero";
import UniversalContainer from "../components/UniversalContainer";
import SectionSubtitle from "../components/SectionSubtitle";
import UniversalCard from "../components/UniversalCard";
import { promos } from "../data/Promo";
import { soluciones } from '../data/Soluciones';
import CardTitle from "../components/CardTitle";
import CardDescription from "../components/CardDescrition";
import InfiniteSlider from "../components/InfinitySlider";
import NuevosProyectos from "../components/NuevosProyectos";
import NuevosArticulos from "../components/nuevoArticulo";
import AdNoticeSection from "../components/AdNoticeSection";
import { useScrollTop } from "../hooks/useScrollTop";


const Inicio: React.FC = () => {
  useScrollTop();
  const theme = useTheme();

  return (
    <UniversalContainer pb={3}>
      {/* Hero principal */}
      <Hero />

      <InfiniteSlider />
      {/* Avisos Promocionales */}

      <NuevosProyectos />
      <NuevosArticulos />
      <AdNoticeSection
        ads={[
          "⚡ ¡Descuento del 30% en nuestros cursos de ciberseguridad!",
          "🎯 Nueva funcionalidad: escanea tu red con un solo clic.",
          "🛡️ Protege tu infraestructura con nuestras auditorías premium.",
        ]}
      />

      <Box sx={{ px: 3, py: 3, mt: 3, width: "100%" }}>
        <Box sx={{ textAlign: "center" }}>
          <SectionSubtitle >🌐 Novedades en servicios</SectionSubtitle>
        </Box>
        <Grid container spacing={3} sx={{ px: 3, py: 4, width: 'fit-content', margin: '0 auto', }}>
          {promos.map(({ title, description }, index) => (
            <Grid item xs={12} md={6} key={index} {...({} as any)}>
              <UniversalCard>
                <CardTitle>
                  {title}
                </CardTitle>
                <CardDescription>
                  {description}
                </CardDescription>
              </UniversalCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Sección de características */}
      <Box sx={{ px: 3, py: 1, pb: 4, width: "100%" }}>
        <Box sx={{ textAlign: "center" }}>
          <SectionSubtitle>🔧 Soluciones Tecnológicas</SectionSubtitle>
        </Box>
        <Grid container spacing={4} sx={{ px: 3, py: 4, width: 'fit-content', margin: '0 auto' }}>
          {soluciones.map(({ title, description, icon: Icon }, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} {...({} as any)}>
              <UniversalCard>
                <Box sx={{
                  textAlign: "center",
                  "&:hover svg": {
                    color: "var(--color-light-blue)",
                    transform: "scale(1.1)",
                    transition: "all 0.3s ease-in-out",
                  },
                }}>
                  <Icon sx={{ fontSize: 60, color: "var(--color-black)", mb: 1, transition: "all 0.3s ease-in-out" }} />
                  <CardTitle>
                    {title}
                  </CardTitle>
                  <CardDescription>
                    {description}
                  </CardDescription>
                </Box>
              </UniversalCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </UniversalContainer>
  );
};

export default Inicio;
