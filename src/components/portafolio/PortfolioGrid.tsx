import React from "react";
import { motion } from "framer-motion";
import PortfolioCard from "../ui/cards/PortafolioCard";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalContainer from "../ui/universales/UniversalContainer";
import type { Proyecto } from "../../data/Portafolio";

interface Props {
  proyectos: Proyecto[];
}
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
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
        {proyectos.map((proyecto, index) => (
          <motion.div
            key={proyecto.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }} // stagger
          >
            <PortfolioCard
              title={proyecto.titulo}
              description={proyecto.descripcion}
              image={proyecto.imagen}
              category={proyecto.categoria}
              link={proyecto.enlace}
              subcategory={proyecto.subcategoria}
            />
          </motion.div>
        ))}
      </UniversalGrid>
    </UniversalContainer>
  );
};

export default PortfolioGrid;
