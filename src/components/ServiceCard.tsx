import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescrition";

type ServiceCardProps = {
  title: React.ReactNode;
  description: string;
  values: {
    label: string;
    value: string | number;
  }[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, values }) => {
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
        minHeight: 300,
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
          'h6': {
            color: 'var(--color-light-blue)',
            textShadow: "0 0 8px rgba(0,255,255,0.8)",
          }
        },
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </Box>
        <Box sx={{ mt: "auto" }}>
          <TableContainer
            component={Paper}
            variant="outlined"
            sx={{
              background: "transparent",
              border: "2px solid rgba(255,255,255,0.05)",
              boxShadow: "none",
            }}
          >
            <Table size="small" aria-label="detalles del servicio">
              <TableBody>
                {values.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        color: "var(--color-beige)",
                        fontFamily: "var(--font-ui)",
                      }}
                    >
                      {item.label}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "var(--color-light)",
                        fontFamily: "var(--font-ui)",
                      }}
                    >
                      {item.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
