import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  cols?: number;
  className?: string;
}

const UniversalGrid = ({ children, cols = 3, className = "" }: Props) => {

  const colMap: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
  };

  return (
    <div
      className={`
        grid
        gap-8
        ${colMap[cols]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default UniversalGrid;