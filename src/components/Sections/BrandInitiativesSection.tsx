import React from "react";
import { Section } from "@/types/common";
import Image from "next/image";

import SectionHeading from "../SectionHeading/SectionHeading";
import { articleData } from "@/services/dummay";
import Link from "next/link";
export const BrandInitiativesSection = ({ data }: { data: Section }) => {
  // const initiatives = data.brandInitiatives || [];
  let initiatives = data.articles || [];
  if (initiatives && initiatives.length === 0) {
    initiatives = articleData;
   }

  return (
    <section className="max-w-7xl mx-auto py-10 w-full px-4 lg:px-0" data-template={data.template}>
      {/* Header */}
      <div className="flex justify-between items-start  pt-0">
       <SectionHeading title={data.label || ""} link={data?.link || ""} buttontext="GET IN TOUCH" />
       
      </div>
          <h2 className="text-4xl font-medium">{data.heading}</h2>
          <p className="text-gray-600 max-w-lg ">
            {data.description}
          </p>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {initiatives.slice(0, 3).map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative">
             
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <Link href={item.link || "#"}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                </Link>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-black"><Link href={item.categorySlug || "#"}>{item.category ? item.category : "Not Available"}</Link></span>
                  <span className="mx-2">/</span>
                  <span className="text-description"><Link href={item.authorSlug || "#"}>{item.author ? item.author : "Not Available"}</Link></span>
                </div>
                  <Link href={item.link || "#"}>
                <h3 className="text-xl font-semibold  transition-colors duration-300">
                  {item.title}
                </h3>

                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
<hr className="border-[0.5px] my-4"/>
      {/* Small Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 ">
        <div className="lg:border-r border-border lg:pr-7 ">
        {initiatives.slice(3,6).map((item, index) => (
          <div key={index} className="flex items-start gap-4 group cursor-pointer pb-4 border-b border-border last:border-b-0 border-r-0 border-t-0 border-l-0  pt-6">
            <div className="relative w-28 lg:w-48 h-28 flex-shrink-0">
              <Link href={item.link || "#"}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-lg"
                />
                </Link>
            </div>
            <div className="flex-grow">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <span className="text-black"><Link href={item.categorySlug || "#"}>{item.category}</Link></span>
                <span className="mx-2">/</span>
                <span className="text-description"><Link href={item.authorSlug || "#"}>{item.author}</Link></span>
              </div>
              <Link href={item.link || "#"}>
              <h3 className="font-medium  transition-colors duration-300">
                {item.title}
              </h3>
              </Link>
            </div>
          </div>
        ))}
        </div>
        <div>

        {initiatives.slice(6,9).map((item, index) => (
          <div key={index} className="flex items-start gap-4 group cursor-pointer border-b last:border-b-0 border-r-0 border-t-0 border-l-0  pt-6 pb-4">
            <div className="relative w-28 lg:w-48 h-28 flex-shrink-0">
              <Link href={item.link || "#"}>  
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-lg"
                />
                </Link>
            </div>
            <div className="flex-grow">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <span className="text-black"><Link href={item.categorySlug || "#"}>{item.category ? item.category : 'Not Available'}</Link></span>
                <span className="mx-2">/</span>
                <span className="text-description"><Link href={item.authorSlug || "#"}>{item.author ? item.author : 'Not Available'}</Link></span>
              </div>
                <Link href={item.link || "#"}>
              <h3 className="font-medium  transition-colors duration-300">
                {item.title}
              </h3>
              </Link>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}; 