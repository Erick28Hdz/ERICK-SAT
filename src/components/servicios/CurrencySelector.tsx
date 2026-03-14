import React from "react";
import CustomSelect from "../ui/arquitectura/CustomSelect";
import UniversalContainer from "../ui/universales/UniversalContainer";
interface Props {
  moneda: string;
  setMoneda: (value: string) => void;
  setLocale: (value: string) => void;
}

const CurrencySelector: React.FC<Props> = ({
  moneda,
  setMoneda,
  setLocale,
}) => {

  const opciones = [
    { label: "Colombia (COP)", value: "COP", locale: "es-CO" },
    { label: "USA (USD)", value: "USD", locale: "en-US" },
    { label: "Europa (EUR)", value: "EUR", locale: "es-ES" },
    { label: "Japón (JPY)", value: "JPY", locale: "ja-JP" },
  ];

  return (
    <UniversalContainer>
      <CustomSelect
        label="Moneda"
        value={moneda}
        onChange={(e) => {

          const selected = opciones.find(
            (opt) => opt.value === e.target.value
          );

          if (selected) {
            setMoneda(selected.value);
            setLocale(selected.locale);
          }

        }}
        options={opciones.map((o) => o.value)}
      />

    </UniversalContainer>
  );
};

export default CurrencySelector;