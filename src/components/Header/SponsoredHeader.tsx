import Image from "next/image";
import SponsoredNavigation, { navigationData } from "./SponsoredNavigation";
import { Section } from "@/types/common";

export const SponsoredHeaderData: Section = {
  heading: "SkillSoft",
  description:
    'Companies must prioritize skill development to bridge the growing job disconnect driven by AI and rapid technological change. "Building a Skills-First Organisation" explores strategies for cultivating a workforce adept in both technical and soft skills to thrive today.',
  image: "/assets/logo/Skillsoft.png",
  type: "banner",
  template: "sponsored-header",
};

const SponsoredHeader = ({ data }: { data: Section }) => {
  return (
    <header className="flex items-center w-full overflow-hidden px-4 md:px-6">
      <div className="flex flex-col items-center max-w-7xl mx-auto space-y-4 pt-6 pb-8 md:pt-8 md:pb-12 lg:pt-10 lg:pb-20 w-full">
        <div className="flex w-full lg:flex-row flex-col justify-between gap-6">
          <div className="flex gap-4 items-center">
            <div className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 overflow-hidden flex-shrink-0">
              <Image
                className="overflow-hidden"
                src={data?.image || ""}
                alt={data?.heading || ""}
                width={96}
                height={96}
              />
            </div>

            <div className="flex flex-col gap-1 md:gap-1.5">
              <span className="text-orange text-xs md:text-sm font-medium uppercase">
                {data.heading}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold capitalize">
                {data.heading}
                <span className="text-orange">.</span>
              </h1>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 items-center py-2 md:py-4">
            <p className="text-gray-800 text-sm md:text-base leading-snug">
              {data.description}
            </p>
          </div>
        </div>
        <hr className="w-full border border-border h-[0.5px]" />
        <SponsoredNavigation data={navigationData} />
      </div>
    </header>
  );
};

export default SponsoredHeader;