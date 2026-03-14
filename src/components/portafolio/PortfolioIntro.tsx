import React from "react";
import Heading from "../ui/tipografias/Heading";
import UniversalImage from "../ui/universales/UniversalImg";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalContainer from "../ui/universales/UniversalContainer";

const PortfolioIntroSection: React.FC = () => {
  return (
    <UniversalContainer>
      <Heading level={2} transform="uppercase">
        Portafolio de Productos
      </Heading>

      <UniversalGrid cols={2} className="items-center mt-4 gap-10">
        {/* TEXTO */}
        <div className="text-(--color-light) leading-relaxed text-[clamp(1rem,1vw+0.4rem,1.2rem)] max-w-[65ch]">
          <p>
            Descubre nuestro portafolio de{" "}
            <strong>soluciones tecnológicas innovadoras</strong> diseñadas para
            impulsar tu empresa al siguiente nivel.
          </p>

          <p className="mt-2">
            Ofrecemos productos desarrollados con altos estándares de calidad en{" "}
            <strong>seguridad digital</strong>,{" "}
            <strong>aplicaciones web personalizadas</strong> y{" "}
            <strong>herramientas de formación avanzada</strong>.
          </p>

          <p className="mt-2">
            <span className="font-medium">
              Integra tecnología de vanguardia en tu negocio y marca la
              diferencia con soluciones a medida.
            </span>
          </p>
        </div>

        {/* IMAGEN */}
        <div className="flex justify-center">
          <UniversalImage
            src="/images/productos.jpg"
            alt="Portafolio de productos tecnológicos"
          />
        </div>
      </UniversalGrid>
    </UniversalContainer>
  );
};

export default PortfolioIntroSection;
