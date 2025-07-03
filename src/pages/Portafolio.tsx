import React, { useState, useMemo, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { proyectos } from "../data/Portafolio";
import UniversalContainer from "../components/UniversalContainer";
import SectionTitle from "../components/SectionTitle";
import IntroSection from "../components/IntroSection";
import CategoryTabs from "../components/Tabs";
import PortfolioCard from "../components/PortafolioCard";
import CustomSelect from "../components/CustomSelect";
import UniversalImage from "../components/UniversalImg";
import { useScrollTop } from "../hooks/useScrollTop";
import UniversalPagination from "../components/UniversalPagination";
import { usePagination } from "../hooks/usePagination";

const categorias: string[] = [
  "Todos",
  "Ciberseguridad",
  "Scripts personalizados",
  "Plantillas y aplicaciones web",
  "Educación y Formación",
  "Desarrollo Web por Niveles",
];

const Portfolio: React.FC = () => {
  useScrollTop();
  const [tabValue, setTabValue] = useState<number>(0);
  const [subcategoria, setSubcategoria] = useState<string>("Todas");

  const categoriaActual = categorias[tabValue];

  const handleCategoriaChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setSubcategoria("Todas"); // Reiniciar subcategoría al cambiar de categoría
  };

  const subcategoriasDisponibles = useMemo(() => {
    if (categoriaActual === "Todos") {
      const allSubs = proyectos.map(p => p.subcategoria);
      return ["Todas", ...Array.from(new Set(allSubs))];
    } else {
      const filtered = proyectos.filter(p => p.categoria === categoriaActual);
      const subs = filtered.map(p => p.subcategoria);
      return ["Todas", ...Array.from(new Set(subs))];
    }
  }, [categoriaActual]);

  const proyectosFiltrados = useMemo(() => {
    let filtrados = categoriaActual === "Todos"
      ? proyectos
      : proyectos.filter(p => p.categoria === categoriaActual);

    if (subcategoria !== "Todas") {
      filtrados = filtrados.filter(p => p.subcategoria === subcategoria);
    }

    // Ordenar por fecha (más reciente primero)
    filtrados.sort((a, b) => {
      const fechaA = new Date(a.fecha).getTime();
      const fechaB = new Date(b.fecha).getTime();
      return fechaB - fechaA; // Más reciente primero
    });

    return filtrados;
  }, [categoriaActual, subcategoria]);

  const { currentPage, setCurrentPage, currentItems, totalPages } = usePagination(proyectosFiltrados, 6);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoriaActual, subcategoria]);

  return (
    <UniversalContainer pb={3} pt={6}>
      <SectionTitle>Portafolio de Productos</SectionTitle>
      <IntroSection
        description={
          <Typography
            variant="body1"
            className="description"
          >Descubre nuestro portafolio de <strong>soluciones tecnológicas innovadoras</strong> diseñadas para impulsar tu empresa al siguiente nivel.
            <br /><br />
            Ofrecemos productos desarrollados con altos estándares de calidad en <strong>seguridad digital</strong>, <strong>aplicaciones web personalizadas</strong> y <strong>herramientas de formación avanzada</strong>.
            <br /><br />
            <span style={{ color: "var(--color-light)", fontWeight: "500" }}>
              Integra tecnología de vanguardia en tu negocio y marca la diferencia con soluciones a medida.
            </span></Typography>
        }
        imageComponent={<UniversalImage src="/images/productos.jpg" alt="Nuestros servicios" />}
      />

      <CategoryTabs
        value={tabValue}
        onChange={handleCategoriaChange}
        categorias={categorias}
      />

      {/* Select de Subcategorías */}
      <Box sx={{ margin: 10, display: "flex", justifyContent: "flex-end", my: 3 }}>
        <CustomSelect
          label="Subcategoría"
          value={subcategoria}
          onChange={(e) => setSubcategoria(e.target.value)}
          options={subcategoriasDisponibles}
        />
      </Box>

      {/* Lista de proyectos filtrados */}
      <Grid container spacing={4} justifyContent={"center"} margin={2}>
        {currentItems.map((proyecto) => (
          <Grid item xs={12} sm={6} md={4} key={proyecto.id} {...({} as any)}>
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

        {proyectosFiltrados.length === 0 && (
          <Grid item xs={12} {...({} as any)}>
            <Typography variant="body1" color="text.secondary" textAlign="center">
              No hay proyectos disponibles en esta categoría y subcategoría.
            </Typography>
          </Grid>
        )}
      </Grid>
      {totalPages > 1 && (
        <UniversalPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </UniversalContainer>
  );
};

export default Portfolio;
