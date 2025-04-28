import ResearchHeader from '@/components/Header/ResearchHeader'
import { ResearchSection } from '@/components/Sections/ResearchSection';
import React from 'react'
import { Section } from '@/types/common';
import { AdsSection } from '@/components/Sections/AdsSection';
import TrendingSectionLeft from '@/components/Sections/TrendingSectionLeft';
import TrendingSectionRight from '@/components/Sections/TrendingSectionRight';
const researchSectionData = [
    {
        id: 1,
        title: 'Trending Research',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
]

// Mock data for research articles
const researchArticlesData: Section = {
  title: 'Latest Research Articles',
  description: 'Explore our latest research findings and insights to stay ahead in the HR industry.',
  label: 'Trending Research',
  type: 'section',
  template: 'research_section',
  image: null,
  link: '/research',
  articles: [
    {
      title: 'The Future of Hybrid Work: Navigating the Post-Pandemic Workplace',
      description: 'An in-depth analysis of how organizations are adapting to hybrid work models and the impact on employee productivity and wellbeing.',
      image: '/assets/images/1.webp',
      link: '/research/future-of-hybrid-work',
      category: 'Workplace Trends',
      author: 'Dr. Sarah Johnson',
      categorySlug: '/category/workplace-trends',
      authorSlug: '/author/sarah-johnson',
      date: '2023-12-15'
    },
    {
      title: 'DEI Initiatives That Actually Work: Case Studies',
      description: 'Evidence-based approaches to diversity, equity, and inclusion',
      image: '/assets/images/1.webp',
      link: '/research/dei-initiatives',
      category: 'Diversity & Inclusion',
      author: 'Michelle Rodriguez',
      categorySlug: '/category/diversity-inclusion',
      authorSlug: '/author/michelle-rodriguez',
      date: '2024-01-20'
    },
    {
      title: 'Talent Acquisition Strategies for 2024',
      description: 'Innovative recruitment techniques for the modern workforce',
      image: '/assets/images/1.webp',
      link: '/research/talent-acquisition-2024',
      category: 'Recruitment',
      author: 'James Wilson',
      categorySlug: '/category/recruitment',
      authorSlug: '/author/james-wilson',
      date: '2024-02-05'
    },
    {
      title: 'Employee Wellbeing Programs: ROI Analysis',
      description: 'Measuring the business impact of wellbeing initiatives',
      image: '/assets/images/1.webp',
      link: '/research/wellbeing-roi',
      category: 'Employee Wellness',
      author: 'Lisa Chen',
      categorySlug: '/category/wellness',
      authorSlug: '/author/lisa-chen',
      date: '2024-02-18'
    },
    {
      title: 'AI in HR: Current Applications and Future Possibilities',
      description: 'How artificial intelligence is transforming human resources',
      image: '/assets/images/1.webp',  
      link: '/research/ai-in-hr',
      category: 'Technology',
      author: 'Dr. Alex Kumar',
      categorySlug: '/category/technology',
      authorSlug: '/author/alex-kumar',
      date: '2024-03-02'
    }
  ]
};

const adsSectionData: Section = {
  title: 'Ads',
  description: 'Ads',
  label: 'Ads',
  type: 'section',
  template: 'ads_section',
  image: null,
  link: '/research',
  articles: []
}

const popularResearchData: Section = {
  title: 'Popular Research',
  description: 'Popular Research',
  label: 'Popular Research',
  type: 'section',
  template: 'research_section',
  image: null,
  link: '/research',
  articles: []
}
const ResearchPage = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <ResearchHeader />
        <ResearchSection data={researchArticlesData} />
        <AdsSection data={adsSectionData} />
          <div className='lg:w-[70%] mt-12'>
            <TrendingSectionLeft data={popularResearchData} />
          
        </div>

    </div>
  )
}

export default ResearchPage;

