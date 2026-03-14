import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const UniversalContainer = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`
        max-w-7xl
        mx-auto
        p-4
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default UniversalContainer;