"use client";
import { useRouter } from "next/navigation";
import React from "react";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button className="tracking-wider uppercase text-[10px] font-bold " onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default GoBackButton;
