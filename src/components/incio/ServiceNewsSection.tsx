import React from "react";
import SectionSubtitle from "../tipografias/SectionSubtitle";
import UniversalCard from "../universales/UniversalCard";
import CardTitle from "../ui/CardTitle";
import CardDescription from "../ui/CardDescrition";

interface Promo {
  title: string;
  description: string;
}

interface ServiceNewsSectionProps {
  promos: Promo[];
}

const ServiceNewsSection: React.FC<ServiceNewsSectionProps> = ({ promos }) => {
  return (
    <section className="w-full mt-2 py-2">

      <div className="text-center mb-4">
        <SectionSubtitle>🌐 Novedades en servicios</SectionSubtitle>
      </div>

      <div
        className="
          grid
          gap-6
          mx-auto
          max-w-5xl
          grid-cols-1
          md:grid-cols-2
          justify-items-center
        "
      >
        {promos.map(({ title, description }, index) => (
          <UniversalCard key={index} className="p-6">
            <CardTitle>
              {title}
            </CardTitle>

            <CardDescription className="mt-3 text-(--color-beige) opacity-80 leading-relaxed">
              {description}
            </CardDescription>
          </UniversalCard>
        ))}
      </div>

    </section>
  );
};

export default ServiceNewsSection;