import React from "react";
import { motion, easeOut } from "framer-motion";
import UniversalContainer from "../ui/universales/UniversalContainer";
import Heading from "../ui/tipografias/Heading";
import PortfolioCard from "../ui/cards/PortafolioCard";
import { proyectos } from "../../data/Portafolio";

// Tomamos los 3 más recientes por fecha
const ultimosProyectos = proyectos
  .filter((p) => p.fecha)
  .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
  .slice(0, 3);

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const NuevosProyectos: React.FC = () => {
  return (
    <UniversalContainer>
      <div className="text-center">
        <Heading level={4} variant="section" color="beige" transform="capitalize">
          🌐 Novedades en Servicios
        </Heading>
      </div>

      {ultimosProyectos.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-8 mt-6 pt-4 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          {ultimosProyectos.map((proyecto) => (
            <motion.div key={proyecto.id} variants={cardVariants}>
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
        </motion.div>
      ) : (
        <p className="text-center mt-6 text-gray-400">
          Aún no hay proyectos agregados recientemente.
        </p>
      )}
    </UniversalContainer>
  );
};

export default NuevosProyectos;