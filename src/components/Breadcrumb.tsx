import { BreadcrumbData } from "@/types/common";
import Link from "next/link";
import React from "react";

export const Breadcrumb = ({ data }: { data: BreadcrumbData[] }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-0">
        {data.map((item, index) => (
          <li key={index} className=" inline-flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            <Link
              href={item.link || "#"}
              className={`inline-flex items-center text-sm ${
                index === data.length - 1
                  ? "text-gray-400 font-normal"
                  : "text-foreground font-medium"
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};
