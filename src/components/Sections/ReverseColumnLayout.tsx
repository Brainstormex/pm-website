import React from "react";
import { Section } from "@/types/common";
import { SectionRenderer } from "./SectionRenderer";

export const ReverseColumnLayout = ({ data }: { data: Section }) => {
  if (!data.sections || data.sections.length === 0) return null;

  console.log("ReverseColumnLayout data:", data);
  console.log("Right section sections:", data.sections[1]?.sections);

  return (
    <section className="max-w-7xl mx-auto  py-6 lg:py-10 w-full" data-template={data.template}>
      <div className="flex lg:flex-row flex-col gap-8 w-full relative">
        <div className="lg:w-[30%] w-full lg:px-0 px-4">
          <div className="space-y-6">
            {data.sections[0] && <SectionRenderer sectionsData={[data.sections[0]]} />}
          </div>
        </div>
        <div className="lg:w-[70%] w-full">
          <div className="space-y-6 lg:px-0 px-4">
            {data.sections[1] && (
              data.sections[1].sections ? (
                data.sections[1].sections.map((section, index) => (
                  <SectionRenderer 
                    key={index}
                    sectionsData={[section]} 
                    showLeftBorder={section.template === "current_section"}
                  />
                ))
              ) : (
                <SectionRenderer sectionsData={[data.sections[1]]} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}; 