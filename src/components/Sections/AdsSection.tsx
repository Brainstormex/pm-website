import React from 'react'
import { Section } from '@/types/common'
import Image from 'next/image'

export const AdsSection = ({ data }: { data: Section }) => {
  return (
    <div className='w-full max-w-7xl mx-auto' data-template={data.template}>
    <div className="p-0 rounded text-center overflow-hidden">

      <Image src={!data.image || data.image === "" ? "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/cf540067-d1d2-4298-8d8b-a466a368a06e.png" : data.image} width={1000} height={1000} alt="ad" className="w-11/12 mx-auto lg:w-full rounded-lg h-full object-cover" />
    </div>
    </div>
  )
}