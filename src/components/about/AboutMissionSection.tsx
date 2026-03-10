import React from "react";
import { FaLightbulb, FaEye, FaShieldAlt } from "react-icons/fa";

import CardTitle from "../ui/CardTitle";
import CardDescription from "../ui/CardDescrition";
import UniversalCard from "../ui/universales/UniversalCard";
import UniversalGrid from "../ui/universales/arquitectura/UniversalGrid";
import UniversalContainer from "../ui/universales/arquitectura/UniversalContainer";
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

export default function AboutCards() {
  return (
    <UniversalContainer>
      <UniversalGrid cols={3} className="px-3 py-4">
        {aboutData.map(({ id, title, content, icon }) => (
          <UniversalCard key={id} className="p-6 group">
            <div className="text-center">
              
              {/* ICONO */}
              {icon && (
                <UniversalIcon>
                  {icon}
                </UniversalIcon>
              )}

              <CardTitle>{title}</CardTitle>

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
        ))}
      </UniversalGrid>
    </UniversalContainer>
  );
}