"use client";
import React, { useState } from "react";
import { CardProps } from "./card.types";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { hoverVariants } from "./cardVariants";
import Link from "next/link";
import { Play } from "lucide-react";
import Modal from "../Modal/Modal";
import { FirstCategory } from "@/services/commonFunction";

// Define the variants using cva
const cardVariants = cva(
  "overflow-hidden group flex items-start gap-x-3 lg:gap-x-7",
  {
    variants: {
      layout: {
        default: "flex flex-col",
        vertical: "flex flex-col",
        horizontal: "flex flex-row",
        horizontalReverse: "flex flex-row-reverse items-start",
        withImage: "flex flex-row items-center",
        imageOnly: "",
      },
      hoverStyle: {
        default: "",
        hoverZoom: "hover:scale-105 transition-transform duration-300",
        hoverZoomIn: "hover:scale-105 transition-transform duration-300",
        hoverZoomOut: "hover:scale-95 transition-transform duration-300",
        hoverZoomInOut:
          "hover:scale-105 hover:scale-95 transition-transform duration-300",
        hoverZoomInOutScale:
          "hover:scale-105 hover:scale-95 transition-transform duration-300",
        hoverZoomInOutScaleOpacity:
          "hover:scale-105 hover:scale-95 hover:opacity-80 transition-transform duration-300",
      },
    },
    defaultVariants: {
      layout: "default",
      hoverStyle: "default",
    },
  }
);

const titleVariants = cva("text-black", {
  variants: {
    variant: {
      default: "font-semibold",
      bold: "font-bold",
      italic: "italic",
      uppercase: "uppercase",
      medium: "font-medium",
    },
    size: {
      default: "",
      small: "text-lg",
      medium: "text-xl",
      large: "text-2xl",
      xlarge: "text-3xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "large",
  },
});

const descriptionVariants = cva("text-gray-600 line-clamp-2", {
  variants: {
    variant: {
      default: "text-base",
      small: "text-sm",
      large: "text-lg",
      italic: "italic",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
      xlarge: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "xlarge",
  },
});

const imageVariants = cva("object-cover", {
  variants: {
    variant: {
      default: "",
      rounded: "rounded-lg",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const TrendingCard = ({
  data,
  title = "default",
  description = "default",
  titleSize = "large",
  descriptionSize = "xlarge",
  imageStyle = "default",
  layout = "default",
  textOnImage = false,
  className = "w-12 h-12",
  hoverStyle = "default",
  wantDescription = true,
  isVideo = false,
  template,
}: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    if (isVideo) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`${twMerge(
          cardVariants({ layout, hoverStyle })
        )} justify-start border-b-0.5 border-border last:border-b-0.5 w-full lg:py-0 py-4`}
      >
        {/* Render image if imageUrl is provided */}
        <div className={`relative ${imageStyle === "circle" ? "pb-4" : ""}`}>
          {layout === "horizontal" && (
            <div className={
              imageStyle === "circle"
                ? "lg:w-32 lg:h-32 w-24 h-24 flex-shrink-0 aspect-square"
                : "lg:h-32 lg:w-48 h-24 w-32 flex-shrink-0"
            }>
              {isVideo ? (
                <div className="relative cursor-pointer" onClick={handleCardClick}>
                  <Image
                    className={`${twMerge(
                      imageVariants({ variant: imageStyle }),
                      hoverVariants[hoverStyle],
                      imageStyle === "circle" ? "aspect-square" : "aspect-video"
                    )}`}
                    src={data.image ? data.image : "/assets/images/dummy.jpg"}
                    width={1200}
                    height={1200}
                    alt={data.title}
                  />
                  {/* Play button overlay for horizontal layout */}
                  {isVideo && layout === "horizontal" && (
                  <div className={`absolute inset-0 flex items-center justify-center group-hover:bg-black/20 ${imageVariants({ variant: imageStyle })} transition-all`}>
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center">
                      <Play className="w-4 h-4 lg:w-5 lg:h-5 text-InkBlack" fill="InkBlack" />
                    </div>
                  </div>
                  )}
                </div>
              ) : (
                <Link href={data.link || "#"} className="relative">
                  <Image
                    className={twMerge(
                      imageVariants({ variant: imageStyle }),
                      hoverVariants[hoverStyle],
                      imageStyle === "circle" ? "aspect-square" : "aspect-video"
                    )}
                    src={data.image ? data.image : "/assets/images/dummy.jpg"}
                    width={1200}
                    height={1200}
                    alt={data.title}
                  />
                </Link>
              )}
            </div>
          )}

          {/* Image on the right */}
          {layout !== "horizontal" && (
            <div className="min-h-28 h-full w-20 flex-shrink-0 overflow-hidden flex justify-end">
              {isVideo ? (
                <div className="relative cursor-pointer" onClick={handleCardClick}>
                  <Image
                    className={twMerge(
                      "h-full object-cover flex",
                      imageVariants({ variant: imageStyle }),
                      className,
                      hoverStyle
                    )}
                    src={data.image ? data.image : "/assets/images/dummy.jpg"}
                    alt={data.title}
                    width={1200}
                    height={1200}
                  />
                  {/* Play button overlay for non-horizontal layout */}
                  {isVideo && layout !== "horizontalReverse" && (
                  <div className={`absolute inset-0 flex items-center justify-center group-hover:bg-black/20 ${imageVariants({ variant: imageStyle })} transition-all`}>
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center">
                      <Play className="w-4 h-4 lg:w-5 lg:h-5 text-InkBlack" fill="InkBlack" />
                    </div>
                  </div>
                  )}
                </div>
              ) : (
                <Link href={data.link || "#"} className="relative">
                  <Image
                    className={twMerge(
                      "h-full object-cover flex",
                      imageVariants({ variant: imageStyle }),
                      className,
                      hoverStyle
                    )}
                    src={data.image ? data.image : "/assets/images/dummy.jpg"}
                    alt={data.title}
                    width={1200}
                    height={1200}
                  />
                </Link>
              )}
            </div>
          )}

          {/* Overlay text on image if textOnImage is true */}
          {textOnImage && (
            <div className="inset-0 flex flex-col justify-end py-4 px-0 to-transparent">
              {isVideo ? (
                <div className="cursor-pointer" onClick={handleCardClick}>
                  <h3 className={twMerge(titleVariants({ variant: title }), "text-black mb-2 inline-block")}>
                    {data.title}
                  </h3>
                  {data.description && (
                    <p className={twMerge(descriptionVariants({ variant: description, size: descriptionSize }), "text-description")}>
                      {data.description}
                    </p>
                  )}
                </div>
              ) : (
                <Link href={data.link || "#"}>
                  <h3 className={twMerge(titleVariants({ variant: title }), "text-black mb-2 inline-block")}>
                    {data.title}
                  </h3>
                  {data.description && (
                    <p className={twMerge(descriptionVariants({ variant: description, size: descriptionSize }), "text-description")}>
                      {data.description}
                    </p>
                  )}
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Render title and description below image if textOnImage is false */}
        {!textOnImage && layout !== "imageOnly" && (
          <div
            className={twMerge(
              layout === "horizontal" && data.image
                ? "w-full"
                : "relative justify-start w-full flex flex-col min-h-20 mb-4"
            )}
          >
            <div className="flex items-center text-xs md:text-sm text-description font-normal mb-3">
              {isVideo && layout === "horizontalReverse" && (
                <span className="mr-2 w-4 h-4 rounded-full bg-inkBlack flex items-center justify-center">
                  <Play className="w-2 h-2 text-background" fill="background" />
                </span>
              )}
              <span className={`${template === "trending_section_right" ? "text-inactiveGray" : "text-inkBlack"} text-xs font-medium font-inter`}>
                <Link href={data.categorySlug || "#"}>{data.category ? FirstCategory(data.category || "") : "Not Avialable"}</Link>
              </span>
              {template !== "trending_section_right" && (
                <>
                {data.categorySlug && data.authorSlug && (
              <span className="mx-2">/</span>
              )}
              <span className="text-inactiveGray font-medium text-xs font-inter">
                <Link href={data.authorSlug || "#"}>{data.author ? data.author : "Not Avialable"}</Link>
              </span>
              </>
              )}
            </div>
            {isVideo ? (
              <div className="cursor-pointer" onClick={handleCardClick}>
                <h3 className={twMerge(titleVariants({ variant: title, size: titleSize as "small" | "medium" | "large" | "xlarge" | "default" | null | undefined }), "text-inkBlack inline-block flex-1")}>
                  {data.title ? data.title : "Not Available"}
                </h3>
                {wantDescription && (
                  <p className={twMerge(descriptionVariants({ variant: description, size: descriptionSize }), "text-gray-600 line-clamp-2")}>
                    {data.description ? data.description : ''}
                  </p>
                )}
              </div>
            ) : (
              <Link href={data.link || "#"}>
                <h3 className={twMerge(titleVariants({ variant: title, size: titleSize as "small" | "medium" | "large" | "xlarge" | "default" | null | undefined }), "text-inkBlack inline-block flex-1")}>
                  {data.title ? data.title : "Not Available"}
                </h3>
                {wantDescription && (
                  <p className={twMerge(descriptionVariants({ variant: description, size: descriptionSize }), "text-gray-600 line-clamp-2")}>
                    {data.description ? data.description : ''}
                  </p>
                )}
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Video Modal */}
      {isVideo && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={data.title || "Video"}>
          <div className="aspect-video w-full">
            {data.videoUrl ? (
              <iframe 
                className="w-full h-full"
                src={data.videoUrl}
                title={data.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <p>Video not available</p>
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};
