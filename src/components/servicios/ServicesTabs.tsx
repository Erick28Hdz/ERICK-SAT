import React from "react";
import CategoryTabs from "../ui/Tabs";
import UniversalContainer from "../ui/universales/arquitectura/UniversalContainer";

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