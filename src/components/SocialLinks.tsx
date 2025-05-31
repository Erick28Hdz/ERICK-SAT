import React from "react";
import { Box, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Opcional: Tipado para futura extensión con props
interface SocialLinksProps {
    hide?: Array<"whatsapp" | "telegram" | "github" | "linkedin" | "youtube" | "facebook" | "tiktok" | "gmail">;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ hide = [] }) => {
    const iconStyle = {
        transition: "0.3s",
        "&:hover": {
            color: "var(--color-light-blue)",
            filter: "drop-shadow(0 0 3px var(--color-light-blue))",
        },
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
            }}
        >
            {!hide.includes("whatsapp") && (
                <IconButton
                    href="https://wa.me/573022016072"
                    target="_blank"
                    sx={{ color: "#25D366", ...iconStyle }}
                >
                    <WhatsAppIcon fontSize="large" />
                </IconButton>
            )}

            {!hide.includes("telegram") && (
                <IconButton
                    href="https://t.me/ErickSAT46"
                    target="_blank"
                    sx={{ color: "#229ED9", ...iconStyle }}
                >
                    <TelegramIcon fontSize="large" />
                </IconButton>
            )}

            {!hide.includes("github") && (
                <IconButton
                    href="https://github.com/Erick28Hdz"
                    target="_blank"
                    sx={{ color: "#333", ...iconStyle }}
                >
                    <GitHubIcon fontSize="large" />
                </IconButton>
            )}

            {!hide.includes("linkedin") && (
                <IconButton
                    href="https://linkedin.com/in/erick-hernandez-sapere-aude"
                    target="_blank"
                    sx={{ color: "#0077B5", ...iconStyle }}
                >
                    <LinkedInIcon fontSize="large" />
                </IconButton>
            )}

            {!hide.includes("youtube") && (
                <IconButton
                    href="https://www.youtube.com/@tu_usuario"
                    target="_blank"
                    sx={{ color: "#FF0000", ...iconStyle }}
                >
                    <YouTubeIcon fontSize="large" />
                </IconButton>
            )}

            {!hide.includes("facebook") && (
                <IconButton
                    href="https://www.facebook.com/tu_usuario"
                    target="_blank"
                    sx={{ color: "#1877F2", ...iconStyle }}
                >
                    <FacebookIcon fontSize="large" />
                </IconButton>
            )}

            {!hide.includes("tiktok") && (
                <IconButton
                    href="https://www.tiktok.com/@tu_usuario"
                    target="_blank"
                    sx={{ color: "#000", ...iconStyle }}
                >
                    <FaTiktok size={30} />
                </IconButton>
            )}

            {!hide.includes("gmail") && (
                <IconButton
                    href="mailto:erick.hdz9628@gmail.com"
                    target="_blank"
                    sx={{ color: "#D14836", ...iconStyle }}
                    aria-label="Gmail"
                >
                    <MdEmail size={30} />
                </IconButton>
            )}
        </Box>
    );
};

export default SocialLinks;
