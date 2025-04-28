import React from "react";
import { Section } from "@/types/common";
import { TrendingCard } from "../Card/TrendingCard";
import SectionHeading from "../SectionHeading/SectionHeading";
import { articleData } from "@/services/dummay";

const TrendingSectionLeft = ({ data }: { data: Section }) => {
  console.log("from trending section left", data);
  
  if ( data.articles &&  data.articles.length === 0) {
    data.articles = articleData;
   }
  return (
    <div className="lg:px-0" data-template={data.template}>
      {data.articles && (
        <>
          <div className="flex flex-col gap-4">
            <SectionHeading link={data.link || ""} title={data.label || ""} />
            
          </div>
          <div className="grid grid-cols-1 gap-2 lg:gap-4">
            {data.articles?.slice(0, 5).map((article) => (
              <TrendingCard
                key={article.title}
                data={article}
                hoverStyle="default"
                imageSize="xlarge"
                imageStyle={"rounded"}
                layout={"horizontal"}
                wantDescription={false}
                titleSize="medium"
                description="small"
                className="lg:w-20 lg:h-20 w-16 h-16"
                descriptionSize="small"
                isVideo={article.isVideo || article.dataType === "video"}
                title="medium"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TrendingSectionLeft;
