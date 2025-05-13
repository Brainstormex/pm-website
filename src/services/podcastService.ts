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
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // Add cache control to prevent caching
      cache: 'no-store',
    });
    
    console.log('API Response status:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    });

    if (!response.ok) {
      console.error('Podcast API error:', {
        status: response.status,
        statusText: response.statusText,
        url: apiUrl,
        headers: Object.fromEntries(response.headers.entries())
      });
      throw new Error(`Podcast API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Podcast API response data:', {
      success: data.success,
      statusCode: data.statusCode,
      message: data.message,
      hasData: !!data.data,
      seasonsCount: data.data?.podcastSeasons?.length,
      episodesCount: data.data?.podcastEpisodes?.length,
      firstSeason: data.data?.podcastSeasons?.[0],
      firstEpisode: data.data?.podcastEpisodes?.[0]
    });

    if (!data.success) {
      console.error('Podcast API returned error:', data);
      throw new Error(`Podcast API error: ${data.message}`);
    }

    if (!data.data || !data.data.podcastEpisodes || !data.data.podcastSeasons) {
      console.error('Invalid podcast data structure:', {
        hasData: !!data.data,
        hasEpisodes: !!data.data?.podcastEpisodes,
        hasSeasons: !!data.data?.podcastSeasons,
        dataKeys: data.data ? Object.keys(data.data) : []
      });
      throw new Error('Invalid podcast data structure received from API');
    }

    return data;
  } catch (error: any) {
    console.error("Error fetching podcasts:", {
      error,
      apiUrl,
      env: process.env.NEXT_PUBLIC_API_BASE_URL,
      errorMessage: error?.message || 'Unknown error',
      errorStack: error?.stack
    });
    throw error;
  }
};
