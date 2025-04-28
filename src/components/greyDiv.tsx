import React from "react";

const GridLayout = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 h-auto lg:h-[450px]">
        {/* Left Column */}
        <div className="col-span-1 flex flex-col gap-4 h-full">
          <div className="bg-gray-300 h-48 lg:h-2/3 rounded-lg"></div>
          <div className="bg-gray-300 h-48 lg:h-1/3 rounded-lg"></div>
        </div>
        
        {/* Main Content */}
        <div className="col-span-1 md:col-span-2 bg-gray-300 rounded-lg h-48 lg:h-full"></div>
        
        {/* Right Column */}
        <div className="col-span-1 flex flex-col gap-4 h-full">
          <div className="bg-gray-300 h-48 lg:h-1/3 rounded-lg"></div>
          <div className="bg-gray-300 h-48 lg:h-2/3 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
