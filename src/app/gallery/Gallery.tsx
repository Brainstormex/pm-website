"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface GalleryProps {
  galleryImages: GalleryImage[];
}

type GalleryImage = {
  id: string;
  title: string;
  imageUrl: string;
};

const sortOptions = [
  { label: "2024", value: "2024" },
  { label: "2023", value: "2023" },
  { label: "2022", value: "2022" },
  { label: "2021", value: "2021" },
  { label: "2020", value: "2020" },
];

const Gallery = ({ galleryImages }: GalleryProps) => {
  const [sortBy, setSortBy] = useState("2024");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (option: { label: string; value: string }) => {
    setSortBy(option.value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full space-y-8">
      <div className="flex justify-start">
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((image) => (
          <Link key={image.id} href={`/gallery/${image.id}`} className="group">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <Image
                src={image.imageUrl}
                alt={image.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform group-hover:scale-105 duration-300"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
