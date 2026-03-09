import React from "react";
import { proyectos } from "../../data/Portafolio";
import SectionSubtitle from "../tipografias/SectionSubtitle";
import PortfolioCard from "../portafolio/PortafolioCard";

// Tomamos los 3 más recientes por fecha
const ultimosProyectos = proyectos
  .filter((p) => p.fecha)
  .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
  .slice(0, 3);

const NuevosProyectos: React.FC = () => {
  return (
    <section className="px-3 py-2 mt-4">

      <div className="text-center">
        <SectionSubtitle>📰 Nuevos Proyectos</SectionSubtitle>
      </div>

      <div className="grid gap-8 mt-6 pt-4 justify-items-center
                      grid-cols-1
                      sm:grid-cols-2
                      md:grid-cols-3">

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

    </section>
  );
};

export default NuevosProyectos;