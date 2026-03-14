import BlogCard from "../ui/cards/BlogCard";
import UniversalGrid from "../ui/universales/UniversalGrid";
import type { Article } from "../../data/Articles";
import UniversalContainer from "../ui/universales/UniversalContainer";

interface Props {
  articles: Article[];
}

const BlogGrid = ({ articles }: Props) => {
  if (articles.length === 0) {
    return (
      <p className="text-center w-full text-gray-400">
        No se encontraron artículos.
      </p>
    );
  }

  return (
    <UniversalContainer>
      <UniversalGrid cols={3} className="mt-10 justify-items-center">
        {articles.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </UniversalGrid>
    </UniversalContainer>
  );
};

export default BlogGrid;
