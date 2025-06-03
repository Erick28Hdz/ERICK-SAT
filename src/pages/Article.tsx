import { useParams, Link } from "react-router-dom";
import UniversalContainer from "../components/UniversalContainer";
import articles from "../data/Articles";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import SectionSubtitle from "../components/SectionSubtitle";
import Button from "../components/Button";
import UniversalImage from "../components/UniversalImg";
import { useScrollTop } from '../hooks/useScrollTop';

const ArticlePage = () => {
  useScrollTop();
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
    <UniversalContainer pt={6} pb={3} aria-label={`Artículo: ${article.title}`}>
      <Box
        sx={{
          width: "100%",
          mb: 1,
          px: { xs: 2, sm: 2, md: 4 },
          py: 0.5,
          color: "var(--color-beige)",
          fontWeight: "bold",
          fontFamily: "var(--font-ui)",
          paddingLeft: { xs: 2, sm: 4, md: 8 }, // ajusta padding según pantalla
          textAlign: "left",
        }}
      >
        Categoría: <SectionSubtitle align="left" as="span">{article.category}</SectionSubtitle>
      </Box>
      <SectionTitle>{article.title}</SectionTitle>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          maxWidth: '90%',
          margin: '2rem auto',
          color: "var(--color-beige)",
          fontFamily: "var(--font-sans)",
          lineHeight: 1.5,
          px: { xs: 2, sm: 4, md: 9 },
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: '100%', md: 250 },
            height: 'auto',
            alignSelf: { xs: 'center', md: 'flex-start' },
            marginBottom: { xs: 2, md: 0 },
          }}
        >
          <UniversalImage
            src={article.image || "/default.jpg"}
            alt={article.title}
          />
        </Box>

        <Typography
          variant="body1"
          sx={{
            whiteSpace: "pre-line",
            flexGrow: 1,
          }}
        >
          {article.content}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button variant="outlined" component={Link} to="/blog">
          ← Volver al Blog
        </Button>
      </Box>
    </UniversalContainer>
  );
};

export default ArticlePage;
