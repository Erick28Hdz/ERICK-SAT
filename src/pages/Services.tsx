import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { servicios } from "../data/Servicios";
import { parsePrice, formatPrice } from "../utils/formatPrice";
import UniversalContainer from "../components/UniversalContainer";
import SectionTitle from "../components/SectionTitle";
import IntroSection from "../components/IntroSection";
import ServiceCard from "../components/ServiceCard";
import CategoryTabs from "../components/Tabs";
import UniversalImage from "../components/UniversalImg";
import CustomSelect from "../components/CustomSelect";
import { useExchangeRates } from "../hooks/useExchangeRates";
import { useScrollTop } from "../hooks/useScrollTop";
import UniversalPagination from "../components/UniversalPagination";
import { usePagination } from "../hooks/usePagination";

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

// Categorías con la nueva "Todas"
const categorias: string[] = [
  "Todas",
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
  useScrollTop();
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

  // Estado para paginación
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 6;

  // 🟡 Nuevo: Estado de moneda y locale
  const [moneda, setMoneda] = useState("COP");
  const [locale, setLocale] = useState("es-CO");
  const { rates, loading } = useExchangeRates();

  // Opciones disponibles para el selector
  const opcionesMoneda = [
    { label: "Colombia (COP)", value: "COP", locale: "es-CO" },
    { label: "USA (USD)", value: "USD", locale: "en-US" },
    { label: "Europa (EUR)", value: "EUR", locale: "es-ES" },
    { label: "Japón (JPY)", value: "JPY", locale: "ja-JP" },
  ];

  if (loading) return <p style={{ color: "white" }}>Cargando tasas de cambio...</p>;

  // 🟢 Formatea los precios según moneda/locale actual
  const serviciosFormateados = servicios.map((servicio) => {
    const precioMinCOP = parsePrice(servicio.precioMin);
    const precioMaxCOP = parsePrice(servicio.precioMax);
    const tasaCambio = moneda === "COP" ? 1 : (rates[moneda] / rates["COP"]) || 1;

    const precioMinConvertido = precioMinCOP * tasaCambio;
    const precioMaxConvertido = precioMaxCOP * tasaCambio;

    return {
      ...servicio,
      precioMin: formatPrice(precioMinConvertido, locale, moneda),
      precioMax: formatPrice(precioMaxConvertido, locale, moneda),
    };
  });

  // Filtra servicios según pestaña seleccionada
  const serviciosFiltrados = serviciosFormateados.filter((s) =>
    tabValue === 0 ? true : s.categoria === categorias[tabValue]
  );

  // Paginación
  const totalPages = Math.ceil(serviciosFiltrados.length / servicesPerPage);
  const paginatedServices = serviciosFiltrados.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  );

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setCurrentPage(1); // Reiniciar página al cambiar categoría
  };

  return (
    <UniversalContainer pb={3} pt={6}>
      <SectionTitle>Nuestros Servicios</SectionTitle>
      <IntroSection
        description={
          <Typography variant="body1" className="description">
            Potencia tu negocio con nuestros servicios de <strong>ciberseguridad</strong>, <strong>desarrollo web personalizado</strong> y <strong>formación técnica de alto nivel</strong>.
            <br /><br />
            Creamos soluciones a tu medida, con tecnología de punta, atención cercana y precios competitivos.
            <br />
            <span style={{ color: "var(--color-light)", fontWeight: "500" }}>
              ¡Haz que tu proyecto destaque y evolucione con nosotros desde hoy!
            </span>
          </Typography>
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
            {serviciosFiltrados.length === 0 ? (
              <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                No hay servicios disponibles en esta categoría.
              </Typography>
            ) : (
              paginatedServices.map((s: Servicio, idx: number) => (
                <Grid item xs={12} md={6} lg={4} key={idx}{...({} as any)}>
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

          {/* Componente de paginación */}
          {serviciosFiltrados.length > 6 && (
            <UniversalPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </TabPanel>
      ))}

      {/* 🟣 Selector de moneda */}
      <Box sx={{ minWidth: 220 }}>
        <label style={{ color: "var(--color-beige)", fontWeight: 500, marginBottom: 8, display: "block" }}>
          Mostrar precios en:
        </label>
        <CustomSelect
          label="Moneda"
          value={moneda}
          onChange={(e) => {
            const selected = opcionesMoneda.find((opt) => opt.value === e.target.value);
            if (selected) {
              setMoneda(selected.value);
              setLocale(selected.locale);
            }
          }}
          options={opcionesMoneda.map((opt) => opt.value)}
        />
      </Box>
    </UniversalContainer>
  );
};

export default Services;
