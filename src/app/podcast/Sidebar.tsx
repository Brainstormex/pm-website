import { PodcastSeason } from "@/types/common";
import React from "react";
import Link from "next/link";

interface SidebarProps {
  seasons: PodcastSeason[];
  currentSeasonId: string;
}

export const Sidebar = ({ seasons, currentSeasonId }: SidebarProps) => {
  return (
    <div className="w-full md:w-1/4 pr-4 py-4 lg:border-r border-inkBlack/40 h-[90%] lg:block hidden">
      {seasons.map((season, index) => (
        <Link
          key={season.id}
          href={`/podcast/${season.id}`}
          className={`block border-b py-4 ${
            season.id == currentSeasonId ? "border-orange" : "text-gray-700"
          }`}
        >
          <div>
            <h2
              className={`${
                season.id == currentSeasonId ? "text-orange" : "text-gray-700"
              } font-bold text-xl mb-1`}
            >
              {season.title}
            </h2>
            <p className="text-gray-600 text-sm">{season.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
