// FooterLinks.tsx
import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import UniversalCard from "./UniversalCard";

const LinkStyled = styled("a")({
    position: "relative",
    textDecoration: "none",
    color: "var(--color-light)",
    fontFamily: "var(--font-ui)",
    transition: "color 0.3s ease",
    display: "inline-block",

    "&::after": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "2px",
        background: "var(--color-light-blue)",
        left: 0,
        bottom: "-3px",
        transform: "scaleX(0)",
        transformOrigin: "right",
        transition: "transform 0.3s ease",
    },

    "&:hover": {
        color: "var(--color-light-blue)",
    },

    "&:hover::after": {
        transform: "scaleX(1)",
        transformOrigin: "left",
    },
});

const FooterLinks: React.FC = () => {
    return (
        <UniversalCard
            contentFlexDirection="row"
            sx={{
                width: "100%", // ✅ Ahora ocupa todo el ancho disponible
                gap: "1rem",
                textAlign: "center",
                background: "var(--color-black)",
                borderRadius: "20px 0px",
                m: 1,
                px: 3, // algo de padding horizontal
                justifyContent: "space-around", // ✅ distribuye los enlaces horizontalmente
                borderLeft: "none",
                borderTop: "2px solid var(--color-beige)",
                '&:hover': {
                    borderLeft: "none",
                    borderBottom: "2px solid var(--color-light-blue)",
                    borderTop: "2px solid var(--color-light-blue)",
                },
            }}
        >
            <LinkStyled href="#">Aviso legal</LinkStyled>
            <LinkStyled href="#">Política de privacidad</LinkStyled>
            <LinkStyled href="#">Términos de uso</LinkStyled>
        </UniversalCard>

    );
};

export default FooterLinks;
