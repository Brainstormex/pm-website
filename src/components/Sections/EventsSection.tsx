import React from "react";
import { Section } from "@/types/common";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Users } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { shortenText} from "@/services/commonFunction";
import { eventsData } from "@/services/dummay";
const getOrdinalSuffix = (day: string) => {
  const num = parseInt(day);
  if (num >= 11 && num <= 13) return 'th';
  
  const lastDigit = num % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

// Add dummy data


export const EventsSection = ({ data }: { data: Section }) => {
  // const events = data.events || [];
  console.log(data, "From Events Section")
  
  if (data.events && data.events.length === 0) {
    data.events = eventsData;
   }

   console.log(data.events,"From Events Section")

  return (
    <section className="max-w-7xl mx-auto py-10 w-full px-4 lg:px-0" data-template={data.template}>
      <div className="flex justify-between items-start mb-0">
        <SectionHeading 
          title={data.label || "Upcoming Events"}
          link={data.link || ""}
        />
      </div>
      <div className="space-y-6">
        {data.events && data.events.map((event, index) => (
          <div key={index} className="bg-white p-0">
            <div className="flex flex-col lg:flex-row justify-between w-full my-4 pb-5 gap-6">
              {/* Date Column */}
              <div className="flex flex-col items-start justify-between lg:border-r border-border lg:mr-2 lg:min-w-[220px]">
                <div className="flex flex-col gap-1">
                  <p className="text-4xl lg:text-5xl font-semibold">
                    {event.startDate && event.startDate}<sup>{getOrdinalSuffix(event.startDate)}</sup>
                    {event.endDate && (
                      <span className="text">-{event.endDate}<sup>{getOrdinalSuffix(event.endDate)}</sup></span>
                    )}
                  </p>
                  <div className="text-sm whitespace-nowrap font-medium">
                    {event.month} | ({(event.days)})
                  </div>
                  <div className="text-sm text-black">{(event.time)}</div>
                </div>
                <div className="flex items-center gap-2 mt-2 lg:mt-0">
                  <MapPin size={18} />
                  <span className="text-xs">{event.location}</span>
                </div>
              </div>

              {/* Content Column */}
              <div className="flex flex-col lg:max-w-sm justify-between items-start lg:mx-2 lg:border-r border-border">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl lg:text-4xl font-medium mb-2">{shortenText(event.title, 20)}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users size={18} />
                    <span>{event.audience || "Data Not Available"}</span>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className="relative w-full h-[200px] lg:w-[300px] lg:mx-4 lg:px-10">
                <Image
                  src={event.image || "/assets/image/dummy.jpg"}
                  alt={event.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* CTA Button */}
              <div className="flex items-center justify-start lg:justify-center lg:min-w-[240px] lg:border-l lg:px-4 lg:mx-4 border-border">
                <Link
                  href={event.link}
                  className="bg-black whitespace-nowrap text-white px-6 py-3 rounded-lg w-full lg:w-auto text-center
                           hover:bg-orange transition-colors duration-300"
                >
                  ADD TO CALENDAR
                </Link>
              </div>
            </div>
            {index === 0 && <hr className="border-border"/>}
          </div>
        ))}
      </div>
    </section>
  );
};