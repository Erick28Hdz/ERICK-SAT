// components/UniversalCard.tsx
import React from "react";
import { Card, CardContent, type CardProps, useMediaQuery, useTheme } from "@mui/material";

interface UniversalCardProps extends CardProps {
  children: React.ReactNode;
  contentFlexDirection?: "row" | "column";
}

const UniversalCard: React.FC<UniversalCardProps> = ({
  children,
  sx,
  contentFlexDirection = "column",
  ...rest
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // true si ancho < 600px

  return (
    <Card
      variant="outlined"
      className="custom-service-card"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        maxWidth: "clamp(280px, 85vw, 380px)",
        borderRadius: "20px 0",
        borderLeft: "2px solid var(--color-beige)",
        borderRight: "2px solid transparent",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        overflow: "hidden",
        '&:hover': {
          boxShadow: "0 0 30px rgba(0, 255, 255, 0.25)",
          transform: "translateY(-5px)",
          borderLeft: "2px solid var(--color-light-blue)",
          borderRight: "2px solid var(--color-light-blue)",
        },
        ...sx,
      }}
      {...rest}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : contentFlexDirection,
          flexGrow: 1,
          height: "100%",
          padding: isMobile ? 1.5 : 2,
          gap: isMobile ? 1.5 : 2,
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default UniversalCard;
