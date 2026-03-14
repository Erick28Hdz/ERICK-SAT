import styled, { keyframes } from "styled-components";
import UniversalImage from "../universales/UniversalImg";
import Heading from "../tipografias/Heading";
import CardDescription from "../cards/CardDescrition";
import Button from "../arquitectura/Button";
import Threads from "./Threads";

type IntroProps = {
  onEnter: () => void;
};

const Intro = ({ onEnter }: IntroProps) => {
  return (
    <section
      className="
        h-screen
        bg-black
        text-(--color-light)
        overflow-hidden
        p-4
        m-0
        relative
        flex
        flex-col
        justify-center
        items-center
        text-center
      "
    >
      {/* Fondo animado */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>

      {/* Contenido */}
      <FadeInUpBox>
        <div className="py-2">
          {/* Logo */}
          <UniversalImage
            src="logo.png"
            alt="Logo"
            imgClassName="rounded-none"
          />
        </div>

        <div className="py-2">
          {/* Saludo */}
          <Heading
            level={4}
            variant="section"
            color="beige"
            transform="capitalize"
          >
            Bienvenidx
          </Heading>
        </div>

        <div className="py-4">
          {/* Título + descripción */}
          <Heading
            level={2}
            variant="section"
            color="light"
            align="center"
            transform="uppercase"
          >
            ERICK SOFTWARE AND TECHNOLOGY
          </Heading>

          <CardDescription className="pt-2 text-center mx-auto">
            <i>Soluciones digitales seguras, accesibles y funcionales.</i>
          </CardDescription>
        </div>

        <div className="mt-4">
          {/* Botón */}
          <Button onClick={onEnter}>Ingresar</Button>
        </div>
      </FadeInUpBox>
    </section>
  );
};

export default Intro;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FadeInUpBox = styled.div`
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 1.2s ease-out;
`;
