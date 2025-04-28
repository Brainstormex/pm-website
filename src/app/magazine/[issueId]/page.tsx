import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getMagazinesByYearAndMonth } from "../magazine";
import { getArticlesByMagazineId } from "../article";
import RelatedArticleList from "../RelatedArticlesList";
import { OtherArticleList } from "../OtherArticles";
import GoBackButton from "@/components/ui/GoBackButton";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PremiumContentWall from "@/components/PremiumContentWall";

export interface MagazineProps {
  params: Promise<{
    issueId: string;
  }>;
};

export async function generateMetadata({ params }: MagazineProps): Promise<Metadata> {
  const { issueId } = await params;
  const magazine = getMagazinesByYearAndMonth().find(
    (m) => m.id === issueId
  );

  if (!magazine) {
    return {
      title: "Magazine Not Found",
    };
  }

  return {
    title: `${magazine.title} - ${magazine.date}`,
    description: `Read ${magazine.title} magazine issue published on ${magazine.date}`,
  };
}

export default async function MagazineIssuePage({ params }: MagazineProps) {
  const { issueId } = await params;
  const magazine = getMagazinesByYearAndMonth().find(
    (m) => m.id === issueId
  );

  if (!magazine) {
    notFound();
  }

  const articles = getArticlesByMagazineId(issueId);

  return (
    <main className="container max-w-7xl mx-auto px-4 py-8">
      <div className="mb-20">
        <GoBackButton/>
        <div className="flex flex-col items-center justify-center mt-12 gap-8 mb-14">
          <h1 className="text-7xl font-bold text-center ">
            {magazine.month}, {magazine.year}
            <span className="text-orange">.</span>
          </h1>
          <p className="text-center w-1/2">
            Coming out of the chaos of 2022, organisations are looking at a 2023
            that is equally challenging, if perhaps a little more predictable: a
            global economic downturn lies ahead and the only question is how
            much to prepare for it.
          </p>
        </div>
        <div className="flex items-center justify-between gap-3 px-20">
          <button className="flex items-center gap-2 text-borderGray text-xs font-bold">
            <ChevronLeft size={16} />{" "}
            <span className="uppercase">december 2024</span>
          </button>

          <div className="relative aspect-[3/4] w-1/3 bg-borderGray">
            <Image
              src={magazine.coverImage}
              alt={`${magazine.title} - ${magazine.date}`}
              fill
              className="object-cover"
            />
          </div>

          <button className="flex items-center gap-2 text-borderGray text-xs font-bold">
            <span className=" uppercase">Feburary 2024</span>
            <ChevronRight size={16} />{" "}
          </button>
        </div>
        <PremiumContentWall />
      </div>
      <div className="w-full flex items-center justify-center">
        <Button colorVariant="secondary" capitalize>
          Flip through
        </Button>
      </div>
    </main>
  );
}
