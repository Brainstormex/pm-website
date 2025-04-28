import { Mail } from "lucide-react";
import { Clock } from "lucide-react";
import { Headset } from "lucide-react";
import React from "react";
import LocationCard, { ContactInfo } from "./LocationCard";

 const locationData: ContactInfo[] = [
  {
    country: "India",
    flagSrc: "/assets/flags/indiaFlag.svg",
    title: "SALES & MARKETING",
    hours: "Monday to Friday | 9.30AM to 5.00PM",
    phoneNumbers: [
      { label: "For Sales", number: "+91-7799886309" },
      { label: "For Marketing", number: "+91-9654817064" },
    ],
    email: "brand@gopeoplematters.com",
    offices: [
      {
        name: "GURUGRAM OFFICE",
        address: [
          "24 Work Club By Space Creattors Heights, 3rd Floor, DT",
          "Mega Mall, Golf Course Road, A Block, DLF Phase 1",
          "Gurugram, Haryana - 122022",
        ],
      },
      {
        name: "NOIDA OFFICE",
        address: [
          "Ofis Square Tower, A-1, Block A, Noida Sector 3",
          "Noida, Uttar Pradesh - 201301",
        ],
      },
      {
        name: "BENGALURU OFFICE",
        address: [
          "WorkHome Coworking, 136, 1st Cross Rd, KHB Colony, 5th",
          "Block, Koramangala  Bengaluru, Karnataka - 560034",
        ],
      },
    ],
  },
  {
    country: "Australia",
    flagSrc: "/assets/flags/australiaFlag.svg",
    title: "SALES & MARKETING",
    hours: "Monday to Friday | 9.30AM to 5.00PM",
    phoneNumbers: [
      { label: "For Sales", number: "+91-7799886309" },
      { label: "For Marketing", number: "+91-9654817064" },
    ],
    email: "travel@gopeoplematters.com",
    offices: [
      {
        name: "Adelaide OFFICE",
        address: [
          "24 Work Club By Space Creattors Heights, 3rd Floor, DT",
          "Mega Mall, Golf Course Road, A Block, DLF Phase 1",
          "Gurugram, Haryana - 122022",
        ],
      },
    ],
  },
  {
    country: "New Zealand",
    flagSrc: "/assets/flags/newzealandFlag.svg",
    title: "SALES & MARKETING",
    hours: "Monday to Friday | 9.30AM to 5.00PM",
    phoneNumbers: [
      { label: "For Sales", number: "+91-7799886309" },
      { label: "For Marketing", number: "+91-9654817064" },
    ],
    email: "travel@gopeoplematters.com",
    offices: [
      {
        name: "Adelaide OFFICE",
        address: [
          "24 Work Club By Space Creattors Heights, 3rd Floor, DT",
          "Mega Mall, Golf Course Road, A Block, DLF Phase 1",
          "Gurugram, Haryana - 122022",
        ],
      },
    ],
  },
  {
    country: "Singapore",
    flagSrc: "/assets/flags/singaporeFlag.svg",
    title: "SALES & MARKETING",
    hours: "Monday to Friday | 9.30AM to 5.00PM",
    phoneNumbers: [
      { label: "For Sales", number: "+91-7799886309" },
      { label: "For Marketing", number: "+91-9654817064" },
    ],
    email: "travel@gopeoplematters.com",
    offices: [
      {
        name: "Adelaide OFFICE",
        address: [
          "24 Work Club By Space Creattors Heights, 3rd Floor, DT",
          "Mega Mall, Golf Course Road, A Block, DLF Phase 1",
          "Gurugram, Haryana - 122022",
        ],
      },
    ],
  },
  {
    country: "U.A.E",
    flagSrc: "/assets/flags/uaeFlag.svg",
    title: "SALES & MARKETING",
    hours: "Monday to Friday | 9.30AM to 5.00PM",
    phoneNumbers: [
      { label: "For Sales", number: "+91-7799886309" },
      { label: "For Marketing", number: "+91-9654817064" },
    ],
    email: "travel@gopeoplematters.com",
    offices: [
      {
        name: "Adelaide OFFICE",
        address: [
          "24 Work Club By Space Creattors Heights, 3rd Floor, DT",
          "Mega Mall, Golf Course Road, A Block, DLF Phase 1",
          "Gurugram, Haryana - 122022",
        ],
      },
    ],
  },
];

const page = () => {
  return (
    <div className="container mx-auto space-y-16">
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-medium mb-6 text-inkBlack">
          Contact Us
        </h1>

        <p className="text-inkBlack text-base font-medium leading-relaxed">
          We're eager to connect with you! Whether you're interested in
          exploring advertising opportunities, discussing marketing
          collaborations, forging strategic partnerships, or learning more about
          our solutions, our team is ready to assist. Please use the form below
          or the contact details provided to reach out regarding sales,
          marketing, partnerships, and collaboration inquiries.
        </p>
      </div>
      <div>
        <span className="text-inkBlack font-medium text-base">
          CUSTOMER CARE:
        </span>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between mt-4">
          <div className="flex items-center gap-3">
            <div className="text-inkBlack">
              <Clock size={20} />
            </div>
            <span className="text-inkBlack text-base font-medium">
              Monday to Friday | 9.30AM to 5.00PM
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-inkBlack">
              <Headset size={20} />
            </div>
            <span className="text-inkBlack text-base font-medium">
              Call our office on 0417 381 721
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-inkBlack">
              <Mail size={20} />
            </div>
            <span className="text-inkBlack text-base font-medium">
              Email us at admin@austparents.edu.au
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-10 w-full">
        {locationData.map((location, index) => (
          <div key={index} className="pb-10">
            <LocationCard data={location} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
