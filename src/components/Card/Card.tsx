import React from "react";
import { CardProps } from "./card.types";
import {
  layoutVariants,
  imageVariants,
  titleVariants,
  descriptionVariants,
  titleSizeVariants,
  descriptionSizeVariants,
  hoverVariants,
  titleMarginVariants,
} from "./cardVariants";
import Image from "next/image";
import { shortenText } from "@/services/commonFunction";
import Link from "next/link";
import { TimeBadge } from "@/components/ui/CustomBadge";
import { Play } from "lucide-react";
// import { Breadcrumb } from "../Breadcrumb";
// import { BreadcrumbData } from "@/types/common";

export const Card = ({
  data,
  title = "default",
  description = "default",
  titleSize = "large",
  descriptionSize = "xlarge",
  imageStyle = "default",
  layout = "default",
  textOnImage = false,
  className = "",
  hoverStyle = "default",
  showDuration = false,
  durationPosition = "top-right",
  isVideo = false,
  titleMargin="default"
}: CardProps) => {

  // Position class mapping
  const positionClasses = {
    "top-left": "top-2 left-2",
    "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "bottom-right": "bottom-2 right-2",
  };

  return (
    <div
      className={`overflow-hidden ${layoutVariants[layout]} group ${className}`}
    >
      {/* Image container - always has position relative for badge positioning */}
      <div className="relative">
        {layout === "horizontal" && (
          <div className="h-32 w-48 flex-shrink-0">
            <Link href={data?.link ? data?.link : "/"}>
              <Image
                className={`object-cover rounded-[4px] ${imageVariants[imageStyle]} ${hoverVariants[hoverStyle]}`}
                src={data?.image ? data?.image : "/assets/images/dummy.jpg"}
                alt={data.title}
                width={1000}
                height={1000}
              />
            </Link>
          </div>
        )}
        
        {layout !== "horizontal" && (
          <Link className=" block" href={data?.link ? data?.link : "/"}>
            <Image
              className={`${"h-full object-cover rounded-[4px] "} ${
                imageVariants[imageStyle]
              } ${hoverVariants[hoverStyle]}`}
              src={
                !data?.image || data?.image === ""
                  ? "/assets/images/dummy.jpg"
                  : data?.image
              }
              alt={data.title}
              width={1000}
              height={1000}
            />
          </Link>
        )}

        {/* Play button overlay for video content */}
        {isVideo && (
          <div className={`absolute inset-0 flex items-center justify-center group-hover:bg-black/20 ${imageVariants[imageStyle]} transition-all`}>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Play className="w-5 h-5 text-InkBlack" fill="InkBlack" />
            </div>
          </div>
        )}

        {/* Duration badge - always positioned absolutely within the image container */}
        {showDuration && data.duration !== undefined && (
          <div className={`absolute z-10 ${positionClasses[durationPosition]}`}>
            <TimeBadge time={data.duration} size="md" />
          </div>
        )}

        {/* Overlay text on image if textOnImage is true */}
        {textOnImage && (
          <div className="absolute inset-0 flex flex-col justify-end py-4 px-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex items-center text-sm text-description font-normal my-3">
              <span className="text-white whitespace-nowrap">
                <Link href={data.categorySlug ? data.categorySlug : "/"}>
                  {data.category ? shortenText(data.category, 10) : "Not Available"}
                </Link>
              </span>
              <span className="mx-2 text-white">/</span>
              <span className="text-white">
                <Link href={data.authorSlug ? data.authorSlug : "/"}>
                  {data.author}
                </Link>
              </span>
            </div>
            <Link href={data?.link ? data?.link : "/"}>
              <h3
                className={`${titleSizeVariants[titleSize]} ${titleVariants[title]} ${titleMarginVariants[titleMargin]} text-white mb-2`}
              >
                {data.title ? data.title : 'Not Available'}
              </h3>
              {data.description && (
                <p
                  className={`${descriptionSizeVariants[descriptionSize]} ${descriptionVariants[description]} font-inter text-white/80`}
                >
                  {data.description ? data.description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                </p>
              )}
            </Link>
          </div>
        )}
      </div>

      {/* Render title and description below image if textOnImage is false */}
      {!textOnImage && layout !== "imageOnly" && (
        <div
          className={` ${
            layout === "horizontal" && data?.image ? "w-full " : "pt-2 pb-4"
          }`}
        >
          <div className="flex items-center text-xs text-description font-medium !mt-2 mb-2 font-inter line-clamp-1 w-full">
            <span className="text-inkBlack line-clamp-1 font-normal">
              <Link href={data.categorySlug ? data.categorySlug : "/"} className="">
                {data.category ? shortenText(data.category,14) : "Not Available"}
                {/* {data.category ? data.category : "Not Available"} */}
                
              </Link>
            </span>
            <span className="mx-2">/</span>
            <span className="text-inactiveGray font-medium line-clamp-1">
            <Link href={data.authorSlug ? data.authorSlug : "/"}>
            {/* {data.author ? shortenText(data.author,10) : "Not Available"} */}
              {data.author ? data.author : "Not Available"}
            </Link>
            </span>
          </div>
          <Link href={data?.link ? data?.link : "/"}>
          <h3
            className={`text-inkBlack my-0 -tracking-[1%] ${titleSizeVariants[titleSize]} ${titleVariants[title]} ${titleMarginVariants[titleMargin]} `}
          >
            {data.title ? data.title : "Not  Available"}
          </h3>
            <p
              className={`${descriptionSizeVariants[descriptionSize]} ${descriptionVariants[description]} font-inter text-inkBlack/60 line-clamp-2`}
            >
                {data.description ? data.description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
            </p>
            </Link>
        </div>
      )}
    </div>
  );
};
