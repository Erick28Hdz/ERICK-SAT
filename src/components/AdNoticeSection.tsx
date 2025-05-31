import React from "react";
import styled from "styled-components";
import SectionSubtitle from "./SectionSubtitle";

interface AdNoticeSectionProps {
    ads: string[]; // Lista de anuncios
}

const AdNoticeSection: React.FC<AdNoticeSectionProps> = ({ ads }) => {
    return (
        <Wrapper>
            <SectionSubtitle>📢 Anuncios publicitarios</SectionSubtitle>
            <AdContainer>
                {ads.map((ad, index) => (
                    <AdCard key={index}>{ad}</AdCard>
                ))}
            </AdContainer>
        </Wrapper>
    );
};

export default AdNoticeSection;

const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 4rem;
  background: var(--color-black);
  border-top: 2px solid var(--color-light-blue);
  border-bottom: 2px solid var(--color-light-blue);
`;

const AdContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const AdCard = styled.div`
  background: var(--color-dark-blue);
  color: var(--color-beige);
  padding: 1rem 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-light-blue);
  font-family: var(--font-ui);
  font-size: 1.2rem;
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 16px rgba(0, 255, 255, 0.7);
  }
`;
