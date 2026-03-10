import React, { useState } from "react";

import { servicios } from "../../data/Servicios";
import { parsePrice, formatPrice } from "../../utils/formatPrice";
import { useExchangeRates } from "../../hooks/useExchangeRates";

import ServiceCard from "./ServiceCard";
import UniversalPagination from "../ui/universales/UniversalPagination";
import UniversalGrid from "../ui/universales/arquitectura/UniversalGrid";
import UniversalContainer from "../ui/universales/arquitectura/UniversalContainer";

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

  return (
    <>

      {serviciosFiltrados.length === 0 ? (

        <p className="text-center text-gray-400 mt-6">
          No hay servicios disponibles.
        </p>

      ) : (
        <UniversalContainer>
        <UniversalGrid cols={3} className="mt-2">

          {paginated.map((s, idx) => (

            <ServiceCard
              key={idx}
              title={s.nombre}
              description={s.descripcion}
              values={[
                { label: "Dificultad", value: s.dificultad },
                { label: "Tiempo estimado", value: s.tiempo },
                { label: "Precio", value: `${s.precioMin} – ${s.precioMax}` },
                { label: "Entregables", value: s.entregables.join(", ") },
              ]}
            />

          ))}

        </UniversalGrid>
        </UniversalContainer>

      )}

      {serviciosFiltrados.length > 6 && (

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