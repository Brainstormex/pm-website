"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Event } from '@/types/common';

interface EventImageCarouselProps {
  images: string[] | string;
  title: string;
}

const EventImageCarousel: React.FC<EventImageCarouselProps> = ({ images, title }) => {
  // Convert single image to array if needed
  const imageArray = Array.isArray(images) ? images : [images];
  
  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        slidesPerView={1}
        className="w-full rounded-lg overflow-hidden"
      >
        {imageArray.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 md:h-72 bg-gray-200">
              {image ? (
                <Image 
                  src={image} 
                  alt={`${title} - image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No image available
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventImageCarousel;