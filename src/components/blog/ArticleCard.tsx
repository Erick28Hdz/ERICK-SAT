import React from "react";
import { Link } from "react-router-dom";
import UniversalCard from "../universales/UniversalCard";
import CardTitle from "../ui/CardTitle";
import CardDescription from "../ui/CardDescrition";

interface ArticleCardProps {
  title: string;
  description: string;
  image?: string;
  slug: string;
  category: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  slug,
  category,
}) => {
  return (
    <UniversalCard className="group">
      <Link
        to={`/blog/${slug}`}
        className="
          block
          w-full
          h-full
          p-5
          !no-underline
          transition-all
          duration-200
          hover:scale-[1.02]
        "
      >
        <CardTitle>
          {title}
        </CardTitle>

        <CardDescription className="mt-3 text-sm leading-relaxed text-[var(--color-light)]">
          {description}
        </CardDescription>

        <p className="mt-4 text-xs tracking-wide text-[var(--color-light-blue)] opacity-80">
          Categoría: {category}
        </p>
      </Link>
    </UniversalCard>
  );
};

export default ArticleCard;