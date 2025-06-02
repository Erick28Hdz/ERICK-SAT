import React from "react";
import Typography from "@mui/material/Typography";
import type { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface CardDescriptionProps extends TypographyProps {
  children: React.ReactNode;
  fontSize?: string;
}

const StyledDescription = styled(({ fontSize, ...rest }: CardDescriptionProps) => (
  <Typography {...rest} />
))(({ theme, fontSize }: { theme: any; fontSize?: string }) => ({
  fontFamily: "var(--font-sans)",
  fontSize: `clamp(0.85rem, 1vw + 0.4rem, ${fontSize || "1.1rem"})`,
  color: "var(--color-beige)",
  marginBottom: theme.spacing(2),
  textAlign: "inherit",
  lineHeight: 1.6,
  transition: "color 0.3s ease, text-shadow 0.3s ease",
  ".MuiPaper-root:hover &": {
    color: "var(--color-light)",
    textShadow: "0 0 2px rgba(0,255,255,0.4)",
  },
}));

const CardDescription: React.FC<CardDescriptionProps> = ({ children, fontSize, ...props }) => {
  return (
    <StyledDescription fontSize={fontSize} {...props}>
      {children}
    </StyledDescription>
  );
};

export default CardDescription;
