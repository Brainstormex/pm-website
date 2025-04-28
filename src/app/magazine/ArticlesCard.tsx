import Image from 'next/image';
import Link from 'next/link';
import { Article } from './page';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative h-52 w-full">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4 flex-grow">
        <Link href={`/article/${article.slug}`}>
          <h3 className="text-lg font-semibold text-orange-600 hover:text-orange-800 transition-colors mb-2">{article.title}</h3>
        </Link>
        <p className="text-sm text-gray-500 mb-3">By {article.author} • {article.date}</p>
        <p className="text-gray-700 text-sm line-clamp-3">{article.excerpt}</p>
      </div>
    </div>
  );
}