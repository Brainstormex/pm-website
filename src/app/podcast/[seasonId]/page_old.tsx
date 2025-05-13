import PodcastHeader from "@/components/Header/PodcastHeader";
import PodcastCard from "@/components/Sections/PodcastCard";
import { Sidebar } from "../Sidebar";
import React from "react";
import { PodcastEpisode, PodcastSeason } from "@/types/common";
import { episodes } from "@/utils/function";

// Define the episode data structure



export default async function SeasonPage({
  params,
}: {
  params: { seasonId: string };
}) {
  const { seasonId } = params;
  const seasonEpisodes = episodes.filter(
    (episode) => episode.season_id === seasonId
  );

  if (seasonEpisodes.length === 0) {
    return <div>No episodes found for this season</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {seasonEpisodes.map((episode) => (
        <PodcastCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
}
