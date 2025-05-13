import { NextResponse } from 'next/server';
import { fetchPodcasts } from '@/services/podcastService';
import { PodcastSeason } from '@/types/common';

export async function GET() {
    const { data } = await fetchPodcasts();
    const { podcastSeasons } = data;

    // Find the latest active season
    const latestSeason = podcastSeasons.find((season: PodcastSeason) => season);
    if (latestSeason) {
        return NextResponse.redirect(new URL(`/podcast/${latestSeason.id}`, process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8082'));
    }
    // Fallback to first season if no active season is found
    return NextResponse.redirect(new URL(`/podcast/${podcastSeasons[0].id}`, process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8082'));
} 