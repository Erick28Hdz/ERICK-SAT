import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { servicios } from "../data/Servicios";
import SectionTitle from "../components/SectionTitle";
import IntroSection from "../components/IntroSection";
import ServiceCard from "../components/ServiceCard";
import CategoryTabs from "../components/Tabs";
import UniversalImage from "../components/UniversalImg";

// Define la interfaz del servicio
interface Servicio {
  nombre: string;
  descripcion: string;
  dificultad: string;
  tiempo: string;
  precioMin: string;
  precioMax: string;
  categoria: string;
  entregables: string[];
}

// Categorías
const categorias: string[] = [
  "Ciberseguridad",
  "Scripts personalizados",
  "Plantillas y aplicaciones web",
  "Educación y Formación",
  "Desarrollo Web por Niveles",
];

// Panel de pestañas
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
}

function TabPanel({ children, value, index, className }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={className}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

// Componente principal
const Services: React.FC = () => {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box className="universal-container">
      <SectionTitle>Nuestros Servicios</SectionTitle>
      <IntroSection
        description={
          <Typography
            variant="body1"
            className="description"
          >Potencia tu negocio con nuestros servicios de <strong>ciberseguridad</strong>, <strong>desarrollo web personalizado</strong> y <strong>formación técnica de alto nivel</strong>.
            <br /><br />
            Creamos soluciones a tu medida, con tecnología de punta, atención cercana y precios competitivos.
            <br />
            <span style={{ color: "var(--color-light)", fontWeight: "500" }}>
              ¡Haz que tu proyecto destaque y evolucione con nosotros desde hoy!
            </span></Typography>
        }
        imageComponent={<UniversalImage src="/images/servicios.jpg" alt="Nuestros servicios" />}
      />
      <CategoryTabs
        value={tabValue}
        onChange={handleChange}
        categorias={categorias}
      />
      {categorias.map((cat, i) => (
        <TabPanel key={cat} value={tabValue} index={i} className="tab-panel">
          <Grid container spacing={4} justifyContent="center">
            {servicios.filter((s) => s.categoria === cat).length === 0 ? (
              <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                No hay servicios disponibles en esta categoría.
              </Typography>
            ) : (
              servicios
                .filter((s) => s.categoria === cat)
                .map((s: Servicio, idx: number) => (
                  <Grid item xs={12} md={6} lg={4} key={idx} {...({} as any)}>
                    <ServiceCard
                      title={s.nombre}
                      description={s.descripcion}
                      values={[
                        { label: "Dificultad", value: s.dificultad },
                        { label: "Tiempo estimado", value: s.tiempo },
                        { label: "Precio", value: `${s.precioMin} – ${s.precioMax}` },
                        { label: "Entregables", value: s.entregables.join(", ") },
                      ]}
                    />
                  </Grid>
                ))
            )}
          </Grid>
        </TabPanel>
      ))}
    </Box>
  );
};

export default Services;
