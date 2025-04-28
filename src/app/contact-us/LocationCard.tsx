// components/LocationCard.tsx
import React from "react";
import Image from "next/image";

export interface ContactInfo {
  title: string;
  hours?: string;
  phoneNumbers?: {
    label: string;
    number: string;
  }[];
  email?: string;
  offices: {
    name: string;
    address: string[];
  }[];
  country: string;
  flagSrc: string;
}

const LocationCard = ({ data }: { data: ContactInfo }) => {
  return (
    <div className="max-w-3xl flex flex-col md:flex-row lg:w-3/4 w-full justify-between lg:gap-0 gap-8 p-6">
      <div className="flex items-center h-fit gap-4">
        <div className="relative w-16 h-16">
          <Image
            src={data.flagSrc}
            alt={`${data.country} flag`}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h2 className="text-xl font-medium text-inkBlack">{data.country}</h2>
      </div>

      <div className="space-y-6 w-[60%]">
        <div>
          <h3 className="text-sm font-bold text-inkBlack mb-4">{data.title}</h3>

          {data.hours && (
            <div className="flex items-center gap-3 mb-4">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-inkBlack text-base font-medium">{data.hours}</p>
            </div>
          )}

          {data.phoneNumbers &&
            data.phoneNumbers.map((phone, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-inkBlack text-base font-medium">
                    {phone.label}: {phone.number}
                  </p>
                </div>
              </div>
            ))}

          {data.email && (
            <div className="flex items-center gap-3 mb-4">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-inkBlack text-base font-medium">
                Email us at {data.email}
              </p>
            </div>
          )}
        </div>

        {data.offices.map((office, index) => (
          <div key={index} className="pt-5">
            <h4 className="text-sm font-bold text-inkBlack mb-3">
              {office.name}:
            </h4>
            <div className="pl-1">
              {office.address.map((line, lineIndex) => (
                <p key={lineIndex} className="text-inkBlack text-base font-medium mb-1">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationCard;
