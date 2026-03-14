import React from "react";
import { FaShieldAlt, FaCode, FaCloud } from "react-icons/fa";

import Heading from "../ui/tipografias/Heading";
import UniversalCard from "../ui/universales/UniversalCard";
import CardDescription from "../ui/cards/CardDescrition";
import UniversalContainer from "../ui/universales/UniversalContainer";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalIcon from "../ui/universales/UniversalIcon";

const soluciones = [
  {
    title: "Ciberseguridad",
    description:
      "Pentesting, protección de redes, consultoría y normativas de cumplimiento.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Desarrollo de Software",
    description:
      "Aplicaciones personalizadas, paneles de administración y APIs integradas.",
    icon: <FaCode />,
  },
  {
    title: "Infraestructura Cloud",
    description:
      "Soluciones escalables en la nube, automatización con DevOps y respaldo seguro.",
    icon: <FaCloud />,
  },
];

const TechSolutionsSection: React.FC = () => {
  return (
    <UniversalContainer>
      <div className="text-center m-4">
        <Heading level={4} color="beige" variant="section" transform="capitalize">
          🔧 Soluciones Tecnológicas
        </Heading>
      </div>

      <UniversalGrid cols={3} className="items-stretch">
        {soluciones.map(({ title, description, icon }, index) => (
          <UniversalCard
            key={index}
            className="flex flex-col items-center justify-center text-center p-6 group"
          >
            <UniversalIcon>{icon}</UniversalIcon>

            <Heading
              level={3}
              variant="card"
              color="light"
              transform="capitalize"
            >
              {title}
            </Heading>

            <CardDescription>{description}</CardDescription>
          </UniversalCard>
        ))}
      </UniversalGrid>
    </UniversalContainer>
  );
};

export default TechSolutionsSection;
