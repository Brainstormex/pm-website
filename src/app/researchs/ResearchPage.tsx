import ResearchHeader from '@/components/Header/ResearchHeader'
// import { ResearchSection } from '@/components/Sections/ResearchSection';
import React from 'react'
import { Section } from '@/types/common';
// import { AdsSection } from '@/components/Sections/AdsSection';
// import TrendingSectionLeft from '@/components/Sections/TrendingSectionLeft';
import { PageRenderer } from '@/components/PageRenderer';

const ResearchPage = ({data}:{data:Section[]}) => {
  return (
    <div className='max-w-7xl mx-auto'>
        <ResearchHeader />
        <PageRenderer data={data} type='section'   />

    </div>
  )
}

export default ResearchPage;

