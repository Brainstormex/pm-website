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
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/podcast`;
  console.log('Fetching podcasts from:', apiUrl); // Debug log

  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      console.error('Podcast API error:', {
        status: response.status,
        statusText: response.statusText,
        url: apiUrl
      });
      throw new Error(`Podcast API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Podcast API response:', data); // Debug log

    if (!data.success) {
      console.error('Podcast API returned error:', data);
      throw new Error(`Podcast API error: ${data.message}`);
    }

    if (!data.data || !data.data.podcastEpisodes || !data.data.podcastSeasons) {
      console.error('Invalid podcast data structure:', data);
      throw new Error('Invalid podcast data structure received from API');
    }

    return data;
  } catch (error) {
    console.error("Error fetching podcasts:", {
      error,
      apiUrl,
      env: process.env.NEXT_PUBLIC_API_BASE_URL
    });
    throw error;
  }
};
