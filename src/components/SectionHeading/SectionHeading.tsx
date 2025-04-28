import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import octopus from "@/assets/octopus.svg";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const containerVariants = cva("flex flex-col w-full gap-4 border-t-0.5 border-border", {
  variants: {
    margin: {
      default: "mb-8",
      sm: "mb-3",
      none: "mb-0",
    }
  },
  defaultVariants: {
    margin: "default"
  }
});

interface SectionHeadingProps extends VariantProps<typeof containerVariants> {
  title: string;
  link?: string;
  buttontext?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  template?: string;
  margin?: "default" | "sm" | "none";
}

const OctopusHandpickedHeader = ({ title }: SectionHeadingProps) => {
  const titleParts = title.split(" ");

  return (
    <div className="flex justify-between items-start bg-background pb-4 mb-5 border-b-0.5 border-border w-full">
      <div className="flex flex-col">
        {/* Apply different font weights for "Octopus" and "Handpicked" */}
        <h2 className="text-3xl font-medium md:font-normal text-black">
          {titleParts[0]}
        </h2>
        <h2 className="text-3xl font-medium md:font-bold text-black">
          {titleParts.slice(1).join(" ")}
        </h2>
      </div>
      <div className="relative h-28 w-28">
        <Image
          src={octopus}
          alt="Octopus with glasses"
          layout="fill"
          className="object-contain"
        />
      </div>
    </div>
  );
};

const SectionHeading = ({
  title,
  link,
  buttontext,
  bgColor,
  textColor,
  className,
  template,
  margin,
}: SectionHeadingProps) => {
  console.log(title, template, "Recent Appointment");
  
  const isOctopusHeader = title === "Octopus Handpicked";

  if (isOctopusHeader) {
    return (
      <OctopusHandpickedHeader
        title={title}
        link={link}
        buttontext={buttontext}
      />
    );
  }

  //for other titles
  return (
    <>
      {title && (
        <div className={twMerge(containerVariants({ margin, className }))}>
          <div className="flex justify-between items-start pt-0">
            <h2
              className={`text-[10px] uppercase tracking-wider lg:tracking-[0.4em] lg:px-5 px-4 font-bold text-left ${
                bgColor ? bgColor : "bg-foreground"
              } ${textColor ? textColor : "text-white"} py-2.5 rounded-b-lg `}
            >
              {title}
            </h2>
            {link && title !== "RECENT ARTICLES" && (
              <Link
                href={link}
                className="text-black pt-3 whitespace-nowrap hover:text-orange flex items-center text-sm gap-2 font-medium uppercase"
              >
                {buttontext || "View All"} <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SectionHeading;
