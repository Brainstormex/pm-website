// components/ArticlePreview.tsx
import React from "react";
import Image from "next/image";

import Link from "next/link";
import CustomDateComponent from "@/components/ui/CustomDateComponent";
import { ArticleData } from "@/types/article.types";
// import { Bookmark, Facebook, Linkedin, Twitter } from 'lucide-react';

interface ArticlePreviewProps {
  data: ArticleData;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ data }) => {
  
  return (
    <div className=" mx-auto font-sans">
      {/* Category header */}
      <div className="mb-2">
        <h3 className="text-gray-600 text-sm font-medium capitalize">
          {/* {data?.meta_data?.section || ""} */}
          {/* making this category as the section is what is section? did not understood(US) */}
          <Link
            href={
              data?.category?.[0]?.parent
                ? `/category/${data?.category?.[0]?.parent?.slug}/${data?.category?.[0]?.slug}`
                : `/category/${data?.category?.[0]?.slug}`
            }
          >
            {data?.category?.[0]?.name || ""}
          </Link>
        </h3>
      </div>

      {/* Article title */}
      <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
        {data?.title || ""}
      </h1>

      {/* Author info and metadata */}
      {(data?.authors ?? []).length > 0 && (
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Link href={`/author/${data?.authors?.[0]?.url}`}>
                <Image
                  src={
                    data?.authors?.[0]?.profile_image || "/assets/profile.svg"
                  }
                  alt={data?.authors?.[0]?.full_name || ""}
                  fill
                  className="object-cover"
                />
              </Link>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <Link
                  href={`/author/${data?.authors?.[0]?.url}`}
                  className="font-medium capitalize"
                >
                  {data?.authors?.[0]?.full_name
                    ? data?.authors?.[0]?.full_name
                    : `${data?.authors?.[0]?.first_name || ""} ${
                        data?.authors?.[0]?.last_name || ""
                      }`}
                </Link>
                <span className="text-gray-400">•</span>
                <button className="text-gray-400 hover:text-gray-500">
                  Follow
                </button>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                {/* {JSON.stringify(data?.authors?.[0]?.social_link )} */}
                {data?.authors?.[0]?.social_link && (
                  <Link
                    href={data?.authors?.[0]?.social_link || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative h-3 w-3 mb-1"
                  >
                    <Image src="/assets/linkedIn.svg" alt="LinkedIn" fill />
                  </Link>
                )}
                {data?.authors?.[0]?.email &&
                  data?.authors?.[0]?.social_link && (
                    <span className="mx-2">|</span>
                  )}
                <span>4 mins read</span>
                <span className="mx-2">|</span>
                <CustomDateComponent
                  date={data?.meta_data?.published_time || ""}
                  format="iso"
                  showTime={true}
                />
              </div>
            </div>
          </div>

          {/* Share buttons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-gray-600">
              <Image
                src="/assets/bookmarkGray.svg"
                alt="Twitter"
                width={16}
                height={16}
              />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <Image
                src="/assets/facebookGray.svg"
                alt="facebook"
                width={12}
                height={12}
              />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <Image
                src="/assets/twitterGray.svg"
                alt="Twitter"
                width={16}
                height={16}
              />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <Image
                src="/assets/linkedIn.svg"
                alt="Twitter"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
      )}

      {/* Main article image */}
      <div className="relative w-full h-96 mb-8">
        {data?.hero_image && (
          <Image
            src={data?.hero_image || ""}
            alt="Article cover image showing two people in business attire in a hot air balloon basket with chains"
            fill
            className="object-cover rounded-[4px]"
            priority
          />
        )}
      </div>

      <div className="mb-8">
        <p className="text-borderGray font-medium">{data?.description || ""}</p>
      </div>
    </div>
  );
};

export default ArticlePreview;
