"use client";

import React, { useEffect, useState } from "react";
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

// interface EventArticle extends Article {
//   location: string;
// }

// interface EventSection extends Omit<Section, "articles" | "image"> {
//   articles: EventArticle[];
//   image: string;
// }

// interface TrendingSectionProps {
//   data: Section[];
//   title: string;
// }

// export const VideoCarousel: React.FC<TrendingSectionProps> = ({
//   data,
//   title,
// }) => {

export const SpecialListens = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Article | null>(null);

  const upcomingEventsData: Section = {
    template: "upcoming-events",
    label: "Upcoming Events",
    type: "events",
    title: "Upcoming Events",
    description: "Discover our upcoming events",
    image: "/assets/images/events/default.jpg",
    link: "/events",
    articles: [
      {
        title: "HR Tech Summit 2024",
        image: "/assets/images/events/hr-tech-summit.jpg",
        author: "John Doe",
        location: "Grand Hyatt, Mumbai",
        description:
          "Join us for the biggest HR technology conference of the year",
        link: "/events/hr-tech-summit-2024",
        category: "Events",
        dataType: "video",
        date: "25th - 27th February",
        duration: 10,
      },
      {
        title: "Future of Work Conference",
        image: "/assets/images/events/future-work.jpg",
        author: "Jane Smith",
        location: "Taj Palace, Delhi",
        description: "Exploring the evolving landscape of work and workplace",
        link: "/events/future-of-work-conference",
        category: "Events",
        date: "15th - 16th March",
        duration: 10,
      },
      {
        title: "Employee Experience Forum",
        image: "/assets/images/events/employee-experience.jpg",
        author: "John Doe",
        location: "ITC Grand Central, Mumbai",
        description:
          "Creating exceptional employee experiences in the digital age",
        link: "/events/employee-experience-forum",
        category: "Events",
        date: "10th - 11th April",
        duration: 10,
      },
    ],
  };

  const handleVideoClick = (event: Article) => {
    setSelectedVideo(event);
    setIsModalOpen(true);
  };

  return (
    <div
      className="w-full overflow-hidden bg-white py-16 lg:px-0 px-4"
      data-template={upcomingEventsData.template}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <SectionHeading
            link={""}
            title={upcomingEventsData.label || "Upcoming Events"}
          />
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
                paddingRight: "10rem",
              }}
              className="video-swiper !pr-10"
            >
              {upcomingEventsData.articles?.map((event, index) => (
                <SwiperSlide key={index} className="!w-auto">
                  <div
                    className="relative cursor-pointer group h-full"
                    onClick={() =>
                      event.dataType === "video" && handleVideoClick(event)
                    }
                  >
                    <div className="flex items-start gap-4 w-[350px] lg:w-[400px] h-full">
                      <div className="relative w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-2xl overflow-hidden flex-shrink-0 bg-black/30">
                        <Image
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          width={64}
                          height={64}
                        />
                        {event.dataType === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                            <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                              <Play
                                className="w-5 h-5 text-white"
                                fill="white"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 pt-1 h-full justify-between flex flex-col">
                        <div>
                          <div className="text-inactiveGray font-inter text-xs font-bold mt-1">
                            {event.author}
                          </div>
                          <h3 className="text-xl font-medium line-clamp-2 overflow-hidden w-full group-hover:text-orange">
                            {event.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-inactiveGray font-inter font-normal mb-1">
                          <span>{event.duration} mins</span>
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
      {selectedVideo?.dataType === "video" && (
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
      )}

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
