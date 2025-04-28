import React from "react";
import SectionHeading from "./SectionHeading/SectionHeading";
import { Button } from "./ui/Button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const PremiumContentWall = () => {
  return (
    <div className="relative -top-20 w-2/3 mx-auto pt-32 bg-white bg-opacity-50">
      <div className="flex flex-col gap-7">
        <SectionHeading
          bgColor="bg-[#F17C0633]"
          textColor="text-orange"
          title="Premium content"
        />
        <h2 className="text-[32px] font-medium leading-9">
          Subscribe and up your people game today! <br />
          <span className="text-orange">Starting at ₹50/day.</span>{" "}
        </h2>
        <p className="text-lg font-medium">
          Unprecedented depth in research, insights and content in the world of
          human resources, leadership, recruitment and everything people in
          organisations. Here are a few benefits:
        </p>
        <ul className="text-lg font-medium list-disc pl-6">
          <li className="">Access to all our premium content</li>
          <li className="">
            Get access to highly specialised industry research reports
          </li>
          <li className="">
            Priority Newsletter: Get to know industry relevant news, the first
          </li>
          <li className="">Access to upto 3 Devices</li>
          <li className="">
            Get access to early bird tickets and benefits for all People Matters
            Events & Conferences
          </li>
        </ul>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button colorVariant="secondary" capitalize>
              Subscribe Now
            </Button>
            <Button capitalize>Subscribe Now</Button>
            <span className="text-borderGray">(2 Reads Left)</span>
          </div>
          <div className="flex items-center gap-2 font-bold">
            <p className="text-xs uppercase">
              ALREADY A READER?{" "}
              <Link href="#" className="text-orange">
                LOGIN
              </Link>
            </p>
            <ChevronRight size={16} />
          </div>
        </div>
        <div className="w-full  border-t-0.5 border-border "></div>
        <p className="text-borderGray text-lg font-medium">
          Trusted by 50,000+ professionals and leaders in the space of human
          resources from across India, Middle East, South East Asia, Australia
          and New Zealand.
        </p>
        <div className="grid grid-cols-6 gap-11">
          <div className="relative aspect-square w-full">
            <Image
              src="/assets/goodera.svg"
              alt="Wooden door with heart symbol"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src="/assets/aon.svg"
              alt="Wooden door with heart symbol"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src="/assets/indeed.svg"
              alt="Wooden door with heart symbol"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src="/assets/upgrad.svg"
              alt="Wooden door with heart symbol"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src="/assets/linkedin-sol.svg"
              alt="Wooden door with heart symbol"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src="/assets/skillsoft.svg"
              alt="Wooden door with heart symbol"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumContentWall;
