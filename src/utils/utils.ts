import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Custom cn that handles conditional logic + class merging
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

const monthMap: Record<string, number> = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

export const isEventArchived = (date: string, month: string, year: number): boolean => {
  const day = parseInt(date);
  const monthIndex = monthMap[month];

  if (isNaN(day) || monthIndex === undefined || !year) return true;

  const eventDate = new Date(year, monthIndex, day);
  const today = new Date();

  // Remove time to compare only dates
  eventDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  return eventDate < today;
};
