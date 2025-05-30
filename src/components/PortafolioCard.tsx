import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    Chip,
    CardActions,
} from "@mui/material";
import Button from "./Button";
import UniversalImage from "./UniversalImg";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescrition";

type PortfolioCardProps = {
    title: string;
    description: string;
    image: string;
    category: string;
    link?: string;
    subcategory: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
    title,
    description,
    image,
    subcategory,
    link,
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
                maxWidth: 390,
                borderRadius: "20px 0",
                borderLeft: "2px solid var(--color-beige)",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                overflow: "hidden",
                margin: "0 auto",
                '&:hover': {
                    boxShadow: "0 0 30px rgba(0, 255, 255, 0.25)",
                    transform: "translateY(-5px)",
                    borderLeft: "2px solid var(--color-light-blue)",
                    borderRight: "2px solid var(--color-light-blue)",
                    'h6': {
                        color: 'var(--color-light-blue)',
                        textShadow: "0 0 8px rgba(0,255,255,0.8)",
                    }
                },
            }}
        >
            {/* Imagen con estilo personalizado */}
            <Box sx={{ px: 2, pt: 1 }}>
                <UniversalImage src={image} alt={title} />
            </Box>

            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <Chip
                    label={subcategory}
                    color="primary"
                    variant="outlined"
                    sx={{
                        borderColor: "var(--color-light-blue)",
                        color: "var(--color-light-blue)",
                        fontFamily: "var(--font-ui)",
                    }}
                />
            </CardContent>
            <CardActions sx={{ px: 3, pb: 3 }}>
                {link ? (
                    <Button
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver Proyecto
                    </Button>
                ) : (
                    <Button disabled>
                        Sin enlace
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default PortfolioCard;
