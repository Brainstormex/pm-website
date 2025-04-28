"use client";
import React, { useState, useEffect } from "react";

// import { EventsSection } from "@/components/Sections/EventsSection";
  import { ChevronDown } from "lucide-react";
import EventsListing from "./EventCard";
import { Event } from "@/types/common";
import Link from "next/link";
import { pageService } from "@/services/pageServices";

export default function EventListingPage( {title, archived=false}: {title: string, archived?: boolean} ) {
  const [events, setEvents] = useState<Event[]>([]);
  // const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [yearEventCounts, setYearEventCounts] = useState<
    { year: number; totalEvents: number }[]
  >([]);
  const [sortBy, setSortBy] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sortOptions = [
    { label: "All Formats", value: "" },
    { label: "Large Conference", value: "Large Conference" },
    { label: "Meetups", value: "Meetups" },
    { label: "Webinars", value: "Webinars" },
    { label: "Panels", value: "Panels" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (option: { label: string; value: string }) => {
    setSortBy(option.value);
  };

  const loadEvents = async () => {
    try {
      setLoading(true);
      const response = await pageService.getEvents(archived);
      console.log("response=>", response);
      setEvents(response.data.data);
      setYearEventCounts(response.data.yearEventCounts || []);
    } catch (error) {
      console.error("Error loading events:", error);
      setError("Failed to load events");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    loadEvents();
  }, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto  py-8">
      <div className="flex items-center justify-between mb-10 border-b border-inkBlack/40 pb-10">
        <h1 className="text-7xl font-medium">
          {archived?"Past":"Upcoming"} Event
          <span className="text-orange">.</span>
        </h1>
        <div className="relative">
          <button
            className="border-[1px] border-primaryBlack rounded-md px-4 py-2 flex items-center gap-2"
            onClick={toggleDropdown}
          >
            <span className="text-sm text-black">
            <span className="text-borderGray">  Sort By:</span> {sortOptions.find((opt) => opt.value === sortBy)?.label}
            </span>
            <ChevronDown className="h-5 w-5" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black border rounded-md shadow-lg z-10">
              {sortOptions.map((option) => (
                <div
                  key={option.value}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortChange(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 pt-10 w-full">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/5  pr-28 border-r border-inkBlack/40 h-[90%]">
          <div className="mb-4 w-full">
            <Link href={`/events/${archived?"":"archived"}`}><h2 className=" text-xs font-Inter font-semibold mb-8">{archived?"UPCOMING":"PREVIOUS"}</h2></Link>
            <div className="relative">
              
            </div>
          </div>
          {/* {JSON.stringify(yearEventCounts)} */}
          {/* Dynamic year sections */}
          {yearEventCounts.length > 0 ? (
            yearEventCounts.map((yearData, index) => (
              <div
                key={yearData.year}
                className="border-b border-inkBlack/40 py-4 mb-2 w-full"
              >
                <h3
                  className={`${
                    index === 0
                      ? "text-orange-500 font-bold text-xl"
                      : "font-semibold text-inkBlack/40"
                  } mb-1`}
                >
                  {yearData.year}
                </h3>
                <p className="text-inkBlack/40 text-sm">
                  {yearData.totalEvents} events
                </p>
              </div>
            ))
          ) : (
            <p className="text-inkBlack/40">No events available</p>
          )}
        </div>

        <EventsListing
          data={{
            title: title,
            events: events,
            type: "section",
            template: "events_section",
            description: "",
            image: "",
          }}
        />
      </div>
    </div>
  );
}


