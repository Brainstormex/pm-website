"use client"
// import BrandReachout1  from '@/components/Header/BrandReachout'

import React from 'react'
// import {BrandReachoutSection} from '../../utils/function'
// import { PageRenderer } from '@/components/PageRenderer'
// import { pageService } from '@/services/pageServices';
// import { headers } from 'next/headers';

// import { BrandReachout, Section } from '@/types/common';
import SponsoredHeader from '@/components/Header/SponsoredHeader';
import { Section } from '@/types/common';
import { PageRenderer } from '@/components/PageRenderer';

export default function SingleBrandReachoutUI({data,sectionData}:{data:Section,sectionData:Section}) {
  // const resolvedParams = await params;
  // const { post_type } = resolvedParams;

  // const [pageData, setPageData] = useState<BrandReachout | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await pageService.getPageDataBySlug("business-outreach");
  //     setPageData(response?.data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className='max-w-7xl w-full mx-auto py-8'>
        <SponsoredHeader data={data as Section} />
        <PageRenderer data={sectionData.sections} type='section'   />
    </div>
  )
}

// export default page