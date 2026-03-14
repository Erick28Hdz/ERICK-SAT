import React from "react";
import { motion, easeOut } from "framer-motion";
import Heading from "../ui/tipografias/Heading";
import UniversalContainer from "../ui/universales/UniversalContainer";
import TestimonialCard from "../ui/cards/TestimonialCard";
import { testimonios } from "../../data/Clientes";

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

const TestimonialsSection = () => {
  return (
    <UniversalContainer>
      <div className="text-center">
        <Heading
          level={4}
          color="beige"
          variant="section"
          transform="capitalize"
        >
          💬 Testimonios
        </Heading>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap justify-center gap-6 pt-4"
      >
        {testimonios.map((t, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="w-full sm:w-[45%] md:w-[30%]"
          >
            <TestimonialCard content={t.content} author={t.author} />
          </motion.div>
        ))}
      </motion.div>
    </UniversalContainer>
  );
};

export default TestimonialsSection;