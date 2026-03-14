import React from "react";

import Button from "../arquitectura/Button";
import UniversalImage from "../universales/UniversalImg";
import Heading from "../tipografias/Heading";
import CardDescription from "./CardDescrition";
import UniversalCard from "../universales/UniversalCard";
import { trackPortfolioProjectClick } from "../../../analitycs/events";


type PortfolioCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
  subcategory: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  image,
  subcategory,
  link,
}) => {
  return (
    <UniversalCard className="group flex flex-col h-full">
      {/* Imagen */}
      <div className="h-48 overflow-hidden rounded-xl">
        <UniversalImage
          src={image}
          alt={title}
          imgClassName="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col grow gap-3 pt-4">
        <Heading level={3} variant="card" color="light" transform="capitalize">
          {title}
        </Heading>

        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>

        {/* Subcategoría */}
        <span
          className="
            w-fit
            border border-(--color-light-blue)
            text-(--color-light-blue)
            text-xs
            px-3
            py-1
            rounded-full
            font-medium
            tracking-wide
            opacity-90
          "
        >
          {subcategory}
        </span>
      </div>

      {/* Botón */}
      <div className="mt-5">
        {link ? (
          <Button
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackPortfolioProjectClick(title, link)}
          >
            Ver Proyecto
          </Button>
        ) : (
          <Button disabled>Sin enlace</Button>
        )}
      </div>
    </UniversalCard>
  );
};

export default PortfolioCard;
