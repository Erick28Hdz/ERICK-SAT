import React from "react";
import Heading from "../ui/tipografias/Heading";
import UniversalImage from "../ui/universales/UniversalImg";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalContainer from "../ui/universales/UniversalContainer";

const BlogIntroSection: React.FC = () => {
  return (
    <UniversalContainer>
      <Heading level={2} transform="uppercase">
        Blog e Investigación
      </Heading>

      <UniversalGrid cols={2} className="items-center mt-4 gap-10">
        {/* TEXTO */}
        <div className="text-(--color-light) leading-relaxed text-[clamp(1rem,1vw+0.4rem,1.2rem)] max-w-[65ch]">
          <p>
            Explora nuestro <strong>blog y sección de investigación</strong> donde compartimos artículos, tutoriales y análisis sobre tecnología, desarrollo web y soluciones de software.
          </p>

          <p className="mt-2">
            Descubre contenido elaborado con rigurosidad y actualizado para ofrecer <strong>información útil y práctica</strong> para profesionales y empresas que buscan estar a la vanguardia tecnológica.
          </p>

          <p className="mt-2">
            <span className="font-medium">
              Aprende, investiga y aplica estrategias innovadoras con ERICK SAT.
            </span>
          </p>
        </div>

        {/* IMAGEN */}
        <div className="flex justify-center">
          <UniversalImage
            src="/images/blog.jpg"
            alt="Blog y sección de investigación de ERICK SAT"
          />
        </div>
      </UniversalGrid>
    </UniversalContainer>
  );
};

export default BlogIntroSection;