import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
} from "@mui/material";
import UniversalContainer from "../components/UniversalContainer";
import articles from "../data/Articles";
import SectionTitle from "../components/SectionTitle";
import IntroSection from "../components/IntroSection";
import BasePaper from "../components/Paper";
import SearchInput from "../components/SearchInput";
import CustomSelect from "../components/CustomSelect";
import UniversalImage from "../components/UniversalImg";
import { Link } from "react-router-dom";
import CardTitle from "../components/CardTitle";
import CardDescription from "../components/CardDescrition";
import { useScrollTop } from "../hooks/useScrollTop";
import { usePagination } from "../hooks/usePagination";
import UniversalPagination from "../components/UniversalPagination";

const Blog: React.FC = () => {
  useScrollTop();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const articlesPerPage = 6;

  const filteredArticles = articles.filter((a) => {
    const searchMatch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.desc.toLowerCase().includes(search.toLowerCase());

    const categoryMatch = category === "Todas" || a.category === category;

    return searchMatch && categoryMatch;
  });

  const {
    currentPage,
    setCurrentPage,
    currentItems: currentArticles,
    totalPages
  } = usePagination(filteredArticles, articlesPerPage);

  return (
    <UniversalContainer pt={6} pb={3}>
      <SectionTitle>Nuestro Blog</SectionTitle>
      <IntroSection
        description={
          <Typography
            variant="body1"
            className="description"
          >
            <p>
              ¿Estás listo para ir más allá de lo convencional? En nuestro blog te sumergirás en artículos especializados que no solo explican la tecnología, sino que la convierten en oportunidades reales para crecer, emprender o innovar.
            </p>
            <p>
              La tecnología evoluciona. Tú también deberías hacerlo. Comienza tu lectura ahora.
            </p>
          </Typography>
        }
        imageComponent={<UniversalImage src="/images/blog.jpg" alt="Nuestros servicios" />}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
          px: 1,
          margin: "2rem",
        }}
      >
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Buscar artículo o palabra clave"
        />

        <Box sx={{ minWidth: 220 }}>
          <CustomSelect
            label="Categoría"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1); // Reiniciar la paginación al cambiar filtro
            }}
            options={["Todas", "ciberseguridad", "scripts", "formación", "casos"]}
            fullWidth
          />
        </Box>
      </Box>

      <Grid container spacing={4} justifyContent={"center"} margin={5}>
        {currentArticles.length > 0 ? (
          currentArticles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.slug}{...({} as any)}>
              <BasePaper sx={{ height: '100%' }}>
                <Link to={`/blog/${article.slug}`} style={{ textDecoration: "none" }}>
                  <CardTitle>{article.title}</CardTitle>
                </Link>
                <CardDescription>{article.desc}</CardDescription>
                <Typography
                  variant="caption"
                  sx={{ mt: 2, color: "var(--color-beige)" }}
                >
                  Categoría: {article.category}
                </Typography>
              </BasePaper>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" textAlign="center" width="100%" color="text.secondary">
            No se encontraron artículos con esos criterios.
          </Typography>
        )}
      </Grid>

      {totalPages > 1 && (
        <UniversalPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </UniversalContainer>
  );
};

export default Blog;
