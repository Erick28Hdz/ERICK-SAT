import React from "react";
import SectionTitle from "../ui/tipografias/SectionTitle";
import UniversalImage from "../ui/universales/UniversalImg";
import UniversalGrid from "../ui/universales/arquitectura/UniversalGrid";
import UniversalContainer from "../ui/universales/arquitectura/UniversalContainer";

const AboutHistorySection: React.FC = () => {
  return (
   <UniversalContainer>

      <SectionTitle>Nuestra Historia</SectionTitle>

      <UniversalGrid cols={2} className="items-center mt-4 gap-10">

        {/* TEXTO */}
        <div className="text-(--color-light) leading-relaxed text-[clamp(1rem,1vw+0.4rem,1.2rem)] max-w-[65ch]">

          <p>
            <strong>ERICK SOFTWARE AND TECHNOLOGY</strong> nace de la iniciativa
            personal de Erick Hernández, apasionado por la tecnología,
            la automatización, la ciberseguridad y la educación autodidacta.
          </p>

          <p className="mt-2">
            Tras años de exploración práctica en herramientas digitales,
            seguridad de redes y creación de soluciones funcionales,
            identificó una necesidad urgente en su entorno:
            personas y empresas desconectadas del avance tecnológico.
          </p>

          <p className="mt-2">
            La empresa surge como una respuesta social y técnica,
            buscando democratizar el acceso a herramientas útiles,
            formación clara y soluciones de seguridad accesibles.
          </p>

          <p className="mt-2">
            Con enfoque educativo, ético y funcional,
            <strong> ERICK SAT </strong>
            busca cerrar la brecha tecnológica en Colombia y Latinoamérica.
          </p>

        </div>

        {/* IMAGEN */}
        <div className="flex justify-center">

          <UniversalImage
            src="/images/ciudad-bogota.jpg"
            alt="Historia de la empresa"
          />

        </div>

      </UniversalGrid>

    </UniversalContainer>
  );
};

export default AboutHistorySection;