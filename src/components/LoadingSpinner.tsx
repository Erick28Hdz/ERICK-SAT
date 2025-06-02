// components/LoadingSpinner.tsx
import React from 'react';
import UniversalContainer from './UniversalContainer';

const LoadingSpinner: React.FC = () => {
  return (
    <UniversalContainer>
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <div
        style={{
          margin: '0 auto',
          width: '40px',
          height: '40px',
          border: '4px solid var(--color-light-blue)',
          borderTop: '4px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />

      <p
        style={{
          color: 'var(--color-light-blue)',
          fontFamily: 'var(--font-sans)',
          marginTop: '10px',
        }}
      >
        Cargando...
      </p>
    </UniversalContainer>
  );
};

export default LoadingSpinner;
