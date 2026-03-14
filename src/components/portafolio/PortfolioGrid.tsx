import React from "react";

import PortfolioCard from "../ui/cards/PortafolioCard";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalContainer from "../ui/universales/UniversalContainer";
import type { Proyecto } from "../../data/Portafolio";

interface Props {
  proyectos: Proyecto[];
}

const PortfolioGrid: React.FC<Props> = ({ proyectos }) => {
  if (proyectos.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-6">
        No hay proyectos disponibles.
      </p>
    );
  }

  return (
    <UniversalContainer>
      <UniversalGrid cols={3} className="mt-2">
        {proyectos.map((proyecto) => (
          <PortfolioCard
            key={proyecto.id}
            title={proyecto.titulo}
            description={proyecto.descripcion}
            image={proyecto.imagen}
            category={proyecto.categoria}
            link={proyecto.enlace}
            subcategory={proyecto.subcategoria}
          />
        ))}
      </UniversalGrid>
    </UniversalContainer>
  );
};

export default PortfolioGrid;