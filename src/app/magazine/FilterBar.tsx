"use client";

import { useState } from "react";

export default function FilterBar() {
  // const [yearFilter, setYearFilter] = useState('2025');
  // const [monthFilter, setMonthFilter] = useState('All');

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex items-center gap-2">
        <select
          className="px-4 py-[14px] border border-borderGray rounded-md text-sm text-borderGray focus:outline-none"
          // value={yearFilter}
          // onChange={(e) => setYearFilter(e.target.value)}
          defaultValue={1}
        >
          <option value="1" disabled>
            Select Year
          </option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="All">All</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <select
          className="px-4 py-[14px] border border-borderGray rounded-md text-sm text-borderGray focus:outline-none"
          // value={monthFilter}
          // onChange={(e) => setMonthFilter(e.target.value)}
          defaultValue={1}
        >
          <option value="1" disabled>
            Select Month
          </option>
          <option value="All">All</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
    </div>
  );
}
