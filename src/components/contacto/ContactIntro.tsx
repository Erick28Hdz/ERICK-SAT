import React from "react";
import Heading from "../ui/tipografias/Heading";
import UniversalImage from "../ui/universales/UniversalImg";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalContainer from "../ui/universales/UniversalContainer";

const ContactIntroSection: React.FC = () => {
  return (
    <UniversalContainer>
      <Heading level={2} transform="uppercase">
        Contáctanos
      </Heading>

      <UniversalGrid cols={2} className="items-center mt-4 gap-10">
        {/* TEXTO */}
        <div className="text-(--color-light) leading-relaxed text-[clamp(1rem,1vw+0.4rem,1.2rem)] max-w-[65ch]">
          <p>
            ¿Tienes una pregunta, propuesta o un proyecto en mente?
            <strong> Estamos listos para escucharte.</strong>
          </p>

          <p className="mt-2">
            En un mundo digital en constante evolución, contar con un equipo
            confiable, creativo y técnicamente sólido puede marcar la diferencia
            para alcanzar tus objetivos.
          </p>

          <p className="mt-2">
            Ya sea que necesites <strong>desarrollar una solución web</strong>,
            mejorar la <strong>ciberseguridad</strong> de tu infraestructura o
            lanzar un nuevo proyecto digital, podemos ayudarte a hacerlo
            realidad.
          </p>

          <p className="mt-2">
            <span className="font-medium">
              Escríbenos y trabajemos juntos para convertir tu idea en una
              solución tecnológica real.
            </span>
          </p>
        </div>

        {/* IMAGEN */}
        <div className="flex justify-center">
          <UniversalImage
            src="/images/contacto.jpg"
            alt="Contacto y asesoría tecnológica"
          />
        </div>
      </UniversalGrid>
    </UniversalContainer>
  );
};

export default ContactIntroSection;
