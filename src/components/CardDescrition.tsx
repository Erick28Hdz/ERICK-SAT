import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface CardDescriptionProps {
  children: React.ReactNode;
}

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-sans)",
  fontSize: "0.95rem",
  color: "var(--color-beige)",
  marginBottom: theme.spacing(2),
  textAlign: "center",
  lineHeight: 1.6,
  transition: "color 0.3s ease, text-shadow 0.3s ease",

  ".MuiPaper-root:hover &": {
    color: "var(--color-light)",
    textShadow: "0 0 6px rgba(0,255,255,0.4)",
  },
}));

const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => {
  return <StyledDescription variant="body2">{children}</StyledDescription>;
};

export default CardDescription;
