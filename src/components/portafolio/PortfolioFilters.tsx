import React from "react";

import CategoryTabs from "../ui/arquitectura/Tabs";
import CustomSelect from "../ui/arquitectura/CustomSelect";
import UniversalContainer from "../ui/universales/UniversalContainer";

interface Props {
  tabValue: number;
  categorias: string[];
  subcategoria: string;
  subcategoriasDisponibles: string[];
  onTabChange: (_: React.SyntheticEvent, newValue: number) => void;
  onSubcategoriaChange: (value: string) => void;
}

const PortfolioFilters: React.FC<Props> = ({
  tabValue,
  categorias,
  subcategoria,
  subcategoriasDisponibles,
  onTabChange,
  onSubcategoriaChange,
}) => {
  return (
    <UniversalContainer>

      <div className="flex flex-col gap-6">

        {/* Tabs centrados */}
        <div className="flex justify-center">
          <CategoryTabs
            value={tabValue}
            onChange={onTabChange}
            categorias={categorias}
          />
        </div>

        {/* Select a la derecha */}
        <div className="flex justify-end">
          <CustomSelect
            label="Subcategoría"
            value={subcategoria}
            onChange={(e) => onSubcategoriaChange(e.target.value)}
            options={subcategoriasDisponibles}
          />
        </div>

      </div>

    </UniversalContainer>
  );
};

export default PortfolioFilters;