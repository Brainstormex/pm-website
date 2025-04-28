"use client"
import BrandReachout1  from '@/components/Header/BrandReachout'

import React, { useEffect, useState } from 'react'
// import {BrandReachoutSection} from '../../utils/function'
import { PageRenderer } from '@/components/PageRenderer'
import { pageService } from '@/services/pageServices';
// import { headers } from 'next/headers';

import { BrandReachout, Section } from '@/types/common';

export default function BrandReachoutPage({data}:{data:Section[]}) {
  // const resolvedParams = await params;
  // const { post_type } = resolvedParams;

  const [pageData, setPageData] = useState<BrandReachout | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await pageService.getPageDataBySlug("business-outreach");
      setPageData(response?.data);
    }
    fetchData();
  }, []);

  return (
    <div className='max-w-7xl w-full mx-auto py-8'>
        {/* {JSON.stringify(pageData)} */}
        <BrandReachout1 data={pageData as BrandReachout} />
        <PageRenderer data={data} type='section'   />
    </div>
  )
}

// export default page