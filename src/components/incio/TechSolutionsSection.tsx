import React from "react";
import SectionSubtitle from "../tipografias/SectionSubtitle";
import UniversalCard from "../universales/UniversalCard";
import CardTitle from "../ui/CardTitle";
import CardDescription from "../ui/CardDescrition";

interface Solution {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface TechSolutionsSectionProps {
  soluciones: Solution[];
}

const TechSolutionsSection: React.FC<TechSolutionsSectionProps> = ({ soluciones }) => {
  return (
    <section className="w-full mb-4 mt-2 py-4">

      <div className="text-center mb-2">
        <SectionSubtitle>🔧 Soluciones Tecnológicas</SectionSubtitle>
      </div>

      <div
        className="
          grid
          gap-8
          mx-auto
          max-w-6xl
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          justify-items-center
        "
      >
        {soluciones.map(({ title, description, icon: Icon }, index) => (
          <UniversalCard key={index} className="p-6 m-4 w-full max-w-sm">

            <div className="text-center group">

              <Icon
                className="
                  text-5xl
                  mb-3
                  text-black
                  transition-all
                  duration-300
                  group-hover:text-(--color-light-blue)
                  group-hover:scale-110
                "
              />

              <CardTitle>
                {title}
              </CardTitle>

              <CardDescription className="mt-3 leading-relaxed text-(--color-beige) opacity-80">
                {description}
              </CardDescription>

            </div>

          </UniversalCard>
        ))}
      </div>

    </section>
  );
};

export default TechSolutionsSection;