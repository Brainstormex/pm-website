// import SectionHeading from "@/components/SectionHeading/SectionHeading";
import React from "react";
// import { Card } from "@/components/Card/Card";
// import { popularVideos, videoData, adsData } from "./mockdata";
import VideoListing from "@/components/Header/VideoListing";
// import { TwoColumnVideoSection } from "./TwoColumnVideoSection";
// import TrendingSectionLeft from "@/components/Sections/TrendingSectionLeft";
// import { AdsSection } from "@/components/Sections/AdsSection";
import { Section } from "@/types/common";
import { PageRenderer } from "@/components/PageRenderer";

const VideoListingPage = ({data}:{data:Section}) => {


  
  return (
    <div className="max-w-7xl mx-auto py-8 space-y-12 px-4 sm:px-6 lg:px-0">

      {/* {JSON.stringify(data)} */}
      <VideoListing title={data.heading || ""} description={data.description || ""} categories={["Future of Human Capital","HR Folk Talk","Future Proof HR"]} />


      {data && data.sections && <PageRenderer slug={"videos"} type="section" data={data?.sections as Section[] | []} />}

      
    </div>
  );
};

export default VideoListingPage;
