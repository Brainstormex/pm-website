"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Linkedin } from "lucide-react";
import { pageService } from "@/services/pageServices";

// Event type definition with additional fields
type Event = {
  id: string;
  title: string;
  type: "CONFERENCE" | "VIRTUAL";
  date: string;
  time?: string;
  location?: string;
  description?: string;
  imageUrl?: string;
  speakers?: Speaker[];
  keyInsights?: string[];
  whoShouldAttend?: {
    title: string;
    description: string;
    attendees: Array<{
      role: string;
      description: string;
    }>;
  };
  whyShouldAttend?: {
    description: string;
    reasons: Array<{
      title: string;
      description: string;
    }>;
  };
  gallery?: GalleryImage[];
  overview?: string;
  quote?: string;
  slug?: string;
};

// Sort options type
type SortOption = {
  label: string;
  value: string;
};

// Add Speaker type
type Speaker = {
  id: string;
  name: string;
  email: string;
  linkedIn?: string;
  imageUrl?: string;
};

// Add a type for gallery images
type GalleryImage = {
  src: string;
  alt: string;
}

// Create a reusable component for gallery images
const GalleryImageBox = ({ image }: { image?: GalleryImage }) => {

  


  return (
    <div className="rounded-lg overflow-hidden aspect-[4/3] bg-gray-200">
      {image?.src ? (
        <Image 
          src={image.src} 
          alt={image.alt || "Event photo"} 
          width={240} 
          height={180} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full"></div>
      )}
    </div>
  )
}

const EventCard = ({
  event,
  isActive,
  onClick,
}: {
  event: Event;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <Link
      href={`/events/${event.slug}`}
      className={`border-b w-full inline-block border-border py-4 cursor-pointer ${
        isActive ? "text-orange border-orange " : ""
      }`}
      onClick={onClick}
    >
      <h2 className="text-lg font-medium text-orange-500">{event.title}</h2>
      <div className="flex items-center gap-2 text-gray-500 mt-2">
        <span className="text-sm font-medium">{event.location}</span>
        <span>|</span>
        <span className="text-sm font-medium">{event.date}</span>
      </div>
    </Link>
  );
};

// Add SpeakerCard component
const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
        {speaker.imageUrl ? (
          <Image
            src={speaker.imageUrl}
            alt={speaker.name}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gray-200"></div>
        )}
      </div>
      <div>
        <h3 className="text-xl font-bold">{speaker.name}</h3>
        <div className="flex items-center gap-4 text-gray-500 mt-2">
          <a
            href={`https://linkedin.com/in/${speaker.linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-orange-500"
          >
            <Linkedin size={18} className="mr-1" />
          </a>
          <span>|</span>
          <a
            href={`mailto:${speaker.email}`}
            className="flex items-center hover:text-orange-500"
          >
            <span>{speaker.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const EventDetail = ({ event }: { event: Event }) => {
  // Gallery images data - now coming from event object
  const galleryImages: GalleryImage[] = event.gallery || [];

  return (
    <div className="p-8">
      <div className="flex justify-between items-start mb-12">
        <h1 className="text-4xl font-bold text-gray-900">{event.title}</h1>
        <button className="bg-gray-900 text-white px-6 py-3 rounded font-medium hover:bg-black transition-colors">
          REGISTER NOW
        </button>
      </div>
      
      <div className="flex flex-row justify-between items-center w-full">
        <div className="grid grid-cols-3 gap-0 pb-8">
          <div>
            <p className="text-gray-500 mb-1">Date</p>
            <p className="font-medium text-sm">{event.date}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Time</p>
            <p className="font-medium text-sm">{event.time || 'TBA'}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Location</p>
            <p className="font-medium underline text-sm hover:text-orange-500 cursor-pointer">
              {event.location || 'Online'}
            </p>
          </div>
        </div>
      
        <div className="mb-8 flex justify-end">
          <button className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">ADD TO CALENDAR</span>
          </button>
        </div>
      </div>
      
      {event.imageUrl && (
        <div className="rounded-xl border-2 border-[#a4a4a4] overflow-hidden mb-8">
          <div className="relative w-full h-[500px]">
            <Image 
              src={event.imageUrl} 
              alt={event.title} 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      )}
      

      
      {/* Overview Section */}
      {event.overview && (
        <div className="my-12">
          <p className="text-gray-800 mb-8">{event.overview}</p>
          
          {event.quote && (
            <p className="text-2xl italic font-serif mb-8">{event.quote}</p>
          )}
        </div>
      )}
      
      {/* Speakers section */}
      {event.speakers && event.speakers.length > 0 && (
        <div className="mt-12">
          <div className="flex flex-col w-full gap-4 border-t border-border my-3">
            <div className="flex justify-between items-start pb-5">
              <h2 className="lg:text-sm uppercase tracking-wider lg:tracking-widest lg:px-6 px-4 font-medium text-left bg-[#F17C06]/20 text-[#F17C06] lg:py-3 py-4 rounded-b-lg">
                Speakers
              </h2>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-8">SECTION TITLE HERE</h2>
          
          <p className="text-gray-700 mb-12">Body of the text can come here</p>
          
          <div>
            {event.speakers.map(speaker => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>
        </div>
      )}
      
      {/* Key insights section */}
      {event.keyInsights && event.keyInsights.length > 0 && (
        <div className="mt-16">
          <p className="text-gray-800 font-medium text-lg mb-6">
            At the {event.title}, participants will gain a comprehensive view and actionable
            insights into critical areas such as:
          </p>
          
          <ul className="list-disc pl-5 space-y-3 mb-12 text-orange-500">
            {event.keyInsights.map((insight, index) => (
              <li key={index}>
                <span className="text-gray-800">{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Who should attend section */}
      {event.whoShouldAttend && (
        <div className="mt-16 border-t pt-12">
          <h2 className="text-2xl font-medium mb-6">WHO SHOULD ATTEND</h2>
          
          <h3 className="text-xl font-normal mb-2">{event.whoShouldAttend.title}</h3>
          <p className="text-gray-800 mb-6">{event.whoShouldAttend.description}</p>
          
          <ul className="list-disc pl-5 space-y-6 mb-12 text-orange-500">
            {event.whoShouldAttend.attendees.map((attendee, index) => (
              <li key={index}>
                <span className="text-gray-800">
                  <strong>{attendee.role}:</strong> {attendee.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Why should they attend section */}
      {event.whyShouldAttend && (
        <div className="mt-16 border-t pt-12">
          <h2 className="text-2xl font-medium mb-6">WHY SHOULD THEY ATTEND</h2>
          
          <p className="text-gray-800 mb-6">{event.whyShouldAttend.description}</p>
          
          <ul className="list-disc pl-5 space-y-6 mb-12 text-orange-500">
            {event.whyShouldAttend.reasons.map((reason, index) => (
              <li key={index}>
                <span className="text-gray-800">
                  <strong>{reason.title}:</strong> {reason.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Event Gallery Section */}
      {galleryImages.length > 0 && (
        <div className="mt-16 border-t pt-12">
          <div className="flex flex-col w-full gap-4 border-t border-border my-3">
            <div className="flex justify-between items-start pb-5">
              <h2 className="lg:text-sm uppercase tracking-wider lg:tracking-widest lg:px-6 px-4 font-medium text-left bg-[#F17C06]/20 text-[#F17C06] lg:py-3 py-4 rounded-b-lg">
                EVENT GALLERY
              </h2>
            </div>
          </div>
          
          {/* First row of images */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            {galleryImages.slice(0, 4).map((image, index) => (
              <GalleryImageBox key={index} image={image} />
            ))}
          </div>
          
          {/* Second row of images */}
          {galleryImages.length > 4 && (
            <div className="grid grid-cols-4 gap-4">
              {galleryImages.slice(4, 8).map((image, index) => (
                <GalleryImageBox key={index + 4} image={image} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Create a data file or fetch from API
// const getEventsData = (): Event[] => {
//   return [
//     {
//       id: "gcc-summit-2025",
//       title: "GCC Talent Summit 2025",
//       type: "CONFERENCE",
//       date: "25-FEB-2025",
//       time: "9.00am to 5.00pm",
//       location: "The Leela Palace, Bengaluru",
//       imageUrl: "/assets/images/25.webp",
//       overview: "As Global Capability Centres (GCCs) evolve into strategic powerhouses driving global innovation, talent remains their most critical asset. Their success heavily relies on skilled professionals, and with the industry expected to boom in the coming years, India is set to become a major hub for GCC talent.",
//       quote: "The GCC Talent Summit 2025 will provide opportunities for networking and knowledge sharing, fostering partnerships that can drive transformation across the GCC ecosystem.",
//       speakers: [
//         {
//           id: "speaker-1",
//           name: "First Last Name",
//           email: "email@email.com",
//           linkedIn: "firstlastname",
//         },
//         {
//           id: "speaker-2",
//           name: "First Last Name",
//           email: "email@email.com",
//           linkedIn: "firstlastname",
//         },
//       ],
//       keyInsights: [
//         "Talent acquisition and retention",
//         "Rewards and recognition",
//         "Skill Development",
//         "Regulatory Compliance",
//         "Cultural Integration"
//       ],
//       whoShouldAttend: {
//         title: "Who Should Attend?",
//         description: "This event is tailored for key decision-makers and influencers within GCC organizations, particularly those involved in shaping the future of work, technology, and human capital. The following individuals will find immense value in attending:",
//         attendees: [
//           {
//             role: "CXOs",
//             description: "CEOs, CIOs, CTOs, CFOs, and other C-suite executives who are responsible for driving organizational strategy, innovation, and growth."
//           },
//           {
//             role: "HR Leaders",
//             description: "CHROs, VPs of HR, Directors of Talent Acquisition, Learning and Development, and other HR professionals who are focused on attracting, retaining, and developing top talent."
//           },
//           {
//             role: "IT Heads",
//             description: "IT Directors, CIOs, CISOs, and other technology leaders who are responsible for overseeing the organization's technology infrastructure, digital transformation initiatives, and cybersecurity."
//           }
//         ]
//       },
//       whyShouldAttend: {
//         description: "Attendees will gain valuable insights and knowledge on the latest trends, best practices, and innovative solutions in the following areas:",
//         reasons: [
//           {
//             title: "The Future of Work",
//             description: "Explore the evolving landscape of work, including remote work, hybrid models, agile methodologies, and the impact of AI and automation."
//           },
//           {
//             title: "Talent Management",
//             description: "Learn strategies for attracting, engaging, and retaining top talent in a competitive market, including employer branding, employee experience, and leadership development."
//           },
//           {
//             title: "Technology and Innovation",
//             description: "Discover the latest technologies that are transforming businesses, including cloud computing, cybersecurity, data analytics, and artificial intelligence."
//           },
//           {
//             title: "Leadership and Culture",
//             description: "Develop leadership skills and create a positive and inclusive work culture that fosters innovation, collaboration, and employee well-being."
//           },
//           {
//             title: "Networking",
//             description: "Connect with peers, industry experts, and potential partners to share ideas, build relationships, and explore new opportunities."
//           }
//         ]
//       },
//       gallery: [
//         { src: "/images/gallery/event-1.jpg", alt: "Event photo 1" },
//         { src: "/images/gallery/event-2.jpg", alt: "Event photo 2" },
//         { src: "/images/gallery/event-3.jpg", alt: "Event photo 3" },
//         { src: "/images/gallery/event-4.jpg", alt: "Event photo 4" },
//         { src: "/images/gallery/event-5.jpg", alt: "Event photo 5" },
//         { src: "/images/gallery/event-6.jpg", alt: "Event photo 6" },
//         { src: "/images/gallery/event-7.jpg", alt: "Event photo 7" },
//         { src: "/images/gallery/event-8.jpg", alt: "Event photo 8" }
//       ]
//     },
//     {
//       id: "rewiring-workplace",
//       title: "Rewiring The Workplace",
//       type: "VIRTUAL",
//       date: "27-FEB-2025",
//       time: "2.00pm to 4.00pm",
//     },
//     {
//       id: "leadership-blueprint",
//       title: "The Leadership Blueprint",
//       type: "VIRTUAL",
//       date: "04-MAR-2025",
//     },
//     {
//       id: "employee-experience",
//       title: "Elevating Employee Experience",
//       type: "VIRTUAL",
//       date: "04-MAR-2025",
//     },
//     {
//       id: "talent-connect",
//       title: "Talent Connect India",
//       type: "VIRTUAL",
//       date: "06-MAR-2025",
//     },
//     {
//       id: "techhr-delhi",
//       title: "TechHR India (Delhi)",
//       type: "CONFERENCE",
//       date: "31-JUL-2025",
//       location: "Taj Palace, New Delhi",
//     },
//   ];
// };

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [sortBy, setSortBy] = useState<string>("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  

  const sortOptions: SortOption[] = [
    { label: "All Formats", value: "all" },
    { label: "Conference Only", value: "conference" },
    { label: "Virtual Only", value: "virtual" },
    { label: "Newest First", value: "newest" },
    { label: "Oldest First", value: "oldest" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (option: SortOption) => {
    setSortBy(option.value);
    setIsDropdownOpen(false);
    
    // Apply sorting logic
    let sortedEvents = [...events];
    
    if (option.value === "conference") {
      sortedEvents = events.filter(event => event.type === "CONFERENCE");
    } else if (option.value === "virtual") {
      sortedEvents = events.filter(event => event.type === "VIRTUAL");
    } else if (option.value === "newest") {
      sortedEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (option.value === "oldest") {
      sortedEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    
    // Update selected event if needed
    if (sortedEvents.length > 0 && !sortedEvents.find(e => e.id === selectedEvent?.id)) {
      setSelectedEvent(sortedEvents[0]);
    }
  };

  // const [events, setEvents] = useState<Event[]>([]);
  // const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadEvents = async () => {
    try {
      setLoading(true);
      const response = await pageService.getEvents(false);
      console.log("response=>", response);
      setEvents(response.data.data);
      // setYearEventCounts(response.data.yearEventCounts || []);
    } catch (error) {
      console.error("Error loading events:", error);
      setError("Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header section */}
      <div className="flex justify-between items-center mb-8 border-b border-[#121212] pb-4">
        <div className="flex flex-col gap-4">
          <Link href="/events" className="text-xs font-bold text-inkBlack">
            GO BACK
          </Link>
        <h1 className="text-5xl font-bold">
          Upcoming Events<span className="text-orange">.</span>
        </h1>
        </div>

        <div className="relative">
          <button
            className="border border-[#A0A0A0] rounded-md px-4 py-2 flex items-center gap-2"
            onClick={toggleDropdown}
          >
            <span className="text-sm text-black">
              Sort By: {sortOptions.find((opt) => opt.value === sortBy)?.label}
            </span>
            <ChevronDown className="h-5 w-5" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black border rounded-md shadow-lg z-10">
              {sortOptions.map((option) => (
                <div
                  key={option.value}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortChange(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="flex">
        {/* Left sidebar with events list */}
        <div className="w-1/4 border-r">
          <div className="pr-8">
            <h1 className="text-sm font-medium mb-2">UPCOMING</h1>

            <div className="">
              {events.map((event) => (
                <EventCard
                  key={event.slug}
                  event={event}
                  isActive={selectedEvent?.slug === event.slug}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/events/archived"
                className="text-gray-400 hover:text-gray-600"
              >
                VIEW ARCHIVED EVENTS &gt;
              </Link>
            </div>
          </div>
        </div>

        {/* Right side with event details */}
        <div className="w-3/4">
          {selectedEvent && <EventDetail event={selectedEvent} />}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
