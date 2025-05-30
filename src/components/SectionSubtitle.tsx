import React, { type JSX } from "react";
import styled from "styled-components";

interface SectionSubtitleProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements; // Permite usar "span", "h3", etc.
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({ children, as = "h3" }) => {
  return (
    <StyledSubtitle>
      <StyledText as={as}>{children}</StyledText>
    </StyledSubtitle>
  );
};

const StyledSubtitle = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const StyledText = styled.h3`
  color: var(--color-beige);
  font-size: 2.7rem;
  font-weight: 500;
  font-family: var(--font-tech);
  text-shadow: 0 0 4px rgba(0, 255, 255, 0.4);
  position: relative;
  z-index: 1;
  animation: pulseSubtitle 3s ease-in-out infinite;

  @keyframes pulseSubtitle {
    0%, 100% {
      text-shadow: 0 0 4px rgba(0, 255, 255, 0.4);
    }
    50% {
      text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
    }
  }
`;

export default SectionSubtitle;
