import React from "react";
import { CardContent, Typography, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import UniversalCard from "./UniversalCard";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescrition";

interface ArticleCardProps {
  title: string;
  description: string;
  image?: string;
  slug: string;
  category: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, image, slug, category }) => {
  return (
    <UniversalCard>
      <CardActionArea component={Link} to={`/blog/${slug}`}>
        <CardContent>
          <CardTitle >
            {title}
          </CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
          <Typography variant="caption" color="var(--color-beige)" sx={{ mt: 1, display: "block" }}>
            Categoría: {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </UniversalCard>
  );
};

export default ArticleCard;
