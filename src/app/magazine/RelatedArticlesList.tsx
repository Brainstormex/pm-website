import ArticleCard from './ArticlesCard';
import { Article } from './page';

interface RelatedArticleListProps {
  articles: Article[];
}

export default function RelatedArticleList({ articles }: RelatedArticleListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}