import { useNavigate } from "react-router-dom";
import Heading from "../tipografias/Heading";
import UniversalImage from "../universales/UniversalImg";
import Button from "../arquitectura/Button";
import CardDescription from "../cards/CardDescrition";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/servicios");
  };

  return (
    <section
      className="
      relative
      min-h-[90vh]
      w-full
      bg-[url('/images/hero.jpg')]
      bg-cover
      bg-center
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-[#0a0a1a]/80 to-[#0a0a2a]/70 z-10" />

      {/* Contenido */}
      <div
        className="
        relative
        z-20
        w-full
        max-w-7xl
        mx-auto
        flex
        flex-col
        md:flex-row
        items-center
        gap-10
        md:gap-16
        px-6
        py-16
        "
      >
        {/* Columna izquierda */}
        <div className="w-full md:w-[60%] md:pr-4 text-center md:text-left">
          <Heading level={2} color="blue" align="left" transform="uppercase">
            Innovación en Desarrollo de Software y Tecnología
          </Heading>

          <CardDescription className="mt-4 mb-6 text-(--color-beige)">
            Somos una empresa especializada en{" "}
            <strong>soluciones tecnológicas a medida</strong>, enfocadas en{" "}
            <strong>ciberseguridad</strong>, <strong>desarrollo web</strong> y{" "}
            <strong>automatización de procesos</strong>. Potenciamos tu negocio
            con herramientas digitales modernas, eficientes y seguras.
          </CardDescription>

          <Button variant="contained" onClick={handleClick}>
            Conoce nuestros servicios
          </Button>
        </div>

        {/* Columna derecha */}
        <div className="w-full md:w-[40%] flex justify-center mt-10 md:mt-0">
          <div className="max-w-105 w-full">
            <UniversalImage
              src="/images/lider.jpg"
              alt="Decoración"
              containerClassName="max-w-[500px]"
              imgClassName="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
