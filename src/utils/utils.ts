import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Custom cn that handles conditional logic + class merging
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}