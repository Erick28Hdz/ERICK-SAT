import React, { type JSX } from "react";
import styled from "styled-components";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingVariant = "section" | "card" | "logo";
type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase";

interface HeadingProps {
  children: React.ReactNode;

  /** Nivel semántico SEO */
  level?: HeadingLevel;

  /** Variante visual */
  variant?: HeadingVariant;

  /** Color del texto */
  color?: "light" | "blue" | "beige";

  /** Alineación */
  align?: "left" | "center" | "right";

  /** Transformación del texto */
  transform?: TextTransform;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  level = 2,
  variant = "section",
  color = "light",
  align = "center",
  transform = "none",
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <StyledHeading
      as={Tag}
      $variant={variant}
      $color={color}
      $align={align}
      $level={level}
      $transform={transform}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;

const StyledHeading = styled.h2<{
  $variant: HeadingVariant;
  $color: "light" | "blue" | "beige";
  $align: "left" | "center" | "right";
  $level: HeadingLevel;
  $transform: TextTransform;
}>`
  && {
    text-align: ${({ $align }) => $align};

    font-family: var(--font-tech);
    letter-spacing: 2px;
    font-weight: 500;
    margin: 0;

    text-transform: ${({ $transform }) => $transform};

    transition: all 0.3s ease;

    color: ${({ $color }) => {
      switch ($color) {
        case "blue":
          return "var(--color-light-blue)";
        case "beige":
          return "var(--color-beige)";
        default:
          return "var(--color-light)";
      }
    }};

    &:hover {
      color: var(--color-light-blue);
    }
  }

  ${({ $variant, $level }) => {
    const sizes = {
      section: {
        1: "clamp(2.8rem, 4vw, 4rem)",
        2: "clamp(2.2rem, 3vw, 3.2rem)",
        3: "clamp(1.8rem, 2.5vw, 2.6rem)",
        4: "clamp(1.6rem, 2vw, 2.2rem)",
        5: "clamp(1.4rem, 1.5vw, 1.8rem)",
        6: "clamp(1.2rem, 1.2vw, 1.6rem)",
      },
      card: {
        1: "clamp(1.6rem, 1.5vw, 2rem)",
        2: "clamp(1.4rem, 1.3vw, 1.8rem)",
        3: "clamp(1.2rem, 1.1vw, 1.6rem)",
        4: "clamp(1.1rem, 1vw, 1.4rem)",
        5: "clamp(1rem, 0.9vw, 1.2rem)",
        6: "clamp(0.9rem, 0.8vw, 1rem)",
      },
      logo: {
        1: "clamp(1.2rem, 1.6vw, 1.6rem)",
        2: "clamp(1.2rem, 1.5vw, 1.6rem)",
        3: "clamp(1rem, 1.2vw, 1.4rem)",
        4: "1rem",
        5: "0.9rem",
        6: "0.8rem",
      },
    };

    return `
      font-size: ${sizes[$variant][$level]};
      ${
        $variant === "section"
          ? "text-shadow: 0 0 10px var(--color-light-blue);"
          : ""
      }
    `;
  }}

  ${({ $variant }) =>
    $variant === "card" &&
    `
    .group:hover & {
      color: var(--color-light-blue);
      filter: drop-shadow(0 0 8px rgba(0,255,255,0.8));
    }
  `}
  ${({ $variant }) =>
    $variant === "logo" &&
    `
  font-weight: 800;
  text-shadow: 0 0 12px var(--color-light-blue);
`}
`;
