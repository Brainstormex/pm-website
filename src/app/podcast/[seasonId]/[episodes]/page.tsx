import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Section } from "@/types/common";
import CustomDateComponent from "@/components/ui/CustomDateComponent";
import TrendingSectionRight from "@/components/Sections/TrendingSectionRight";
import { articleData } from "@/services/dummay";
import { Spotify } from "react-spotify-embed";
import { TrendingCard } from "@/components/Card/TrendingCard";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { fetchPodcasts } from "@/services/podcastService";

const PodcastEpisodePage = async ({
  params,
}: {
  params: Promise<{ seasonId: string; episodes: string }>;
}) => {
  const { seasonId, episodes } = await params;
  const { data } = await fetchPodcasts();
  // const { podcastEpisodes } = data;

  // Find the episode data using seasonId and slug
  const episode = data.podcastEpisodes.find(
    (ep) => ep.season_id === seasonId && ep.slug === episodes
  );

  const embedUrl = episode?.play_link
    ?.replace("open.spotify.com/episode", "open.spotify.com/embed/episode")
    .split("?")[0]; // remove any query params

  if (!episode) {
    return (
      <div className="text-center py-10 max-w-7xl mx-auto">
        Episode not found
      </div>
    );
  }

  // Create a section object for TrendingSectionLeft
  const trendingSection: Section = {
    type: "trending",
    template: "trending_section_left",
    description: "Trending Articles",
    image: null,
    articles: articleData,
    label: "Trending",
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-12 flex flex-col lg:flex-row gap-8 h-full">
      <div className="w-full lg:w-2/3">
        <div className="mb-2">
          <h3 className="text-gray-600 text-sm font-medium capitalize">
            <Link href={`/podcast/${episode.season_id}`}>{episode.title}</Link>
          </h3>
        </div>

        {/* Article title */}
        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
          {episode.subtitle}
        </h1>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              {/* <Link href={`/author/${episode.speaker_name}`}> */}
              <Image
                src={episode.image || "/assets/images/dummy.jpg"}
                alt={episode.speaker_name || "Speaker"}
                fill
                className="object-cover"
              />
              {/* </Link> */}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                {/* <Link
                    href={`/author/${episode.speaker_name}`} */}
                <div className="font-medium capitalize">
                  {episode.speaker_name || "Guest Speaker"}
                </div>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <span>{episode.duration || "N/A"}</span>
                <span className="mx-2">|</span>
                <CustomDateComponent
                  date={episode.date || ""}
                  format="custom"
                  // showTime={true}
                />
              </div>
            </div>
          </div>

          {/* Share buttons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-gray-600">
              <Image
                src="/assets/bookmarkGray.svg"
                alt="Bookmark"
                width={16}
                height={16}
              />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <Image
                src="/assets/facebookGray.svg"
                alt="Facebook"
                width={12}
                height={12}
              />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <Image
                src="/assets/twitterGray.svg"
                alt="Twitter"
                width={16}
                height={16}
              />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <Image
                src="/assets/linkedIn.svg"
                alt="LinkedIn"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>

        {/* Main article image */}
        <div className="relative w-full h-96 mb-8">
          <Image
            src={episode.image || "/assets/images/dummy.jpg"}
            alt={`${episode.title} cover image`}
            fill
            className="object-cover rounded-[4px]"
            priority
          />
        </div>

        <div className="mb-14">
          <p className="text-inBlack font-medium text-lg">
            {episode.description}
          </p>
        </div>

        {/* Spotify embed */}
        <div className="mb-16">
          {/* <Spotify
            wide
            // link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83"
            link={episode.play_link}
          /> */}
          {/* <iframe
            style={{ borderRadius: "12px" }}
            src={episode.play_link}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          /> */}
          <iframe
            src={embedUrl}
            // src="https://open.spotify.com/embed/track/1a9Bo17KMNBXIImtVqd3NJ?utm_source=oembed"
            width="100%"
            height="152"
            // frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          {/* <div style={{left: 0, width: "100%", height: "152px", position: "relative"}}>
            <iframe
              // src="https://open.spotify.com/embed/track/1a9Bo17KMNBXIImtVqd3NJ?utm_source=oembed"
              src={embedUrl}
              style={{top: 0, left: 0, width: "100%", height: "100%", position: "absolute", border: 0}}
              allowFullScreen
              allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
            ></iframe>
          </div> */}
          {/* {JSON.stringify(episode.play_link)} */}
        </div>

        <div className="">
          <div className="lg:px-0" data-template={trendingSection.template}>
            {trendingSection.articles && (
              <>
                <div className="flex flex-col gap-4">
                  <SectionHeading
                    link={trendingSection.link || ""}
                    title={trendingSection.label || ""}
                  />
                </div>
                <div className="grid grid-cols-1 gap-2 lg:gap-4">
                  {trendingSection.articles?.slice(0, 5).map((article) => (
                    <TrendingCard
                      key={article.title}
                      data={article}
                      hoverStyle="default"
                      imageSize="xlarge"
                      imageStyle={"circle"}
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
        </div>
      </div>
      <div
        className="w-1/3 sticky h-fit top-24"
        // style={{ top: `${headerHeight}px` }}
      >
        <TrendingSectionRight data={trendingSection} />
      </div>
    </section>
  );
};

export default PodcastEpisodePage;
