import React from "react";
// import { Article } from "@/types/article";
import { Card } from "../Card/Card";
import SectionHeading from "../SectionHeading/SectionHeading";
// import {  VariantProps } from "class-variance-authority";
// import { twMerge } from "tailwind-merge";
import { articleData } from "@/services/dummay";
import { Section } from "@/types/common";


// const borderVariant = cva("", {
//   variants: {
//     border: {
//       right: "lg:pr-8 lg:border-r border-r-0 border-border",
//       left: "lg:pl-8 lg:border-l border-l-0 border-border",
//     },
//   },
//   defaultVariants: {
//     border: 'right',
//   },
// });

// interface CurrentSectionProps {

// export interface CurrentSectionProps extends VariantProps<typeof borderVariant> {
//   className?: string;
//   articles: Article[];
//   title: string;
//   link: string;
// }

// export const CurrentSection = ({ articles, title, link, border, className }: CurrentSectionProps) => {
  export const CurrentSection = ({ data, showLeftBorder = false }: { data: Section; showLeftBorder?: boolean }) => {
    console.log(data,"from current section")
   if (data && data.articles && data.articles.length === 0) {
    data.articles = articleData;
   }
  // console.log(articles,"from current section")
  return (
    <div className={`${showLeftBorder ? 'lg:border-l lg:pl-8 lg:border-border' : 'lg:border-r lg:pr-8 lg:border-border'}`} data-template={data.template}>
      <div className="flex flex-col w-full gap-4">
        <SectionHeading title={data?.label || ""} link={data?.link || ""}  />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full col-span-2 gap-4 md:gap-6">
        {data.articles?.slice(0, 2).map((article, artIndex) => (
          <div key={artIndex} className="pb-4">
            <Card
              data={article}
              hoverStyle="hoverZoom"
              imageStyle={"default"}
              titleSize="small"
              layout={"vertical"}
              description="small"
              descriptionSize="small"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full col-span-2 gap-4 md:gap-6">
        {data.articles?.slice(3, 6).map((article, artIndex) => (
          <div key={artIndex} className="pb-4">
            <Card
              data={article}
              hoverStyle="hoverZoom"
              imageStyle={"default"}
              layout={"vertical"}
              titleSize="small"
              description="small"
              descriptionSize="small"
            />
          </div>
        ))}
      </div>
    </div>
  );
}; 