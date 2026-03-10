// components/ValueProposition.tsx

import { FaTools, FaLightbulb, FaHeadset, FaShieldAlt } from "react-icons/fa";

import UniversalContainer from "../ui/universales/arquitectura/UniversalContainer";
import UniversalGrid from "../ui/universales/arquitectura/UniversalGrid";
import UniversalCard from "../ui/universales/UniversalCard";
import UniversalIcon from "../ui/universales/UniversalIcon";
import CardDescription from "../ui/CardDescrition";
import SectionSubtitle from "../ui/tipografias/SectionSubtitle";

export default function ValueProposition() {
  const features = [
    {
      icon: <FaTools />,
      text: "Soluciones personalizadas para cada cliente",
    },
    {
      icon: <FaLightbulb />,
      text: "Enfoque en la innovación y eficiencia",
    },
    {
      icon: <FaHeadset />,
      text: "Acompañamiento y soporte constante",
    },
    {
      icon: <FaShieldAlt />,
      text: "Compromiso con la seguridad y la ética digital",
    },
  ];

  return (
    <UniversalContainer>
      {/* TITULO */}
      <div className="text-center m-4">
        <SectionSubtitle>🌟 ¿Por qué elegirnos?</SectionSubtitle>
      </div>

      {/* GRID DE TARJETAS */}
      <UniversalGrid cols={4} className="items-stretch">
        {features.map(({ icon, text }, i) => (
          <UniversalCard
            key={i}
            className="
              flex flex-col
              items-center
              justify-center
              text-center
              p-6
              group
            "
          >
            {/* ICONO */}
            <UniversalIcon>{icon}</UniversalIcon>

            {/* TEXTO */}
            <CardDescription>{text}</CardDescription>
          </UniversalCard>
        ))}
      </UniversalGrid>
    </UniversalContainer>
  );
}
