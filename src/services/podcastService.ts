import { PodcastEpisode, PodcastSeason } from "@/types/common";

export interface PodcastResponse {
  success: boolean;
  statusCode: number;
  timestamp: string;
  message: string;
  data: PodcastData;
}

interface PodcastData {
  podcastSeasons: PodcastSeason[];
  podcastEpisodes: PodcastEpisode[];
}

export const fetchPodcasts = async (): Promise<PodcastResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/podcast`
    );

    return response.json();
  } catch (error) {
    console.error("Error fetching podcasts:", error);
    throw error;
  }
};
