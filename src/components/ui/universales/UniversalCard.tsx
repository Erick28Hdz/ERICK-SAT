import type { ReactNode } from "react";

interface UniversalCardProps {
  children: ReactNode;
  className?: string;
}

const UniversalCard = ({ children, className = "" }: UniversalCardProps) => {
  return (
    <div
      className={`
        group
        w-full
        max-w-95
        min-h-10
        flex flex-col justify-between items-center
        p-4
        text-center
        rounded-[20px_0]
        border-l-2 border-r-2 border-transparent
        border-l-(--color-beige)
        bg-white/5
        backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_0_30px_rgba(0,255,255,0.25)]
        hover:border-l-(--color-light-blue)
        hover:border-r-(--color-light-blue)
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default UniversalCard;