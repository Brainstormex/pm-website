// components/PodcastEpisodeCard.tsx
import Image from 'next/image';
import React from 'react';

interface PodcastEpisodeProps {
  episode: {
    number: string;
    title: string;
    speakerName: string;
    speakerTitle: string;
    duration: string;
    quote: string;
    imageUrl: string;
  };
}

const PodcastCard: React.FC<PodcastEpisodeProps> = ({ episode }) => {
  return (
    <div className="border  border-inactiveGray rounded-lg p-6 flex flex-col h-full   transition-shadow">
      {/* Episode Number */}
      <p className="text-orange font-medium mb-2">Episode {episode.number}</p>
      
      {/* Episode Title */}
      <h3 className="text-xl font-meidum mb-4 text-gray-900 leading-tight">{episode.title}</h3>
      
      {/* Speaker Image */}
      <div className="relative w-full h-64 mb-4 bg-orange-50 rounded overflow-hidden">
        <Image
          src={episode.imageUrl}
          alt={episode.speakerName}
          fill
          className="object-cover object-center rounded-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Speaker Info */}
      <h4 className="text-xl font-semibold mb-1 text-gray-900">{episode.speakerName}</h4>
      <p className="text-gray-600 mb-4 text-sm">{episode.speakerTitle}</p>
      
      {/* Quote */}
      <p className="text-gray-700 mb-4 flex-grow line-clamp-3">{episode.quote}</p>
      
      {/* Bottom section with duration and CTA */}
      <div className="border-t border-border pt-4 mt-auto flex justify-between items-center">
        <span className="text-foreground font-medium text-xs">{episode.duration}</span>
        <a 
          href="#" 
          className="text-gray-900 font-semibold text-xs hover:text-orange-500 transition-colors"
        >
          GO TO EPISODE &gt;
        </a>
      </div>
    </div>
  );
};

export default PodcastCard;