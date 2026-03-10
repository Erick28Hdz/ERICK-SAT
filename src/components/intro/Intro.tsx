import styled, { keyframes } from "styled-components";
import UniversalImage from "../ui/universales/UniversalImg";
import CardTitle from "../ui/CardTitle";
import CardDescription from "../ui/CardDescrition";
import Button from "../ui/Button";
import Threads from "../ui/Threads";

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
        <UniversalImage src="logo.png" alt="Logo" imgClassName="rounded-none" />

        <CardTitle className="text-(--color-beige)">Bienvenidx a</CardTitle>

        <IntroTitle>ERICK SOFTWARE AND TECHNOLOGY</IntroTitle>

        <CardDescription className="text-center mx-auto">
          <i>Soluciones digitales seguras, accesibles y funcionales.</i>
        </CardDescription>

        <Button onClick={onEnter}>Ingresar</Button>
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

const IntroTitle = styled.h1`
  font-family: var(--font-tech);
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 800;
  background: linear-gradient(
    90deg,
    var(--color-cyan),
    var(--color-light-blue)
  );
  -webkit-background-clip: text;
  text-shadow: 2px 2px 10px rgba(0, 183, 255, 0.3);
  letter-spacing: 2px;
  margin-bottom: 1rem;
  animation: ${fadeInUp} 1.2s ease-out;
`;
