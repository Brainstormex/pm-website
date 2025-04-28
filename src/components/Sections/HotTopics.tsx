"use client"
import React, { useEffect, useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import Image from 'next/image'
import { Section,HotTopic  } from '@/types/common';
import { pageService } from '@/services/pageServices';

import Link from 'next/link';

const HotTopics = ({data}:{data:Section}  ) => {
  console.log(data,"Hot Topics")
  
  const [hotTopicsData,setHotTopicsData]= useState<HotTopic[] | null>(null)

  useEffect(() => {
    pageService.getHotTopics().then((res) => {
      console.log(res, "HotTopic res");
      setHotTopicsData(res.data as HotTopic[])
    });
  }, []);

  return (
    <div className='flex flex-col gap-0 lg:border-r border-border pr-6' data-template={data.template}>
      <SectionHeading title={data.label || ''} bgColor='bg-orange' template={data.template} margin="sm" />
      <div className='flex flex-col gap-y-3'>
        {hotTopicsData?.map((topic:HotTopic,index:number) => (
          <Link  key={index} href={`${topic.slug}`} className='flex flex-row items-center justify-start gap-x-3.5'>
            <div>
              <Image 
                src={topic.image || '/assets/images/hot-topics.svg'} 
                alt={topic.title || ''} 
                width={100} 
                height={100}
                className="object-contain w-12"
              />
            </div>
            <div>
              <h3 className='text-base font-medium text-inkBlack'>
                {topic.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HotTopics