import React from "react";
import { motion, easeOut } from "framer-motion";
import { FaTools, FaLightbulb, FaHeadset, FaShieldAlt } from "react-icons/fa";

import UniversalContainer from "../ui/universales/UniversalContainer";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalCard from "../ui/universales/UniversalCard";
import UniversalIcon from "../ui/universales/UniversalIcon";
import CardDescription from "../ui/cards/CardDescrition";
import Heading from "../ui/tipografias/Heading";

// Variants para cada tarjeta
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

// Variants para el grid (stagger)
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function ValueProposition() {
  const features = [
    { icon: <FaTools />, text: "Soluciones personalizadas para cada cliente" },
    { icon: <FaLightbulb />, text: "Enfoque en la innovación y eficiencia" },
    { icon: <FaHeadset />, text: "Acompañamiento y soporte constante" },
    { icon: <FaShieldAlt />, text: "Compromiso con la seguridad y la ética digital" },
  ];

  return (
    <UniversalContainer>
      {/* TITULO */}
      <div className="text-center m-4">
        <Heading level={4} variant="section" color="beige" transform="capitalize">
          🌟 ¿Por qué elegirnos?
        </Heading>
      </div>

      {/* GRID DE TARJETAS */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <UniversalGrid cols={4} className="items-stretch">
          {features.map(({ icon, text }, i) => (
            <motion.div key={i} variants={cardVariants}>
              <UniversalCard className="flex flex-col items-center justify-center text-center p-6 group h-full">
                <UniversalIcon>{icon}</UniversalIcon>
                <CardDescription>{text}</CardDescription>
              </UniversalCard>
            </motion.div>
          ))}
        </UniversalGrid>
      </motion.div>
    </UniversalContainer>
  );
}