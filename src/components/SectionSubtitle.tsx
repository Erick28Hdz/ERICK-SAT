import React, { type JSX } from "react";
import styled from "styled-components";

interface SectionSubtitleProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  align?: "left" | "center" | "right";
  fontSize?: string;
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({
  children,
  as = "h3",
  align = "center",
  fontSize = "2.7rem",
}) => {
  return (
    <StyledSubtitle $align={align}>
      <StyledText as={as} $fontSize={fontSize}>
        {children}
      </StyledText>
    </StyledSubtitle>
  );
};

const StyledSubtitle = styled.div<{ $align: "left" | "center" | "right" }>`
  width: 100%;
  display: flex;
  justify-content: ${({ $align }) =>
    $align === "left" ? "flex-start" :
    $align === "right" ? "flex-end" : "center"};
  align-items: center;
`;

const StyledText = styled.h3<{ $fontSize?: string }>`
  color: var(--color-beige);
  font-size: ${({ $fontSize }) => $fontSize || "2.7rem"};
  font-weight: 500;
  font-family: var(--font-tech);
  text-shadow: 0 0 4px rgba(0, 255, 255, 0.4);
  position: relative;
  z-index: 1;
  animation: pulseSubtitle 3s ease-in-out infinite;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--color-light-blue);
    text-shadow: 0 0 6px var(--color-light-blue);
  }

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
