import React from "react";

import UniversalSection from "../components/ui/universales/arquitectura/UniversalSection";
import Hero from "../components/hero/Hero";
import InfiniteSlider from "../components/personales/InfinitySlider";
import NuevosProyectos from "../components/incio/NuevosProyectos";
import NuevosArticulos from "../components/incio/nuevoArticulo";
import AdNoticeSection from "../components/incio/AdNoticeSection";
import ServiceNewsSection from "../components/incio/ServiceNewsSection";
import TechSolutionsSection from "../components/incio/TechSolutionsSection";

import { promos } from "../data/Promo";
import { ads } from "../data/ads";
import { useScrollTop } from "../hooks/useScrollTop";

const Inicio: React.FC = () => {
  useScrollTop();

  return (
    <UniversalSection>
      <Hero />

      <InfiniteSlider />

      <NuevosProyectos />
      <NuevosArticulos />

      <AdNoticeSection ads={ads} />

      <ServiceNewsSection promos={promos} />

      <TechSolutionsSection />
    </UniversalSection>
  );
};

export default Inicio;
