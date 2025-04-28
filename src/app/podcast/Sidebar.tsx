import { Season } from "@/types/common";
import React from "react";
import Link from "next/link";

interface SidebarProps {
  seasons: Season[];
  currentSeasonId: string;
}

export const Sidebar = ({ seasons, currentSeasonId }: SidebarProps) => {
  return (
    <div className="w-full md:w-1/4 pr-4 py-4 border-r border-inkBlack/40 h-[90%]">
      {seasons.map((season, index) => (
        <Link 
          key={season.id} 
          href={`/podcast/${season.id}`}
          className={`block ${index > 0 ? 'border-t border-orange py-4' : 'mb-8'}`}
        >
          <div>
            <h2 className={`${season.id === currentSeasonId ? 'text-orange-500' : 'text-gray-700'} font-bold text-xl mb-1`}>
              {season.title}
            </h2>
            <p className="text-gray-600 text-sm">{season.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
