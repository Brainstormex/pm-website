"use client"

import React, { Suspense } from "react";
import dynamic from 'next/dynamic';
import { Section } from "@/types/common";
import { TwoColumnLayout } from "./TwoColumnLayout";
import { Article } from "@/types/article";
import { ReverseColumnLayout } from "./ReverseColumnLayout";
// import { CurrentSectionProps } from "@/components/Sections/CurrentSection";

const EmailSubscription = dynamic<{data: Section}>(
  () => import("@/components/Newsletter/EmailSubscription"),
  { ssr: false }
);

const HotTopics = dynamic<{data: Section}>(
  () => import("@/components/Sections/HotTopics").then(mod => mod.default),
  { ssr: false }
);

const TrendingSectionLeft = dynamic<{data: Section}>(
  () => import("@/components/Sections/TrendingSectionLeft"),
  { ssr: false }
);

const RecentAppointmentsSection = dynamic<{data: Section; title: string}>(
  () => import("@/components/Sections/RecentAppointmentSection").then(mod => mod.RecentAppointmentSection),
  { ssr: false }
);

const TrendingSectionRight = dynamic<{data: Section}>(
  () => import("@/components/Sections/TrendingSectionRight"),
  { ssr: false }
);

const AdsSection = dynamic<{data: Section}>(
  () => import("@/components/Sections/AdsSection").then(mod => mod.AdsSection),
  { ssr: false }
);

const VideoCarousel =  dynamic<{data: Section}>(
  () => import("@/components/SubCategory/sections/VideoCarousel").then(mod => ({ default: mod.VideoCarousel })),
  { ssr: false }
);

// dynamic<{data: Article[]; title: string}>(
//   () => import("@/components/SubCategory/sections/VideoCarousel").then(mod => ({ default: mod.VideoCarousel })),
//   { ssr: false }
// );

const FeaturedNewsSection = dynamic<{data: Section}>(
  () => import("@/components/Sections/FeaturedNewsSection").then(mod => ({ default: mod.FeaturedNewsSection })),
  { ssr: false }
);



const PremiumContentSection = dynamic<{data: Section}>(
  () => import("@/components/Sections/PremiumContentSection").then(mod => ({ default: mod.PremiumContentSection })),
  { ssr: false }
);

const EventsSection = dynamic<{data: Section}>(
  () => import("@/components/Sections/EventsSection").then(mod => ({ default: mod.EventsSection })),
  { ssr: false }
);

const BrandInitiativesSection = dynamic<{data: Section}>(
  () => import("@/components/Sections/BrandInitiativesSection").then(mod => ({ default: mod.BrandInitiativesSection })),
  { ssr: false }
);

const ResearchSection = dynamic<{data: Section}>(
  () => import("@/components/Sections/ResearchSection").then(mod => ({ default: mod.ResearchSection })),
  { ssr: false }
);

const PodcastSection = dynamic<{data: Section}>(
  () => import("@/components/Sections/PodcastSection").then(mod => ({ default: mod.PodcastSection })),
  { ssr: false }
);

const HandPickedNewsSection = dynamic<{data: Section}>(
  () => import("@/components/Sections/HandPickedNewsSection").then(mod => ({ default: mod.HandPickedNewsSection })),
  { ssr: false }
);

const RightSection = dynamic<{data: Section}>(
  () => import("@/components/Sections/RightColumn").then(mod => ({ default: mod.RightColumn })),
  { ssr: false }
);

const LeftSection = dynamic<{data: Section}>(
  () => import("@/components/Sections/LeftColumn").then(mod => ({ default: mod.LeftColumn })),
  { ssr: false }
);
const CurrentSectionDynamic = dynamic<{data: Section; showLeftBorder?: boolean}>(
  () => import("@/components/Sections/CurrentSection").then(mod => ({ default: mod.CurrentSection })),
  { ssr: false }
);
const RecentArticlesSectionDynamic = dynamic<{articles: Article[]}>(
  () => import("./RecentArticlesSection").then(mod => ({ default: mod.RecentArticlesSection })),
  { ssr: false }
);


export const SectionRenderer = ({sectionsData, showLeftBorder}:{sectionsData: Section[]; border?: string; showLeftBorder?: boolean}) => {
  return (
    <div className="flex flex-col gap-10 ">
      {sectionsData.map((section, index) => (
        <Suspense key={index} fallback={<div>Loading...</div>}>
          {(() => {
            console.log("Rendering section:", section.template);
            switch (section.template) {
              case "hot_topic":
                return <HotTopics key={index} data={section}  />;
              case "featured_section":
                return <FeaturedNewsSection key={index} data={section} />;
              case "ads_section":
                return <AdsSection key={index} data={section} />;
              case "recent_appointments_section":
                return <RecentAppointmentsSection title={section.label || ""} key={index} data={section} />;
              case "horizontal_long_section":
                return <VideoCarousel key={index} data={section} />;
              case "premium_section":
                return <PremiumContentSection key={index} data={section} />;
              case "trending_section_right":
                return <TrendingSectionRight key={index} data={section} />;
              case "trending_section_left":
                return <TrendingSectionLeft key={index} data={section} />;
              case "events_section":
                return <EventsSection key={index} data={section} />;
              case "brand_section":
                return <BrandInitiativesSection key={index} data={section} />;
              case "research_section":
                return <ResearchSection key={index} data={section} />;
              case "podcast_section":
                return <PodcastSection key={index} data={section} />;
              case "handpicked_section":
                return <HandPickedNewsSection key={index} data={section} />;
              case "two_column_layout":
                return <TwoColumnLayout key={index} data={section} />;
              case "right_section":
                return <RightSection key={index} data={section} />;
              case "newsletter_section":
                return <EmailSubscription key={index} data={section} />;
              case "left_section":
                return <LeftSection key={index} data={section} />;
              case "current_section":
                return <CurrentSectionDynamic key={index} data={section} showLeftBorder={showLeftBorder}/>;
              case "recent_articles":
                return <RecentArticlesSectionDynamic key={index} articles={section.articles || []} />;
              case "reverse_column_layout":
                return <ReverseColumnLayout key={index} data={section} />;
              default:
                return  <>{section.template} is Missing<br/></>;
            }
          })()}
        </Suspense>
      ))}
    </div>
  );
};