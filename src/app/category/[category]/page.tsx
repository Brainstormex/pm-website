import { PageProps, Section, SeoData } from "@/types/common";
import { SubCategoryHeader } from "@/components/SubCategory/SubCategoryHeader";
import { pageService } from "@/services/pageServices";
import { PageRenderer } from "@/components/PageRenderer";
import { headers } from "next/headers";
// import BrandReachout from "@/components/Header/BrandReachout";

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { category } = resolvedParams;

  const host = (await headers()).get('x-forwarded-host') 
  ?? (await headers()).get('host') 
  ?? ''; 

  const categoryData = await pageService.getSubCategory(category || "",host);

  const pageData = await pageService.getPageDataBySlug(category || "",host);

  return (
    <>
      <SubCategoryHeader data={categoryData.data || {}} />
      {/* <BrandReachout /> */}
      {pageData && pageData.data && pageData.data.sections && <PageRenderer slug={category || ""} type="section" data={pageData?.data?.sections as Section[] | []} />}
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
