import React from "react";
import SectionSubtitle from "../ui/tipografias/SectionSubtitle";
import UniversalCard from "../ui/universales/UniversalCard";
import CardTitle from "../ui/CardTitle";
import CardDescription from "../ui/CardDescrition";
import UniversalContainer from "../ui/universales/arquitectura/UniversalContainer";
import UniversalGrid from "../ui/universales/arquitectura/UniversalGrid";

interface Promo {
  title: string;
  description: string;
}

interface ServiceNewsSectionProps {
  promos: Promo[];
}

const ServiceNewsSection: React.FC<ServiceNewsSectionProps> = ({ promos }) => {
  return (
    <UniversalContainer>
      <div className="text-center mb-4">
        <SectionSubtitle>🌐 Novedades en servicios</SectionSubtitle>
      </div>

      <UniversalGrid
        cols={2}
        className="gap-6 justify-items-center max-w-5xl mx-auto"
      >
        {promos.map(({ title, description }, index) => (
          <UniversalCard key={index} className="p-6">
            <CardTitle>{title}</CardTitle>

            <CardDescription className="mt-3 text-(--color-beige) opacity-80 leading-relaxed">
              {description}
            </CardDescription>
          </UniversalCard>
        ))}
      </UniversalGrid>
    </UniversalContainer>
  );
};

export default ServiceNewsSection;
