import React from 'react'
import Image from 'next/image'
export const PopupHeader = () => {
  return (
    <div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Image src="/assets/images/logo.svg" alt="logo" width={100} height={100} className='object-contain' />
            </div>
        </div>
    </div>
  )
}
