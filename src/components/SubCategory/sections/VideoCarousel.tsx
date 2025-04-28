"use client";

import React, { useState } from "react";
import { Article } from "@/types/common";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Modal from "@/components/Modal/Modal";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/types/common";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { articleData } from "@/services/dummay";
// interface TrendingSectionProps {
//   data: Section[];
//   title: string;
// }

// export const VideoCarousel: React.FC<TrendingSectionProps> = ({
//   data,
//   title,
// }) => {

export const VideoCarousel
 = ({ data }: { data: Section }) => {
  if (data && data.articles && data.articles.length === 0) {
    data.articles = articleData;
   }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Article | null>(null);
  console.log("data", data); 

  const handleVideoClick = (video: Article)   => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full overflow-hidden bg-white py-16 lg:px-0 px-4" data-template={data.template}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <SectionHeading link={""} title={data.label || ""} />
        </div>

        <div className="relative w-screen">
          <div
            className="w-screen overflow-visible"
            // style={{
            //   width: "calc(100% + 11rem)",
            //   marginRight: "-10rem",
            // }}
          >
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
              {data.articles?.map((video, index) => (
                <SwiperSlide key={index} className="!w-auto">
                  <div
                    className="relative cursor-pointer group"
                    onClick={() => handleVideoClick(video as unknown as Article)}
                  >
                    <div className="flex lg:flex-row flex-col items-start gap-4 w-[350px] lg:w-[400px]">
                      {/* Video Thumbnail */}
                      <div className="relative w-[150px] lg:w-[180px] h-[100px] rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={video.image ? video.image : "/assets/images/dummy.jpg"}
                          // alt={video.image ? video.title : ""}
                          alt={video.image && video.title ? video.title : "Video thumbnail"}
                          className="w-full h-full object-cover"
                          width={64}
                          height={64}
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                          <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                            <Play className="w-5 h-5 text-white" fill="white" />
                          </div>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="flex-1 pt-1">
                        <div className="text-sm text-gray-500 mt-1">
                          22 mins
                        </div>
                        <h3 className="text-base font-medium line-clamp-2 group-hover:text-orange mb-2">
                          {video.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>14.4K Views</span>
                          <span>•</span>
                          <span>3 days ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 -bottom-16 -translate-y-1/2 z-10 w-10 h-10  flex items-center justify-center ">
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button className="swiper-button-next-custom absolute left-12  -bottom-16 -translate-y-1/2 z-10 w-10 h-10  flex items-center justify-center ">
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedVideo?.title || ""}
      >
        <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
            <Play className="w-12 h-12 text-white" fill="white" />
          </div>
        </div>
      </Modal>

 
    </div>
  );
};
