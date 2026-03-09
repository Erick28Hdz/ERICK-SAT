import type { ReactNode } from "react";

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

const CardDescription = ({ children, className = "" }: CardDescriptionProps) => {
  return (
    <p
      className={`
      font-sans
      text-[clamp(0.85rem,1vw+0.4rem,1.1rem)]
      text-(--color-beige)
      leading-relaxed
      max-w-[65ch]
      transition-all
      ${className}
      `}
    >
      {children}
    </p>
  );
};

export default CardDescription;