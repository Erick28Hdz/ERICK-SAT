import React from "react";
import { motion, easeOut } from "framer-motion";
import type { ReactNode } from "react";

import UniversalContainer from "../ui/universales/UniversalContainer";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalIcon from "../ui/universales/UniversalIcon";

import Heading from "../ui/tipografias/Heading";
import CardDescription from "../ui/cards/CardDescrition";

import { Users, Building2, Globe, ShieldCheck } from "lucide-react";

interface Segment {
  icon: ReactNode;
  label: string;
  desc: string;
}

const segments: Segment[] = [
  {
    icon: <Users />,
    label: "Nivel técnico",
    desc: "Desde usuarios sin conocimientos hasta técnicos con necesidades puntuales.",
  },
  {
    icon: <Building2 />,
    label: "Industria",
    desc: "Educación, comercio, salud, servicios, tecnología, sector público.",
  },
  {
    icon: <Building2 />,
    label: "Tamaño",
    desc: "Personas individuales, microempresas, pymes, instituciones locales.",
  },
  {
    icon: <Globe />,
    label: "Ubicación",
    desc: "Principal enfoque en Colombia y Latinoamérica, servicios remotos.",
  },
  {
    icon: <ShieldCheck />,
    label: "Tipo de necesidad",
    desc: "Presencia web, automatización, ciberseguridad, educación.",
  },
];

// Variants para cada tarjeta
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

// Variants para grid con stagger
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const ClientSegmentsSection = () => {
  return (
    <UniversalContainer>
      <div className="text-center">
        <Heading
          level={4}
          variant="section"
          color="beige"
          transform="capitalize"
        >
          🧩 Tipo de cliente
        </Heading>
      </div>

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <UniversalGrid cols={3} className="pt-4 place-items-center">
          {segments.map((segment, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div
                className="
                  group
                  max-w-95
                  min-h-50
                  flex flex-col items-center justify-between
                  p-4
                  text-center
                  rounded-[20px_0]
                  border-l-2 border-r-2 border-transparent
                  border-l-(--color-beige)
                  bg-white/5
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_30px_rgba(0,255,255,0.25)]
                  hover:border-l-(--color-light-blue)
                  hover:border-r-(--color-light-blue)
                "
              >
                <UniversalIcon>{segment.icon}</UniversalIcon>
                <Heading
                  level={3}
                  variant="card"
                  color="light"
                  transform="capitalize"
                >
                  {segment.label}
                </Heading>
                <CardDescription>{segment.desc}</CardDescription>
              </div>
            </motion.div>
          ))}
        </UniversalGrid>
      </motion.div>
    </UniversalContainer>
  );
};

export default ClientSegmentsSection;