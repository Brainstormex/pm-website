import { Metadata } from "next";
import { getMagazinesByYearAndMonth } from "./magazine";
import FilterBar from "./FilterBar";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/ui/Pagination";
// import ResearchHeader from "@/components/Header/ResearchHeader";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string;
  magazineId: string;
  slug: string;
}

export interface Magazine {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  author?: string;
  description?: string;
}

export interface MagazineFilters {
  year?: string;
  month?: string;
  search?: string;
}

export const metadata: Metadata = {
  title: "Outlook Magazine Archive",
  description: "Browse our collection of Outlook Magazine issues",
};

export default function MagazinePage() {
  const magazinesByYearAndMonth = getMagazinesByYearAndMonth();

  

  return (
    <main className="container max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center mt-28 gap-8">
        <h1 className="text-7xl font-bold text-center ">
          Magazine<span className="text-orange">.</span>
        </h1>
        <p className="text-center w-1/2">
          Uncover the depth of People Matters' print archive. Each edition, a
          tangible volume, offers curated insights, expert perspectives, and
          enduring narratives on HR, leadership, and the future of work.
          Experience the lasting value of our meticulously crafted content.
        </p>
        <FilterBar />
      </div>

      <div className="grid grid-cols-4 gap-20 my-20">
        {magazinesByYearAndMonth.map((item, index) => (
          <Link
            href={`/magazine/${item.id}`}
            key={index}
            className="flex flex-col gap-[30px]"
          >
            <div className="relative aspect-[3/4] w-full bg-borderGray">
              <Image
                src={item.coverImage}
                alt={`${item.title} - ${item.date}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="font-medium">
              {item.month}, {item.year}
            </div>
          </Link>
        ))}
      </div>
      <div className="mb-10">
        <Pagination />
      </div>
      {/* <ResearchHeader /> */}
    </main>
  );
}
