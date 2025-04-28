// import BrandReachout1  from '@/components/Header/BrandReachout'
import React from 'react'
import BrandReachoutUI from './BrandReachoutUI'
// import {BrandReachout} from '../../utils/function'
// import { PageRenderer } from '@/components/PageRenderer'
import { pageService } from '@/services/pageServices';
import { headers } from 'next/headers';
import { Section } from '@/types/common';

export default async function CategoryPage() {
  const host = (await headers()).get('x-forwarded-host') 
  ?? (await headers()).get('host') 
  ?? ''; 

  const pageData = await pageService.getPageDataBySlug("business-outreach",host);
  return (
    <BrandReachoutUI  data={pageData?.data?.sections as Section[] | []} />
  )
}
