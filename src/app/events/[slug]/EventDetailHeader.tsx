"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import MobileNav from "@/components/ui/MobileNav";




export const EventDetailHeader = ({archived}: {archived: boolean}) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [sortBy, setSortBy] = useState('all-formats');
    const sortOptions = [
      { label: 'All Formats', value: 'all-formats' },
      { label: 'Large Conference', value: 'large-conference' },
      { label: 'Meetups', value: 'meetups' },
      { label: 'Webinars', value: 'webinars' },
      { label: 'Panels', value: 'panels' },
    ];

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

    const handleSortChange = (value: string) => {
        setSortBy(value);
    };

    
  return (
    <div className="flex items-center justify-between border-b border-inkBlack/40 pb-[10px] lg:pb-10 max-w-7xl mx-auto py-8">
      <div className="flex flex-col gap-4">
        {/* {archived && ( */}
          <Link
            href="/events"
            className="text-xs hidden md:block font-bold text-inkBlack"
          >
            GO BACK
          </Link>
        {/* )} */}
        <h1 className="lg:text-7xl text-[40px] font-medium">
          {archived ? <span className="hidden md:inline">Archived </span> : <span className="hidden md:inline">Upcoming </span>}{" "}
          Events
          <span className="text-orange">.</span>
        </h1>
      </div>
      {/* <div className="relative">
        <button
          className="border-[1px] border-primaryBlack rounded-md px-4 py-2 flex items-center gap-2"
          onClick={toggleDropdown}
        >
          <span className="lg:text-sm text-[10px] text-inkBlack whitespace-nowrap">
            <span className="text-borderGray"> Sort By:</span>{" "}
            {sortOptions.find((opt) => opt.value === sortBy)?.label}
          </span>
          <ChevronDown className="h-5 w-5" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-inkBlack border rounded-md shadow-lg z-10">
            {sortOptions.map((option) => (
              <div
                key={option.value}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSortChange(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div> */}
      <div className="lg:flex hidden w-56">
      <MobileNav label="Sort By:" items={sortOptions} className="pt-5"/>
      </div>
    </div>
  );
};
