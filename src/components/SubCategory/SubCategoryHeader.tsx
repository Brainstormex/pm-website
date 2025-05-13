"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
// import Link from 'next/link';
import { usePathname } from "next/navigation";

interface SubCategoryHeaderProps {
  data: {
    subCategories: {
      name: string;
      slug: string;
    }[];
    category: {
      name: string;
      slug: string;
    };
  };
}

const convertSlugToCategory = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const SubCategoryHeader: React.FC<SubCategoryHeaderProps> = ({
  data,
}) => {
  const pathname = usePathname();
  const [categoryName, setCategoryName] = useState<string | null>(null);
  // const links = navigationLinks[category as keyof typeof navigationLinks] || [];

  useEffect(() => {
    const categoryName = pathname?.split("/");
    // console.log("categoryName=>0", categoryName);
    if (categoryName?.length==4) {
      setCategoryName(categoryName[2]);
    }
  }, [pathname]);

  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl pt-8 md:pt-12 px-4 mx-auto flex flex-col md:flex-row md:justify-start md:gap-x-8 md:items-end">
        {/* Category Title */}
        <div className="mb-6 md:mb-0">
          <div className="flex items-start gap-x-4 flex-col">
            <p className="text-lg md:text-lg font-medium capitalize tracking-widest">
              {categoryName ? convertSlugToCategory(categoryName) : ""}
            </p>
            {data.subCategories &&
              data.subCategories.length > 0 &&
              pathname?.includes(`/category/${data.category.slug}/`) && (
                <p className="text-lg md:text-lg font-medium capitalize tracking-widest">
                  {categoryName ? convertSlugToCategory(categoryName) : ""}{" "}
                  {data.category.name}
                </p>
              )}
            <h1 className="text-4xl md:text-6xl font-bold capitalize">
              {data.category.name}
              <span className="text-orange">.</span>
            </h1>
          </div>
        </div>

        {/* Navigation */}
        {/* {JSON.stringify(data.subCategories)} */}
        <nav className="flex flex-wrap gap-y-4 gap-x-6 md:gap-x-12 items-center">
          {data.subCategories.map((link, index) => (
            <Link
              key={`link-${index}`}
              href={`/category/${data.category.slug}/${link.slug}`}
              className={`text-sm md:text-base font-medium transition-colors capitalize hover:text-orange-500
                ${
                  pathname === `/${data.category.slug}/${link.slug}`
                    ? "text-orange-500"
                    : "text-gray-600"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
