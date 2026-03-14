import React from "react";
import { motion, type Variants } from "framer-motion";
import Heading from "../ui/tipografias/Heading";
import UniversalImage from "../ui/universales/UniversalImg";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalContainer from "../ui/universales/UniversalContainer";

// Variante corregida compatible con TS
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut", 
    },
  },
};

const ServicesIntroSection: React.FC = () => {
  return (
    <UniversalContainer>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUpVariants}
      >
        <Heading level={2} transform="uppercase">
          Nuestros Servicios
        </Heading>

        <UniversalGrid cols={2} className="items-center mt-4 gap-10">
          {/* TEXTO */}
          <motion.div variants={fadeUpVariants}>
            <p className="text-(--color-light) leading-relaxed text-[clamp(1rem,1vw+0.4rem,1.2rem)] max-w-[65ch]">
              Potencia tu negocio con nuestros servicios de{" "}
              <strong>ciberseguridad</strong>,{" "}
              <strong>desarrollo web personalizado</strong> y{" "}
              <strong>formación técnica de alto nivel</strong>.
            </p>

            <p className="mt-2">
              Creamos soluciones a tu medida, con tecnología de punta, atención
              cercana y precios competitivos.
            </p>

            <p className="mt-2">
              <span className="text-(--color-light) font-medium">
                ¡Haz que tu proyecto destaque y evolucione con nosotros desde hoy!
              </span>
            </p>
          </motion.div>

          {/* IMAGEN */}
          <motion.div variants={fadeUpVariants} className="flex justify-center">
            <UniversalImage
              src="/images/servicios.jpg"
              alt="Nuestros servicios"
            />
          </motion.div>
        </UniversalGrid>
      </motion.div>
    </UniversalContainer>
  );
};

export default ServicesIntroSection;