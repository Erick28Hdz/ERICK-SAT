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
      text-[clamp(0.8rem,0.4vw+0.7rem,0.95rem)]
      text-(--color-beige)
      leading-relaxed
      max-w-[60ch]
      opacity-90
      transition-all
      ${className}
      `}
    >
      {children}
    </p>
  );
};

export default CardDescription;