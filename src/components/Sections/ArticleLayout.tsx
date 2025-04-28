import React from "react";
import { Section } from "@/types/common";
import { SectionRenderer } from "./SectionRenderer";

export const ArticleLayout = ({ data }: { data: Section }) => {
  if (!data.sections || data.sections.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto  py-6 lg:py-12 w-full" data-template={data.template}>
      <div className="flex lg:flex-row flex-col gap-8 w-full relative">
        <div className="lg:w-1/2 w-full lg:px-0 px-4">
          <div className="space-y-6">
            {data.sections[0] && <SectionRenderer sectionsData={data.sections[0].sections || []} />}
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="space-y-6 sticky top-24 lg:px-0 px-4">
            {data.sections[1] && <SectionRenderer sectionsData={data.sections[1].sections || []} />}
          </div>
        </div>
      </div>
    </section>
  );
}; 