import Image from 'next/image';
import Link from 'next/link';
import { Article } from './page';

interface OtherArticleCardProps {
  article: Article;
}

export const OtherArticleCard = ({ article }: OtherArticleCardProps) => {
  const { title, excerpt, author, date, coverImage, slug } = article;
  
  return (
    <div className="py-6 border-t border-gray-200">
      <Link href={`/articles/${slug}`} className="flex flex-col md:flex-row gap-4 group">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2 group-hover:text-red-500">{title}</h2>
          <p className="text-gray-600 mb-2">{excerpt}</p>
          <div className="text-sm text-gray-500">
            <span className="font-medium uppercase">By {author}</span> · {date}
          </div>
        </div>
        <div className="w-full md:w-32 h-24 md:h-32 relative">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 128px"
          />
        </div>
      </Link>
    </div>
  );
};
