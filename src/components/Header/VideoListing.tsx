import React from "react";

const VideoListing = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <h1 className="text-4xl md:text-5xl text-foreground font-bold mb-4">
        Videos<span className="text-orange">.</span>
      </h1>
      <p className="text-foreground text-center mb-8 max-w-2xl">
        Insightful analysis on workplace trends, employee well-being,
        organizational culture, and talent development from our experts,
        designed to help you navigate the complex world of People Matters.
      </p>
      <div className="flex flex-row md:gap-x-5 gap-x-2 justify-center items-center">
        <p className="text-gray-600 mb-8 font-medium md:text-sm text-xs px-3 py-1.5 border border-borderGray rounded-full">
          Future of Human Capital
        </p>
        <p className="text-gray-600 mb-8 font-medium md:text-sm text-xs px-3 py-1.5 border border-borderGray rounded-full">
          HR Folk Talk
        </p>
        <p className="text-gray-600 mb-8 font-medium md:text-sm text-xs px-3 py-1.5 border border-borderGray rounded-full">
          Future Proof HR
        </p>
      </div>
    </div>
  );
};

export default VideoListing;
