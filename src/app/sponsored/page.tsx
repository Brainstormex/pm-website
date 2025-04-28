import React from "react";
import SponsoredHeader, { SponsoredHeaderData } from "@/components/Header/SponsoredHeader";
import { PageRenderer } from "@/components/PageRenderer";
import { getPageData } from "@/utils/function";

export default async function SponsoredPage() {
  // You can fetch sponsored content data here
  const sponsoredData = await getPageData('sponsored');

  return (
    <>
      <SponsoredHeader data={SponsoredHeaderData} />
      <PageRenderer 
        type="section" 
        data={sponsoredData || []} 
        slug="sponsored"
      />
    </>
  );
}

export async function generateMetadata() {
  return {
    title: `${SponsoredHeaderData.companyName} - Sponsored Content`,
    description: SponsoredHeaderData.tagline,
  };
} 