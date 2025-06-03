// components/UniversalPagination.tsx
import React from "react";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 2rem 0;
`;

const PageButton = styled.button<{ isActive: boolean }>`
  padding: 8px 14px;
  font-size: 1rem;
  background-color: ${({ isActive }) => (isActive ? "var(--color-light-blue)" : "var(--color-black)")};
  color: ${({ isActive }) => (isActive ? "#000" : "#fff")};
  border: 2px solid var(--color-light-blue);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-light-blue);
    color: #000;
  }
`;

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const UniversalPagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationWrapper>
      {pages.map((page) => (
        <PageButton
          key={page}
          isActive={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}
    </PaginationWrapper>
  );
};

export default UniversalPagination;
