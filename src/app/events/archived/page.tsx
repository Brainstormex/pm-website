
import { headers } from 'next/headers';
import EventListingPage from "../EventListingPage";
import { pageService } from '@/services/pageServices';
import { SeoData } from '@/types/common';
// import { appointmentService } from "@/services/appointmentServices";

export default async function Home() {

  return <EventListingPage title="Archived Events" archived={true} />;
}

export async function generateMetadata() {

  const host = (await headers()).get('x-forwarded-host') 
  ?? (await headers()).get('host') 
  ?? '';         // e.g. "in.thinkry.tech"

  const response = await pageService.getPageSEO("/home-page", host);
  const seoData = response.data as SeoData;
  console.log(seoData, "seoData");

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