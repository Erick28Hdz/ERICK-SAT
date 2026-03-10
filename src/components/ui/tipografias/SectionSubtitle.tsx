import React, { type JSX } from "react";
import styled, { keyframes } from "styled-components";
import { toUpperCase } from "../../../utils/capitalize";

interface SectionSubtitleProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  align?: "left" | "center" | "right";
  fontSize?: string;
  animated?: boolean;
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({
  children,
  as = "h3",
  align = "center",
  fontSize = "2.7rem",
  animated = true,
}) => {
  const text = typeof children === "string" ? toUpperCase(children) : children;

  return (
    <Wrapper $align={align}>
      <Title as={as} $fontSize={fontSize} $animated={animated}>
        {text}
      </Title>
    </Wrapper>
  );
};

export default SectionSubtitle;

const Wrapper = styled.div<{ $align: "left" | "center" | "right" }>`
  width: 100%;
  display: flex;
  justify-content: ${({ $align }) =>
    $align === "left"
      ? "flex-start"
      : $align === "right"
      ? "flex-end"
      : "center"};
  align-items: center;
`;

const pulse = keyframes`
  0%,100% {
    text-shadow: 0 0 4px rgba(0,255,255,0.4);
  }
  50% {
    text-shadow: 0 0 10px rgba(0,255,255,0.8);
  }
`;

const Title = styled.h3<{
  $fontSize?: string;
  $animated?: boolean;
}>`
  color: var(--color-beige);
  font-size: ${({ $fontSize }) =>
    `clamp(1.6rem, 2vw + 1rem, ${$fontSize || "2.7rem"})`};

  font-weight: 500;
  font-family: var(--font-tech);
  letter-spacing: 1px;
  position: relative;
  z-index: 1;

  text-shadow: 0 0 4px rgba(0, 255, 255, 0.4);

  transition: color 0.25s ease, text-shadow 0.25s ease;

  animation: ${({ $animated }) => ($animated ? pulse : "none")} 3s ease-in-out infinite;

  &:hover {
    color: var(--color-light-blue);
    text-shadow:
      0 0 6px var(--color-light-blue),
      0 0 12px rgba(0, 255, 255, 0.7);
  }
`;