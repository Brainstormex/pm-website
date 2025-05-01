// import BrandReachout1  from '@/components/Header/BrandReachout'
import React from 'react'
import SingleBrandReachoutUI from './SingleBrandReachoutUI'
// import {BrandReachout} from '../../utils/function'
// import { PageRenderer } from '@/components/PageRenderer'
import { pageService } from '@/services/pageServices';
import { headers } from 'next/headers';
import { PageProps, Section } from '@/types/common';



export default async function CategoryPage({ params }: PageProps) {
    const resolvedParams = await params;
    const { brand_slug } = resolvedParams;

  const host = (await headers()).get('x-forwarded-host') 
  ?? (await headers()).get('host') 
  ?? ''; 

  // console.log("brand_slug",brand_slug);  

  const pageData = await pageService.getBRODataBySlug(brand_slug || "",host);
  const pageData1 = await pageService.getPageDataBySlug("sponsored-category",host);



  
  return (
    <SingleBrandReachoutUI  data={pageData?.data as Section }  sectionData={pageData1?.data as Section } />
  )
}
