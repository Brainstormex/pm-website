import React from "react";
import { Section } from "@/types/common";
import Image from "next/image";
import Link from "next/link";
import { articleData } from "@/services/dummay";
export const PremiumContentSection = ({ data }: { data: Section }) => {
  let articles = data.articles || [];
  if (articles && articles.length === 0) {
    articles = articleData;
   }

  return (
    <div className="bg-indigo w-full my-0 py-5" data-template={data.template}>
    <section className="max-w-7xl mx-auto px-4 lg:px-0 py-12">
      {/* Premium Content Header */}
        <div className=" text-white inline-block  rounded mb-4">
          <h4 className="lg:text-lg bg-orange px-4 tracking-widest font-medium text-center mb-2 lg:text-left  text-white  py-2 rounded-b-lg uppercase">
   {data.label}
          </h4>
        </div>
      <div className="mb-0 flex flex-col lg:flex-row justify-between lg:gap-y-0 gap-y-4 items-start lg:items-end">
     <div>

       <Link href={data.link || "#"} className="text-white font-normal mb-0 max-w-md text-left">
      {data?.heading && (
        <h2 className="text-4xl text-white font-medium mb-4">{data?.heading}</h2>
        )}
        {data.description && (  
        <p className="text-white font-normal mb-0 max-w-md text-left">
          {data.description}
        </p>
        )}
        </Link>
     </div>

        <Link 
          href={data.link || "/subscribe"} 
          className="bg-white text-black px-8 py-3 rounded-lg font-medium 
          border-2 border-black hover:bg-black hover:text-white 
          transition-colors duration-300"
          >
          SUBSCRIBE NOW
        </Link>
        
      </div>

      {/* Premium Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {articles.slice(0, 3).map((article, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative">
              {/* Premium Badge */}
              <div className="absolute -top-[0.8px]  left-0 z-10">
                <span className="bg-orange text-white tracking-widest font-semibold rounded-b-md px-6 py-1 text-sm rounded">
                  PREMIUM
                </span>
              </div>
              
              {/* Article Image */}
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Link href={article.link || "#"}>
                <Image
                  src={article.image  ? article.image : "/assets/images/dummy.jpg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                </Link>
              </div>

              {/* Article Content */}
              <div className="space-y-2">
                <div className="flex items-center text-sm text-description font-normal">
                  <span className="text-white"><Link href={article.categorySlug || "#"}> {article.category}</Link></span>
                  <span className="mx-2">/</span>
                  <span><Link href={article.authorSlug || "#"}>{article.author}</Link></span>
                </div>
                <Link href={article.link || "#"}>
                <h3 className="font-semibold text-lg text-white">
                  {article.title}
                </h3>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};
