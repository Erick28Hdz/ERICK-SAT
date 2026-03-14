import React from "react";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import UniversalContainer from "../ui/universales/UniversalContainer";
import Heading from "../ui/tipografias/Heading";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalImage from "../ui/universales/UniversalImg";

// Variants para animar el texto con staggered
const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // Cada párrafo aparece 0.25s después del anterior
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

// Variants para la imagen
const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
};

const AboutHistorySection: React.FC = () => {
  return (
    <UniversalContainer>
      <Heading level={2} transform="uppercase">
        Nuestra Historia
      </Heading>

      <UniversalGrid cols={2} className="items-center mt-4 gap-10">
        {/* TEXTO */}
        <motion.div
          className="text-(--color-light) leading-relaxed text-[clamp(1rem,1vw+0.4rem,1.2rem)] max-w-[65ch]"
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={paragraphVariants}>
            <strong>ERICK SOFTWARE AND TECHNOLOGY</strong> nace de la iniciativa
            personal de Erick Hernández, apasionado por la tecnología, la
            automatización, la ciberseguridad y la educación autodidacta.
          </motion.p>

          <motion.p variants={paragraphVariants} className="mt-2">
            Tras años de exploración práctica en herramientas digitales,
            seguridad de redes y creación de soluciones funcionales, identificó
            una necesidad urgente en su entorno: personas y empresas
            desconectadas del avance tecnológico.
          </motion.p>

          <motion.p variants={paragraphVariants} className="mt-2">
            La empresa surge como una respuesta social y técnica, buscando
            democratizar el acceso a herramientas útiles, formación clara y
            soluciones de seguridad accesibles.
          </motion.p>

          <motion.p variants={paragraphVariants} className="mt-2">
            Con enfoque educativo, ético y funcional,
            <strong> ERICK SAT </strong> busca cerrar la brecha tecnológica en
            Colombia y Latinoamérica.
          </motion.p>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
          className="flex justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <UniversalImage
            src="/images/ciudad-bogota.jpg"
            alt="Historia de la empresa"
          />
        </motion.div>
      </UniversalGrid>
    </UniversalContainer>
  );
};

export default AboutHistorySection;