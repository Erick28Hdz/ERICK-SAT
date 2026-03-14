import React from "react";
import { motion } from "framer-motion";
import Heading from "../ui/tipografias/Heading";
import UniversalImage from "../ui/universales/UniversalImg";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalContainer from "../ui/universales/UniversalContainer";

// Variantes para animar los elementos
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as unknown as "easeInOut", // truco TS
    },
  },
};

// Para animar los hijos con retraso
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const PortfolioIntroSection: React.FC = () => {
  return (
    <UniversalContainer>
      <Heading level={2} transform="uppercase">
        Portafolio de Productos
      </Heading>

      <UniversalGrid cols={2} className="items-center mt-4 gap-10">

        {/* TEXTO */}
        <motion.div
          className="text-(--color-light) leading-relaxed text-[clamp(1rem,1vw+0.4rem,1.2rem)] max-w-[65ch] flex flex-col gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.p variants={fadeUpVariants}>
            Descubre nuestro portafolio de{" "}
            <strong>soluciones tecnológicas innovadoras</strong> diseñadas
            para impulsar tu empresa al siguiente nivel.
          </motion.p>

          <motion.p variants={fadeUpVariants}>
            Ofrecemos productos desarrollados con altos estándares de calidad
            en <strong>seguridad digital</strong>,{" "}
            <strong>aplicaciones web personalizadas</strong> y{" "}
            <strong>herramientas de formación avanzada</strong>.
          </motion.p>

          <motion.p variants={fadeUpVariants}>
            <span className="font-medium">
              Integra tecnología de vanguardia en tu negocio y marca la
              diferencia con soluciones a medida.
            </span>
          </motion.p>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          <UniversalImage
            src="/images/productos.jpg"
            alt="Portafolio de productos tecnológicos"
          />
        </motion.div>

      </UniversalGrid>
    </UniversalContainer>
  );
};

export default PortfolioIntroSection;