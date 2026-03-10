import React from "react";
import { FaShieldAlt, FaCode, FaCloud } from "react-icons/fa";

import SectionSubtitle from "../ui/tipografias/SectionSubtitle";
import UniversalCard from "../ui/universales/UniversalCard";
import CardTitle from "../ui/CardTitle";
import CardDescription from "../ui/CardDescrition";
import UniversalContainer from "../ui/universales/arquitectura/UniversalContainer";
import UniversalGrid from "../ui/universales/arquitectura/UniversalGrid";
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
        <SectionSubtitle>🔧 Soluciones Tecnológicas</SectionSubtitle>
      </div>

      <UniversalGrid cols={3} className="items-stretch">
        {soluciones.map(({ title, description, icon }, index) => (
          <UniversalCard
            key={index}
            className="flex flex-col items-center justify-center text-center p-6 group"
          >
            <UniversalIcon>{icon}</UniversalIcon>

            <CardTitle>{title}</CardTitle>

            <CardDescription>{description}</CardDescription>
          </UniversalCard>
        ))}
      </UniversalGrid>
    </UniversalContainer>
  );
};

export default TechSolutionsSection;