"use client";

import React from "react";
import {  Section } from "@/types/common";
import { TrendingCard } from "../../Card/TrendingCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface LatestSectionProps {
  data: Section[];
  title?: string;
}

// const SectionHeader: React.FC<{section: Section}> = ({ section }) => {
//   if (section.template === "newsletter_section") return null;
  
//   return (
//     <div className="flex justify-between items-center mb-8 border-t border-border pt-0">
//       <h4 className="lg:text-lg uppercase tracking-widest font-medium text-center bg-foreground text-white px-4 py-2 rounded-b-lg">
//         {section.title}
//       </h4>
//       <Link 
//         href={section.link || ''} 
//         className="text-black whitespace-nowrap hover:text-orange flex items-center text-sm gap-2 font-medium uppercase"
//       >
//         View All <ChevronRight className='w-4 h-4' />
//       </Link>
//     </div>
//   );
// };

// const ArticleList: React.FC<{articles: Article[]}> = ({ articles }) => (
//   <div className="space-y-4">
//     {articles?.map((article, index) => (
//       <div key={index} className="border-b border-border py-4 last:border-b-0">
//         <TrendingCard
//           data={article}
//           hoverStyle="default"
//           imageStyle="circle"
//           titleSize="small"
//           className="w-20 h-14"
//           layout="horizontal"
//           description="small"
//           descriptionSize="small"
//           wantDescription={false}
//         />
//       </div>
//     ))}
//   </div>
// );



export const LatestSection: React.FC<LatestSectionProps> = ({ data }) => {


  return (
    <section className="max-w-7xl mx-auto px-0 py-12">
      <div className="flex lg:flex-row flex-col gap-8">
        {/* Left Section - 70% */}
        <div className="w-[70%] flex flex-col gap-8">
          {data.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {/* Section Header */}
              <div className="flex justify-between items-center mb-8 border-t border-border pt-0">
                <h4 className="lg:text-lg uppercase tracking-widest font-medium text-center bg-foreground text-white px-4 py-2 rounded-b-lg">
                  {section.title}
                </h4>
                <Link
                  href={section.link || ""}
                  className="text-black whitespace-nowrap hover:text-orange flex items-center text-sm gap-2 font-medium uppercase"
                >
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Articles */}
              <div className="space-y-4">
                {section.articles?.map((article, index) => (
                  <div
                    key={index}
                    className="border-b border-border py-4 last:border-b-0"
                  >
                    <TrendingCard
                      data={article}
                      hoverStyle="default"
                      imageStyle="rounded"
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
            </div>
          ))}
        </div>

        {/* Right Section - 30% */}
        <div className="w-[30%]">
  
        </div>
      </div>
    </section>
  );
};
