"use client";
import { ChevronDown } from "lucide-react";
import Gallery from "./Gallery";
import { useState } from "react";

const galleryImages = [
  {
    id: "1",
    imageUrl: "/assets/images/1.webp",
    title: "Gallery Image 1",
  },
  {
    id: "2",
    imageUrl: "/assets/images/1.webp",
    title: "Gallery Image 2",
  },
  {
    id: "3",
    imageUrl: "/assets/images/1.webp",
    title: "Gallery Image 3",
  },
  {
    id: "4",
    imageUrl: "/assets/images/1.webp",
    title: "Gallery Image 4",
  },
  {
    id: "5",
    imageUrl: "/assets/images/1.webp",
    title: "Gallery Image 5",
  },
  {
    id: "6",
    imageUrl: "/assets/images/1.webp",
    title: "Gallery Image 6",
  },
  {
    id: "7",
    imageUrl: "/assets/images/1.webp",
    title: "Gallery Image 7",
  },
  {
    id: "8",
    imageUrl: "/assets/images/1.webp",
    title: "Gallery Image 8",
  },
  {
    id: "9",
    imageUrl: "/assets/images/1.webp",
    title: "Gallery Image 9",
  },
  {
    id: "10",
    imageUrl: "/assets/images/1.webp",
    title: "Gallery Image 10",
  },
];

const previousEvents = [
  {
    title: "GCC Talent Summit 2025",
    type: "CONFERENCE",
    eventCount: "4 EVENTS",
  },
  {
    title: "TechHR - India",
    type: "CONFERENCE",
    eventCount: "8 EVENTS",
  },
  {
    title: "TechHR - Singapore",
    type: "CONFERENCE",
    eventCount: "3 EVENTS",
  },
  {
    title: "SurgeHR",
    type: "CONFERENCE",
    eventCount: "3 EVENTS",
  },
  {
    title: "L&D India Conference",
    type: "CONFERENCE",
    eventCount: "3 EVENTS",
  },
  {
    title: "The Leadership Blueprint",
    type: "CONFERENCE",
    eventCount: "3 EVENTS",
  },
];

const GalleryPage = () => {
    const [isActive, setIsActive] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (event: any) => {
        setIsActive(!isActive);
        setSelectedEvent(event);
    };
  return (
    <section className="max-w-7xl mx-auto py-8 flex flex-col gap-8">
      <div className="flex items-center justify-between pb-8 border-b border-inkBlack/40">
        <h1 className="text-7xl font-medium">Gallery</h1>
      </div>
      <div className="flex">
        {/* Left sidebar with events list */}
        <div className="w-full md:w-1/4 p-4 border-r border-inkBlack/40">
          <h2 className="text-xs font-inter font-semibold mb-8">PREVIOUS EVENTS</h2>
          <div className="space-y-4">
            {previousEvents.map((event, index) => (
              <div
              className={`border-b py-4 cursor-pointer ${
                isActive ? "text-orange border-orange " : ""
              }`}
              onClick={() => handleEventClick(event)}
            >
              <h2 className="text-lg font-medium text-orange-500">{event.title}</h2>
              <div className="flex items-center gap-2 text-gray-500 mt-2">
                <span className="text-sm font-medium">{event.eventCount}</span>
                <span>|</span>
                <span className="text-sm font-medium">{event.type}</span>
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* Main content area */}
        <div className="w-full md:w-3/4 p-4">
          <Gallery galleryImages={galleryImages} />
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
