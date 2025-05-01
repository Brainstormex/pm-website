import React from "react";
import { Card } from "../../components/Card/Card";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import TrendingSectionRight from "@/components/Sections/TrendingSectionRight";
import { FeaturedNewsSection } from "@/components/Sections/FeaturedNewsSection";
import { Section, Article } from "@/types/common";
import { FeaturedSection } from "@/components/SubCategory/sections/FeaturedSection";
import { videoData } from "./mockdata";

// interface VideoItem {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
//   category: string;
//   categorySlug: string;
//   author: string;
//   authorSlug: string;
//   date: string;
//   duration: number;
//   isVideo?: boolean;
// }

interface TwoColumnVideoSectionProps {
  videos: Article[];
  featuredTitle?: string;
  trendingTitle?: string;
}

// Convert VideoItem array to Article array
// const convertToArticles = (videos: VideoItem[]): Article[] => {
//   return videos.map(
//     (video) =>
//       ({
//         title: video.title,
//         description: video.description,
//         image: video.image,
//         link: video.link,
//         category: video.category,
//         categorySlug: video.categorySlug,
//         author: video.author,
//         authorSlug: video.authorSlug,
//         date: video.date,
//         dataType: "video",
//         content: `duration:${video.duration}`,
//       } as Article)
//   );
// };

export const TwoColumnVideoSection = ({
  videos,
  featuredTitle = "Featured Videos",
  trendingTitle = "Trending Videos",
}: TwoColumnVideoSectionProps) => {
  // Convert videos to articles
  // const articleData = convertToArticles(videos);

  // Create Section object for TrendingSectionRight
  const trendingData: Section = {
    type: "trending_videos",
    template: "trending_section_right",
    description: "Trending videos section",
    image: null,
    title: trendingTitle,
    label: trendingTitle,
    articles: videoData,
  };

  return (
    <section className="max-w-7xl mx-auto py-6 lg:py-8 w-full">
      <div className="flex lg:flex-row flex-col gap-8 w-full relative">
        {/* Left column - Trending videos */}
        <div className="lg:w-[30%] w-full">
          <div className="space-y-6">
            <TrendingSectionRight data={trendingData} />
          </div>
        </div>

        {/* Right column - Featured video */}
        <div className="lg:w-[70%] w-full">
          <div className="space-y-6">
            <div className="lg:border-l border-border lg:pl-6">
              <SectionHeading title={featuredTitle} />
              <div className="grid grid-cols-1 md:grid-cols-2 w-full col-span-2 gap-4 md:gap-6">
                {videoData.slice(0, 2).map((article, index) => (
                  <div key={index} className="pb-4">
                    <Card
                      data={article}
                      hoverStyle="hoverZoom"
                      imageStyle="rounded"
                      titleSize="medium"
                      title="medium"
                      layout="vertical"
                      description="small"
                      descriptionSize="small"
                      isVideo={true}
                      showDuration={true}
                      durationPosition="bottom-right"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full col-span-2 gap-4 md:gap-6">
                {videoData.slice(2, 5).map((article, index) => (
                  <div key={index} className="pb-4">
                    <Card
                      data={article}
                      hoverStyle="hoverZoom"
                      imageStyle="rounded"
                      layout="vertical"
                      titleSize="small"
                      description="small"
                      descriptionSize="small"
                      isVideo={true}
                      showDuration={true}
                      durationPosition="bottom-right"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
