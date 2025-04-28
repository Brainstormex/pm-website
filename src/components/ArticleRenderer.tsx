"use client"

import React from "react";
import { Article } from "@/types/common";   
import Image from "next/image";

interface ArticleRendererProps {
  data?: Article;
}

const ArticleRenderer = ({ data }: ArticleRendererProps) => {
  if (!data) {
    return <div>No article data available</div>;
  }

  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      {data.description && (
        <p className="text-gray-600 mb-6">{data.description}</p>
      )}
      {data.image && (
        <Image
        width={1000}
        height={1000}
          src={data.image} 
          alt={data.title}
          className="w-full h-auto mb-6 rounded-lg"
        />
      )}
    </article>
  );
};

export default ArticleRenderer;
