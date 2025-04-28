import { Magazine } from "./page";

// Static magazine data
export const magazines: Magazine[] = [
  {
    id: "outlook-11-april-2025",
    title: "Outlook Magazine",
    date: "11 April 2025",
    coverImage: "/assets/images/1.webp",
    author: "Vikash Smith",
  },
  {
    id: "outlook-04-april-2025",
    title: "Outlook Magazine",
    date: "04 April 2025",
    coverImage: "/assets/images/1.webp",
    author: "Vikash Smith",
  },
  {
    id: "outlook-28-march-2025",
    title: "Outlook Magazine",
    date: "28 March 2025",
    coverImage: "/assets/images/1.webp",
  },
  {
    id: "outlook-14-march-2025",
    title: "Outlook Magazine",
    date: "14 March 2025",
    coverImage: "/assets/images/1.webp",
  },
  {
    id: "outlook-01-march-2025",
    title: "Outlook Magazine",
    date: "01 March 2025",
    coverImage: "/assets/images/1.webp",
  },
  {
    id: "outlook-21-february-2025",
    title: "Outlook Magazine",
    date: "21 February 2025",
    coverImage: "/assets/images/1.webp",
  },
  {
    id: "outlook-14-february-2025",
    title: "Outlook Magazine",
    date: "14 February 2025",
    coverImage: "/assets/images/1.webp",
  },
  {
    id: "outlook-01-february-2025",
    title: "Outlook Magazine",
    date: "01 February 2025",
    coverImage: "/assets/images/1.webp",
  },
];

// Helper function to organize magazines by year and month
// export function getMagazinesByYearAndMonth() {
//   const magazinesByYearAndMonth: {[year: string]: {[month: string]: Magazine[]}} = {};

//   magazines.forEach(magazine => {
//     const date = new Date(magazine.date);
//     const year = date.getFullYear().toString();
//     const month = date.toLocaleString('en-US', { month: 'long' });

//     if (!magazinesByYearAndMonth[year]) {
//       magazinesByYearAndMonth[year] = {};
//     }

//     if (!magazinesByYearAndMonth[year][month]) {
//       magazinesByYearAndMonth[year][month] = [];
//     }

//     magazinesByYearAndMonth[year][month].push(magazine);
//   });

//   return magazinesByYearAndMonth;
// }

export function getMagazinesByYearAndMonth() {
  return magazines
    .map((magazine) => {
      const parsedDate = new Date(magazine.date);
      return {
        ...magazine,
        year: parsedDate.getFullYear(),
        month: parsedDate.toLocaleString("default", { month: "long" }),
        parsedDate, // temporary field for sorting
      };
    })
    .sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime())
    .map(({ parsedDate, ...magazine }) => magazine); // remove temporary parsedDate
}
