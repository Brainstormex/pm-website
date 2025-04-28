import React from "react";

import { Section } from "@/types/common";

import { SectionRenderer } from "./SectionRenderer";

export const TwoColumnLayout = ({ data }: { data: Section }) => {
  console.log("TwoColumnLayout received data:", data);
  
  if (!data.sections || data.sections.length === 0) {
    console.log("No sections found in data");
    return null;
  }

  const leftSection = data.sections[0];
  const rightSection = data.sections[1];
  
  // console.log("Left section:", leftSection);
  // console.log("Right section:", rightSection);
  // console.log("Left section sections:", leftSection?.sections);
  // console.log("Right section sections:", rightSection?.sections);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 w-full sm:px-6 lg:px-0" data-template={data.template}>
      <div className="flex lg:flex-row flex-col gap-8 w-full relative">
        <div className="lg:w-[70%] w-full">
          <div className="space-y-6">
            {leftSection?.sections && leftSection.sections.length > 0 ? (
              <SectionRenderer sectionsData={[data.sections[0]]}  />
            ) : (
              <div>No content in left section</div>
            )}
          </div>
        </div>
        <div className="lg:w-[30%] w-full">
          <div className="space-y-6 sticky top-24">
            {rightSection?.sections && rightSection.sections.length > 0 ? (
              <SectionRenderer sectionsData={[data.sections[1]]}  />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
