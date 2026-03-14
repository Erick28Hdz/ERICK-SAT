import React from "react";
import UniversalContainer from "../ui/universales/UniversalContainer";
import articles from "../../data/Articles";
import Heading from "../ui/tipografias/Heading";
import ArticleCard from "../ui/cards/ArticleCard";

const ultimosArticulos = articles
  .filter((a) => a.fecha)
  .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
  .slice(0, 3);

const NuevosArticulos: React.FC = () => {
  return (
    <UniversalContainer>
      <div className="text-center">
        <Heading level={4} variant="section" color="beige" transform="capitalize">
          📰 Nuevos Proyectos
        </Heading>
      </div>

      {ultimosArticulos.length > 0 ? (
        <div
          className="
          grid
          gap-8
          mt-2
          pt-4
          justify-items-center
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
        
        "
        >
          {ultimosArticulos.map((articulo, index) => (
            <ArticleCard
              key={articulo.slug || index}
              title={articulo.title}
              description={articulo.desc}
              image={articulo.image}
              slug={articulo.slug}
              category={articulo.category}
            />
          ))}
        </div>
      ) : (
        <p className="text-center mt-6 text-gray-400">
          No hay artículos recientes publicados.
        </p>
      )}
    </UniversalContainer>
  );
};

export default NuevosArticulos;
