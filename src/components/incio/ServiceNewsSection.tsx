import React from "react";
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

const ServiceNewsSection: React.FC<ServiceNewsSectionProps> = ({ promos }) => {
  return (
    <UniversalContainer>
      <div className="text-center mb-4">
        <Heading
          level={4}
          variant="section"
          color="beige"
          transform="capitalize"
        >
          🌐 Novedades y actualizaciones
        </Heading>
      </div>

      <UniversalGrid
        cols={2}
        className="gap-6 justify-items-center max-w-5xl mx-auto"
      >
        {promos.map(({ title, description }, index) => (
          <UniversalCard key={index} className="p-6">
            <Heading
              level={3}
              variant="card"
              color="light"
              transform="capitalize"
            >
              {title}
            </Heading>

            <CardDescription className="mt-2 text-(--color-beige) opacity-80 leading-relaxed">
              {description}
            </CardDescription>
          </UniversalCard>
        ))}
      </UniversalGrid>
    </UniversalContainer>
  );
};

export default ServiceNewsSection;
