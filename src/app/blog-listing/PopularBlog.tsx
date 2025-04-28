// src/components/ArticleList.tsx

import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types/common";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

interface ArticleListProps {
  articles: Article[];
}

const PopularBlog = ({ articles }: ArticleListProps) => {
  return (
    <div className="space-y-6 w-3/4">
      <SectionHeading
        title="POPULAR"
      />

      {articles.map((article) => (
        <div
          key={article.date}
          className="flex gap-4 border-b border-inkBlack/40 pb-6"
        >
          <div className="w-24 h-24 bg-inactiveGray rounded-md overflow-hidden flex-shrink-0">
            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">
              {/* <Link
                href={`/categories/${article.category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="hover:underline"
              >
                {article.category}
              </Link> */}
              <span className="text-inkBlack text-xs font-medium">
                <Link href={""} className="hover:underline">
                  {article.category}
                </Link>
              </span>
              <span className="mx-2">/</span>
              <span className="text-inactiveGray text-xs font-medium">
                <Link href={""} className="hover:underline">
                  {article.author}
                </Link>
              </span>
            </div>
            <h3 className="text-sm font-medium mb-1">
              <Link href="#" className="text-inkBlack text-xl font-medium">
                {article.title}
              </Link>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularBlog;
