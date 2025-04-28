// components/ArticleContent.tsx
import React from "react";
// import Link from 'next/link';
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
// import TrendingSectionRight from "@/components/Sections/TrendingSectionRight";
// import TrendingSectionLeft from "@/components/Sections/TrendingSectionLeft";
import Link from "next/link";
import { Section } from "@/types/common";
import TrendingSectionLeft from "@/components/Sections/TrendingSectionLeft";

interface ArticleContentProps {
  data: any;
  trendingData: Section;
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  data,
  trendingData,
}) => {
  return (
    <div className="max-w-4xl mx-auto font-sans">
      {/* Main content */}
      <div className="mb-8">
        {data?.json_content.map((section: any, index: any) => {
          switch (section.type) {
            case "paragraph":
              return (
                <p
                  key={index}
                  className="font-normal text-lg text-foreground mb-4 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              );
            case "muted":
              return (
                <p
                  key={index}
                  className="font-normal text-borderGray text-lg text-muted mb-4 leading-relaxed"
                >
                  {section.content}
                </p>
              );
            case "header":
              return (
                <p
                  key={index}
                  className="font-semibold text-lg uppercase text-foreground mb-4 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              );
            case "subheading":
              return (
                <h3
                  key={index}
                  className="lg:text-2xl font-bold text-gray-900 mb-4 mt-8 "
                >
                  {section.content}
                </h3>
              );
            case "quote":
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-6"
                >
                  {section.content}
                </blockquote>
              );
            case "highlight":
              return (
                <div
                  key={index}
                  className="text-3xl tracking-wide italic text-gray-700 my-6 font-light leading-relaxed"
                >
                  {section.content}
                </div>
              );
            case "section-title":
              return (
                // <div key={index} className="bg-orange-100 text-orange-700 py-2 px-4 uppercase text-sm font-semibold tracking-wider mb-4 inline-block">
                //   {section.content}
                // </div>
                <SectionHeading
                  bgColor="bg-lightOrange"
                  textColor="text-orange"
                  link=""
                  title={section.content}
                />
              );
            case "also-read":
              return (
                // <div key={index} className="bg-orange-100 text-orange-700 py-2 px-4 uppercase text-sm font-semibold tracking-wider mb-4 inline-block">
                //   {section.content}
                // </div>
                <SectionHeading
                  link=""
                  bgColor="bg-lightOrange"
                  textColor="text-orange"
                  title={section.content}
                />
              );
            default:
              return null;
          }
        })}
      </div>

      {/* Topics section */}
      {data?.topics && data.topics.length > 0 && (
        <>
          <SectionHeading
            title="Topics"
            bgColor="bg-lightOrange"
            textColor="text-orange"
            link=""
          />
          <div className="mb-12">
            <div className="flex items-center pb-4">
              <ul className="flex items-center gap-3 flex-wrap">
                {data.topics.map(
                  (topic: { name: string; slug: string }, index: number) => (
                    <li
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                    >
                      <Link href={`/tag/${topic.slug}`}>{topic.name}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </>
      )}

      {/* Author contact
      <div className="pt-6 mb-12">
        <div className="flex items-center pb-8">
          <ul className="flex items-center gap-2">
          <li className="text-orange">Topics</li>
            {data?.topics.map((topic: {name: string, slug: string}, index: number) => {
              return (
                <li key={index}>
                  <Link href={`/tag/${topic.slug}`}>{topic.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div> */}
      {data?.authors?.length > 0 && (
        <div className="pt-6 mb-12">
          {/* <h4 className="text-sm uppercase text-gray-500 mb-4">Author</h4> */}
          <SectionHeading
            title="Author"
            bgColor="bg-lightOrange"
            textColor="text-orange"
            link=""
          />
          <div className="flex items-center pb-8">
            <p className="text-sm text-foreground font-medium">
              Connect with our edit team below for queries, followups or
              contributions:
            </p>
          </div>
          <div className="flex items-center">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
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
              <Link href={`/author/${data?.authors?.[0]?.url}`} className="">
                {data?.authors?.[0]?.full_name ||
                  data?.authors?.[0]?.first_name ||
                  "Unknown Author"}
              </Link>
              <div className="flex items-center text-sm text-gray-500">
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
                {data?.authors?.[0]?.email && (
                  <span className="text-gray-500 text-sm">
                    <span>{data?.authors?.[0]?.email || ""}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <TrendingSectionLeft data={trendingData} />
    </div>
  );
};

export default ArticleContent;
