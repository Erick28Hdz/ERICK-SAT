import React from "react";
import { motion, easeOut } from "framer-motion";
import { FaLightbulb, FaEye, FaShieldAlt } from "react-icons/fa";
import UniversalContainer from "../ui/universales/UniversalContainer";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalCard from "../ui/universales/UniversalCard";
import Heading from "../ui/tipografias/Heading";
import CardDescription from "../ui/cards/CardDescrition";
import UniversalIcon from "../ui/universales/UniversalIcon";

interface AboutItem {
  id: string;
  title: string;
  content: string | string[];
  icon?: React.ReactNode;
}

const aboutData: AboutItem[] = [
  {
    id: "mision",
    title: "Misión",
    content:
      "Brindar soluciones tecnológicas accesibles, seguras y personalizadas a través del desarrollo de software, automatizaciones, formación técnica y servicios de ciberseguridad.",
    icon: <FaLightbulb />,
  },
  {
    id: "vision",
    title: "Visión",
    content:
      "Ser reconocidos como una empresa líder en soluciones tecnológicas integrales en Latinoamérica, destacándose por nuestra capacidad técnica, innovación en ciberseguridad y formación educativa de calidad.",
    icon: <FaEye />,
  },
  {
    id: "valores",
    title: "Valores",
    content: [
      "Innovación continua",
      "Ética profesional y responsabilidad",
      "Accesibilidad tecnológica",
      "Formación autodidacta y compartida",
      "Seguridad de la información",
      "Compromiso con el cliente",
    ],
    icon: <FaShieldAlt />,
  },
];

// Variants para cada tarjeta
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

// Variants para el contenedor del grid (stagger)
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function AboutCards() {
  return (
    <UniversalContainer>
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <UniversalGrid cols={3} className="px-3 py-4">
          {aboutData.map(({ id, title, content, icon }) => (
            <motion.div key={id} variants={cardVariants}>
              <UniversalCard key={id} className="min-h-80 p-6 group">
            <div className="text-center">
              {/* ICONO */}
              {icon && <UniversalIcon>{icon}</UniversalIcon>}

              <Heading
                level={3}
                variant="card"
                color="light"
                transform="capitalize"
              >
                {title}
              </Heading>

              <CardDescription>
                {typeof content === "string" ? (
                  <p>{content}</p>
                ) : (
                  <ul className="pl-5 text-left list-disc">
                    {content.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </CardDescription>
            </div>
          </UniversalCard>
            </motion.div>
          ))}
        </UniversalGrid>
      </motion.div>
    </UniversalContainer>
  );
}