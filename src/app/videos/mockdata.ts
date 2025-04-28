// Import for type checking
import { Section, Article } from "@/types/common";

// Video items
export const videoData: Article[] = [
  {
    title: "Building Modern Web Applications",
    description:
      "Learn essential techniques for creating responsive and performant web applications",
    image: "/assets/images/dummy.jpg",
    link: "/videos/building-modern-web-applications",
    category: "Development",
    categorySlug: "/category/development",
    author: "John Doe",
    authorSlug: "/author/john-doe",
    date: "2023-09-15",
    duration: 12,
    isVideo: true,
  },
  {
    title: "Advanced React Patterns",
    description:
      "Explore advanced patterns to build scalable React applications",
    image: "/assets/images/dummy.jpg",
    link: "/videos/advanced-react-patterns",
    category: "React",
    categorySlug: "/category/react",
    author: "Jane Smith",
    authorSlug: "/author/jane-smith",
    date: "2023-09-10",
    duration: 15,
    isVideo: true,
  },
  {
    title: "Introduction to TypeScript",
    description: "A beginner's guide to TypeScript fundamentals",
    image: "/assets/images/dummy.jpg",
    link: "/videos/introduction-to-typescript",
    category: "TypeScript",
    categorySlug: "/category/typescript",
    author: "Mike Johnson",
    authorSlug: "/author/mike-johnson",
    date: "2023-09-05",
    duration: 18,
    isVideo: true,
  },
  {
    title: "CSS Grid Layout Mastery",
    description: "Master CSS Grid layout for modern website designs",
    image: "/assets/images/dummy.jpg",
    link: "/videos/css-grid-layout-mastery",
    category: "CSS",
    categorySlug: "/category/css",
    author: "Sarah Parker",
    authorSlug: "/author/sarah-parker",
    date: "2023-08-28",
    duration: 10,
    isVideo: true,
  },
  {
    title: "Responsive Web Design Principles",
    description: "Learn key principles for creating responsive web designs",
    image: "/assets/images/dummy.jpg",
    link: "/videos/responsive-web-design-principles",
    category: "Design",
    categorySlug: "/category/design",
    author: "Alex Turner",
    authorSlug: "/author/alex-turner",
    date: "2023-08-20",
    duration: 14,
    // isVideo: true,
  },
];

// Export for video grid displays
// export const allVideos = videoItems;

// Convert video items to Article type
// const videoArticles = videoItems.map(video => ({
//     title: video.title,
//     description: video.description,
//     image: video.image,
//     link: video.link,
//     category: video.category,
//     categorySlug: video.categorySlug,
//     author: video.author,
//     authorSlug: video.authorSlug,
//     date: video.date,
//     dataType: "video",
//     content: `duration:${video.duration}`,
// } as Article));

// Popular videos section data
export const popularVideos: Section = {
  type: "popular_videos",
  template: "trending_section_right",
  description: "Popular videos section",
  image: null,
  title: "Popular",
  label: "Popular Videos",
  articles: videoData.slice().sort(() => Math.random() - 0.5), // Randomize order to simulate different videos
};

// Advertisement section data
export const adsData: Section = {
    type: "advertisement",
    template: "ads_section",
    description: "Advertisement section",
    image: "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/cf540067-d1d2-4298-8d8b-a466a368a06e.png",
    title: "Sponsored Content",
    label: "Sponsored",
    articles: []
};
