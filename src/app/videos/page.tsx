import { PageProps, SeoData } from "@/types/common";
// import { SubCategoryHeader } from "@/components/SubCategory/SubCategoryHeader";
import { pageService } from "@/services/pageServices";
// import { PageRenderer } from "@/components/PageRenderer";
import { headers } from "next/headers";
import VideoListing from "./VideoListing";
// import BrandReachout from "@/components/Header/BrandReachout";
function extractAllPostIds(section: any): string[] {
  let postIds: string[] = [];

  if (section.articles && Array.isArray(section.articles)) {
    postIds = postIds.concat(
      section.articles
        .filter((article: any) => article.post_id)
        .map((article: any) => article.post_id)
    );
  }

  if (section.sections && Array.isArray(section.sections)) {
    for (const subsection of section.sections) {
      postIds = postIds.concat(extractAllPostIds(subsection));
    }
  }

  return [...new Set(postIds)];
}


export default async function VideosPage() {
  


  const host = (await headers()).get('x-forwarded-host') 
  ?? (await headers()).get('host') 
  ?? ''; 

  const pageData = await pageService.getPageDataBySlug("videos",host);
 const postIds = extractAllPostIds(pageData?.data || {});
  // console.log("Extracted post_ids:", postIds);
  return (
    <>
      <VideoListing data={pageData?.data} postIds={postIds} />
    </>
  );
}

// Update metadata generation
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const { category } = resolvedParams;

  const host = (await headers()).get('x-forwarded-host') 
  ?? (await headers()).get('host') 
  ?? ''; 

    const response = await pageService.getPageSEO(category || "",host);
    const seoData = response.data as SeoData;
    // console.log(seoData, "seoData");
  
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
