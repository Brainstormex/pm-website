// components/PodcastSection.tsx
import Image from 'next/image';
import React from 'react';

const PodcastHeader: React.FC = () => {
  
  return (
    <section className="w-full pt-4 pb-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl border-b pb-10 mb-10 border-inactiveGray mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Content Section */}
          <div className="w-full md:w-2/3">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Podcasts<span className="text-orange">.</span>
            </h1>
            <p className="text-foreground text-base md:text-lg leading-relaxed">
              People Matters Unplugged is a podcast series that delves into the dynamic world of HR and the future of work. It features
              insightful conversations with industry leaders, experts, and practitioners, exploring topics like talent management,
              leadership, technology's impact on the workplace, and evolving workplace cultures. The podcast aims to provide listeners
              with actionable insights and fresh perspectives on navigating the complexities of the modern workforce.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-64 h-64">
              <Image
                src="/assets/images/PodcastImage.png"
                alt="People Matters Unplugged Podcast"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastHeader;