"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {  ChevronLeft, ChevronRight } from "lucide-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

import { Section,Appointment  } from '@/types/common';
import { pageService } from '@/services/pageServices';
import Link from "next/link";

import Image from "next/image";

export const RecentAppointmentSection: React.FC<{
  data: Section;
  title: string;
}> = ({
  data,
  title,
}) => {

  
  const [appointmentData,setAppointmentData]= useState<Appointment[] | null>(null)

  useEffect(() => {
    pageService.getAppointments().then((res) => {
      console.log(res, "HotTopic res");
      setAppointmentData(res.data as Appointment[])
    });
  }, []);

  console.log(appointmentData, "appointmentData");

  return (
    <div className="w-full bg-white lg:px-0 px-4" data-template={data.template}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <SectionHeading link={""} title={title} template={data.template} />
        </div>

        <div className="relative pb-3">
          <div className="overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView="auto"
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              style={{
                paddingRight: "10rem", // Adjust the padding to account for the vertical scrollbar
              }}
              className="video-swiper !pr-10"
            >
              {appointmentData?.map((video, index) => (
                <SwiperSlide key={index} className="!w-auto">
                  <Link
                    className="relative cursor-pointer group"
                    href={video.slug}
                    target="_blank"
                  >
                    <div className="flex items-center gap-4 w-[260px]">
                      {/* Video Thumbnail */}
                      <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={video.image ? video.image : "/assets/images/dummy.jpg"}
                          alt={video.image ? video.title : "Dummy Image"}
                          className="w-full h-full object-cover"
                          width={64}
                          height={64}
                        />
                        {/* Play Button Overlay */}
                       
                      </div>

                      {/* Video Info */}
                      <div className="flex-1 pt-1">
                        <div className="text-xs text-inactiveGray font-medium mt-1 font-inter">
                        <span className="font-bold text-inkBlack">{video.company_name} </span> appoints
                        </div>
                        <h3 className="text-xl font-medium text-foreground line-clamp-2 group-hover:text-orange mb-3">
                          {video.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm font-normal text-inkBlack/60">
                     
                          <span>{video.designation}{video.country? `, ${video.country}` : ""}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 -bottom-16 -translate-y-1/2 z-10 w-10 h-10  flex items-center justify-center ">
            <ChevronLeft className="w-6 h-6 text-inkBlack" />
          </button>
          <button className="swiper-button-next-custom absolute left-12  -bottom-16 -translate-y-1/2 z-10 w-10 h-10  flex items-center justify-center ">
            <ChevronRight className="w-6 h-6 text-inkBlack" />
          </button>
        </div>
      </div>

      
      <style jsx global>{`
        .video-swiper {
          overflow: visible;
          padding: 20px 0;
        }
        .video-swiper .swiper-wrapper {
          display: flex;
          align-items: stretch;
        }
        .video-swiper .swiper-slide {
          height: auto;
        }
        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          transition: all 0.3s ease;
        }
        .swiper-button-prev-custom:hover,
        .swiper-button-next-custom:hover {
          transform: translateY(-50%) scale(1.1);
        }
        .swiper-button-disabled {
          opacity: 0.2;
          cursor: default;
        }
      `}</style>
    </div>
  );
};
