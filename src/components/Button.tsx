import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";


// Props comunes para botón o enlace
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  to?: string;
  component?: React.ElementType;
  variant?: "contained" | "outlined";
  target?: string;
  rel?: string;
}

// Para simplificar, se puede hacer casting de props para el componente a usar
const Button: React.FC<ButtonProps> = ({
  children,
  href,
  to,
  component,
  variant = "contained",
  ...props
}) => {
  const Component = component || (href ? "a" : "button");

  return (
    <StyledWrapper variant={variant}>
      <Component
        href={href}
        to={to}
        className={`animated-button ${variant}`}
        {...props}
      >
        <span>{children}</span>
        <span />
      </Component>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ variant: string }>`
  .animated-button {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    border: none;
    font-size: 16px;
    text-transform: uppercase;
    background-color: inherit;
    border-radius: 5px;
    font-weight: 600;
    color: #ffffff40;
    box-shadow: 0 0 0 2px #ffffff20;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    text-decoration: none; /* para <a> */
  }

  .animated-button span:last-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: var(--color-dark-blue);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 0;
  }

  .animated-button span:first-child {
    position: relative;
    z-index: 1;
  }

  .animated-button:hover {
    box-shadow: 0 0 0 2px var(--color-light-blue);
    color: var(--color-light-blue);
  }

  .animated-button:active {
    scale: 0.95;
  }

  .animated-button:hover span:last-child {
    width: 170px;
    height: 150px;
    opacity: 1;
  }

  .animated-button:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

export default Button;
