import {Section, SeoData, PageProps } from "@/types/common";

import { pageService } from "@/services/pageServices";
import { PageRenderer } from "@/components/PageRenderer";
import { headers } from 'next/headers';

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { post_type } = resolvedParams;

  const host = (await headers()).get('x-forwarded-host') 
  ?? (await headers()).get('host') 
  ?? '';         // e.g. "in.thinkry.tech"

  const pageData = await pageService.getPageDataBySlug(post_type || "",host);

  return (
    <>
      {pageData && pageData.data && pageData.data.sections && <PageRenderer slug={ post_type || ""} type="section" data={pageData?.data?.sections as Section[] | []} />}
    </>
  );
}

// Update metadata generation
export async function generateMetadata() {
  const host = (await headers()).get('x-forwarded-host') 
  ?? (await headers()).get('host') 
  ?? '';         // e.g. "in.thinkry.tech"

    const response = await pageService.getPageSEO("article",host);
    const seoData = response.data as SeoData;
  
    return {
      title: seoData?.seo_title,
      description: seoData?.seo_description,
      openGraph: {
        title: seoData?.seo_facebook_title,
        description: seoData?.seo_facebook_description,
        images: [seoData?.seo_image],
      },
      twitter: {
        title: seoData?.seo_twitter_title,
        description: seoData?.seo_twitter_description,
        images: [seoData?.seo_twitter_image],
      },
      alternates: {
        canonical: seoData?.seo_slug,
      },
    };
  }
