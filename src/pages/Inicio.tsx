import React from "react";

import UniversalContainer from "../components/universales/UniversalContainer";
import Hero from "../components/hero/Hero";
import InfiniteSlider from "../components/personales/InfinitySlider";
import NuevosProyectos from "../components/personales/NuevosProyectos";
import NuevosArticulos from "../components/personales/nuevoArticulo";
import AdNoticeSection from "../components/incio/AdNoticeSection";
import ServiceNewsSection from "../components/incio/ServiceNewsSection";
import TechSolutionsSection from "../components/incio/TechSolutionsSection";

import { promos } from "../data/Promo";
import { soluciones } from "../data/Soluciones";
import { useScrollTop } from "../hooks/useScrollTop";

const Inicio: React.FC = () => {
  useScrollTop();

  return (
    <UniversalContainer>
      <Hero />

      <InfiniteSlider />

      <NuevosProyectos />
      <NuevosArticulos />

      <AdNoticeSection
        ads={[
          "⚡ ¡Descuento del 30% en nuestros cursos de ciberseguridad!",
          "🎯 Nueva funcionalidad: escanea tu red con un solo clic.",
          "🛡️ Protege tu infraestructura con nuestras auditorías premium.",
        ]}
      />

      <ServiceNewsSection promos={promos} />

      <TechSolutionsSection soluciones={soluciones} />
    </UniversalContainer>
  );
};

export default Inicio;