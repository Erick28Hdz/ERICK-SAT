import React from "react";
import styled from "styled-components";

interface IntroSectionProps {
  description: React.ReactNode;
  imageComponent?: React.ReactNode;
  imgSrc?: string;
  imgAlt?: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({ description, imageComponent, imgSrc, imgAlt }) => {
  return (
    <Wrapper>
      <div className="content">
        <div className="description">{description}</div>
        <div className="image">
          {imageComponent ? imageComponent : <img src={imgSrc} alt={imgAlt} />}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 2rem;
  margin: 2rem 3rem;
  translúcido */
  backdrop-filter: blur(12px);           /* desenfoque de fondo */
  -webkit-backdrop-filter: blur(12px);   /* soporte Safari */
  border-radius: 20px 0px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  color: var(--color-beige);
  border-bottom: 2px solid var(--color-beige);

  .content {
    max-width: 1200px
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .description {
    flex: 1;
    max-width: 600px;
    font-family: var(--font-sans);
    font-size: 1.2rem;
    line-height: 1.5;
    letter-spacing: 0.5px;
    animation: fadeInLeft 1s ease;
    color: var(--color-light);
  }

  .image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  animation: fadeInRight 1s ease;
}

  .image > *:hover {
    transform: scale(1.02);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-60px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(60px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      text-align: center;
    }

    .description {
      font-size: 1.05rem;
      line-height: 1.6;
    }

    .image > * {
      max-width: 90%;
    }
  }
`;

export default IntroSection;
