import React from "react";
import { motion, easeOut } from "framer-motion";
import UniversalContainer from "../ui/universales/UniversalContainer";
import Heading from "../ui/tipografias/Heading";
import ArticleCard from "../ui/cards/ArticleCard";
import articles from "../../data/Articles";

const ultimosArticulos = articles
  .filter((a) => a.fecha)
  .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
  .slice(0, 3);

// Variants para cada tarjeta
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

// Variants para contenedor con stagger
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const NuevosArticulos: React.FC = () => {
  return (
    <UniversalContainer>
      <div className="text-center">
        <Heading level={4} variant="section" color="beige" transform="capitalize">
          📰 Nuevos Proyectos
        </Heading>
      </div>

      {ultimosArticulos.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-8 mt-2 pt-4 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          {ultimosArticulos.map((articulo, index) => (
            <motion.div key={articulo.slug || index} variants={cardVariants}>
              <ArticleCard
                title={articulo.title}
                description={articulo.desc}
                image={articulo.image}
                slug={articulo.slug}
                category={articulo.category}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center mt-6 text-gray-400">
          No hay artículos recientes publicados.
        </p>
      )}
    </UniversalContainer>
  );
};

export default NuevosArticulos;