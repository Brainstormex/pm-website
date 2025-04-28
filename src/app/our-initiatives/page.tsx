import React from "react";
import GridLayout from "../../components/greyDiv";

const page = () => {
  const sections = [
    {
      number: "1",
      title: "Content",
      description:
        "Our websites connect over 300,000 talented professionals across three regions (India, SEA, ANZ), providing top-quality content, resources, and tools to stay up-to-date with industry trends and practices.",
      items: [
        "People Matters India",
        "People Matters Global",
        "People Matters - Australia & New Zealand",
        "People Matters - Middle East",
      ],
    },
    {
      number: "2",
      title: "Digital Marketing",
      description:
        "Engage your target audience with our comprehensive range of branded content options creating unique and philosophy propagating experiences for viewers and readers.",
      items: [
        "Virtual Panel Discussions",
        "Digital Magazine",
        "Video & Infographics",
        "Research & White Papers",
      ],
    },
    {
      number: "3",
      title: "Digital Initiatives",
      description:
        "Connect with a global community of HR professionals, learn from their experiences, and stay updated on the latest people and work trends, insights and best practices from industry experts and thought leaders with People Matters' new digital initiatives.",
      items: [
        "Unplugged Podcast",
        "The Big Question",
        "Perspective LinkedIn",
        "Weekly Newsletters",
      ],
    },
    {
      number: "4",
      title: "Community",
      description:
        "Gain in-depth HR leadership knowledge and firsthand experience with innovative strategies through exclusive events and brand-led Study Tours.",
      items: [
        "CHRO Roundtable",
        "Partner Exclusives",
        "Study Tours",
        "Are You in the List Awards",
      ],
    },
    {
      number: "5",
      title: "Annual Conferences",
      description:
        "Our annual conferences in India offer unparalleled opportunities for HR professionals to connect, learn, and grow through Asia's largest TechHR conference and other unique platforms. Recognising outstanding innovation and accomplishments, the conferences are the place to network, gain insights and showcase expertise.",
      items: [
        "TechHR India",
        "TA Conference",
        "L&D India Conference",
        "L&D SEA Conference",
        "Total Rewards & Well-Being Conference",
        "EX India Conference",
        "EX Indonesia Conference",
      ],
    },
  ];
  return (
    <div className="container mx-auto space-y-16">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-start lg:space-x-24 space-y-4 lg:space-y-0">
          <h1 className="text-3xl flex-shrink-0 font-medium text-inkBlack tracking-tight">
            Our Initiatives.
          </h1>
          <div className="lg:flex-grow w-full">
            <p className="text-base font-normal text-inkBlack leading-relaxed">
              We provide expert-designed, integrated learning architectures that
              directly resolve talent challenges. Leveraging diverse platforms,
              we deliver comprehensive media solutions and essential content,
              driving impactful learning experiences.
            </p>
          </div>
        </div>
      </div>
      <GridLayout />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div key={section.number} className="flex">
            <div className="bg-white rounded-lg p-6 flex flex-col justify-between w-full">
              <div>
                <h2 className=" mb-4 text-inkBlack">
                  <span className="font-bold text-3xl md:text-5xl text-inactiveGray mr-2">
                    {section.number}.
                  </span>
                  <span className="font-medium text-3xl md:text-5xl text-inkBlack md:whitespace-nowrap">
                    {section.title}
                  </span>
                </h2>
                <p className="text-inkBlack text-base font-normal mb-4">
                  {section.description}
                </p>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="text-inkBlack flex items-center hover:text-orange cursor-pointer"
                    >
                      <div className="w-1.5 h-1.5 bg-black rounded-full mr-2.5"></div>
                      {item}<span className="text-orange ml-1 text-base font-normal">&gt;</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
