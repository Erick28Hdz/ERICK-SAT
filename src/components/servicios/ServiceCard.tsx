import React from "react";
import CardTitle from "../ui/CardTitle";
import CardDescription from "../ui/CardDescrition";
import UniversalCard from "../ui/universales/UniversalCard";

type ServiceCardProps = {
  title: React.ReactNode;
  description: string;
  values: {
    label: string;
    value: string | number;
  }[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, values }) => {
  return (
    <UniversalCard className="flex flex-col h-full">

      <div>
        <CardTitle>{title}</CardTitle>
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