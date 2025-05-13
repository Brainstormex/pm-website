import React, { useEffect, useRef, useState } from "react";
import { Section } from "@/types/common";
import Image from "next/image";
import { adsService } from "@/services/adsService";

export const AdsSection = ({ data }: { data: Section }) => {
  console.log("AdsSection", data);
  // const [adsData, setAdsData] = useState<{ id: number; embed: string } | null>(
  //   null
  // );

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await adsService.getAdEmbedd(
  //       data.getWidgetType as string
  //     );
  //     console.log(response, "responsemr");
  //     setAdsData(response);
  //   }
  //   fetchData();
  // }, [data.getWidgetType]);

  return (
    <div className="w-full max-w-7xl mx-auto" data-template={data.template}>
      {data.getBanner}
      <div
        id={data.getBanner}
        className={`w-full flex items-center justify-center rounded text-center overflow-hidden `}
      />
      {/* <div
        id={"ads-" + adsData?.id}
        ref={adContainerRef}
        className={`w-full flex items-center justify-center rounded text-center overflow-hidden `}
      ></div> */}
    </div>
  );
};
