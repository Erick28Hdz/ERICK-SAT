import React from "react";
import { motion, easeOut } from "framer-motion";
import Heading from "../ui/tipografias/Heading";
import UniversalCard from "../ui/universales/UniversalCard";
import CardDescription from "../ui/cards/CardDescrition";
import UniversalContainer from "../ui/universales/UniversalContainer";
import UniversalGrid from "../ui/universales/UniversalGrid";

interface Promo {
  title: string;
  description: string;
}

interface ServiceNewsSectionProps {
  promos: Promo[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const ServiceNewsSection: React.FC<ServiceNewsSectionProps> = ({ promos }) => {
  return (
    <UniversalContainer>
      <div className="text-center mb-4">
        <Heading level={4} variant="section" color="beige" transform="capitalize">
          🌐 Novedades y actualizaciones
        </Heading>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <UniversalGrid
          cols={2}
          className="gap-6 justify-items-center max-w-5xl mx-auto"
        >
          {promos.map(({ title, description }, index) => (
            <motion.div key={index} variants={cardVariants}>
              <UniversalCard className="p-6">
                <Heading level={3} variant="card" color="light" transform="capitalize">
                  {title}
                </Heading>
                <CardDescription className="mt-2 text-(--color-beige) opacity-80 leading-relaxed">
                  {description}
                </CardDescription>
              </UniversalCard>
            </motion.div>
          ))}
        </UniversalGrid>
      </motion.div>
    </UniversalContainer>
  );
};

export default ServiceNewsSection;