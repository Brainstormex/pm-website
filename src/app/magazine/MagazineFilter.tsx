"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MagazineFilters } from "./page";

const years = ["All", "2025", "2024", "2023"];
const months = [
  "All",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function MagazineFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<MagazineFilters>({
    year: searchParams?.get("year") || "All",
    month: searchParams?.get("month") || "All",
    search: searchParams?.get("search") || "",
  });

  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.year && filters.year !== "All") {
      params.set("year", filters.year);
    }

    if (filters.month && filters.month !== "All") {
      params.set("month", filters.month);
    }

    if (filters.search) {
      params.set("search", filters.search);
    }

    const queryString = params.toString();
    router.push(`/magazine${queryString ? `?${queryString}` : ""}`);
  }, [filters, router]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex-1">
        <label
          htmlFor="year"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Year
        </label>
        <select
          id="year"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          value={filters.year}
          onChange={(e) => setFilters({ ...filters, year: e.target.value })}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label
          htmlFor="month"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Month
        </label>
        <select
          id="month"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          value={filters.month}
          onChange={(e) => setFilters({ ...filters, month: e.target.value })}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Search
        </label>
        <input
          type="text"
          id="search"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          placeholder="Search magazines..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
      </div>
    </div>
  );
}
