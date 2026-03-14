import React, { useState, useEffect } from "react";
import UniversalSection from "../components/ui/universales/UniversalSection";

import PortfolioIntroSection from "../components/portafolio/PortfolioIntro";
import UniversalPagination from "../components/ui/universales/UniversalPagination";

import PortfolioFilters from "../components/portafolio/PortfolioFilters";
import PortfolioGrid from "../components/portafolio/PortfolioGrid";
import PortfolioEmpty from "../components/portafolio/PortfolioEmpty";

import { usePagination } from "../hooks/usePagination";
import { usePortfolioFilter } from "../hooks/usePortfolioFilter";
import { useScrollTop } from "../hooks/useScrollTop";

const categorias = [
  "Todos",
  "Ciberseguridad",
  "Scripts personalizados",
  "Plantillas y aplicaciones web",
  "Educación y Formación",
  "Desarrollo Web por Niveles",
];

const Portfolio: React.FC = () => {
  useScrollTop();

  const [tabValue, setTabValue] = useState(0);
  const [subcategoria, setSubcategoria] = useState("Todas");

  const categoriaActual = categorias[tabValue];

  const { subcategoriasDisponibles, proyectosFiltrados } = usePortfolioFilter(
    categoriaActual,
    subcategoria,
  );

  const { currentPage, setCurrentPage, currentItems, totalPages } =
    usePagination(proyectosFiltrados, 6);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoriaActual, setCurrentPage, subcategoria]);

  const handleCategoriaChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setSubcategoria("Todas");
  };

  return (
    <UniversalSection>
      <PortfolioIntroSection />

      <PortfolioFilters
        tabValue={tabValue}
        categorias={categorias}
        subcategoria={subcategoria}
        subcategoriasDisponibles={subcategoriasDisponibles}
        onTabChange={handleCategoriaChange}
        onSubcategoriaChange={setSubcategoria}
      />

      {currentItems.length > 0 ? (
        <PortfolioGrid proyectos={currentItems} />
      ) : (
        <PortfolioEmpty />
      )}

      {totalPages > 1 && (
        <UniversalPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </UniversalSection>
  );
};

export default Portfolio;
