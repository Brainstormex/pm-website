import { Button } from "@/components/ui/Button";
import React from "react";

interface JobCardProps {
  title: string;
  team?: string;
  location: string;
  salaryRange: string;
  postedOn: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  team,
  location,
  salaryRange,
  postedOn,
}) => {
  return (
    <div className="border-b border-gray-200 py-4 px-8 border border-inactiveGray rounded-lg w-full">
      <h3 className="font-medium text-inkBlack text-2xl mb-4">
        {title} {team && `(${team})`}
      </h3>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-14">
        {/* <div className="flex flex-wrap gap-4 w-full lg:w-auto"> */}
          <div>
            <p className="text-xs font-semibold text-inkBlack/40">Location</p>
            <p className="text-inkBlack">{location}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-inkBlack/40">Salary Range</p>
            <p className="text-inkBlack">{salaryRange}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-inkBlack/40">Posted On</p>
            <p className="text-inkBlack">{postedOn}</p>
          </div>
        {/* </div> */}
        <div className="">
          <Button className="w-full lg:w-auto">DOWNLOAD JOB NOTE</Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
