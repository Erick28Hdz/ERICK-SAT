import React from "react";
import SectionTitle from "../ui/tipografias/SectionTitle";
import UniversalImage from "../ui/universales/UniversalImg";
import UniversalGrid from "../ui/universales/arquitectura/UniversalGrid";
import UniversalContainer from "../ui/universales/arquitectura/UniversalContainer";

const ServicesIntroSection: React.FC = () => {
  return (
    <UniversalContainer>

      <SectionTitle>Nuestros Servicios</SectionTitle>

      <UniversalGrid cols={2} className="items-center mt-4 gap-10">

        {/* TEXTO */}
        <div className="text-(--color-light) leading-relaxed text-[clamp(1rem,1vw+0.4rem,1.2rem)] max-w-[65ch]">

          <p>
            Potencia tu negocio con nuestros servicios de{" "}
            <strong>ciberseguridad</strong>,{" "}
            <strong>desarrollo web personalizado</strong> y{" "}
            <strong>formación técnica de alto nivel</strong>.
          </p>

          <p className="mt-2">
            Creamos soluciones a tu medida, con tecnología de punta,
            atención cercana y precios competitivos.
          </p>

          <p className="mt-2">
            <span className="text-(--color-light) font-medium">
              ¡Haz que tu proyecto destaque y evolucione con nosotros desde hoy!
            </span>
          </p>

        </div>

        {/* IMAGEN */}
        <div className="flex justify-center">

          <UniversalImage
            src="/images/servicios.jpg"
            alt="Nuestros servicios"
          />

        </div>

      </UniversalGrid>

    </UniversalContainer>
  );
};

export default ServicesIntroSection;