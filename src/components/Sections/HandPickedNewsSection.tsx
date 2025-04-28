import React from "react";
import { Article, Section } from "@/types/common";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Card } from "../Card/Card";
import { articleData } from "@/services/dummay";
export const HandPickedNewsSection = ({ data }: { data: Section }) => {
  let handpickedItems = data.articles || [];
  let currentArticles = data.articles || [];
  if (handpickedItems && handpickedItems.length === 0) {
    handpickedItems = articleData;
   }
  if (currentArticles && currentArticles.length === 0) {
    currentArticles = articleData;
   }
  return (
    <section className="max-w-7xl mx-auto py-12 flex gap-x-16" data-template={data.template}>
      {/* Handpicked Section */}
      <div className="w-1/3 border-r pr-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold">Octopus Handpicked</h2>
          <Image 
            src="/assets/images/octopus.svg" 
            alt="Octopus" 
            width={90} 
            height={90} 
          />
        </div>

        <div className="space-y-8">
          {handpickedItems.map((item, index) => (
            <div key={index} className="flex items-center flex-row-reverse gap-6 pb-6 border-b last:border-b-0">
              <div className="flex-shrink-0 ">
                <Image
                  src={item.image || ''}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="flex-grow">
                <span className="text-sm text-gray-600 mb-1 block">{item.title}</span>
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Section */}
      <div className="w-2/3">
        <div className="flex justify-between items-center mb-8 border-t border-border pt-0">
          <div className="inline-block">
            <h4 className="lg:text-lg tracking-widest font-medium text-center bg-foreground text-white px-4 py-2 rounded-b-lg">
              CURRENT
            </h4>
          </div>
          <Link 
            href="/current" 
            className="text-black whitespace-nowrap hover:text-orange flex items-center text-sm gap-2 font-medium"
          >
            VIEW ALL
            <span><ChevronRight className="h-4 w-4" /></span>
          </Link>
        </div>
        <div className="grid grid-cols-2 w-full col-span-2 gap-6">

{currentArticles?.slice(0, 2).map((article: Article, artIndex: number) => (
  <div key={artIndex} className="pb-4">
    <Card
      data={article}
      hoverStyle="hoverZoom"
      imageStyle={"default"}
      layout={"vertical"}
      description="small"
      descriptionSize="small"
      />
  </div>
))}
</div>
<div className="grid grid-cols-3 w-full col-span-2 gap-6">
{currentArticles?.slice(3,6).map((article, artIndex) => (
  <div key={artIndex} className="pb-4">
    <Card
      data={article}
      hoverStyle="hoverZoom"
      imageStyle={"rounded"}
      layout={"vertical"}
      titleSize="small"
      description="small"
      descriptionSize="small"
      />
  </div>
))}
</div>
      </div>
    </section>
  );
}; 