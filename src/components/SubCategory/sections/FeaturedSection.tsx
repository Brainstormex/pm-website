"use client";

import React from "react";
import { Article } from "@/types/common";
import { Card } from "@/components/Card/Card";
import { TrendingCard } from "@/components/Card/TrendingCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface FeaturedSectionProps {
  data: Article[];
  title?: string;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  data,
  title = "FEATURED",
}) => {
  return (
    <section className="max-w-7xl mx-auto py-8">
      <div className="flex flex-row gap-8">
        {/* Current News Section */}
        <div className="w-2/3">
          <div className="flex border-t border-border">
            <div className="inline-block">
              <h4 className="lg:text-lg uppercase tracking-widest mb-8 font-medium text-center bg-foreground text-white px-4 py-2 rounded-b-lg">
                {title}
              </h4>
            </div>
            {/* <Link
              href="/featured"
              className="text-black whitespace-nowrap hover:text-orange flex items-center text-sm gap-2 font-medium"
            >
              VIEW ALL
              <span>
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link> */}
          </div>

          <div className="border-r border-border pr-6">
            <div className="grid grid-cols-2 w-full col-span-2 gap-6 mb-4">
              {data.slice(0, 2).map((article, index) => (
                <div key={index} className="pb-4">
                  <Card
                    data={article}
                    hoverStyle="hoverZoom"
                    imageStyle="default"
                    titleSize="medium"
                    layout="vertical"
                    description="small"
                    descriptionSize="small"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 w-full col-span-2 gap-6">
              {data.slice(2, 5).map((article, index) => (
                <div key={index} className="pb-4">
                  <Card
                    data={article}
                    hoverStyle="hoverZoom"
                    imageStyle="rounded"
                    layout="vertical"
                    titleSize="small"
                    description="small"
                    descriptionSize="small"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trending Section */}
        <div className="w-1/3">
          <div className="flex justify-between items-center mb-8 border-t border-border pt-0">
            <div className="inline-block">
              <h4 className="lg:text-lg uppercase tracking-widest font-medium text-center bg-foreground text-white px-4 py-2 rounded-b-lg">
                TRENDING
              </h4>
            </div>
            <Link
              href="/trending"
              className="text-black whitespace-nowrap hover:text-orange flex items-center text-sm gap-2 font-medium"
            >
              VIEW ALL
              <span>
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="space-y-6">
            {/* Slicing is just done for the UI purpose it shoul be removed once the APi is integrated and it applies for all the sections */}
            {data.slice(4, 8).map((article, index) => (
              <div
                key={index}
                className="border-b border-border py-0 last:border-b-0"
              >
                <TrendingCard
                  data={article}
                  hoverStyle="default"
                  imageStyle="circle"
                  titleSize="small"
                  wantDescription={false}
                  className="w-20 h-20"
                  layout="horizontalReverse"
                  description="small"
                  descriptionSize="small"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
