import SectionHeading from "@/components/SectionHeading/SectionHeading";
import React from "react";
import { Card } from "@/components/Card/Card";
import { popularVideos, videoData, adsData } from "./mockdata";
import VideoListing from "@/components/Header/VideoListing";
import { TwoColumnVideoSection } from "./TwoColumnVideoSection";
import TrendingSectionLeft from "@/components/Sections/TrendingSectionLeft";
import { AdsSection } from "@/components/Sections/AdsSection";

const VideoListingPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 space-y-12 px-4 sm:px-6 lg:px-0">
      <VideoListing />

      {/* Featured and Trending Videos */}
      <TwoColumnVideoSection
        videos={videoData}
        featuredTitle="Featured"
        trendingTitle="Trending"
      />

      {/* All Videos Grid - First Layout */}
      <section>
        <SectionHeading title="Featured" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoData.map((item, index) => (
            <Card
              key={index}
              data={item}
              hoverStyle="hoverZoom"
              imageStyle="rounded"
              titleSize="small"
              layout="vertical"
              description="small"
              descriptionSize="small"
              showDuration={true}
              durationPosition="bottom-right"
              isVideo={item.isVideo}
            />
          ))}
        </div>
      </section>

      {/* Advertisement Banner */}
      <section className="my-8">
        <AdsSection data={adsData} />
      </section>

      {/* Alternate Video Grid Layout */}
      <section>
        <SectionHeading title="Featured" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videoData.map((item, index) => (
            <Card
              key={index}
              data={item}
              hoverStyle="hoverZoom"
              imageStyle="rounded"
              titleSize="small"
              layout="vertical"
              description="small"
              descriptionSize="small"
              showDuration={true}
              durationPosition="bottom-right"
              isVideo={true}
            />
          ))}
        </div>
      </section>

      {/* Popular Videos Section */}
      <AdsSection data={adsData} />
      <section className="w-full flex flex-col md:flex-row gap-6 mt-12">
        <div className="lg:w-[70%] w-full">
          <TrendingSectionLeft data={popularVideos} />
        </div>
        <div className="lg:w-[30%] w-full">
          <AdsSection data={adsData} />
        </div>
      </section>
    </div>
  );
};

export default VideoListingPage;
