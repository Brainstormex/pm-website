import React from "react";
import { Section } from "@/types/common";
import Image from "next/image";
import { articleData } from "@/services/dummay";
import SectionHeading from "../SectionHeading/SectionHeading";
import Link from "next/link";

export const ResearchSection = ({ data }: { data: Section }) => {
  let articles = data.articles || [];
  if (articles && articles.length === 0) {
    articles = articleData;
  }
  // console.log(articles,"from research section")
  const featuredArticle = articles[0];
  const sideArticles = articles.slice(1, 5);

  return (
    <section className="max-w-7xl mx-auto lg:px-0 px-4 lg:py-0" data-template={data.template}>
      {/* Header */}
      {/* {JSON.stringify(data)} */}
      <div className="flex justify-between items-start  pt-0">
        <SectionHeading title={data.label || ""} link={data.link || ""} />
      </div>
      <div className="flex flex-col gap-y-4">
        {data.heading && (
          <h2 className="text-4xl text-foreground font-medium">
            {data?.heading}
          </h2>
        )}
        {data.description && (
          <p className="text-gray-600 max-w-lg ">{data.description}</p>
        )}
      </div>
      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row gap-4 mt-8">
        {/* Featured Article - Takes 3 columns */}
        {featuredArticle && (
          <div className="lg:border-r border-border lg:w-3/5 lg:pr-4">
            <div className="group cursor-pointer">
              <div className="relative">
                <div className="relative h-[400px] mb-4 overflow-hidden rounded-lg">
                  <Link href={featuredArticle.link || "#"}>
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  </Link>
                </div>
                <div className="space-y-3 pb-7">
                  <div className="flex items-center text-sm">
                    <span className="text-black">
                      <Link href={featuredArticle.categorySlug || "#"}>{featuredArticle.category}</Link>
                      
                    </span>
                    <span className="mx-2">/</span>
                    <span className="text-description">
                      <Link href={featuredArticle.authorSlug || "#"}>{featuredArticle.author}</Link>
                     
                    </span>
                  </div>
                  <Link href={featuredArticle.link || "#"}>
                  <h3 className="text-3xl font-semibold">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600">{featuredArticle.description}</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Side Articles - Takes 2 columns */}
        <div className="flex flex-col lg:w-2/5 gap-6 border-border border-t pt-4 lg:border-t-0 lg:pt-0">
          {sideArticles.map((article, index) => (
            <div
              key={index}
              className="flex items-start border-b border-border last:border-b-0 border-r-0 border-t-0 border-l-0  pb-4 gap-4 group cursor-pointer"
            >
              <div className="relative w-32 h-24 flex-shrink-0">
                <Link href={article.link || "#"}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover rounded-[4px]"
                />
                </Link>
              </div>
              <div className="flex-grow">
                <div className="flex items-center text-sm mb-2">
                    <span className="text-black">
                    <Link href={article.categorySlug || "#"}>{article.category}</Link>
                  </span>
                  <span className="mx-2">/</span>
                  <span className="text-description">
                    <Link href={article.authorSlug || "#"}>{article.author}</Link>
                  </span>
                </div>
                <Link href={article.link || "#"}>
                <h3 className="font-medium line-clamp-2">{article.title}</h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
