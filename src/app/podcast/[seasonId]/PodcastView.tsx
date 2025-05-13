import PodcastCard from "@/components/Sections/PodcastCard";
import { Sidebar } from "../Sidebar";
import React from "react";
import MobileNav from "@/components/ui/MobileNav";
import { PodcastEpisode, PodcastSeason } from "@/types/common";
import { fetchPodcasts } from "@/services/podcastService";

export const PodcastView = async ({ seasonId }: { seasonId: string })  => {
  // Debug environment variables
  console.log('Environment check:', {
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    nodeEnv: process.env.NODE_ENV,
    isProduction: process.env.NODE_ENV === 'production'
  });

  try {
    console.log('Fetching podcasts for season:', seasonId);
    const { data } = await fetchPodcasts();
    console.log('Received podcast data:', { 
      seasons: data.podcastSeasons?.length,
      episodes: data.podcastEpisodes?.length
    });

    const { podcastSeasons, podcastEpisodes } = data;

    if (!podcastSeasons || podcastSeasons.length === 0) {
      console.error('No seasons available in API response');
      return (
        <div className="text-center py-10">
          <p className="text-red-500">No podcast seasons available</p>
          <p className="text-sm text-gray-500 mt-2">Please try again later or contact support if the issue persists</p>
        </div>
      );
    }

    const seasonEpisodes = podcastEpisodes.filter(
      (episode: PodcastEpisode) => episode.season_id === seasonId
    );

    console.log('Filtered episodes for season:', {
      seasonId,
      totalEpisodes: podcastEpisodes.length,
      filteredEpisodes: seasonEpisodes.length
    });

    if (!seasonEpisodes || seasonEpisodes.length === 0) {
      console.error('No episodes found for season:', seasonId);
      return (
        <div className="text-center py-10">
          <p className="text-red-500">No episodes found for this season</p>
          <p className="text-sm text-gray-500 mt-2">Please try again later or contact support if the issue persists</p>
        </div>
      );
    }

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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-2/3 w-full">
          {seasonEpisodes.map((episode) => (
            <PodcastCard key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    );
  } catch (error: any) {
    console.error('Error in PodcastView:', error);
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Error loading podcast data</p>
        <p className="text-sm text-gray-500 mt-2">Please try again later or contact support if the issue persists</p>
        <p className="text-xs text-gray-400 mt-1">Error details: {error?.message || 'Unknown error'}</p>
      </div>
    );
  }
};
