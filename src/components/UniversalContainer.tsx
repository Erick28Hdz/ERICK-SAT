// components/UniversalContainer.tsx
import React from "react";
import { Box, type BoxProps } from "@mui/material";

const UniversalContainer: React.FC<BoxProps> = ({ children, sx, ...rest }) => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--color-dark-blue)",
        color: "var(--color-black)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", 
        width: "100%",
        minHeight: "80vh",
        ...sx, 
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default UniversalContainer;
