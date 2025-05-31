import React from "react";
import {
  Box,
} from "@mui/material";
import SocialLinks from "./SocialLinks";
import SectionSubtitle from "./SectionSubtitle";
import CardDescription from "./CardDescrition";
import FooterLinks from "./FooterLink";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        backgroundColor: "var(--color-black)",
        color: "var(--color-dark-blue)",
        boxShadow: "0px -4px 10px 1px rgba(0, 0, 0, 0.4)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        flexWrap: "wrap", // útil para responsividad
        gap: 2,
      }}
    >
      {/* Logo o nombre (20%) */}
      <Box sx={{ width: { xs: "100%", md: "25%" }, textAlign: "center", m: 2 }}>
        <SectionSubtitle fontSize="1.2rem">
          ERICK SOFTWARE AND TECHNOLOGY
        </SectionSubtitle>
        <CardDescription fontSize="0.9rem">
          &copy; {new Date().getFullYear()} - Todos los derechos reservados
        </CardDescription>
      </Box>

      {/* Enlaces legales (40%) */}
      <Box sx={{ width: { xs: "100%", md: "30%" }, display: "flex", justifyContent: "center" }}>
        <FooterLinks />
      </Box>

      {/* Redes sociales (20%) */}
      <Box sx={{ width: { xs: "100%", md: "40%" }, display: "flex", justifyContent: "center" }}>
        <SocialLinks hide={[]} />
      </Box>
    </Box>
  );
};

export default Footer;
