import React from "react";
import { Section } from "@/types/common";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";
import { shortenText } from "@/services/commonFunction";
import { articleData } from "@/services/dummay";
import SectionHeading from "../SectionHeading/SectionHeading";
export const PodcastSection = ({ data }: { data: Section }) => {
  console.log(data,"This is podcast section")
  // let podcasts = data.articles || [];
  if (data.articles && data.articles.length === 0) {
    data.articles = articleData;
   }
  // const featuredPodcast = podcasts.find(podcast => podcast.featured);
  // const otherPodcasts = podcasts.filter(podcast => !podcast.featured);
  // console.log(data,"From podcase section")
  return (
    <section className="max-w-7xl mx-auto lg:px-0 px-4 flex justify-between w-full flex-row gap-x-16" data-template={data.template}>
      {/* Header */}
      <div className="flex justify-between w-full items-start flex-col border-t border-border pt-0 ">
        <div className="space-y-0 flex flex-row justify-between w-full items-start">
        <div className="">
          {/* <div className="inline-block">
            <h4 className="lg:text-lg uppercase tracking-widest font-medium text-center mb-8  bg-foreground text-white px-4 py-2 rounded-b-lg">
             {data.label}
            </h4>
          </div> */}
          <SectionHeading title={data?.label || ""} />
          {/* {data.heading && <h2 className="text-4xl font-medium">{data.heading}</h2>} */}
          {data.description && <p className="text-gray-600 max-w-lg ">
            {/* This length is here is temporary solution */}
            {data.description.length === 8 ? "" : data.description}
          </p>}
        </div>
        <Link 
          href="/podcasts" 
          className="text-black whitespace-nowrap hover:text-orange flex items-center py-2 text-sm gap-2 font-medium"
          >
          VIEW ALL
          <span><ChevronRight className="h-4 w-4" /></span>
        </Link>
            </div>
        <div className="flex flex-row gap-8 w-full overflow-hidden">
        {/* Featured Podcast */}
     

        {/* Side Podcasts */}
        <div className="flex flex-row justify-between overflow-x-auto hide-scrollbar w-screen lg:w-full gap-x-5 
            snap-x snap-mandatory scroll-smooth touch-pan-x">
          {data.articles && data.articles.map((podcast, index) => (
            <div key={index} 
              className="group cursor-pointer flex flex-col gap-4 w-[32rem] lg:w-[36rem] snap-start scroll-ml-4">
              <div className="relative w-64 h-64 flex-shrink-0 ">
                <Link href={podcast.link || "#"}>
                <Image
                  src={podcast.image ? podcast.image : "/assets/images/dummy.jpg"}
                  alt={podcast.title}
fill
                  className="object-cover rounded-lg "
                />
                </Link>
                <div className="absolute inset-0 bg-black/30 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white rounded-full p-2">
                    <Play className="h-4 w-4 text-black" />
                  </div>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center text-sm mb-2">
                  <span className="text-black text-xs"><Link href={podcast.categorySlug || "#"}>{shortenText(podcast.category,10)}</Link></span>
                  <span className="mx-2">/</span>
                  <span className="text-description text-xs"><Link href={podcast.authorSlug || "#"}>{podcast.author}</Link></span>
                 {/* As of now the data is not coming from the API so hard coding it  */}
                  {/* {podcast.duration && (
                    <>
                      <span className="mx-2">/</span>
                      <span className="text-description">{podcast.duration}</span>
                    </>
                  )} */}
                   <>
                      <span className="mx-2">/</span>
                      <span className="text-description text-xs">39 Minutes</span>
                    </>
                </div>
                <Link href={podcast.link || "#"}>
                <h3 className="font-medium line-clamp-2 group-hover:text-orange transition-colors">
                  {podcast.title}
                </h3>
                
                <div className="flex flex-row gap-2 py-4 items-center">
                    <div className="">
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M15 0C19.1419 0 22.8921 1.73501 25.6067 4.5401C28.321 7.34483 30 11.22 30 15.5C30 19.78 28.321 23.6552 25.6067 26.4603C22.8921 29.265 19.1419 31 15 31C10.8581 31 7.1079 29.265 4.39329 26.4603C1.67904 23.6552 0 19.78 0 15.5C0 11.22 1.67904 7.34483 4.39365 4.53973C7.1079 1.73501 10.8581 0 15 0ZM21.9303 16.1416C22.0391 16.0791 22.1333 15.9858 22.1999 15.8663C22.3958 15.5144 22.2783 15.0652 21.9378 14.8628L16.7829 11.7873L11.6874 8.7472C11.5707 8.66135 11.4278 8.61103 11.2738 8.61103C10.8792 8.61103 10.5594 8.94145 10.5594 9.34921V15.5V21.6508H10.5623C10.5623 21.7751 10.5927 21.9013 10.6568 22.0171C10.8527 22.369 11.2874 22.4904 11.628 22.288L16.7829 19.2124L21.9303 16.1416Z" fill="#121212"/>
</svg>

                        </div>
                    <span className="text-black font-medium">Play Episode</span>
                    </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

   
      </div>
      </div>

 
    </section>
  );
}; 