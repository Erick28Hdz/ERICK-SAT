// components/UniversalCard.tsx
import React from "react";
import { Card, CardContent, type CardProps } from "@mui/material";

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
        maxWidth: 380,
        borderRadius: "20px 0",
        borderLeft: "2px solid var(--color-beige)",
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
          flexDirection: contentFlexDirection,
          flexGrow: 1,
          height: "100%",
          padding: 2,
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default UniversalCard;
