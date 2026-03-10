import React, { useState } from "react";
import UniversalSection from "../components/ui/universales/arquitectura/UniversalSection";

import ServicesIntroSection from "../components/servicios/ServicesIntro";
import ServicesTabs from "../components/servicios/ServicesTabs";
import ServicesGrid from "../components/servicios/ServicesGrid";
import CurrencySelector from "../components/servicios/CurrencySelector";

const Services: React.FC = () => {

  const [categoria, setCategoria] = useState(0);
  const [moneda, setMoneda] = useState("COP");
  const [locale, setLocale] = useState("es-CO");

  return (
    <UniversalSection>

      <ServicesIntroSection />

      <ServicesTabs
        value={categoria}
        onChange={setCategoria}
      />

      <ServicesGrid
        categoria={categoria}
        moneda={moneda}
        locale={locale}
      />

      <CurrencySelector
        moneda={moneda}
        setMoneda={setMoneda}
        setLocale={setLocale}
      />

    </UniversalSection>
  );
};

export default Services;