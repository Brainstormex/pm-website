import React from "react";
import Image from "next/image";
import GridLayout from "@/components/greyDiv";
import ImageCollage from "./ImageCollage";
// import BrandReachout from "@/components/Header/BrandReachout";
// import VideoListing from "@/components/Header/VideoListing";
const images = [
  {
    src: "/assets/images/1.webp",
    alt: "Conference hall with audience watching presentation",
  },
  {
    src: "/assets/images/1.webp",
    alt: "Audience members raising hands",
  },
  {
    src: "/assets/images/1.webp",
    alt: "Speaker at podium",
  },
];

const AboutUsPage: React.FC = () => {
  const coreValues = [
    {
      normalText: "Being ",
      boldText: "Ethical",
    },
    {
      normalText: "Enable ",
      boldText: "Growth",
    },
    {
      normalText: "Be ",
      boldText: "Unique",
    },
    {
      normalText: "Advocate ",
      boldText: "Depth",
    },
    {
      normalText: "Drive ",
      boldText: "Insight",
    },
    {
      normalText: "Harness ",
      boldText: "Technology",
    },
    {
      normalText: "Open ",
      boldText: "Minds",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="flex-1">
            <h1 className="text-4xl md:text-7xl font-medium mb-8 lg:mb-36 text-inkBlack">
              Become <br />
              the answer.
            </h1>

            <div className="lg:hidden">
              <ImageCollage images={images} />
            </div>

            <div className="space-y-6 text-inkBlack text-base font-normal">
              <p>
                People Matters is a pan-Asian, digital, subscription-supported
                publication headquartered in Gurgaon, India. Founded by
                experienced professionals in the HR and leadership space, People
                Matters pioneered focused, in-depth online journalism for the
                world of work.Born in January 2009 into a landscape saturated
                with fleeting HR &quot;content&quot;, we chose to forge a path
                of substance and insight. People Matters pioneered a new
                standard for reporting on talent, leadership, and the future of
                work in Asia.
              </p>
              <p>
                Since our inception, we&apos;ve published thousands of articles,
                reports, and analyses that have shaped conversations and
                influenced decisions, and we are proud of the impact we&apos;ve
                created.
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <ImageCollage images={images} />
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-24">
          <h2 className="text-sm font-medium lg:min-w-36 text-inkBlack">
            OUR MISSION:
          </h2>
          <p className="italic font-light text-2xl lg:text-3xl text-inkBlack">
            To empower leaders and organizations across Asia with insightful
            knowledge and transformative experiences, fostering a vibrant
            community dedicated to shaping the future of work.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-inkBlack text-sm font-medium mb-6">
              OUR CORE:
            </h2>
            <p className="text-inkBlack text-base font-normal">
              Our core values drive expert, in-depth talent and leadership
              analysis, ensuring independence and direct accountability to
              subscribers for exceptional value.
            </p>
          </div>

          <div className="lg:w-1/2">
            <div className="space-y-6">
              {coreValues.map((value, index) => (
                <div key={index} className="flex items-center">
                  <h3 className="text-xl lg:text-2xl font-normal text-inkBlack flex-grow">
                    {value.normalText}
                    <span className="font-bold">{value.boldText}</span>
                    <span className="rounded-full text-orange font-bold">
                      .
                    </span>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grid Layout Section */}
        <div className="w-full overflow-x-auto">
          <GridLayout />
        </div>

        {/* Founder Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3 flex justify-center">
            <div className="aspect-square w-full rounded-full overflow-hidden relative">
              <Image
                src="/assets/images/2.webp"
                alt="Founder"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>
          </div>

          <div className="lg:w-2/3">
            <h2 className="text-xl font-medium text-inkBlack mb-6">
              A NOTE ABOUT OUR FOUNDER:
            </h2>

            <div className="lg:hidden w-1/3 flex justify-center mb-6">
              <div className="aspect-square w-full max-w-[256px] rounded-full overflow-hidden relative">
                <Image
                  src="/assets/images/2.webp"
                  alt="Founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
            </div>

            <div className="space-y-6 text-inkBlack text-base font-normal">
              <p>
                People Matters is a pan-Asian, digital, subscription-supported
                publication headquartered in Gurugram, India. Founded by
                experienced professionals in the HR and leadership space, People
                Matters pioneered focused, in-depth online journalism for the
                world of work. Born in January 2009 into a landscape saturated
                with fleeting HR &quot;content,&quot; we chose to forge a path
                of substance and insight. People Matters pioneered a new
                standard for reporting on talent, leadership, and the future of
                work in Asia.
              </p>

              <p>
                Since our inception, we&apos;ve published thousands of articles,
                reports, and analyses that have shaped conversations and
                influenced decisions, and we are proud of the impact we&apos;ve
                created.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <VideoListing /> */}
      {/* <BrandReachout />  */}
    </div>
  );
};

export default AboutUsPage;
