import React from "react";
import Heading from "../tipografias/Heading";
import CardDescription from "./CardDescrition";
import UniversalCard from "../universales/UniversalCard";

type ServiceCardProps = {
  title: React.ReactNode;
  description: string;
  values: {
    label: string;
    value: string | number;
  }[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  values,
}) => {
  return (
    <UniversalCard className="flex flex-col h-full">
      <div>
        <Heading level={3} variant="card" color="light" transform="capitalize">
          {title}
        </Heading>
        <CardDescription>{description}</CardDescription>
      </div>

      <div className="mt-auto border border-white/5 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <tbody>
            {values.map((item, index) => (
              <tr
                key={index}
                className="border-b border-white/5 last:border-none"
              >
                <td className="py-2 px-2 text-(--color-beige) font-(--font-ui)">
                  {item.label}
                </td>

                <td className="py-2 px-3 text-(--color-light) font-(--font-ui)">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UniversalCard>
  );
};

export default ServiceCard;
