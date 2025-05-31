import { useParams, Link } from "react-router-dom";
import UniversalContainer from "../components/UniversalContainer";
import articles from "../data/Articles";
import { Box, Typography } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import SectionSubtitle from "../components/SectionSubtitle";
import Button from "../components/Button";
import UniversalImage from "../components/UniversalImg";


const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Box className="universal-container" sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h5" color="error" gutterBottom>
          Artículo no encontrado
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/blog">
          Volver al Blog
        </Button>
      </Box>
    );
  }

  return (
    <UniversalContainer pt={6} pb={3} aria-label={`Artículo: ${article.title}`}
    >
      <Box
        sx={{
          width: "100%",     
          mb: 1,
          px: 2,
          py: 0.5,
          color: "var(--color-beige)",
          fontWeight: "bold",
          fontFamily: "var(--font-ui)",
          padding: "2rem 0rem 1rem 4rem",
          textAlign: "left",  
        }}
      >
        Categoría: <SectionSubtitle align="left" as="span">{article.category}</SectionSubtitle>
      </Box>
      <SectionTitle>{article.title}</SectionTitle>
      <Box
        sx={{
          position: "relative",
          padding: "0 9rem",
          margin: "2rem auto",
          maxWidth: "90%",
          color: "var(--color-beige)",
          fontFamily: "var(--font-sans)",
          lineHeight: 1.5,
        }}
      >
        {/* Imagen flotante a la derecha */}
        <UniversalImage
          src={article.image || "/images/default.jpg"}
          alt={article.title}
          sx={{
            float: "right",
            width: 250,
            height: "auto",
            margin: "0 0 1rem 1rem",
          }}
        />

        <Typography
          variant="body1"
          sx={{
            whiteSpace: "pre-line",
          }}
        >
          {article.content}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="outlined" component={Link} to="/blog">
          ← Volver al Blog
        </Button>
      </Box>
    </UniversalContainer>
  );
};

export default ArticlePage;
