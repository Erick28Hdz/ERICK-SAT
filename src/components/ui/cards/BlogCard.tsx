import { Link } from "react-router-dom";
import UniversalCard from "../universales/UniversalCard";
import CardDescription from "./CardDescrition";
import type { Article } from "../../../data/Articles";
import Heading from "../tipografias/Heading";

interface Props {
  article: Article;
}

const BlogCard = ({ article }: Props) => {
  return (
    <UniversalCard className="group">
      <Link
        to={`/blog/${article.slug}`}
        className="
          block
          w-full
          h-full
          p-5
          no-underline!
          transition-all
          duration-200
          hover:scale-[1.02]
        "
      >
        <Heading level={3} variant="card" color="light" transform="capitalize">
          {article.title}
        </Heading>

        <CardDescription className="mt-3 text-sm leading-relaxed text-(--color-light)">
          {article.desc}
        </CardDescription>

        <p className="mt-4 text-xs tracking-wide text-(--color-light-blue) opacity-80">
          Categoría: {article.category}
        </p>
      </Link>
    </UniversalCard>
  );
};

export default BlogCard;
