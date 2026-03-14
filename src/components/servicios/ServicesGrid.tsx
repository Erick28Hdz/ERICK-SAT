import React, { useState } from "react";
import { motion, easeOut } from "framer-motion";

import { servicios } from "../../data/Servicios";
import { parsePrice, formatPrice } from "../../utils/formatPrice";
import { useExchangeRates } from "../../hooks/useExchangeRates";

import ServiceCard from "../ui/cards/ServiceCard";
import UniversalPagination from "../ui/universales/UniversalPagination";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalContainer from "../ui/universales/UniversalContainer";

interface Props {
  categoria: number;
  moneda: string;
  locale: string;
}

const categorias = [
  "Todas",
  "Ciberseguridad",
  "Scripts personalizados",
  "Plantillas y aplicaciones web",
  "Educación y Formación",
  "Desarrollo Web por Niveles",
];

// Variants para animación de contenedor y tarjetas
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, // anima los hijos uno tras otro
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut, // ✅ ahora TypeScript no se queja
    },
  },
};

const ServicesGrid: React.FC<Props> = ({ categoria, moneda, locale }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 6;

  const { rates, loading } = useExchangeRates();

  if (loading) return <p className="text-beige">Cargando tasas...</p>;

  const serviciosFormateados = servicios.map((servicio) => {
    const precioMinCOP = parsePrice(servicio.precioMin);
    const precioMaxCOP = parsePrice(servicio.precioMax);

    const tasaCambio =
      moneda === "COP" ? 1 : (rates[moneda] / rates["COP"]) || 1;

    return {
      ...servicio,
      precioMin: formatPrice(precioMinCOP * tasaCambio, locale, moneda),
      precioMax: formatPrice(precioMaxCOP * tasaCambio, locale, moneda),
    };
  });

  const serviciosFiltrados = serviciosFormateados.filter((s) =>
    categoria === 0 ? true : s.categoria === categorias[categoria]
  );

  const totalPages = Math.ceil(serviciosFiltrados.length / servicesPerPage);

  const paginated = serviciosFiltrados.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  );

  if (serviciosFiltrados.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-6">
        No hay servicios disponibles.
      </p>
    );
  }

  return (
    <>
      <UniversalContainer>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <UniversalGrid cols={3} className="mt-2">
            {paginated.map((s, idx) => (
              <motion.div key={idx} variants={cardVariants}>
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
              </motion.div>
            ))}
          </UniversalGrid>
        </motion.div>
      </UniversalContainer>

      {serviciosFiltrados.length > servicesPerPage && (
        <UniversalPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
};

export default ServicesGrid;