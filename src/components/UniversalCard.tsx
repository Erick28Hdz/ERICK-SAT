// components/UniversalCard.tsx
import React from "react";
import { Card, CardContent } from "@mui/material";

interface UniversalCardProps {
    children: React.ReactNode;
    sx?: object;
}

const UniversalCard: React.FC<UniversalCardProps> = ({ children, sx }) => {
    return (
        <Card
            variant="outlined"
            className="custom-service-card"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
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
                ...sx
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    height: "100%", 
                }}
            >
                {children}
            </CardContent>
        </Card>
    );
};

export default UniversalCard;
