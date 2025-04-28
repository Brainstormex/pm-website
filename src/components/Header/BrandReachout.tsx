"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Brand, BrandReachout } from "@/types/common";
import { pageService } from "@/services/pageServices";

interface LogoItemProps {
  src: string;
  alt: string;
  href?: string;
}

const LogoItem = ({ src, alt, href }: LogoItemProps) => {
  return (
    <a
      href={href || "/"}
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center "
    >
      <Image
        width={100}
        height={100}
        src={src}
        alt={alt}
        className="max-h-full max-w-full object-contain"
      />
    </a>
  );
};

// const TranslateWrapper = ({
//   children,
//   reverse,
// }: {
//   children: React.ReactElement; // Explicitly typing children as ReactElement
//   reverse?: boolean;
// }) => {
//   return (
//     <motion.div
//       initial={{ translateX: reverse ? "-100%" : "0%" }}
//       animate={{ translateX: reverse ? "0%" : "-100%" }}
//       transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//       className="flex gap-16 px-2"
//     >
//       {children}
//     </motion.div>
//   );
// };

const BrandReachoutSection = ({ data }: { data: BrandReachout }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [brands, setBrands] = useState<Brand[]>([]);
  // const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    const response = await pageService.getBrands();
    setBrands(response?.data || []);
  };

  useEffect(() => {
    fetchData().finally(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const reverse = false;

  return (
    <section className="bg-white py-8 flex flex-col items-start text-start">
      {/* Title and Tagline */}
      <h1 className="text-4xl md:text-5xl text-foreground font-bold mb-4">
        {data?.title}
        <span className="text-orange">.</span>
      </h1>
      <p className="text-gray-600 mb-8 max-w-2xl">{data?.description}</p>
      {/* Logo Section with Scrolling */}
      <div className="flex overflow-hidden max-w-7xl">
        <motion.div
          initial={{ translateX: reverse ? "-100%" : "0%" }}
          animate={{ translateX: reverse ? "0%" : "-100%" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 px-2"
        >
          {brands.map((brand: Brand) => (
            <LogoItem key={brand.id} src={brand.image} alt={brand.name} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandReachoutSection;
