import { useState } from "react";
import UniversalContainer from "../components/ui/universales/UniversalSection";
import UniversalPagination from "../components/ui/universales/UniversalPagination";
import BlogIntroSection from "../components/blog/BlogIntroSection";
import BlogFilters from "../components/blog/BlogFilters";
import BlogGrid from "../components/blog/BlogGrid";
import articles from "../data/Articles";
import { usePagination } from "../hooks/usePagination";
import { useScrollTop } from "../hooks/useScrollTop";

const Blog = () => {
  useScrollTop();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");

  const filteredArticles = articles.filter((a) => {
    const searchMatch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.desc.toLowerCase().includes(search.toLowerCase());

    const categoryMatch = category === "Todas" || a.category === category;

    return searchMatch && categoryMatch;
  });

  const { currentPage, setCurrentPage, currentItems, totalPages } =
    usePagination(filteredArticles, 6);

  return (
    <UniversalContainer>
      <BlogIntroSection />

      <BlogFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        resetPage={() => setCurrentPage(1)}
      />

      <BlogGrid articles={currentItems} />

      {totalPages > 1 && (
        <UniversalPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </UniversalContainer>
  );
};

export default Blog;
