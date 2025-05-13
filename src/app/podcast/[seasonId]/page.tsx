import PodcastHeader from "@/components/Header/PodcastHeader";
import React from "react";
import { PodcastView } from "./PodcastView";

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

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
