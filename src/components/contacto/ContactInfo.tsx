import React from "react";
import { motion, easeOut } from "framer-motion";
import Heading from "../ui/tipografias/Heading";
import CardDescription from "../ui/cards/CardDescrition";
import SocialLinks from "../ui/arquitectura/SocialLinks";
import UniversalContainer from "../ui/universales/UniversalContainer";

// Variants para el fade + slide
const fadeSlideVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

// Variants para stagger de íconos
const iconsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const ContactInfo = () => {
  return (
    <UniversalContainer>
      <motion.div
        variants={fadeSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Heading level={4} variant="section" color="beige" transform="capitalize">
          📞 ¿Dónde puedes encontrarnos?
        </Heading>
      </motion.div>

      <motion.div
        variants={fadeSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-4 text-center"
      >
        <CardDescription>
          <p>¿Tienes una idea brillante o buscas una solución tecnológica?</p>
          <p>
            <strong>Contáctanos y démosle vida a tu proyecto 🚀</strong>
          </p>
        </CardDescription>
      </motion.div>

      <motion.div
        variants={iconsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center gap-4 mt-4 flex-wrap"
      >
        <SocialLinks hide={[]} />
      </motion.div>
    </UniversalContainer>
  );
};

export default ContactInfo;