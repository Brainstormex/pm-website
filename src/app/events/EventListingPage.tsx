"use client";
import React, { useState, useEffect } from "react";

// import { EventsSection } from "@/components/Sections/EventsSection";
  import { ChevronDown } from "lucide-react";
import EventsListing from "./EventCard";
import { Event } from "@/types/common";
import Link from "next/link";
import { pageService } from "@/services/pageServices";
import MobileNav from "@/components/ui/MobileNav";
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
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedFormat, setSelectedFormat] = useState<string>("");


  const sortOptions = [
    { label: "All Formats", value: "" },
    { label: "Large Conference", value: "Large Conference" },
    { label: "Meetups", value: "Meetups" },
    { label: "Webinars", value: "Webinars" },
    { label: "Panels", value: "Panels" },
  ];

  const eventSortOptions = [
    { label: "Previous Events", value: "archived" },
    { label: "Upcoming Events", value: "upcoming" },
  ]

  const yearEvent = [
    { label: "2025", value: "2025" },
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
  ]
  const monthEventCounts = [
    { label: "January", value: "january" },
    { label: "February", value: "february" },
    { label: "March", value: "march" },
    { label: "April", value: "april" },
    { label: "May", value: "may" },
  ]
  const format = [
    // { label: "Large Conference", href: "/events/large-conference" },
    // { label: "Meetups", href: "/events/meetups" },
    // { label: "Webinars", href: "/events/webinars" },
    // { label: "Panels", href: "/events/panels" },
    { label: "", value: "" },
  ]

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (option: { label: string; value: string }) => {
    setSortBy(option.value);
  };

  const handleYearSelect = (value: string) => {
    setSelectedYear(parseInt(value));
  };

  const handleMonthSelect = (value: string) => {
    setSelectedMonth(value);
  };

  const handleFormatSelect = (value: string) => {
    setSelectedFormat(value);
  };

  const loadEvents = async () => {
    try {
      setLoading(true);
      const response = await pageService.getEvents(archived);
      console.log("response=>", response);
      setEvents(response.data.data);
      setYearEventCounts(response.data.yearEventCounts || []);
      // Set initial selected year to the most recent year if available
      if (response.data.yearEventCounts?.length > 0) {
        setSelectedYear(response.data.yearEventCounts[0].year);
      }
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
    <div className="max-w-7xl mx-auto  py-8 px-7 md:px-4 lg:px-0">
      <div className="flex items-center justify-between border-b border-inkBlack/40 pb-[10px] lg:pb-10">
        <div className="flex flex-col gap-4">
          {archived && (
            <Link href="/events" className="text-xs hidden md:block font-bold text-inkBlack">
              GO BACK
            </Link>
          )}
        <h1 className="lg:text-7xl text-[40px] font-medium">
          {archived?(<span className="hidden md:inline">Archived </span>):""} Events
          <span className="text-orange">.</span>
        </h1>
        </div>
        <div className="relative">
          <button
            className="border-[1px] border-primaryBlack rounded-md px-4 py-2 flex items-center gap-2"
            onClick={toggleDropdown}
          >
            <span className="lg:text-sm text-[10px] text-inkBlack whitespace-nowrap">
            <span className="text-borderGray">  Sort By:</span> {sortOptions.find((opt) => opt.value === sortBy)?.label}
            </span>
            <ChevronDown className="h-5 w-5" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-inkBlack border rounded-md shadow-lg z-10">
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
      {archived && (
        <>
        <div className="lg:hidden flex gap-[10px] pb-[10px] pt-5">
        <MobileNav placeholder="Select Year" items={yearEvent} isOption={true} onSelect={handleYearSelect}/>
        <MobileNav placeholder="Select Month" items={monthEventCounts} isOption={true} onSelect={handleMonthSelect}/>
        </div>
      <MobileNav placeholder="Select Format" className="lg:hidden" items={format} isOption={true} onSelect={handleFormatSelect}/>
      </>
      )}
      {!archived && <MobileNav label="Sort By:" items={eventSortOptions} className="lg:hidden pt-5"/>}
      <div className="flex flex-col md:flex-row gap-8 pt-10 w-full h-full">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/5 pr-28 h-[90%] hidden lg:block lg:sticky lg:top-24 lg:self-start">
          <div className="w-full">
            <Link href={`/events/${archived?"":"archived"}`}><h2 className=" text-xs font-Inter font-semibold">{archived?"UPCOMING":"PREVIOUS"}</h2></Link>
            <div className="relative">
              
            </div>
          </div>
          
          {/* {JSON.stringify(yearEventCounts)} */}
          {/* Dynamic year sections */}
          {yearEventCounts.length > 0 ? (
            yearEventCounts.map((yearData, index) => (
              <div
                key={yearData.year}
                className={`border-b py-4 mb-2 w-full cursor-pointer ${selectedYear === yearData.year ? "border-orange" : "border-inkBlack/40"}`}
                onClick={() => setSelectedYear(yearData.year)}
              >
                <h3
                  className={`font-medium text-xl ${
                    selectedYear === yearData.year
                      ? "text-orange"
                      : "text-inkBlack/40"
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
          {!archived && (
          <div className="mt-8">
            <Link
              href="/events/archived"
              className="text-inactiveGray font-inter font-semibold text-xs hover:text-gray-600"
            >
              VIEW MORE &gt;
            </Link>
          </div>
          )}
        </div>
        

        <EventsListing
          data={{
            title: title,
            events: events.filter(event => event.year === selectedYear),
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


