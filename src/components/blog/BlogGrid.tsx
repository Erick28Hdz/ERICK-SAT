import React from "react";
import { motion, easeOut } from "framer-motion";
import BlogCard from "../ui/cards/BlogCard";
import UniversalGrid from "../ui/universales/UniversalGrid";
import UniversalContainer from "../ui/universales/UniversalContainer";
import type { Article } from "../../data/Articles";

interface Props {
  articles: Article[];
}

// Variants para cada tarjeta
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

// Variants para grid con stagger
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

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
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <UniversalGrid cols={3} className="mt-10 justify-items-center">
          {articles.map((article) => (
            <motion.div key={article.slug} variants={cardVariants}>
              <BlogCard article={article} />
            </motion.div>
          ))}
        </UniversalGrid>
      </motion.div>
    </UniversalContainer>
  );
};

export default BlogGrid;