import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescrition";
import UniversalCard from "./UniversalCard";


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
    <UniversalCard>
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
                      fontWeight: 400,
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
    </UniversalCard>
  );
};

export default ServiceCard;
