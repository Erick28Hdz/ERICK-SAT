import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import logo from "../assets/logo.png"; 

const FlipTitleLogo: React.FC = () => {
  const [flipped, setFlipped] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <FlipContainer flipped={flipped}>
      <InnerFlip flipped={flipped}>  {/* PASAR flipped AQUÍ */}
        <FlipCardFront>
          <SectionTitle fontSize="1.2rem">ERICK SAT</SectionTitle>
        </FlipCardFront>
        <FlipCardBack>
          <img src={logo} alt="Logo Empresa" />
        </FlipCardBack>
      </InnerFlip>
    </FlipContainer>
  );
};

export default FlipTitleLogo;

interface FlipContainerProps {
  flipped: boolean;
}

const FlipContainer = styled.div<FlipContainerProps>`
  width: 160px;
  height: auto;
  perspective: 1000px;
`;

const InnerFlip = styled.div<FlipContainerProps>`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s ease;
  transform-style: preserve-3d;
  transform: ${(props) => (props.flipped ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  z-index: 2;
`;

const FlipCardBack = styled(FlipCardFront)`
  transform: rotateY(180deg);

  img {
    width: 100px;
    height: auto;
    object-fit: contain;
  }
`;
