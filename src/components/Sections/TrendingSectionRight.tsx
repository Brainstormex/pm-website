import React from 'react'
import { Section } from '@/types/common'
import { TrendingCard } from '../Card/TrendingCard'
import SectionHeading from '../SectionHeading/SectionHeading'
import { articleData } from "@/services/dummay";

const TrendingSectionRight = ({data}: {data: Section}) => {
  
  if (data && data.articles && data.articles.length === 0) {
    data.articles = articleData;
   }
  return (
    <div data-template={data.template}>
        <div className="flex flex-col gap-4">
          <SectionHeading title={data.label || ""} />
        </div>
        <div className="grid grid-cols-1 gap-2 lg:gap-4">
        
            {data.articles?.slice(0, 5).map((article) => (
                <TrendingCard 
                key={article.title}
                data={article}
                hoverStyle="default"
                imageSize='xlarge'
                imageStyle={"circle"}
                layout={"horizontalReverse"}
                wantDescription={false}
                titleSize="medium"
                title="medium"
                description="small"
                className='w-20 h-20'
                descriptionSize="small"
                isVideo={article.isVideo || article.dataType === "video"}
                template={data.template}
                />
            ))}

        </div>
    </div>
  )
}

export default TrendingSectionRight