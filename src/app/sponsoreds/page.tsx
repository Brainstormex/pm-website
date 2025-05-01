import SponsoredHeader, { SponsoredHeaderData } from '@/components/Header/SponsoredHeader'
import React from 'react'
import { Section } from '@/types/common'

const page = () => {
  return (
    <div>
        <SponsoredHeader data={SponsoredHeaderData} />
    </div>
  )
}

export default page;
