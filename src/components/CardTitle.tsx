import React from "react";
import Typography from "@mui/material/Typography";
import { styled, type SxProps, type Theme } from "@mui/material/styles";

interface CardTitleProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-tech)",
  fontWeight: 600,
  fontSize: "1.3rem",
  color: "var(--color-black)",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  transition: "color 0.3s ease, text-shadow 0.3s ease",
  textAlign: "center",

  ".MuiPaper-root:hover &": {
    color: "var(--color-light-blue)",
    textShadow: "0 0 8px rgba(0,255,255,0.8)",
  },
}));

const CardTitle: React.FC<CardTitleProps> = ({ children, sx }) => {
  return (
    <StyledTitle variant="h4" sx={sx}>
      {children}
    </StyledTitle>
  );
};

export default CardTitle;
