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

const BlogIntroSection: React.FC = () => {
  return (
    <UniversalContainer>
      <Heading level={2} transform="uppercase">
        Blog e Investigación
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
            Explora nuestro <strong>blog y sección de investigación</strong> donde compartimos artículos, tutoriales y análisis sobre tecnología, desarrollo web y soluciones de software.
          </p>

          <p className="mt-2">
            Descubre contenido elaborado con rigurosidad y actualizado para ofrecer <strong>información útil y práctica</strong> para profesionales y empresas que buscan estar a la vanguardia tecnológica.
          </p>

          <p className="mt-2">
            <span className="font-medium">
              Aprende, investiga y aplica estrategias innovadoras con ERICK SAT.
            </span>
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
          <UniversalImage
            src="/images/blog.jpg"
            alt="Blog y sección de investigación de ERICK SAT"
          />
        </motion.div>
      </UniversalGrid>
    </UniversalContainer>
  );
};

export default BlogIntroSection;