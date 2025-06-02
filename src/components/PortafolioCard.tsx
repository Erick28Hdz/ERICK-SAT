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
import UniversalCard from "./UniversalCard";

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
        <UniversalCard>
            {/* Imagen con estilo personalizado */}
            <Box
                sx={{
                    
                    height: 180, // Ajusta esta altura a tu gusto (en px)
                    overflow: "hidden",
                    borderRadius: 2,
                }}
            >
                <UniversalImage
                    src={image}
                    alt={title}
                    containerSx={{
                        height: 180,
                        borderRadius: 2,
                        margin: 0,
                    }}
                    imgSx={{
                        objectFit: "cover",
                    }}
                />
            </Box>

            <CardContent sx={{ flexGrow: 1, p: 0 }}>
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
            <CardActions sx={{ px: 3, pb: 1 }}>
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
        </UniversalCard>
    );
};

export default PortfolioCard;
