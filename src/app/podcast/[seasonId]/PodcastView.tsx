import PodcastCard from "@/components/Sections/PodcastCard";
import { Sidebar } from "../Sidebar";
import React from "react";
import MobileNav from "@/components/ui/MobileNav";
import { PodcastEpisode, PodcastSeason } from "@/types/common";
import { fetchPodcasts } from "@/services/podcastService";

export const PodcastView = async ({ seasonId }: { seasonId: string })  => {
    // const { seasonId } = await params;
  const { data } = await fetchPodcasts();
  const { podcastSeasons, podcastEpisodes } = data;

  if (!podcastSeasons || podcastSeasons.length === 0) {
    return <div className="text-center py-10">No seasons available</div>;
  }

  const seasonEpisodes = podcastEpisodes.filter(
    (episode: PodcastEpisode) => episode.season_id === seasonId
  );

  // if (!seasonEpisodes || seasonEpisodes.length === 0) {
  //   return <div className="text-center py-10">No episodes found for this season</div>;
  // }

  return (
    <div className="mx-auto flex-col lg:flex-row max-w-7xl pt-4 pb-20 flex lg:px-0 px-6 justify-between gap-x-14">
      <Sidebar seasons={podcastSeasons} currentSeasonId={seasonId} />
      <div className="block lg:hidden mb-5">
        <MobileNav
          items={podcastSeasons.map((season) => ({
            label: season.title,
            href: `/podcast/${season.id}`,
          }))}
        />
      </div>
      <div className="lg:w-2/3 w-full">
        {!seasonEpisodes || seasonEpisodes.length === 0 ? (
          <div className="text-center py-10">No episodes found for this season</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {seasonEpisodes.map((episode) => (
              <PodcastCard key={episode.id} episode={episode} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
