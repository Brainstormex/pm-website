"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
export const AuthorHeader = ({ sortBy, setSortBy }: { sortBy: string, setSortBy: (sortBy: string) => void }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const sortOptions = [
    { label: "Alphabetical A-Z", value: "a-z" },
    { label: "Alphabetical Z-A", value: "z-a" },
    { label: "Joining", value: "joining" },
    { label: "Contribution", value: "contribution" },
  ];

  const handleSortChange = (option: { label: string; value: string }) => {
    setSortBy(option.value);
    setIsDropdownOpen(false);
  };
  return (
    <div className="flex items-center justify-between mb-10">
      <h1 className="text-7xl font-medium">
        Authors<span className="text-orange">.</span>
      </h1>
      <div className="relative">
        <button
          className="border border-[#A0A0A0] rounded-md px-4 py-2 flex items-center gap-2"
          onClick={toggleDropdown}
        >
          <span className="text-sm text-black">
            Sort By: {sortOptions.find((opt) => opt.value === sortBy)?.label}
          </span>
          <ChevronDown
            className={`h-5 w-5 ${isDropdownOpen ? "rotate-180" : ""}`}
          />
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
  );
};
