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
  // Add immediate logging to see if function is called
  console.warn('fetchPodcasts called', {
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV,
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL
  });

  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/podcast`;
  
  // Use console.warn instead of console.log to prevent stripping
  console.warn('About to fetch podcasts from:', apiUrl);

  try {
    // Log before fetch
    console.warn('Initiating fetch request...');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      signal: controller.signal
    }).finally(() => clearTimeout(timeoutId));
    
    // Log immediately after fetch
    console.warn('Fetch completed, checking response...');

    console.warn('API Response status:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      url: response.url
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

    // Log before parsing JSON
    console.warn('Parsing response JSON...');

    const data = await response.json();

    // Log after parsing JSON
    console.warn('JSON parsed successfully');

    console.warn('Podcast API response data:', {
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
    // Enhanced error logging
    console.error("Error in fetchPodcasts:", {
      name: error?.name,
      message: error?.message || 'Unknown error',
      stack: error?.stack,
      type: error?.constructor?.name,
      isAbortError: error?.name === 'AbortError',
      apiUrl,
      env: process.env.NEXT_PUBLIC_API_BASE_URL,
      timestamp: new Date().toISOString()
    });

    // If it's an abort error, provide a more specific message
    if (error?.name === 'AbortError') {
      throw new Error('Podcast API request timed out after 10 seconds');
    }

    throw error;
  }
};
