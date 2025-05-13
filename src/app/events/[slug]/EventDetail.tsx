import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Linkedin, Globe } from "lucide-react";
import { pageService } from "@/services/pageServices";
import EventSidebar from "./EventSidebar";
import { Agenda, Event, Speaker } from "@/types/common";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { Button } from "@/components/ui/Button";
// Event type definition with additional fields
// type Event = {
//   id: string;
//   title: string;
//   type: "CONFERENCE" | "VIRTUAL";
//   date: string;
//   month?: string;
//   year?: number;
//   startDate?: string;
//   endDate?: string;
//   time?: string;
//   location?: string;
//   description?: string;
//   imageUrl?: string;
//   speakers?: Speaker[];
//   keyInsights?: string[];
//   whoShouldAttend?: {
//     title: string;
//     description: string;
//     attendees: Array<{
//       role: string;
//       description: string;
//     }>;
//   };
//   whyShouldAttend?: {
//     description: string;
//     reasons: Array<{
//       title: string;
//       description: string;
//     }>;
//   };
//   gallery?: string[];
//   overview?: string;
//   quote?: string;
//   slug?: string;
// };

// Add Speaker type
// type Speaker = {
//   id: string;
//   name: string;
//   email?: string;
//   linkedIn?: string;
//   imageUrl?: string;
//   description?: string;
// };

// Add SpeakerCard component
// const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
//   return (

//   );
// };

export default function EventDetail({
    event,
    events,
    slug,
    archived,
  }: {
    event: Event
    events: Event[]
    slug: string
    archived: boolean
  }) {
    console.log("EventDetail - archived prop:", archived);
    console.log("EventDetail - event:", event);
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-8">
        <div className="flex gap-8">
          {/* Left sidebar with events list */}
          <div className="w-1/4 sticky top-24">
            <EventSidebar events={events} currentSlug={slug} archived={archived} />
          </div>

          {/* Right side with event details */}
          <div className="w-3/4">
            {/* Header with back button */}
            {/* <div className="mb-8">
              <Link
                href="/events"
                className="text-xs font-bold text-inkBlack hover:text-orange-500"
              >
                GO BACK TO EVENTS
              </Link>
            </div> */}

            <div className="flex justify-between items-start mb-12">
              <h1 className="text-4xl font-bold text-gray-900">{event.title}</h1>
              <Button className="bg-inkBlack text-white whitespace-nowrap h-fit py-3 px-6">SAVE TO MY CALENDAR</Button>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex gap-7 pb-8">
                <div className="pr-5">
                  <p className="text-gray-500 mb-1">Date</p>
                  <p className="font-medium text-sm">{event.date}</p>
                </div>
                <div className="pr-5">
                  <p className="text-gray-500 mb-1">Time</p>
                  <p className="font-medium text-sm">{event.time || "TBA"}</p>
                </div>
                <div className="pr-5">
                  <p className="text-gray-500 mb-1">Location</p>
                  <p className="font-medium underline text-sm hover:text-orange-500 cursor-pointer">
                    {event.location || "Online"}
                  </p>
                </div>
              </div>

              <div className="mb-8 flex justify-end">
                <button className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition-colors">
                  <Globe size={18} />
                  <span className="font-medium">VISIT WEBSITE</span>
                </button>
              </div>
            </div>

            {/* {event.imageUrl && ( */}
              <div className="rounded-xl border-2 border-[#a4a4a4] overflow-hidden mb-8">
                <div className="relative w-full h-[500px]">
                  <Image
                    src={event.imageUrl || "/assets/images/dummy.jpg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            {/* )} */}

            {/* Overview Section */}
            {event.description && (
              <div className="my-12">
                <p className="text-gray-800 mb-8">{event.description}</p>

                {event.quote && (
                  <p className="text-2xl italic font-serif mb-8">{event.quote}</p>
                )}
              </div>
            )}

            {/* Speakers section */}
            {event.speakers && event.speakers.length > 0 && (
              <div className="mt-12">
                {/* <div className="flex flex-col w-full gap-4 border-t border-border mt-3">
                  <div className="flex justify-between items-start">
                    <h2 className="lg:text-sm uppercase tracking-wider lg:tracking-widest lg:px-6 px-4 font-medium text-left bg-[#F17C06]/20 text-[#F17C06] lg:py-3 py-4 rounded-b-lg">
                      Speakers
                    </h2>
                  </div>
                </div> */}
                <SectionHeading
                  title="Speakers"
                  bgColor="bg-orange/20"
                  textColor="text-orange"
                />

                <div className="mt-8">
                  {event.speakers.map((speaker: Speaker) => (
                    <div key={speaker.id || speaker.name} className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                        {speaker.image ? (
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-base font-normal">{speaker.name}</h3>
                        {speaker.description && (
                          <p className="text-inactiveGray mt-1">
                            {speaker.description}
                          </p>
                        )}
                        <div className="flex items-center gap-4 text-gray-500 mt-2">
                          {speaker.linkedIn && (
                            <a
                              href={`https://linkedin.com/in/${speaker.linkedIn}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:text-orange-500"
                            >
                              <Linkedin size={18} className="mr-1" />
                            </a>
                          )}
                          {speaker.email && (
                            <>
                              <span>|</span>
                              <a
                                href={`mailto:${speaker.email}`}
                                className="flex items-center hover:text-orange-500"
                              >
                                <span>{speaker.email}</span>
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key insights section */}
            {event.keyInsights && event.keyInsights.length > 0 && (
              <div className="mt-16">
                <p className="text-gray-800 font-medium text-lg mb-6">
                  At the {event.title}, participants will gain a comprehensive
                  view and actionable insights into critical areas such as:
                </p>

                <ul className="list-disc pl-5 space-y-3 mb-12 text-orange-500">
                  {event.keyInsights.map((insight: string, index: number) => (
                    <li key={`insight-${index}`}>
                      <span className="text-gray-800">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Who should attend section */}
            {event.whoShouldAttend && event.whoShouldAttend.length > 0 && (
              <div className="mt-16">
                <h3 className="text-inkBlack font-bold text-lg mb-6">
                  WHO SHOULD ATTEND
                </h3>
                <p className="text-inkBlack font-normal text-lg mb-6">
                  {event.whoShouldAttend}
                </p>
              </div>
            )}
            {/* Why should attend section */}
            {event.whyShouldAttend && event.whyShouldAttend.length > 0 && (
              <div className="mt-16">
                <h3 className="text-inkBlack font-bold text-lg mb-6">
                  WHY SHOULD THEY ATTEND
                </h3>
                {event.whyShouldAttend.map((item: Agenda, index: number) => (
                  <div key={`why-attend-${index}`} className="mb-6">
                    <p className="text-inkBlack font-bold text-lg mb-2">
                      {item.title}
                    </p>
                    <p className="text-inkBlack font-normal text-lg mb-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Event Gallery Section */}
            {event.gallery && event.gallery.length > 0 && (
              <div className="mt-16">
                <SectionHeading
                  title="EVENT GALLERY"
                  bgColor="bg-orange/20"
                  textColor="text-orange"
                />

                <div className="grid grid-cols-4 gap-4">
                  {event.gallery.map((imageUrl: string, index: number) => (
                    <div
                      key={`gallery-${index}`}
                      className="rounded-lg overflow-hidden aspect-[4/3] bg-gray-200"
                    >
                      <Image
                        src={imageUrl}
                        alt={`Event photo ${index + 1}`}
                        width={240}
                        height={180}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* More Info Section */}
            <div className="mt-16">
              <SectionHeading
                title="MORE INFO"
                bgColor="bg-orange/20"
                textColor="text-orange"
              />
            </div>
            <p className="text-inkBlack font-normal text-lg mb-6">
                  Still feel like you need more information? We're here to help.
                  Connect with anyone below to learn more information or ask to be
                  contacted:
                </p>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={`/assets/images/dummy.jpg`}
                  alt={`Benzina Noronha`}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-base font-normal">Benzina Noronha</h3>
                <div className="flex items-center gap-4 text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="relative h-3 w-3 mb-1">
                      <Image src="/assets/linkedIn.svg" alt="LinkedIn" fill />
                    </div>
                    <span>|</span>
                    <Link
                      href={`mailto:benzina.noronha@peoplematters.com`}
                      className="flex items-center hover:text-orange-500"
                    >
                      <span>benzina.noronha@peoplematters.com</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }     

