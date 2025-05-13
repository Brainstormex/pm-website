// components/PodcastEpisodeCard.tsx
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { PodcastEpisode } from '@/types/common';

interface PodcastEpisodeProps {
  episode: PodcastEpisode;
}

const PodcastCard: React.FC<PodcastEpisodeProps> = ({ episode }) => {
  return (
    <Link href={`/podcast/${episode.season_id}/${episode.slug}`} className="block">
      <div className="border border-inactiveGray rounded-lg py-[23px] px-3 flex flex-col h-full transition-shadow hover:shadow-lg">
        {/* Episode Number */}
        <p className="text-orange text-xs font-inter font-medium mb-2">{episode.title}</p>
        
        {/* Episode Title */}
        <h3 className="text-lg md:text-xl font-meidum mb-4 text-gray-900 leading-tight">{episode.subtitle}</h3>
        
        {/* Speaker Image */}
        <div className="relative aspect-square mb-4 bg-orange-50 rounded overflow-hidden">
          <Image
            src={episode.image || '/assets/images/dummy.jpg'}
            alt={episode.speaker_name || ''}
            fill
            className="object-cover object-center rounded-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* Speaker Info */}
        <h4 className="text-sm md:text-base font-semibold mb-1 text-gray-900">{episode.speaker_name}</h4>
        <p className="text-gray-600 mb-4 text-sm line-clamp-1">{episode.speaker_title}</p>
        
        {/* Quote */}
        <p className="text-gray-700 mb-4 text-xs font-normal flex-grow md:line-clamp-3 line-clamp-7">{episode.description}</p>
        
        {/* Bottom section with duration and CTA */}
        <div className="border-t border-border pt-4 mt-auto flex justify-between items-center">
          <span className="text-foreground font-medium text-[10px] md:text-xs">{episode.duration || 'N/A'}</span>
          <span className="text-gray-900 font-medium text-[10px] md:text-xs hover:text-orange-500 transition-colors">
            GO TO EPISODE &gt;
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PodcastCard;