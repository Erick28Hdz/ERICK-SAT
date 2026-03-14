import React from "react";
import UniversalContainer from "../ui/universales/UniversalContainer";
import { proyectos } from "../../data/Portafolio";
import Heading from "../ui/tipografias/Heading";
import PortfolioCard from "../ui/cards/PortafolioCard";

// Tomamos los 3 más recientes por fecha
const ultimosProyectos = proyectos
  .filter((p) => p.fecha)
  .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
  .slice(0, 3);

const NuevosProyectos: React.FC = () => {
  return (
    <UniversalContainer>
      <div className="text-center">
        <Heading level={4} variant="section" color="beige" transform="capitalize">
          🌐 Novedades en Servicios
        </Heading>
      </div>

      <div
        className="grid gap-8 mt-6 pt-4 justify-items-center
                      grid-cols-1
                      sm:grid-cols-2
                      md:grid-cols-3"
      >
        {ultimosProyectos.map((proyecto) => (
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
      </div>

      {ultimosProyectos.length === 0 && (
        <p className="text-center mt-6 text-gray-400">
          Aún no hay proyectos agregados recientemente.
        </p>
      )}
    </UniversalContainer>
  );
};

export default NuevosProyectos;
