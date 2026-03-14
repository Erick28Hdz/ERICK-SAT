import React from "react";
import { motion, easeOut } from "framer-motion";
import Heading from "../ui/tipografias/Heading";
import TestimonialCard from "../ui/cards/TestimonialCard";
import { casosDeExito } from "../../data/Clientes";
import UniversalContainer from "../ui/universales/UniversalContainer";

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

const SuccessCasesSection = () => {
  return (
    <UniversalContainer>
      <div className="text-center">
        <Heading
          level={4}
          color="beige"
          variant="section"
          transform="capitalize"
        >
          🛡️ Casos de Éxito
        </Heading>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap justify-center gap-6 pt-4"
      >
        {casosDeExito.map((c, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="w-full sm:w-[45%] md:w-[30%]"
          >
            <TestimonialCard content={c.content} author={c.author} />
          </motion.div>
        ))}
      </motion.div>
    </UniversalContainer>
  );
};

export default SuccessCasesSection;