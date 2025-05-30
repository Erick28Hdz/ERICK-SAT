import { Paper } from "@mui/material";

interface BasePaperProps {
  children: React.ReactNode;
  sx?: object;
}

const BasePaper = ({ children, sx = {} }: BasePaperProps) => (
  <Paper
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      p: 3,
      borderRadius: "20px 0",
      borderLeft: "2px solid var(--color-beige)",
      bgcolor: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(10px)",
      color: "var(--color-beige)",
      transition: "all 0.3s ease",
      '&:hover': {
        transform: "translateY(-5px)",
        boxShadow: "0 0 30px rgba(0, 255, 255, 0.25)",
        borderLeft: "2px solid var(--color-light-blue)",
        borderRight: "2px solid var(--color-light-blue)",
      },
      ...sx,
    }}
  >
    {children}
  </Paper>
);

export default BasePaper;
