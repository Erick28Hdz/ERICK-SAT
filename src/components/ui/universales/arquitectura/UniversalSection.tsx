import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const UniversalSection = ({ children, className = "" }: Props) => {
  return (
    <section
      className={`
        w-full
        mx-auto
        ${className}
      `}
    >
      {children}
    </section>
  );
};

export default UniversalSection;