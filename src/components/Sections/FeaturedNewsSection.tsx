import React from "react";
import { Section } from "@/types/common";

import { Card } from "../Card/Card";
import SectionHeading from "../SectionHeading/SectionHeading";
import { articleData } from "@/services/dummay";

export const FeaturedNewsSection
 = ({ data }: { data: Section }) => {
  if (data && data.articles && data.articles.length === 0) {
   data.articles = articleData;
  }
  console.log(data, 'From Features News Section')
  const featuredArticles = data.articles?.slice(0, 5) || [];
  console.log(data, 'From Features News Section ADAT')

  return (
    <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-0" data-template={data.template}>
      {/* <h2 className="text-3xl font-bold mb-8">{data.title}</h2> */}
      <div className="">
        <SectionHeading title={data.label || ""} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-4">
        {/* Main Featured Post */}
        <div className="md:col-span-7 relative border-r-0 md:border-r md:border-border md:pr-4 border-b border-border md:border-b-0">
            <Card
              data={featuredArticles[0]}
              title="medium"
              description="large"
              titleSize="xxlarge"
              descriptionSize="small"
              textOnImage={false}
              imageStyle="rounded"
              titleMargin="medium"
            />
        </div>

        {/* Secondary Posts Grid */}
        <div className="md:col-span-5 w-full flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 w-full">
            <div className="flex flex-col gap-6 sm:w-1/2 md:w-full lg:w-1/2 border-r-0 sm:border-r md:border-r-0 lg:border-r border-border sm:pr-6 md:pr-0 lg:pr-4">
              {featuredArticles.slice(1, 3).map((article, index) => (
                <div className="border-b border-border lg:last:border-b-0"
                  key={index} 
                >
                  <Card
                    data={article}
                    title="medium"
                    layout="vertical"
                    textOnImage={false}
                    titleSize="medium"
                    description="small"
                    descriptionSize="large"
                    imageStyle="rounded"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:w-1/2 md:w-full lg:w-1/2">
              {featuredArticles.slice(3, 9).map((article, index) => (
                <div className="border-b border-border last:border-b-0"
                  key={index} 
                  // href={article.link}
                >
                  <Card
                    data={article}
                    title="medium"
                    layout="vertical"
                    textOnImage={false}
                    titleSize="medium"
                    description="large"
                    descriptionSize="small"
                    imageStyle="rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
