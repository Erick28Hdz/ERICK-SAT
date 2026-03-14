import React from "react";
import CategoryTabs from "../ui/arquitectura/Tabs";
import UniversalContainer from "../ui/universales/UniversalContainer";
import { trackServiceCategoryClick } from "../../analitycs/events";

const categorias = [
  "Todas",
  "Ciberseguridad",
  "Scripts personalizados",
  "Plantillas y aplicaciones",
  "Educación y Formación",
  "Desarrollo Web",
];

interface Props {
  value: number;
  onChange: (value: number) => void;
}

const ServicesTabs: React.FC<Props> = ({ value, onChange }) => {
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    onChange(newValue);

    trackServiceCategoryClick(categorias[newValue]);
  };

  return (
    <UniversalContainer>
      <div className="flex justify-center">
        <CategoryTabs
          value={value}
          onChange={handleChange}
          categorias={categorias}
        />
      </div>
    </UniversalContainer>
  );
};

export default ServicesTabs;
