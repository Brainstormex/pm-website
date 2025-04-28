import sponsoredLogo from "@/assets/sponsoredLogo.svg";
import Image from "next/image";
import SponsoredNavigation, { navigationData } from "./SponsoredNavigation";
export interface BannerDataType {
  brandText: string;
  companyName: string;
  tagline: string;
  logoSrc: string;
}

export const SponsoredHeaderData: BannerDataType = {
  brandText: "BRAND INITIATIVE",
  companyName: "SkillSoft",
  tagline:
    'Companies must prioritize skill development to bridge the growing job disconnect driven by AI and rapid technological change. "Building a Skills-First Organisation" explores strategies for cultivating a workforce adept in both technical and soft skills to thrive today.',
  logoSrc: "/skillsoft-logo.png",
};

export interface SponsoredHeaderProps {
  data: BannerDataType;
}

const SponsoredHeader = ({ data }: SponsoredHeaderProps) => {
  return (
    <header className="flex items-center w-full overflow-hidden">
      <div className="flex flex-col items-center max-w-7xl mx-auto space-y-4 py-10">
        <div className="flex w-full justify-between">
          <div className="flex gap-4">
            <div className="h-24 w-24 overflow-hidden">
              <Image
                className=" overflow-hidden"
                src={sponsoredLogo}
                alt={data.companyName}
                width={96}
                height={96}
              />
            </div>

            <div className="flex flex-col gap-1.5 mb-6 md:mb-0">
              <span className="text-orange text-sm font-medium uppercase">
                {data.brandText}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold capitalize">
                {data.companyName}
                <span className="text-orange">.</span>
              </h1>
            </div>
          </div>
          <div className="flex w-1/2 items-center py-4">
            <p className="text-gray-800 leading-snug">{data.tagline}</p>
          </div>
        </div>
        <hr className="w-full border border-border h-[0.5px]" />
        <SponsoredNavigation data={navigationData} />
      </div>
    </header>
  );
};

export default SponsoredHeader;

// App.tsx (for demonstration)
//   import React from 'react';

//   const App: React.FC = () => {
//     return (
//       <div className="p-4 max-w-6xl mx-auto">
//         <SkillSoftBanner data={skillSoftBannerData} />
//       </div>
//     );
//   };

//   export default App;
