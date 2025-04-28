import React from "react";
import { SectionRenderer } from "./SectionRenderer";
import { Section } from "@/types/common";

export const RightColumn = ({ data }: { data: Section }) => {
  if (!data.sections || data.sections.length === 0) return null;

  return (
    <div data-template={data.template}>
      {data.sections.map((section, index) => (
        <SectionRenderer key={index} sectionsData={[section]} />
      ))}
    </div>
  );

  // return (
  //   <div className="max-w-7xl mx-auto px-4">
  //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  //       <div className="col-span-1">
  //         {data.sections.map((section, index) => (
  //           <SectionRenderer key={index} sectionsData={[section]} />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
};
