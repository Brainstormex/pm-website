import PodcastHeader from "@/components/Header/PodcastHeader";
import PodcastCard from "@/components/Sections/PodcastCard";
import { Sidebar } from "./Sidebar";
import React from "react";
import { Season } from "@/types/common";

// Define the episode data structure
interface PodcastEpisode {
  id: string;
  number: string;
  title: string;
  speakerName: string;
  speakerTitle: string;
  duration: string;
  quote: string;
  imageUrl: string;
  seasonId: string;
}

const seasons: Season[] = [
  {
    id: "season01",
    title: "Season 3",
    subtitle: "From inspiration to action",
    isActive: true,
  },
  {
    id: "season02",
    title: "Season 2",
    subtitle: "Kaleidoscope of Cultures",
    isActive: false,
  },
  {
    id: "season03",
    title: "Season 1",
    subtitle: "The Art of Impossible",
    isActive: false,
  },
];

const episodes: PodcastEpisode[] = [
  {
    id: "1",
    number: "01",
    title: "Positive Workspace Attracts Top Talent",
    speakerName: "Ashwani Prashara",
    speakerTitle: "CHRO, Reliance India",
    duration: "42 mis 27 secs",
    quote:
      "A positive work environment, centered on safety, learning, and holistic well-being, is key to attracting top talent and ensuring that employees feel valued.",
    imageUrl: "/assets/podcastpfp.svg",
    seasonId: "season01",
  },
  {
    id: "2",
    number: "02",
    title: "The Power of the Five B's Framework",
    speakerName: "Khim Tan",
    speakerTitle: "Former Group CHRO, Alliance Bank Malaysia",
    duration: "33 mis 19 secs",
    quote:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis commodo magnis arcu erat erat. Amet tempus ornare inceptos aptent dignissim. Fermentum mi...",
    imageUrl: "/assets/podcastpfp.svg",
    seasonId: "season01",
  },
  {
    id: "3",
    number: "03",
    title: "Corporate Culture is a Collective Creation",
    speakerName: "Sahil Mathur",
    speakerTitle: "CHRO, InMobi Group",
    duration: "41 mis 44 secs",
    quote:
      "An 'entity' that lives in every part of the company and in the vision that each member of the work team has of the business. Corporate culture is not an abst...",
    imageUrl: "/assets/podcastpfp.svg",
    seasonId: "season01",
  },
  {
    id: "4",
    number: "01",
    title: "Season 2 Episode 1",
    speakerName: "John Doe",
    speakerTitle: "CEO, Example Corp",
    duration: "45 mis 00 secs",
    quote: "Example quote for season 2 episode 1",
    imageUrl: "/assets/podcastpfp.svg",
    seasonId: "season02",
  },
  {
    id: "5",
    number: "02",
    title: "Season 2 Episode 2",
    speakerName: "Jane Smith",
    speakerTitle: "CTO, Example Corp",
    duration: "38 mis 15 secs",
    quote: "Example quote for season 2 episode 2",
    imageUrl: "/assets/podcastpfp.svg",
    seasonId: "season02",
  },
  {
    id: "6",
    number: "01",
    title: "Season 1 Episode 1",
    speakerName: "Bob Johnson",
    speakerTitle: "Founder, Example Inc",
    duration: "50 mis 30 secs",
    quote: "Example quote for season 1 episode 1",
    imageUrl: "/assets/podcastpfp.svg",
    seasonId: "season03",
  },
];

export default function PodcastPage() {
  // Ensure we have seasons data
  if (!seasons || seasons.length === 0) {
    return <div>No seasons available</div>;
  }

  const firstSeason = seasons[0];
  const seasonEpisodes = episodes.filter((episode) => episode.seasonId === firstSeason.id);

  return (
    <div>
      <PodcastHeader />

      <div className="mx-auto flex-col lg:flex-row max-w-7xl py-4 flex lg:px-0 px-6 justify-between gap-x-14">
        <Sidebar seasons={seasons} currentSeasonId={firstSeason.id} />
        <div className="grid lg:w-3/4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seasonEpisodes.map((episode) => (
            <PodcastCard key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </div>
  );
}
