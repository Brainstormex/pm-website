import React from "react";
import JobCard from "./JobCard";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

const jobs = [
  {
    id: 1,
    title: "Copy Desk",
    team: "Content & Research Team",
    location: "Remote",
    salaryRange: "000 - 000",
    postedOn: "21-MAR-2025",
  },
  {
    id: 2,
    title: "Copy Writers",
    team: "Content & Research Team",
    location: "Gurgaon, IN",
    salaryRange: "000 - 000",
    postedOn: "21-MAR-2025",
  },
  {
    id: 3,
    title: "Sr. Front End Developer",
    team: "Engineering",
    location: "Gurgaon, IN",
    salaryRange: "000 - 000",
    postedOn: "21-MAR-2025",
  },
  {
    id: 4,
    title: "Lead Backend Architect",
    team: "Engineering",
    location: "Gurgaon, IN",
    salaryRange: "000 - 000",
    postedOn: "21-MAR-2025",
  },
];

const page = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row w-full items-start lg:space-x-16 space-y-4 lg:space-y-0">
        <h1 className="text-3xl flex-shrink-0 font-medium text-inkBlack tracking-tight">
          Careers.
        </h1>
        <div className="flex-1 flex flex-col gap-12">
          <p className="text-base font-normal text-inkBlack leading-relaxed">
            Innovation is core to People Matters’ DNA. We have a number of
            firsts: 1st Indian HR magazine with a global design and high-end
            multi-media integration (print, online & tablet), 1st Media brand to
            innovative across events offline & online for a niche segment, 1st
            to launch a Radio Show in India, a video channel and Twangout
            calendar for HR leaders in the Region and we’re always looking to
            build the team.
          </p>
          <Image
            src="/assets/images/1.webp"
            alt="header"
            width={1000}
            height={700}
          />
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl text-inkBlack font-bold mb-6">WHY JOIN US?</h2>
            <p className="text-inkBlack mb-8">
              Because our aspiration is to reach every business and HR leaders
              by providing high-quality media products that exceed global design
              standards, are easily consumable and add sophistication to
              business professionals. If high-pace, high-impact is your kind of
              place, if quality and raising the bar is your ethos, if you want
              to learn everyday from business and thought leaders from across
              the world, and you thrive working in teams, you can stop looking
              around.
            </p>
          </div>
          <div className="w-full">
            <SectionHeading
              title="Our Culture"
              textColor="text-orange"
              bgColor="bg-[#F17C0633]"
            />
            <div className="">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <div
                    key={item}
                    className="bg-gray-200 rounded-lg aspect-square"
                  ></div>
                ))}
              </div>
              {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {[5, 6, 7, 8, 9].map((item) => (
                  <div
                    key={item}
                    className="bg-gray-200 rounded-lg aspect-square"
                  ></div>
                ))}
              </div> */}
              <p className="italic text-inkBlack">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>

          <div className="">
            <h2 className="text-xl text-inkBlack font-bold mb-6">OPEN POSITIONS</h2>
            <div className="flex flex-col gap-6">
              {jobs.map((job) => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  team={job.team}
                  location={job.location}
                  salaryRange={job.salaryRange}
                  postedOn={job.postedOn}
                />
              ))}
            </div>
          </div>
          <div className="">
            <h2 className="text-xl text-inkBlack font-bold mb-6">
              DIDN&apos;T FIND WHAT YOU WERE LOOKING FOR?
            </h2>
            <p className="mb-4 text-inkBlack font-normal text-base">
              No Sweat. We&apos;re always searching for great people to join our
              team. If you feel your CV will grab our attention just shoot us an
              email at:{" "}
              <a
                href="mailto:jobs@peoplematter.in"
                className="text-inkBlack font-bold hover:underline"
              >
                jobs@peoplematter.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
