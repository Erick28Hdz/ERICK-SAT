// components/universales/UniversalContainer.tsx

import type { ReactNode } from "react";

interface UniversalContainerProps {
  children: ReactNode;
  className?: string;
}

const UniversalContainer = ({ children, className = "" }: UniversalContainerProps) => {
  return (
    <section
      className={`
        w-full
        min-h-screen
        bg-(--color-dark-blue)
        text-black
        flex
        flex-col
        items-center
        ${className}
      `}
    >
      {children}
    </section>
  );
};

export default UniversalContainer;