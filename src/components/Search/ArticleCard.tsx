// src/components/search/ArticleCard.tsx
import React from 'react';
import { Article } from '../../types/podcast';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 py-6 border-t border-gray-200 first:border-t-0">
      <div className="w-full sm:w-40 h-40 relative flex-shrink-0">
        <div className="w-full h-full bg-gray-200 rounded-md overflow-hidden">
          <Image 
            src={article.imageSrc} 
            alt={article.title}
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-1">
          <span>{article.category}</span>
          <span className="mx-2">|</span>
          <span>{article.author}</span>
        </div>
        <Link href={article.url}>
          <h2 className="text-lg sm:text-xl font-semibold text-foreground hover:text-orange mb-2 transition-colors duration-200">
            {article.title}
          </h2>
        </Link>
      </div>
    </div>
  );
};