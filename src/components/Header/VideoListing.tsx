
import Link from "next/link";
import React from "react";
// import { Button } from "../ui/Button";

const VideoListing = ({title,description,categories}:{title:string,description:string,categories:string[]}) => {
  // console.log("categories",categories);
  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <h1 className="text-4xl md:text-5xl text-foreground font-bold mb-4">
        {title}<span className="text-orange">.</span>
      </h1>
      <p className="text-foreground text-center mb-8 max-w-2xl">
        {description}
      </p>
      <div className="flex flex-row md:gap-x-5 gap-x-2 justify-center items-center">

         <nav className="flex flex-wrap gap-y-4 gap-x-6 md:gap-x-12 items-center">
          {categories?.map((link:any, index) => (
            <Link
              key={`link-${index}`}
              href={`${link.slug}`}
              className={`text-gray-600 mb-8 font-medium md:text-sm text-xs px-3 py-1.5 border border-borderGray rounded-full`
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* {categories.map((category, index) => (
          <p key={index} className="text-gray-600 mb-8 font-medium md:text-sm text-xs px-3 py-1.5 border border-borderGray rounded-full">
            {category}
          </p>
        ))} */}
      </div>
    </div>
  );
};

export default VideoListing;
