import React from "react";
import { proyectos } from "../data/Portafolio";
import SectionSubtitle from "./SectionSubtitle";
import PortfolioCard from "./PortafolioCard";
import { Grid, Typography, Box } from "@mui/material";

// Tomamos los 3 más recientes por fecha (si hay propiedad `fecha`)
const ultimosProyectos = proyectos
  .filter(p => p.fecha) // opcional si hay proyectos sin fecha
  .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
  .slice(0, 3);

const NuevosProyectos: React.FC = () => {
  return (
    <Box sx={{ px: 3, py: 5 }}>
      <SectionSubtitle>📰 Nuevos Proyectos</SectionSubtitle>

      <Grid container spacing={4} justifyContent={"center"} marginTop={2}>
        {ultimosProyectos.map((proyecto) => (
          <Grid item xs={12} sm={6} md={4} key={proyecto.id}{...({} as any)}>
            <PortfolioCard
              title={proyecto.titulo}
              description={proyecto.descripcion}
              image={proyecto.imagen}
              category={proyecto.categoria}
              link={proyecto.enlace}
              subcategory={proyecto.subcategoria}
            />
          </Grid>
        ))}
      </Grid>

      {ultimosProyectos.length === 0 && (
        <Typography textAlign="center" mt={3} color="text.secondary">
          Aún no hay proyectos agregados recientemente.
        </Typography>
      )}
    </Box>
  );
};

export default NuevosProyectos;
