// components/LoadingSpinner.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import UniversalContainer from '../universales/UniversalSection';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner: React.FC = () => {
  return (
    <UniversalContainerStyled>
      <SpinnerWrapper>
        <Spinner />
        <SpinnerText>Cargando...</SpinnerText>
      </SpinnerWrapper>
    </UniversalContainerStyled>
  );
};

export default LoadingSpinner;

// Styled Components
const UniversalContainerStyled = styled(UniversalContainer)`
  background-color: var(--color-black);
  min-height: 100vh; /* Ocupa toda la pantalla */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 2rem;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid var(--color-light-blue);
  border-top: 5px solid var(--color-beige);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  box-shadow: 0 0 10px rgba(100, 108, 255, 0.5), 0 0 20px rgba(100, 108, 255, 0.3);
`;

const SpinnerText = styled.p`
  font-family: var(--font-tech);
  font-weight: 600;
  color: var(--color-light-blue);
  letter-spacing: 1px;
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  text-shadow: 0 0 5px rgba(100, 108, 255, 0.5);
`;