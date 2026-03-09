import { Box, Typography, Grid, Paper, Avatar } from "@mui/material";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import BusinessIcon from "@mui/icons-material/Business";
import PublicIcon from "@mui/icons-material/Public";
import UniversalContainer from "../components/universales/UniversalContainer";
import SectionTitle from "../components/tipografias/SectionTitle";
import IntroSection from "../components/ui/IntroSection";
import SectionSubtitle from "../components/tipografias/SectionSubtitle";
import TestimonialCard from "../components/ui/TestimonialCard";
import { testimonios, casosDeExito } from "../data/Clientes";
import UniversalImage from "../components/universales/UniversalImg";
import CardTitle from "../components/ui/CardTitle";
import CardDescription from "../components/ui/CardDescrition";
import { useScrollTop } from "../hooks/useScrollTop";


const Clients: React.FC = () => {
  useScrollTop();
  return (
    <UniversalContainer pt={6} pb={3}>
      {/* Título principal */}
      <SectionTitle>¿quiénes son  nuestros clientes?</SectionTitle>

      {/* Descripción completa */}
      <IntroSection
        description={
          <Typography
            variant="body1"
            className="description"
          >
            ERICK SOFTWARE AND TECHNOLOGY está orientada a atender una amplia variedad de clientes, desde personas sin experiencia técnica hasta empresas con necesidades específicas de desarrollo o ciberseguridad:
            <br />
            <br />
            • <strong>Personas naturales</strong> interesadas en proteger su información, optimizar sus dispositivos o aprender sobre tecnología desde cero.
            <br />
            • <strong>Emprendedores, freelancers y pequeñas empresas</strong> que buscan una presencia digital efectiva, segura y a medida.
            <br />
            • <strong>Instituciones educativas</strong> que deseen implementar formación en ciberseguridad o soluciones digitales simples.
            <br />
            • <strong>Startups y microempresas tecnológicas</strong> que necesitan scripts, automatizaciones o análisis de seguridad.
            <br />
            • <strong>Profesionales independientes</strong> que requieren plantillas, portafolios y herramientas listas para usar.
            <br />
            • <strong>Pequeños negocios familiares</strong> que desean digitalizar procesos pero enfrentan limitaciones técnicas.
            <br />
            • <strong>ONGs, entidades públicas y organizaciones sociales</strong> que quieren asegurar sus plataformas o capacitar a su personal en tecnología básica.
          </Typography>
        }
        imageComponent={<UniversalImage src="/images/cliente.jpg" alt="Nuestros servicios" />}
      />
      {/* Segmentación */}
      <Box sx={{ textAlign: "center" }}>
        <SectionSubtitle>🧩 tipo de cliente</SectionSubtitle>
      </Box>

      <Grid sx={{ mt: 4 }} container spacing={4} justifyContent="center" >
        {[
          {
            icon: <EmojiPeopleIcon />,
            label: "Nivel técnico",
            desc: "Desde usuarios sin conocimientos hasta técnicos con necesidades puntuales.",
          },
          {
            icon: <BusinessIcon />,
            label: "Industria",
            desc: "Educación, comercio, salud, servicios, tecnología, sector público.",
          },
          {
            icon: <BusinessIcon />,
            label: "Tamaño",
            desc: "Personas individuales, microempresas, pymes, instituciones locales.",
          },
          {
            icon: <PublicIcon />,
            label: "Ubicación",
            desc: "Principal enfoque en Colombia y Latinoamérica, servicios 100% remotos.",
          },
          {
            icon: <PublicIcon />,
            label: "Tipo de necesidad",
            desc: "Presencia web, automatización, ciberseguridad, educación, asesoría técnica.",
          },
        ].map((segment, index) => (
          <Grid item xs={12} sm={6} md={4} m={2} key={index} {...({} as any)}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
                minHeight: 200,
                maxWidth: 380,
                margin: "0 auto",
                borderRadius: "20px 0",
                borderLeft: "2px solid var(--color-beige)",
                borderRight: "2px solid transparent",
                bgcolor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                textAlign: "center",
                fontFamily: "var(--font-sans)",
                '&:hover': {
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.25)",
                  transform: "translateY(-5px)",
                  borderLeft: "2px solid var(--color-light-blue)",
                  borderRight: "2px solid var(--color-light-blue)",
                  '.MuiAvatar-root': {
                    bgcolor: "var(--color-light-blue)",
                    '& svg': {
                      color: "black",
                    }
                  }
                }
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "var(--color-black)",
                  width: 56,
                  height: 56,
                  mb: 1,
                }}
              >
                {segment.icon}
              </Avatar>

              {/* Reemplazamos aquí el título por CardTitle */}
              <CardTitle>{segment.label}</CardTitle>
              <CardDescription>{segment.desc}</CardDescription>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Casos de éxito */}
      <Box sx={{ mt: 8 }}>
        <Box sx={{ textAlign: "center" }}>
          <SectionSubtitle>🛡️ Casos de Éxito</SectionSubtitle>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
            m: 4,
          }}
        >
          {casosDeExito.map((c, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                boxSizing: "border-box",
              }}
            >
              <TestimonialCard content={c.content} author={c.author} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Testimonios */}
      <Box sx={{ mt: 6 }}>
        <Box sx={{ textAlign: "center" }}>
          <SectionSubtitle>💬 Testimonios</SectionSubtitle>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
            m: 4,
          }}
        >
          {testimonios.map((t, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                boxSizing: "border-box",
              }}
            >
              <TestimonialCard content={t.content} author={t.author} />
            </Box>
          ))}
        </Box>
      </Box>
    </UniversalContainer>
  );
};

export default Clients;
