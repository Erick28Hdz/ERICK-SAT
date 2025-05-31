import React from "react";
import articles from "../data/Articles";
import { Box, Grid, Typography } from "@mui/material";
import SectionSubtitle from "./SectionSubtitle";
import ArticleCard from "../components/ArticleCard";  // Aquí el cambio

const ultimosArticulos = articles
  .filter((a) => a.fecha)
  .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
  .slice(0, 3);

const NuevosArticulos: React.FC = () => {
  return (
    <Box sx={{ px: 3, py: 5 }}>
      <SectionSubtitle>📚 Últimos Artículos</SectionSubtitle>

      <Grid container spacing={4} justifyContent="center" mt={2}>
        {ultimosArticulos.length > 0 ? (
          ultimosArticulos.map((articulo, index) => (
            <Grid item xs={12} sm={6} md={4} key={articulo.slug || index}{...({} as any)}>
              <ArticleCard
                title={articulo.title}
                description={articulo.desc}
                image={articulo.image}
                slug={articulo.slug}
                category={articulo.category}
              />
            </Grid>
          ))
        ) : (
          <Typography textAlign="center" mt={3} color="text.secondary">
            No hay artículos recientes publicados.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default NuevosArticulos;
