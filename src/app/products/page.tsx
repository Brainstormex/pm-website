import Image from "next/image";
import Link from "next/link";
import React from "react";
import MoreInformationCard from "./moreInformationCard";
import { Button } from "@/components/ui/Button";

const ProductListingPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <h1 className="text-5xl font-bold border-b border-inkBlack/40 pb-10">
        Product<span className="text-orange">.</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8 pt-10">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/4 p-4 border-r border-inkBlack/40 h-[90%]">
          <div className="mb-8">
            <h2 className="text-orange-500 font-bold text-xl mb-1">Octopus</h2>
            <p className="text-gray-600 text-sm">
              AI Enabled HR Solution Navigator
            </p>
          </div>

          <div className="border-t border-orange py-4">
            <h3 className="font-semibold text-gray-700 mb-3">SHRPA</h3>
            <p className="text-gray-500 text-sm">
              Comprehensive research reports
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 bg-white">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Octopus</h1>
            {/* <Link
              href="#"
              className="bg-black text-white px-4 py-2 rounded text-sm uppercase"
            >
              Visit Website
            </Link> */}
            <Button className="bg-black text-white">Visit Website</Button>
          </div>
          {/* <div className="flex justify-between items-start mb-12"> */}
          {/* <h1 className="text-4xl font-bold text-gray-900">{event.title}</h1> */}

          <div className="mb-8">
            <p className="text-gray-700 mb-6">
              People Matters Octopus is a comprehensive talent management
              platform designed to streamline and enhance the employee
              lifecycle. It offers a suite of integrated modules that cover
              everything from recruitment and onboarding to performance
              management, learning and development, and more.
            </p>
            <div className="bg-indigo-900 rounded-lg overflow-hidden mb-8">
              <Image
                src="/assets/images/octopus.png"
                alt="Octopus"
                width={800}
                height={400}
              />
            </div>

            <p className="text-inkBlack text-lg font-medium mb-6">
              A first-of-its-kind AI navigator, Octopus offers 1000+ HR
              solutions directly from service providers, empowering the
              community of HR and talent leaders to access the latest
              innovations and make faster, more informed decisions.
            </p>

            <div className="italic text-inkBlack font-fraunces text-3xl font-light">
              <p className="mb-4">
                With the launch of Octopus, we are taking the next step in a
                journey to address a critical gap in the ecosystem: the need for
                a unified, AI-enabled navigator that simplifies access to
                high-quality HR solutions in one place, bringing unparalleled
                speed, accuracy, and precision to decision-making.
              </p>
            </div>

            <p className="text-inkBlack text-lg font-medium mb-6">
              In a landmark move, People Matters, the largest community for HR
              and Talent leaders in India and APAC, has made its debut into the
              SaaS space with the launch of People Matters Octopus. This
              innovative, smart AI enabled platform is designed to serve as a
              unique solution navigator, simplifying the discovery and selection
              process of HR products from a range of service providers across
              India. Octopus enhances the accuracy and speed with which HR
              professionals can discover, evaluate, and connect with HR
              solutions, simplifying the complex task of finding the right HR
              tools. Leveraging AI for precision and efficiency, Octopus stands
              as an essential companion for today's HR & talent professionals.
              With this launch, People Matters strengthens its leadership in HR
              tech innovation, equipping leaders to make more informed decisions
              faster.
            </p>

            <p className="text-inkBlack text-lg font-medium mb-6">
              The name "Octopus" reflects the platform's mission and
              capabilities in line with the fascinating sea creature's
              intelligence, adaptability, and agility in complex environments.
              People Matter's Octopus symbolizes the AI platform's ability to
              navigate HR's intricate solution landscape with precision. It
              adapts to the specific needs of each user, providing an intuitive,
              efficient search experience that cuts through complexity in HR's
              expansive "blue ocean" of solutions
            </p>

            <div className="mb-8">
              <h3 className="font-bold text-inkBlack text-lg mb-4">
                KEY FEATURES AT A GLANCE:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-inkBlack text-lg font-medium">
                  <span className="font-semibold">
                    Unbiased Solution Access:
                  </span>{" "}
                  High-quality demo videos eliminate promotional bias, providing
                  HR professionals with a clear, consistent view across 50+
                  categories
                </li>
                <li className="text-inkBlack text-lg font-medium">
                  <span className="font-semibold">Smart, HR-Centric AI:</span>{" "}
                  Trained specifically for HR industry needs, Octopus AI engine
                  offers unmatched precision and speed, enabling laser-focused
                  searches
                </li>
                <li className="text-inkBlack text-lg font-medium">
                  <span className="font-semibold">
                    Conversational Search Experience:
                  </span>{" "}
                  Users can converse with Octopus to find the most relevant
                  solutions through AI-driven dialogue, not just using problem
                  statement filters and category-specific options. This
                  personalized approach simplifies and accelerates the search,
                  tailoring recommendations to their unique challenges
                </li>
              </ul>
            </div>

            <p className="text-inkBlack text-lg font-medium">
              Currently, in beta, Octopus will continue to learn and grow even
              smarter as more users engage with it, continuously refining its
              search relevance and precision. As the platform evolves, it aims
              to ultimately include 500+ brand-verified solution pages by next
              month, transforming into an extensive ecosystem of HR solutions.
              This advancement underscores People Matters' commitment to
              empowering HR leaders with tools for faster, better, and more
              strategic decision-making, positioning People Matters Octopus at
              the forefront of HR tech innovation.
            </p>
          </div>
          <MoreInformationCard />
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
