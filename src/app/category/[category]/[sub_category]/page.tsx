import { PageProps, Section, SeoData } from "@/types/common";

// import { SubCategoryHeader } from "@/components/SubCategory/SubCategoryHeader";
import { pageService } from "@/services/pageServices";
import { PageRenderer } from "@/components/PageRenderer";
import { SubCategoryHeader } from "@/components/SubCategory/SubCategoryHeader";
// import { categoryData } from "@/utils/function";

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { sub_category } = resolvedParams;

  const categoryData = await pageService.getSubCategory(sub_category || "");
 
 
  const pageData = await pageService.getPageDataBySlug(sub_category || "");


  console.log(pageData,"pageData?.data?.sections");
  return (
    <>
      <SubCategoryHeader data={categoryData.data || {}} />
      
      {pageData && pageData.data && pageData.data.sections && <PageRenderer slug={sub_category || ""} type="section" data={pageData?.data?.sections as Section[] | []} />}
    </>
  );
}

// Update metadata generation
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const { category } = resolvedParams;

    const response = await pageService.getPageSEO(category || "");
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
