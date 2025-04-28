"use client";
import React, { useState } from "react";
import PopularBlog from "./PopularBlog";
import { articles } from "../authors/data";
import { ChevronDown } from "lucide-react";

// Sort options type
type SortOption = {
  label: string;
  value: string;
};

export default function BlogListing() {
  const [sortBy, setSortBy] = useState("alphabetical");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sortOptions: SortOption[] = [
    { label: "Alphabetical A-Z", value: "alphabetical" },
    { label: "Alphabetical Z-A", value: "alphabetical-reverse" },
    { label: "Joining", value: "joining" },
    { label: "Contribution", value: "contribution" },
  ];

  const handleSortChange = (option: SortOption) => {
    setSortBy(option.value);
    setIsDropdownOpen(false);
    
    // Apply sorting logic
    let sortedArticles = [...articles];
    
    // if (option.value === "conference") {
    //   sortedArticles = articles.filter(article => article.type === "CONFERENCE");
    // } else if (option.value === "virtual") {
    //   sortedArticles = articles.filter(article => article.type === "VIRTUAL");
    // } else if (option.value === "newest") {
    //   sortedArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    // } else if (option.value === "oldest") {
    //   sortedArticles.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    // }
    
    // Update selected event if needed
    // if (sortedArticles.length > 0 && !sortedArticles.find(e => e.id === selectedEvent?.id)) {
    //   setSelectedEvent(sortedArticles[0]);
    // }

  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <section className="max-w-7xl mx-auto py-10">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-7xl font-medium">
          Blog<span className="text-orange">.</span>
        </h1>
        <div className="relative">
          <button
            className="border border-[#A0A0A0] rounded-md px-4 py-2 flex items-center gap-2"
            onClick={toggleDropdown}
          >
            <span className="text-sm text-black">
              Sort By: {sortOptions.find((opt) => opt.value === sortBy)?.label}
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
      <PopularBlog articles={articles} />
    </section>
  );
}
