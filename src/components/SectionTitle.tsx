import React from "react";
import styled from "styled-components";

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
  return (
    <StyledTitle $align={align} $fontSize={fontSize}>
      <h2 className="title">{children}</h2>
    </StyledTitle>
  );
};

const StyledTitle = styled.div<{
  $align: "left" | "center" | "right";
  $fontSize: string;
}>`
  text-align: ${(props) => props.$align};

  .title {
    color: var(--color-light-blue);
    text-shadow: 0 0 5px var(--color-light-blue);
    font-size: ${(props) => props.$fontSize};
    letter-spacing: 2px;
    font-weight: 700;
    font-family: var(--font-tech);
    margin: 0 auto;
    position: relative;
    z-index: 1;
    animation: pulseText 2.5s ease-in-out infinite;
  }

  @keyframes pulseText {
    0%,
    100% {
      text-shadow: 0 0 5px var(--color-light-blue),
        0 0 10px var(--color-light-blue);
    }
    50% {
      text-shadow: 0 0 15px var(--color-light-blue),
        0 0 30px var(--color-light-blue);
    }
  }
`;

export default SectionTitle;
