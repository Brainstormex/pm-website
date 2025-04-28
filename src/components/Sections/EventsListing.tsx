"use client";
import React from 'react';
import { Event } from '@/types/common';
import EventImageCarousel from '../Events/EventImageCarousel';



interface EventsListingProps {
  data: {
    title: string;
    events: Event[];
    type: string;
    template: string;
    description: string;
    image: string;
  };
}

// Helper function to get ordinal suffix for dates
const getOrdinalSuffix = (day: number): string => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

const EventsListing: React.FC<EventsListingProps> = ({ data }) => {
  const { events } = data;

  return (
    <div className="w-full md:w-4/5">
      <div className="grid grid-cols-1 gap-6">
        {events.map((event, index) => (
          <div key={index} className="border-b border-inkBlack/10 pb-6">
            <div className="mb-2 uppercase text-xs font-semibold text-inkBlack">
              UPCOMING
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <div className="flex items-baseline mb-2">
                  <span className="text-6xl font-bold">
                    {event.startDate}
                    <sup>{getOrdinalSuffix(event?.startDate ? parseInt(event.startDate) : 0)}</sup>
                  </span>
                  {event.endDate && (
                    <>
                      <span className="text-6xl font-bold mx-2">-</span>
                      <span className="text-6xl font-bold">
                        {event.endDate}
                        <sup>{getOrdinalSuffix(event?.endDate ? parseInt(event.endDate) : 0)}</sup>
                      </span>
                    </>
                  )}
                </div>
                <div className="text-lg mb-4">
                  {event.month} | ({event.days})
                </div>
                <div className="mb-2 flex items-center">
                  <span className="material-icons mr-2">location_on</span>
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <span className="material-icons mr-2">person</span>
                  <span>{event.audience}</span>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                  </div>
                  <div className="w-full md:w-1/2">
                    {/* Replace the static image with our new carousel component */}
                    <EventImageCarousel 
                      images={event.images || event.image || ""} 
                      title={event.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsListing;