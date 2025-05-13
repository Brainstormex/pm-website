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
import { ArticleData, ContentBlock } from "@/types/article.types";
import { Button } from "./ui/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { File } from "lucide-react";

interface ArticleContentProps {
  data: ArticleData;
  trendingData: Section;
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  data,
  trendingData,
}) => {
  const renderElement = (section: ContentBlock) => {
    switch (section.type) {
      case "header":
        return (
          <h2
            key={section.id}
            className="font-semibold text-lg uppercase text-foreground mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        );
      case "paragraph":
        const cleanedContent = section.content.replace(
          /style="([^"]*)"/gi,
          (match, styles) => {
            const cleanedStyles = styles
              .split(";")
              .filter(
                (style: string) => !style.trim().startsWith("font-family")
              )
              .join(";");
            return cleanedStyles ? `style="${cleanedStyles}"` : "";
          }
        );
        return (
          <p
            key={section.id}
            className="font-normal text-lg text-foreground mb-4 leading-relaxed !font-custom"
            dangerouslySetInnerHTML={{ __html: cleanedContent }}
          />
        );
      case "gallery":
        return (
          <div
            key={section.id}
            className="mb-4 grid grid-cols-5 gap-4 border-y border-gray-300 py-4"
          >
            {section.images?.map((image: any, imgIndex: number) => (
              <div
                key={imgIndex}
                className="aspect-square bg-blue-300 rounded-md overflow-hidden relative"
              >
                <Image
                  src={image.media_url}
                  alt={image.media_alt || ""}
                  fill
                  className="object-cover w-full h-auto"
                />
              </div>
            ))}
          </div>
        );
      case "slider":
        return (
          <div key={section.id} className="mb-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={16}
              slidesPerView={1}
              className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
            >
              {section.images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={image.media_url}
                      alt={image.media_alt || `Slide ${index + 1}`}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        );
      case "summary":
        return (
          <div
            key={section.id}
            className="mb-4 border-l-4 border-orange pl-4 italic text-lg text-gray-700  my-6 "
          >
            {section.content}
          </div>
        );
      case "embedded":
        return (
          <div
            key={section.id}
            className="mb-4 flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: section.embed || "" }}
          />
        );
      case "question":
        return (
          <div key={section.id} className="mb-4 text-lg font-medium">
            Q. {section.question}
          </div>
        );
      case "answer":
        return (
          <div key={section.id} className="mb-4 text-lg font-light ml-11">
            {section.answer}
          </div>
        );
      case "question-answer":
        return (
          <div key={section.id}>
            <div className="mb-4 text-lg font-medium">
              Q. {section.question}
            </div>
            <div className="mb-4 text-lg font-light ml-11">
              {section.answer}
            </div>
          </div>
        );
      case "cta":
        return (
          section.href && (
            <Link href={section.href} key={section.id}>
              <Button className="mb-4">{section.label}</Button>
            </Link>
          )
        );
      case "attachment":
        return (
          <div
            className="mb-4 border rounded-md p-8 flex items-center gap-4"
            key={section.id}
          >
            <File />
            {section.media_url && (
              <Link target="_blank" href={section.media_url}>
                {section.content}
              </Link>
            )}
          </div>
        );
      case "blurb":
        return (
          <div key={section.id} className="mb-4 text-lg">
            {section.content}
          </div>
        );
      case "blockQuote":
        return (
          <div key={section.id} className="mb-4 text-2xl italic font-fraunces">
            {section.content}
          </div>
        );
      case "fact":
        return (
          <div key={section.id} className="mb-4 text-lg">
            {section.content}
          </div>
        );
      case "also-read":
        return (
          section.slug && (
            <div className="mb-4 mt-6" key={section.id}>
              <SectionHeading
                title="also read"
                bgColor="bg-lightOrange"
                textColor="text-orange"
                link=""
              />

              <Link href={section.slug} className="text-4xl font-medium">
                {section.title}
              </Link>
            </div>
          )
        );
      default: {
        return (
          // <p
          //   key={index}
          //   className="font-normal text-lg text-foreground mb-4 leading-relaxed"
          //   dangerouslySetInnerHTML={{ __html: section.content }}
          // />
          <p key={section.id} className="bg-red-600">
            Element not found
          </p>
        );
      }
    }
  };
  return (
    <div className="max-w-4xl mx-auto font-sans">
      <div className="mb-8">
        {data?.json_content.map((section) => {
          return renderElement(section);
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
          <div className="flex items-center gap-5 flex-wrap mb-6">
            {data?.topics?.map((topic) => {
              return (
                <Link key={topic.url} href={topic.url}>
                  <p className="text-lg bg-zinc-200 hover:bg-orange hover:text-white px-3 py-1 rounded-md">
                    {topic.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </>
      )}

      {(data?.authors ?? []).length > 0 && (
        <div className="pt-6 mb-12">
          {/* <h4 className="text-sm uppercase text-gray-500 mb-4">Author</h4> */}
          <SectionHeading
            title="Author"
            bgColor="bg-lightOrange"
            textColor="text-orange"
            link=""
          />
          {/* {JSON.stringify(data?.authors, null, 2)} */}
          <div className="flex items-center pb-8">
            <p
              className="font-normal text-lg text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: data?.authors?.[0]?.bio ?? "",
              }}
            />
          </div>
          <div className="flex items-center">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <Link href={`/author/${data?.authors?.[0]?.url}`}>
                <Image
                  src={
                    data?.authors?.[0]?.profile_image || "/assets/profile.svg"
                  }
                  alt={data?.authors?.[0]?.name || ""}
                  fill
                  className="object-cover"
                />
              </Link>
            </div>
            <div>
              <Link href={`/author/${data?.authors?.[0]?.url}`} className="">
                {data?.authors?.[0]?.name ||
                  `${data?.authors?.[0]?.first_name || ""} ${
                    data?.authors?.[0]?.last_name || ""
                  }` ||
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
