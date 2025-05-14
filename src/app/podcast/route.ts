import { NextResponse, NextRequest } from 'next/server';
import { fetchPodcasts } from '@/services/podcastService';
import { PodcastSeason } from '@/types/common';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
    const { data } = await fetchPodcasts();
    const { podcastSeasons } = data;
    const url = request.nextUrl;

    // Find the latest active season
    const latestSeason = podcastSeasons.find((season: PodcastSeason) => season);
    if (latestSeason) {
        return NextResponse.redirect(new URL(`/podcast/${latestSeason.id}`, url.origin));
    }

    // Just use the first season since backend provides them in the correct order
    return NextResponse.redirect(new URL(`/podcast/${podcastSeasons[0].id}`, url.origin));
} 