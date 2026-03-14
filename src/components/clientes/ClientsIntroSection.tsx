import React from "react";
import { motion, easeOut } from "framer-motion";
import Heading from "../ui/tipografias/Heading";
import UniversalImage from "../ui/universales/UniversalImg";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalContainer from "../ui/universales/UniversalContainer";

// Variants para animación de texto
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
};

// Variants para animación de imagen
const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
};

const ClientsIntroSection: React.FC = () => {
  return (
    <UniversalContainer>
      <Heading level={2} transform="uppercase">
        ¿Quiénes son nuestros clientes?
      </Heading>

      <UniversalGrid cols={2} className="items-center mt-4 gap-10">
        {/* TEXTO */}
        <motion.div
          className="text-(--color-light) leading-relaxed text-[clamp(1rem,1vw+0.4rem,1.2rem)] max-w-[65ch]"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>
            ERICK SOFTWARE AND TECHNOLOGY está orientada a atender una amplia
            variedad de clientes, desde personas sin experiencia técnica hasta
            empresas con necesidades específicas de desarrollo o ciberseguridad.
          </p>

          <p className="mt-2">
            • <strong>Personas naturales</strong> interesadas en proteger su
            información y optimizar sus dispositivos.
          </p>

          <p className="mt-2">
            • <strong>Emprendedores y pequeñas empresas</strong> que buscan una
            presencia digital efectiva, segura y profesional.
          </p>

          <p className="mt-2">
            • <strong>Instituciones educativas</strong> que desean implementar
            formación en ciberseguridad o soluciones tecnológicas.
          </p>

          <p className="mt-2">
            • <strong>Startups y microempresas tecnológicas</strong> que
            necesitan scripts, automatizaciones o análisis de seguridad.
          </p>

          <p className="mt-2">
            • <strong>Profesionales independientes</strong> que requieren
            portafolios, plantillas y herramientas listas para usar.
          </p>

          <p className="mt-2">
            • <strong>Pequeños negocios familiares</strong> que desean
            digitalizar procesos pero enfrentan limitaciones técnicas.
          </p>

          <p className="mt-2">
            • <strong>ONGs y entidades públicas</strong> que buscan asegurar sus
            plataformas o capacitar a su personal en tecnología básica.
          </p>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
          className="flex justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <UniversalImage src="/images/cliente.jpg" alt="Nuestros clientes" />
        </motion.div>
      </UniversalGrid>
    </UniversalContainer>
  );
};

export default ClientsIntroSection;