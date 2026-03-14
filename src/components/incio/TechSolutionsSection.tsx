import React from "react";
import { motion, easeOut } from "framer-motion";
import { FaShieldAlt, FaCode, FaCloud } from "react-icons/fa";

import Heading from "../ui/tipografias/Heading";
import UniversalCard from "../ui/universales/UniversalCard";
import CardDescription from "../ui/cards/CardDescrition";
import UniversalContainer from "../ui/universales/UniversalContainer";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalIcon from "../ui/universales/UniversalIcon";

const soluciones = [
  {
    title: "Ciberseguridad",
    description:
      "Pentesting, protección de redes, consultoría y normativas de cumplimiento.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Desarrollo de Software",
    description:
      "Aplicaciones personalizadas, paneles de administración y APIs integradas.",
    icon: <FaCode />,
  },
  {
    title: "Infraestructura Cloud",
    description:
      "Soluciones escalables en la nube, automatización con DevOps y respaldo seguro.",
    icon: <FaCloud />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const TechSolutionsSection: React.FC = () => {
  return (
    <UniversalContainer>
      <div className="text-center m-4">
        <Heading level={4} color="beige" variant="section" transform="capitalize">
          🔧 Soluciones Tecnológicas
        </Heading>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <UniversalGrid cols={3} className="items-stretch">
          {soluciones.map(({ title, description, icon }, index) => (
            <motion.div key={index} variants={cardVariants}>
              <UniversalCard className="h-full flex flex-col items-center justify-center p-6 group">
                <UniversalIcon>{icon}</UniversalIcon>

                <Heading
                  level={3}
                  variant="card"
                  color="light"
                  transform="capitalize"
                >
                  {title}
                </Heading>

                <CardDescription>{description}</CardDescription>
              </UniversalCard>
            </motion.div>
          ))}
        </UniversalGrid>
      </motion.div>
    </UniversalContainer>
  );
};

export default TechSolutionsSection;