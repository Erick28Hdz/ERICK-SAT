// components/UniversalImage.tsx
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material"; 
import { useState } from "react";

type Props = {
  src: string;
  alt?: string;
  containerSx?: SxProps<Theme>; 
  imgSx?: SxProps<Theme>;
};

export default function UniversalImage({
  src,
  alt = "",
  containerSx,
  imgSx,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 400,
        height: "auto",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.15)",
        margin: "1rem auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...containerSx, // ✅ estilos externos del contenedor
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 450,
          objectFit: "cover",
          boxShadow: hovered
            ? "0 8px 20px rgba(0, 0, 0, 0.2)"
            : "0 12px 30px rgba(0, 0, 0, 0.25)",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
          transform: hovered ? "scale(1.03)" : "scale(1)",
          ...imgSx, // ✅ estilos específicos de la imagen
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </Box>
  );
}
