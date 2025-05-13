import PodcastHeader from "@/components/Header/PodcastHeader";
import React from "react";
import { PodcastView } from "./PodcastView";

export default async function SeasonPage({
  params,
}: {
  params: Promise<{ seasonId: string }>;
}) {
  const { seasonId } = await params;
  return (
    <div>
      <PodcastHeader />
      <PodcastView seasonId={seasonId} />
    </div>
  );
}
