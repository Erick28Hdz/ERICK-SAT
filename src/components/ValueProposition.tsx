// components/ValueProposition.tsx
import { Box } from "@mui/material";
import { Build, Lightbulb, SupportAgent, Shield } from "@mui/icons-material";
import UniversalCard from "./UniversalCard";
import CardDescription from "./CardDescrition";
import SectionSubtitle from "./SectionSubtitle";

export default function ValueProposition() {
  const features = [
    {
      icon: <Build />,
      text: "Soluciones personalizadas para cada cliente",
    },
    {
      icon: <Lightbulb />,
      text: "Enfoque en la innovación y eficiencia",
    },
    {
      icon: <SupportAgent />,
      text: "acompañamiento y Soporte  constante",
    },
    {
      icon: <Shield />,
      text: "Compromiso con la seguridad y la ética digital",
    },
  ];

  return (
    <Box mb={2}>
      <Box sx={{ textAlign: "center" }}>
        <SectionSubtitle>🌟 ¿Por qué elegirnos?</SectionSubtitle>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          margin: 2,
        }}
      >
        {features.map(({ icon, text }, i) => (
          <UniversalCard
            key={i}
            sx={{
              width: { xs: "100%", sm: "45%", md: "22%" }, // mismas proporciones
              minHeight: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& svg": {
                  fontSize: {
                    xs: 30,   // más pequeño en pantallas pequeñas
                    sm: 35,
                    md: 40,   // tamaño normal
                  },
                  color: "var(--color-black)",
                  mb: 1,
                  transition: "all 0.3s ease-in-out",
                },
                "&:hover svg": {
                  color: "var(--color-light-blue)",
                  transform: "scale(1.1)",
                },
              }}
            >
              {icon}
              <CardDescription>{text}</CardDescription>
            </Box>
          </UniversalCard>
        ))}
      </Box>
    </Box>
  );
}
