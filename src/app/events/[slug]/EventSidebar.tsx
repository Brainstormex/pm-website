import React from "react";
import Link from "next/link";
import { Event } from "@/types/common";

export default function EventSidebar({
  events,
  currentSlug,
  archived,
}: {
  events: Event[];
  currentSlug: string;
  archived: boolean;
}) {
  // console.log("EventSidebar - archived prop:", archived);
  // console.log("EventSidebar - events:", events);
  return (
    <div className="w-full border-r sticky top-24">
      <div className="pr-8">
        <h1 className="text-xs font-inter font-semibold mb-2">OTHER {archived ? "ARCHIVED" : "UPCOMING"} EVENTS</h1>

        <div className="">
          {events.map((event) => (
            <Link
              key={event.id || event.slug}
              href={`/events/${event.slug}`}
              className={`block border-b w-full py-4 cursor-pointer hover:text-orange-500 ${
                event.slug === currentSlug ? "border-orange" : "text-gray-700"
              }`}
            >
              <h2 className={`text-lg font-medium ${
                event.slug === currentSlug ? "text-orange" : "text-gray-700"
              }`}>
                {event.title}
              </h2>
              <div className="flex items-center gap-2 text-gray-500 mt-2">
                <span className="text-sm font-medium">{event.location || "Online"}</span>
                <span>|</span>
                <span className="text-sm font-medium">{event.date}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* <div className="mt-8">
          <Link
            href="/events/archived"
            className="text-gray-400 hover:text-gray-600"
          >
            VIEW ARCHIVED EVENTS &gt;
          </Link>
        </div> */}
      </div>
    </div>
  );
} 