import React from "react";
import Image from "next/image";
import {
  Clock,
  Mail,
  Headset,
  Globe,
  Search,
  Headphones,
  HelpCircle,
  Flag,
  Star,
} from "lucide-react";
import GridLayout from "@/components/greyDiv";
import Metric from "./Metric";
import FeatureCard, { FeatureCardProps } from "./FeatureCard";
import CaseStudyCard, { CaseStudyProps } from "./CaseStudyCard";
import { Button } from "@/components/ui/Button";

const features: FeatureCardProps[] = [
  {
    icon: <Globe />,
    title: "India, ANZ & Global Website",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis commodo magnis arcu erat erat. Amet tempus ornare inceptos aptent dignissim. Fermentum mi montes aenean inceptos morbi.",
  },
  {
    icon: <Search />,
    title: "Expert Conversations & Analysis",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis commodo magnis arcu erat erat. Amet tempus ornare inceptos aptent dignissim. Fermentum mi montes aenean inceptos morbi.",
  },
  {
    icon: <Headphones />,
    title: "Unplugged Podcast",
    description:
      "People Matters CEO and Editor-in-Chief Ester Martinez gives you a candid, insider look at what it takes to be among the best of the best in People & Work in Asia Pacific.",
  },
  {
    icon: <HelpCircle />,
    title: "The Big Question",
    description:
      "A series of discussions on LinkedIn with notable industry leaders offering insights and perspectives on some of the most urgent issues in the realm of people and work.",
  },
  {
    icon: <Flag />,
    title: "Leading Edge",
    description:
      "A powerhouse series of exclusive interviews with global CEOs and MDs from leading organisations covering leadership, hybrid work, employee well-being, DEI and the larger world of work.",
  },
  {
    icon: <Star />,
    title: "Brand Reachout Initiative",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis commodo magnis arcu erat erat. Amet tempus ornare inceptos aptent dignissim. Fermentum mi montes aenean inceptos morbi.",
  },
];

interface MetricProps {
  value: string;
  label: string;
}

const metrics: MetricProps[] = [
  {
    value: "2.5 Million+",
    label: "Monthly Views",
  },
  {
    value: "1.5 Million+",
    label: "Active Users",
  },
  {
    value: "600K +",
    label: "Conference Eyeballs",
  },
  {
    value: "10 Million+",
    label: "Digital Content Views",
  },
  {
    value: "150K +",
    label: "Newsletter Subscribers",
  },
];

const caseStudies: CaseStudyProps[] = [
  {
    date: "ENGAGEMENT MONTH, YEAR",
    title: "Title of the engagement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "/assets/images/1.webp",
  },
  {
    date: "ENGAGEMENT MONTH, YEAR",
    title: "Title of the engagement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "/assets/images/1.webp",
  },
  {
    date: "ENGAGEMENT MONTH, YEAR",
    title: "Title of the engagement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "/assets/images/1.webp",
  },
  {
    date: "ENGAGEMENT MONTH, YEAR",
    title: "Title of the engagement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "/assets/images/1.webp",
  },
];

const page = () => {
  return (
    <div className="container mx-auto space-y-16">
      <div className="max-w-5xl mx-auto">
        {/* <div className="flex flex-col md:flex-row justify-between items-start gap-8"> */}
        <div className="flex-1">
          <div className="flex gap-6 flex-col lg:flex-row">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl md:text-4xl font-medium text-inkBlack">
                Advertise with us.
              </h1>

              <p className="text-inkBlack text-base font-normal leading-relaxed">
                We provide knowledge and experience-driven platform, innovative
                customized experiences that tackle talent challenges head-on.
                Solutions for brands and companies (engagement and connects with
                the right prospects to accelerate business growth), who want to
                make their mark in the space of people and work.
              </p>
            </div>
            <Button className="self-end whitespace-nowrap w-full lg:w-auto">
              DOWNLOAD SALES DECK
            </Button>
          </div>

          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-3">
              <div className="text-gray-500">
                <Clock size={20} />
              </div>
              <span className="text-gray-700">
                Monday to Friday | 9.30AM to 5.00PM
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-gray-500">
                <Headset size={20} />
              </div>
              <span className="text-gray-700">
                Call our office on 0417 381 721
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-gray-500">
                <Mail size={20} />
              </div>
              <span className="text-gray-700">
                Email us at admin@austparents.edu.au
              </span>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* Mission Section */}

      <div className="flex w-full lg:gap-24 gap-4 flex-col lg:flex-row">
        <h2 className="text-sm font-medium min-w-36 text-inkBlack">
          OUR MISSION:
        </h2>
        <p className="italic font-light text-2xl lg:text-3xl text-inkBlack">
          Broaden perspectives, inspire new ways of thinking and encourage
          experimentation, action, and learning, to progress & advance the
          impact of People & work in the advancement of society.
        </p>
      </div>

      <Image
        src="/assets/images/map.webp"
        alt="header"
        width={1000}
        height={700}
      />
      {/* Our Reach Section */}
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left column with text */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-lg font-bold uppercase mb-4 text-inkBlack">
              OUR REACH:
            </h2>
            <p className="text-inkBlack">
              Partner with People Matters Studios to connect with a highly
              engaged audience of HR and talent professionals through
              unparalleled insights in the space of people & work into the
              unique opportunities of the APAC market
            </p>
          </div>

          {/* Right column with metrics */}
          <div className="md:w-1/2">
            {metrics.map((metric, index) => (
              <Metric key={index} value={metric.value} label={metric.label} />
            ))}
          </div>
        </div>
      </div>
      <GridLayout />
      <p className="text-inkBlack text-base font-normal leading-relaxed lg:w-1/2 w-full">
        People Matters is a pan-Asian, digital, subscription-supported
        publication headquartered in Gurugram, India. Founded by experienced
        professionals in the HR and leadership space, People Matters pioneered
        focused, in-depth online journalism for the world of work. Born in
        January 2009 into a landscape saturated with fleeting HR “content,” we
        chose to forge a path of substance and insight. People Matters pioneered
        a new standard for reporting on talent, leadership, and the future of
        work in Asia. Since our inception, we’ve published thousands of
        articles, reports, and analyses that have shaped conversations and
        influenced decisions, and we are proud of the impact we’ve created.
      </p>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      {/* Case Study Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Some of our case studies
        </h2>

        <p className="text-inkBlack text-base font-normal leading-relaxed mb-12 max-w-4xl">
          Witness innovative ways leading brands have partnered with People
          Matters to reach their target audience and achieve their marketing
          goals. Our case studies showcase successful advertising and brand
          integration campaigns that have delivered exceptional results. Explore
          how we can help you create a compelling narrative and connect with the
          HR and talent management community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              date={study.date}
              title={study.title}
              description={study.description}
              imageUrl={study.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
