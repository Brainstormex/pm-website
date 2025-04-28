"use client"
import React from "react";
import Image from "next/image";
import { TopicRendererProps } from "@/types/common";
import Link from "next/link";


const TopicRenderer = ({ data }: TopicRendererProps) => {
 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data?.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Link
              href={item.link || "#"}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
          <Image 
            src={item.image} 
            alt={item.title}
            width={400}
            height={400}
            quality={100}
            loading="lazy"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            
             
           
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopicRenderer;