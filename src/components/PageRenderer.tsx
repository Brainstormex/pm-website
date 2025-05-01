"use client"

import React, { Suspense } from "react";
import dynamic from 'next/dynamic';
import { Article, PageRendererProps, Section } from "@/types/common";
import { SectionRenderer } from "@/components/Sections/SectionRenderer";

// Dynamic imports for sections
// const FeaturedSection = dynamic(() => 
//   import('@/components/SubCategory/sections/FeaturedSection').then(mod => mod.FeaturedSection)
// );

// const TrendingSection = dynamic(() => 
//   import('@/components/SubCategory/sections/TrendingSection').then(mod => mod.TrendingSection)
// );

// const LatestSection = dynamic(() => 
//   import('@/components/SubCategory/sections/LatestSection').then(mod => mod.LatestSection)
// );

const ArticleRenderer = dynamic(
  () => import("@/components/ArticleRenderer").then(mod => mod.default),
  { ssr: false }
);

const TopicRenderer = dynamic<{data: Article[]}>(
  () => import("@/components/topic/TopicRenderer").then(mod => mod.default),
  { ssr: false }
);
export const PageRenderer = ({ type, data }: PageRendererProps) => {
  console.log("PageRenderer",data)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* {JSON.stringify(data)} */}
      {(() => {
        switch (type) {
          case "article":
            return <ArticleRenderer />;
          case "section":
            return <SectionRenderer sectionsData={data as Section[] | []} />;
          case "topic":
            return <TopicRenderer data={data as Article[] || []} />;
          case "category":
            return <TopicRenderer data={data as Article[] || []} />;
          default:
            return null;
        }
      })()}
    </Suspense>
  );
};
