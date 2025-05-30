import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Pagination,
} from "@mui/material";
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

const Blog = () => {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const filteredArticles = articles.filter((a) => {
    const searchMatch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.desc.toLowerCase().includes(search.toLowerCase());

    const categoryMatch = category === "Todas" || a.category === category;

    return searchMatch && categoryMatch;
  });

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  return (
    <div className="universal-container">
      <SectionTitle> Nuestro Blog</SectionTitle>
      <IntroSection
        description={
          <Typography
            variant="body1"
            className="description"
          >
            "Sumérgete en artículos especializados que transforman el conocimiento técnico en soluciones prácticas..."
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
          gap: 15,
          px: 1,
          margin: "1rem",
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
            onChange={(e) => setCategory(e.target.value)}
            options={["Todas", "ciberseguridad", "scripts", "formación", "casos"]}
            fullWidth
          />
        </Box>
      </Box>

      <Grid container spacing={4} justifyContent={"center"} margin={5} >
        {currentArticles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}{...({} as any)}>
            <BasePaper>
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
        ))}
      </Grid>
      <Box
        display="flex"
        justifyContent="center"
        mt={4}
        sx={{
          '& .MuiPagination-root': {
            fontFamily: 'var(--font-ui)',
            borderRadius: 4,
          },
          '& .MuiPaginationItem-root': {
            color: 'var(--color-light)',
            backgroundColor: 'var(--color-light-blue)',
            borderRadius: '8px',
            margin: '0 4px',
            transition: 'all 0.3s ease',
            border: '1px solid var(--color-light-blue)',
          },
          '& .MuiPaginationItem-root:hover': {
            backgroundColor: 'var(--color-light-blue)',
            color: 'var(--color-dark-blue)',
          },
          '& .Mui-selected': {
            backgroundColor: 'var(--color-light-blue) !important',
            color: 'var(--color-black)',
            fontWeight: 'bold',
          },
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(e, value) => setCurrentPage(value)}
          color="primary"
        />
      </Box>
    </div>
  );
};

export default Blog;
