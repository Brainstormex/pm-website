"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { ChevronRight } from "lucide-react";

// interface WelcomePopupProps {
//   onSkip: () => void;
// }

const WelcomePopup = () => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-100 flex flex-col">
      {/* Header with logo and skip button */}
      <div className="bg-inkBlack py-3 px-4 flex justify-between items-center">
        <div className="w-48">
          <Image
            src="/assets/logo.png"
            alt="People Matters Logo"
            width={200}
            height={50}
            className="w-full h-auto"
          />
        </div>
        <div className="flex items-center hover:cursor-pointer group hover:bg-white text-white hover:text-black rounded-full transition-all duration-300">
          <Button
            colorVariant="ghost"
            size="sm"
            className="rounded-full text-white group-hover:text-black"
          >
            Continue to Site
            <ChevronRight className="w-4 h-4 text-white group-hover:text-black" />
          </Button>
        </div>
      </div>

      <div className="text-center py-4">
        <p className="text-gray-700">Just 4 seconds please.</p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg">
          <Image
            src="/assets/images/1.webp"
            alt="Welcome"
            width={800}
            height={500}
            className="max-h-[60vh] w-auto h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
