"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

import { formatDays, convertTimeRange } from "@/services/commonFunction";
import { eventsData } from "@/services/dummay";
import { EventData, Event } from "@/types/common";

const getOrdinalSuffix = (day: string) => {
  if (!day) return '';
  
  const num = parseInt(day);
  if (isNaN(num)) return '';
  
  if (num >= 11 && num <= 13) return 'th';
  
  const lastDigit = num % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

export default function EventsListing({ data }: { data: EventData }) {
  // Ensure data.events exists to avoid TypeScript errors
  const events = data.events && data.events.length > 0 ? data.events : eventsData;

  return (
    <div className="max-w-7xl  lg:w-4/5 mx-auto w-full px-0 md:px-4 lg:px-0 lg:pl-8 lg:border-l border-inactiveGray">
      {/* Header with title and filters */}
      <h2 className="text-xs font-Inter font-semibold mb-8 uppercase">upcoming</h2>
   
      {/* Events list */}
      <div className="space-y-10">
        {events.map((event: Event, index: number) => (
          <div key={index} className="border-b border-borderGray last:border-b-0 pb-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Date column */}
              <div className="w-full lg:w-1/4 lg:border-r border-borderGray lg:pr-4 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap">
                    <h3 className="text-5xl font-medium">
                      {event.startDate}<sup>{getOrdinalSuffix(event.startDate)}</sup>-{event.endDate}<sup>{getOrdinalSuffix(event.endDate || "")}</sup>
                    </h3>
                  </div>
                  <p className="text-base my-2">{event.month} | ({formatDays(event.days || "")})</p>
                  <p className="text-sm text-gray-700 mb-4">{convertTimeRange(event.time || "")}</p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <MapPin size={18} />
                  <span className="text-sm">{event.location || ""}</span>
                </div>
              </div>

              {/* Event details column */}
              <div className="w-full lg:w-2/4 lg:px-2 lg:border-r border-borderGray flex flex-col justify-between">
                <div className="flex flex-col">
                  <Link href={`/events/${event.slug}`} className="">
                    <span className="text-[32px] text-inkBlack font-medium mb-3 capitalize line-clamp-1 ">{event.title}</span>
                  </Link>
                  <Link href={`/events/${event.slug}`} className="">
                    <span className="text-inkBlack/60 text-sm mb-6 font-inter line-clamp-4">{event.description || ""}</span>
                  </Link>
                </div>
                
                <div className="flex items-center gap-x-4">
                  <Image src='/assets/people.svg' alt="People Icon" width={18} height={18} />
                  <span className="text-xs line-clamp-1 text-inkBlack">{event.audience || "Everyone"}</span>
                </div>
              </div>

              {/* Image column */}
              <div className="w-full lg:w-2/4">
                <div className="relative w-full aspect-video">
                  <Image
                    src={event.image || '/assets/images/dummy.jpg'}
                    alt={event.title}
                    fill
                    className="object-cover rounded-[4px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}