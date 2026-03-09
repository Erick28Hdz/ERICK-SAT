import React from "react";
import styled from "styled-components";
import { toUpperCase } from "../../utils/capitalize";

interface SectionTitleProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  fontSize?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  align = "center",
  fontSize = "2.8rem",
}) => {
  const text = typeof children === "string" ? toUpperCase(children) : children;
  return (
    <StyledTitle $align={align} $fontSize={fontSize}>
      <h2 className="title">{text}</h2>
    </StyledTitle>
  );
};

const StyledTitle = styled.div<{
  $align: "left" | "center" | "right";
  $fontSize: string;
}>`
  text-align: ${({ $align }) => $align};

  .title {
    color: var(--color-light-blue);
    font-size: ${({ $fontSize }) =>
      parseFloat($fontSize) <= 1.2
        ? $fontSize
        : `clamp(1.6rem, 2vw + 1rem, ${$fontSize})`};

    letter-spacing: 2px;
    font-weight: 700;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    text-shadow:
      0 0 5px var(--color-light-blue),
      0 0 10px var(--color-light-blue);

    animation: pulseText 2.5s ease-in-out infinite;
    transition: font-size 0.3s ease;
  }

  @keyframes pulseText {
    0%,100% {
      text-shadow:
        0 0 5px var(--color-light-blue),
        0 0 10px var(--color-light-blue);
    }

    50% {
      text-shadow:
        0 0 15px var(--color-light-blue),
        0 0 30px var(--color-light-blue);
    }
  }
`;

export default SectionTitle;
