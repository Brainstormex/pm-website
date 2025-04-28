import React from "react";
import { Article } from "@/types/article";
import { TrendingCard } from "../Card/TrendingCard";
import { articleData } from "@/services/dummay";
interface RecentArticlesSectionProps {
  articles: Article[];
}

export const RecentArticlesSection = ({ articles }: RecentArticlesSectionProps) => {
  console.log(articles,"from recent articles section")
  if (articles && articles.length === 0) {
    articles = articleData;
   }
  return (
    <div className="grid-cols-1" >
      {articles.slice(0, 3).map((article, artIndex) => (
        <div key={artIndex} className="border-b border-border py-4">
          <TrendingCard
            data={article}
            hoverStyle="default"
            imageStyle={"circle"}
            titleSize="small"
            className="w-20 h-14"
            layout="horizontal"
            description="small"
            descriptionSize="small"
            wantDescription={false}
          />
        </div>
      ))}
    </div>
  );
}; 