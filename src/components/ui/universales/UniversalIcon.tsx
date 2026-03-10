// ui/universales/UniversalIcon.tsx

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const UniversalIcon = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`
    flex
    justify-center
    items-center
    text-center
    text-[30px]
    sm:text-[35px]
    md:text-[40px]
    mb-2
    transition-all
    duration-300
    group-hover:text-(--color-light-blue)
    group-hover:scale-110
    ${className}
  `}
    >
      {children}
    </div>
  );
};

export default UniversalIcon;
