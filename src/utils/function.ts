import { pageService } from "@/services/pageServices";
import { Article, PageSectionData, Podcast, PodcastEpisode, PodcastSeason, Section, SeoData } from "@/types/common";
import { fetchData } from "@/services/homeService";

export async function fetchDataForSlug(
  slug: string
): Promise<PageSectionData | null> {
  const response = await pageService.getPageData(slug);
  const pageData: PageSectionData = response.data as PageSectionData;
  if (!pageData) return null;

  const seoResponseData = await pageService.getPageSEO(pageData.page_id);
  const seoData: SeoData = seoResponseData.data as SeoData;

  return { ...pageData, seoData: seoData };
}

const staticPages = ["about", "contact"];
const articlePage = ["articles"];
const categoryPages = [
  "economy",
  "healthcare",
  "education",
  "environment",
  "technology",
  "culture",
  "infrastructure",
  "sports",
  "business",
  "defense",
  "social",
  "outlook",
  "national",
  "international",
  "mumbai",
  "delhi",
];


// Strategy

const categorySectionPages = ["strategy", "leadership", "recruitment"];

export async function getPageType(slug: string): Promise<string> {
  if (!slug) return "not-found";

  if (staticPages.includes(slug.toLowerCase())) {
    return "static";
  }

  if (articlePage.includes(slug.toLowerCase())) {
    return "section";
  }

  if (categorySectionPages.includes(slug.toLowerCase())) {
    return "section";
  }

  if (categoryPages.includes(slug.toLowerCase())) {
    return "category";
  }


  return "not-found";
}
const articleData: Article[] = [
  {
    title:
      "Latest Zensar Technologies Path to Learning Excellence: Building a Future-Ready Workforce",
    description:
      "There's an increased focus on DEI and skill enablement as companies  navigate a new world of work. In this article, we look at some of the  steps companies can take to enable women at the workplace via learning.",
    image: "/assets/images/1.webp",
    link: "/politics/latest",
    category: "Politics",
    date: new Date().toLocaleDateString(),
  },
  {
    title:
      "How India's paralympic triumphs inspire inclusion on International Day of Persons with Disabilities. ",
    description:
      "The impressive 2024 Paralympics medal tally offers HR leaders key  insights on fostering inclusion, diversity, and support to unlock  potential and achieve exceptional results.",
    image: "/assets/images/2.webp",
    link: "/economy/outlook",
    category: "Economy",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Employee mental health concerns soar.",
    description:
      "With priorities ranging from leveraging cutting-edge technologies like AI and ML to fostering employee well-being and redefining leadership, the HR ",
    link: "/healthcare/reform",
    image: "/assets/images/3.webp",
    category: "Health",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Good news for UK employees! 200 companies sign up for 4-day",
    description: "Examining challenges and innovations in national education",
    link: "/education/analysis",
    category: "Education",
    image: "/assets/images/4.webp",
    date: new Date().toLocaleDateString(),
  },
  {
    title:
      "The power of flexibility: How self-motivation drives workplace success",
    description:
      "Coverage of national environmental policies and conservation efforts",
    image: "/assets/images/5.webp",
    link: "/environment/initiatives",
    category: "Environment",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Budget 2025: Skilling, Jobs & Inclusive Growth",
    description: "Technological advancements shaping the nation's future",
    image: "/assets/images/6.webp",
    link: "/technology/innovation",
    category: "Technology",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Top 25 fastest growing jobs in India today",
    // description: "Celebrating national arts, traditions and cultural diversity",
    image: "/assets/images/1.webp",
    link: "/culture/heritage",
    category: "Culture",
    date: new Date().toLocaleDateString(),
    description: ""
  },
  {
    title: "How we bridge the AI Skills Gap in our firms",
    description: "",
    image: "/assets/images/6.webp",
    link: "/technology/innovation",
    category: "Technology",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Top 25 fastest growing jobs in India today",
    // description: "Celebrating national arts, traditions and cultural diversity",
    image: "/assets/images/1.webp",
    link: "/culture/heritage",
    category: "Culture",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "How we bridge the AI Skills Gap in our firms",
    // description: "Technological advancements shaping the nation's future",
    image: "/assets/images/6.webp",
    link: "/technology/innovation",
    category: "Technology",
    date: new Date().toLocaleDateString(),
    description: ""
  },
  {
    title: "Top 25 fastest growing jobs in India today",
    // description: "Celebrating national arts, traditions and cultural diversity",
    image: "/assets/images/1.webp",
    link: "/culture/heritage",
    category: "Culture",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "How we bridge the AI Skills Gap in our firms",
    // description: "Technological advancements shaping the nation's future",
    image: "/assets/images/6.webp",
    link: "/technology/innovation",
    category: "Technology",
    date: new Date().toLocaleDateString(),
  },
];

const videoArticleData: Article[] = [
  {
    title: "Latest Political Developments",
    description:
      "There's an increased focus on DEI and skill enablement as companies  navigate a new world of work. In this article, we look at some of the  steps companies can take to enable women at the workplace via learning.",
    image: "/assets/images/1.webp",
    link: "/politics/latest",
    category: "Politics",
    date: new Date().toLocaleDateString(),
    dataType: "video",
  },
  {
    title:
      "Hire the right people, then manage them the right way. Good systems won't save a bad hire. ",
    // description: "Expert insights on national economic trends and forecasts",
    image: "/assets/images/2.webp",
    link: "/economy/outlook",
    category: "Economy",
    date: new Date().toLocaleDateString(),
    dataType: "video",
  },
  {
    title: "Navigating the evolving workplace landscape.",
    description:
      "With priorities ranging from leveraging cutting-edge technologies like AI and ML to fostering employee well-being and redefining leadership, the HR ",
    link: "/healthcare/reform",
    image: "/assets/images/3.webp",
    category: "Health",
    date: new Date().toLocaleDateString(),
    dataType: "video",
  },
  {
    title:
      "Good news for UK employees! 200 companies sign up for 4-day workweek setting a new global work standard.",
    description: "Examining challenges and innovations in national education",
    link: "/education/analysis",
    image: "/assets/images/4.webp",
    category: "Education",
    date: new Date().toLocaleDateString(),
    dataType: "video",
  },
  {
    title: "Navigating the evolving workplace landscape.",
    description:
      "With priorities ranging from leveraging cutting-edge technologies like AI and ML to fostering employee well-being and redefining leadership, the HR ",
    link: "/healthcare/reform",
    image: "/assets/images/5.webp",
    category: "Health",
    date: new Date().toLocaleDateString(),
    dataType: "video",
  },
  {
    title:
      "Good news for UK employees! 200 companies sign up for 4-day workweek setting a new global work standard.",
    description: "Examining challenges and innovations in national education",
    link: "/education/analysis",
    image: "/assets/images/6.webp",
    category: "Education",
    date: new Date().toLocaleDateString(),
    dataType: "video",
  },
];
// const latestSectionData: Section = {
//   title: "Latest News",
//   template: "latest_section",
//   type: "section",
//   description: "Latest news and updates",
//   image: "/assets/images/latest.webp",
//   link: "/latest",
//   articles: [
//     // First two articles for large cards
//     {
//       title: "LTIMindtree appoints Venu Lambu as CEO (Designate)",
//       description: "Latest developments in corporate leadership",
//       image: "/assets/images/1.webp",
//       link: "/leadership/appointments",
//       category: "Leadership",
//       date: new Date().toLocaleDateString(),
//     },
//     {
//       title:
//         "Leading with purpose: Insights from the Bhagavad Gita for modern managers",
//       description: "Ancient wisdom for modern leadership",
//       image: "/assets/images/2.webp",
//       link: "/leadership/insights",
//       category: "Leadership",
//       date: new Date().toLocaleDateString(),
//     },
//     // Next three articles for medium cards
//     {
//       title: "Artificial intelligence is reshaping HR",
//       description: "Technology transformation in human resources",
//       image: "/assets/images/3.webp",
//       link: "/technology/hr",
//       category: "Technology",
//       date: new Date().toLocaleDateString(),
//     },
//     {
//       title: "LTIMindtree appoints Venu Lambu as CEO (Designate)",
//       description: "Building an equitable future",
//       image: "/assets/images/4.webp",
//       link: "/business/education",
//       category: "Business",
//       date: new Date().toLocaleDateString(),
//     },
//     {
//       title:
//         "Leading with purpose: Insights from the Bhagavad Gita for modern managers",
//       description: "Purposeful innovation in business",
//       image: "/assets/images/5.webp",
//       link: "/business/talent",
//       category: "Business",
//       date: new Date().toLocaleDateString(),
//     },
//     // Last three articles for trending section
//     {
//       title:
//         "National Girl Child Day: Empowering women through scholarships to build an equitable future",
//       description: "Employee engagement and retention",
//       image: "/assets/images/6.webp",
//       link: "/leadership/engagement",
//       category: "Leadership",
//       date: new Date().toLocaleDateString(),
//     },
//     {
//       title:
//         "The Business of Talent: Sudhir Kesavan of CitiusTech on purposeful innovation",
//       description: "Workplace mental health insights",
//       image: "/assets/images/12.webp",
//       link: "/leadership/psychology",
//       category: "Leadership",
//       date: new Date().toLocaleDateString(),
//     },
//     {
//       title:
//         "Tackling unbelongingness: Leadership strategies for retention and engagemen",
//       description: "Workplace transformation trends",
//       image: "/assets/images/15.webp",
//       link: "/business/future-work",
//       category: "Business",
//       date: new Date().toLocaleDateString(),
//     },
//   ],
// };


const recentAppointmentsArticles: Article[] = [
  {
    title:
      "Rohitt Mahajan",
    // description:
    //   "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
    image: "/assets/images/19.webp",
    link: "/premium/dei-challenges",
    category: "Employee Relations",
    author: "Suhana Begum",
    date: new Date().toLocaleDateString(),
  },
  {
    title:
      "Deshni Naidoo",
    // description:
    //   "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
    image: "/assets/images/19.webp",
    link: "/premium/employee-experience",
    category: "Compensation & Benefits",
    author: "Jagriti Kumari",
    date: new Date().toLocaleDateString(),
  },
  {
    title:
      "Mark Zuckerberg",
    description:
      "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
    image: "/assets/images/19.webp",
    link: "/premium/leader-empowerment",
    category: "Compensation & Benefits",
    author: "Suhana Begum",
    date: new Date().toLocaleDateString(),
  },
  {
    title:
      "Elon Musk",
    description:
      "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
    image: "/assets/images/19.webp",
    link: "/premium/employee-experience",
    category: "Compensation & Benefits",
    author: "Jagriti Kumari",
    date: new Date().toLocaleDateString(),
  },
  {
    title:
      "Sam Altman",
    description:
      "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
    image: "/assets/images/19.webp",
    link: "/premium/leader-empowerment",
    category: "Compensation & Benefits",
    author: "Suhana Begum",
    date: new Date().toLocaleDateString(),
  },
  {
    title:
      "Sam Altman",
    description:
      "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
    image: "/assets/images/19.webp",
    link: "/premium/leader-empowerment",
    category: "Compensation & Benefits",
    author: "Suhana Begum",
    date: new Date().toLocaleDateString(),
  },
  {
    title:
      "Elon Musk",
    description:
      "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
    image: "/assets/images/19.webp",
    link: "/premium/employee-experience",
    category: "Compensation & Benefits",
    author: "Jagriti Kumari",
    date: new Date().toLocaleDateString(),
  },
];



const premiumArticles: Article[] = [
  {
    title:
      "Strategic Approaches to Overcoming DEI Challenges: Key Questions for Building a Truly Inclusive and Equitable Workplace",
    description:
      "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
    image: "/assets/images/12.webp",
    link: "/premium/dei-challenges",
    category: "Employee Relations",
    author: "Suhana Begum",
    date: new Date().toLocaleDateString(),
  },
  {
    title:
      "Harnessing Evidence-Based Strategies to Enhance Employee Experience",
    description:
      "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
    image: "/assets/images/11.webp",
    link: "/premium/employee-experience",
    category: "Compensation & Benefits",
    author: "Jagriti Kumari",
    date: new Date().toLocaleDateString(),
  },
  {
    title:
      "How to empower Leaders with Data and Strategic Insight to Drive Informed, Impactful Decision-Making",
    description:
      "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
    image: "/assets/images/10.webp",
    link: "/premium/leader-empowerment",
    category: "Compensation & Benefits",
    author: "Suhana Begum",
    date: new Date().toLocaleDateString(),
  },
  
];

const categorySectionPagesData1: Section[] = [
  {
    title: "Two Column Layout",
    description: "Latest developments",
    template: "two_column_layout",
    type: "section",
    articles: articleData,
    image: "/featured-news.jpg",
    link: "/featured-news",
    sections: [
      {
        title: "Left Section",
        description: "Latest developments",
        template: "left_section",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
          {
            title: "Featured",
            description: "Latest developments",
            template: "current_section",
            type: "section",
            image: "/featured.jpg",
            link: "/featured",
            articles: articleData,
          },
        ],
      },
      {
        title: "Right Section",
        description: "Latest developments",
        template: "trending_section_right",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
          {
            title: "Trending",
            description: "Latest developments",
            template: "trending_section_right",
            type: "section",
            image: "/trending.jpg",
            link: "/trending",
            articles: articleData,
          },
        ],
      },
    ],
  },
  {
    title: "Ads",
    description: "ads",
    link: "/national",
    template: "ads_section",
    type: "ads",
    image: "/assets/images/7.webp",
  },
  {
    title: "POPULAR VIDEOS",
    description: "Popular videos",
    template: "horizontal_long_section",
    type: "section",
    image: "/popular-videos.jpg",
    link: "/popular-videos",
    articles: videoArticleData,
  },
  {
    title: "Two Column Layout",
    description: "Latest developments",
    template: "two_column_layout",
    type: "section",
    articles: articleData,
    image: "/featured-news.jpg",
    link: "/featured-news",
    sections: [
      {
        title: "Left Section",
        description: "Latest developments",
        template: "left_section",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
          {
            title: "LEADERSHIP",
            description: "Latest developments",
            template: "trending_section_left",
            type: "section",
            image: "/featured.jpg",
            link: "/featured",
            articles: articleData,
            startDate: ""
          },
          {
            title: "Trending",
            description: "Latest developments",
            template: "trending_section_left",
            type: "section",
            image: "/trending.jpg",
            link: "/trending",
            articles: articleData,
            startDate: ""
          },
          {
            title: "Ads",
            description: "ads",
            link: "/national",
            template: "ads_section",
            type: "ads",
            image: "/assets/images/7.webp",
            startDate: ""
          },
        ],
        startDate: ""
      },
      {
        title: "Right Section",
        description: "Latest developments",
        template: "right_section",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
          {
            title: "Ads",
            description: "ads",
            link: "/national",
            template: "ads_section",
            type: "ads",
            image: "/assets/images/9.webp",
            startDate: ""
          },
          {
            title: "Hey You!",
            link: "/national",
            template: "newsletter_section",
            placeholder: "Your Email Address Here...",
            privacyText: "We promise we don't spam or use your data and sell it to others.",
            description: "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
            heading: "Subscribe to our newsletter",
            type: "newsletter",
            image: "/national.jpg",
            startDate: ""
          },
        ],
        startDate: ""
      },
    ],
    startDate: ""
  },

  {
    title: "Premium Content",
    heading: "Level up your people game today!",
    description: "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
    image: "/premium.jpg",
    link: "/premium",
    template: "premium_section",
    type: "section",
    articles: premiumArticles,
    startDate: ""
  },
  {
    title: "RECENT APPOINTMENTS",
    heading: "Level up your people game today!",
    description: "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
    image: "/premium.jpg",
    link: "/premium",
    template: "recent_appointments_section",
    type: "section",
    articles: recentAppointmentsArticles,
    startDate: ""
  },
  {
    title: "Two Column Layout",
    description: "Latest developments",
    template: "two_column_layout",
    type: "section",
    articles: articleData,
    image: "/featured-news.jpg",
    link: "/featured-news",
    sections: [
      {
        title: "Left Section",
        description: "Latest developments",
        template: "left_section",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
          {
            title: "Featured",
            description: "Latest developments",
            template: "trending_section_left",
            type: "section",
            image: "/featured.jpg",
            link: "/featured",
            articles: articleData,
            startDate: ""
          },
          {
            title: "Trending",
            description: "Latest developments",
            template: "trending_section_left",
            type: "section",
            image: "/trending.jpg",
            link: "/trending",
            articles: articleData,
            startDate: ""
          },
        ],
        startDate: ""
      },
      {
        title: "Right Section",
        description: "Latest developments",
        template: "right_section",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [],
        startDate: ""
      },
    ],
    startDate: ""
  },
];

const categorySectionPagesData2: Section[] = [
  {
    title: "Two Column Layout Type 2",
    description: "Latest developments",
    template: "reverse_column_layout",
    type: "section",
    articles: articleData,
    image: "/featured-news.jpg",
    link: "/featured-news",
    sections: [
      {
        title: "Left Section",
        description: "Latest developments",
        template: "left_section_type_2",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
          {
            title: "Trending",
            description: "Latest developments",
            template: "trending_section_right",
            type: "section",
            image: "/trending.jpg",
            link: "/trending",
            articles: articleData,
            startDate: ""
          }
        ],
        startDate: ""
      },
      {
        title: "Right Section",
        description: "Latest developments",
        template: "section_right_type_2",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
          {
            title: "Featured",
            description: "Latest developments",
            template: "current_section",
            type: "section",
            image: "/featured.jpg",
            link: "/featured",
            articles: articleData,
            startDate: ""
          },
        ],
        startDate: ""
      },
    ],
    startDate: ""
  },
  {
    title: "Ads",
    description: "ads",
    link: "/national",
    template: "ads_section",
    type: "ads",
    image: "/assets/images/7.webp",
    startDate: ""
  },
  {
    title: "UPCOMING EVENTS",
    description: "UPCOMING EVENTS",
    template: "horizontal_long_section",
    type: "section",
    image: "/popular-videos.jpg",
    link: "/events",
    articles: articleData,
    startDate: ""
  },
  {
    title: "Two Column Layout",
    description: "Latest developments",
    template: "two_column_layout",
    type: "section",
    articles: articleData,
    image: "/featured-news.jpg",
    link: "/featured-news",
    sections: [
      {
        title: "Left Section",
        description: "Latest developments",
        template: "left_section",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
          {
            title: "LEADERSHIP",
            description: "Latest developments",
            template: "trending_section_left",
            type: "section",
            image: "/featured.jpg",
            link: "/featured",
            articles: articleData,
            startDate: ""
          },
          {
            title: "Trending",
            description: "Latest developments",
            template: "trending_section_left",
            type: "section",
            image: "/trending.jpg",
            link: "/trending",
            articles: articleData,
            startDate: ""
          }
        ],
        startDate: ""
      },
      {
        title: "Right Section",
        description: "Latest developments",
        template: "right_section",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
          {
            title: "Ads",
            description: "ads",
            link: "/national",
            template: "ads_section",
            type: "ads",
            image: "/assets/images/9.webp",
            startDate: ""
          },
          {
            title: "Hey You!",
            link: "/national",
            template: "newsletter_section",
            placeholder: "Your Email Address Here...",
            privacyText: "We promise we don't spam or use your data and sell it to others.",
            description: "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
            heading: "Subscribe to our newsletter",
            type: "newsletter",
            image: "/national.jpg",
            startDate: ""
          },
        ],
        startDate: ""
      },
    ],
    startDate: ""
  },
  {
    title: "Ads",
    description: "ads",
    link: "/national",
    template: "ads_section",
    type: "ads",
    image: "/assets/images/7.webp",
    startDate: ""
  },
  {
    title: "Two Column Layout",
    description: "Latest developments",
    template: "two_column_layout",
    type: "section",
    articles: articleData,
    image: "/featured-news.jpg",
    link: "/featured-news",
    sections: [
      {
        title: "Left Section",
        description: "Latest developments",
        template: "left_section",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
          {
            title: "LEADERSHIP",
            description: "Latest developments",
            template: "trending_section_left",
            type: "section",
            image: "/featured.jpg",
            link: "/featured",
            articles: articleData,
            startDate: ""
          },
          {
            title: "Trending",
            description: "Latest developments",
            template: "trending_section_left",
            type: "section",
            image: "/trending.jpg",
            link: "/trending",
            articles: articleData,
            startDate: ""
          }
        ],
        startDate: ""
      },
      {
        title: "Right Section",
        description: "Latest developments",
        template: "right_section",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [],
        startDate: ""
      },
    ],
  },
  {
    title: "Premium Content",
    heading: "Level up your people game today!",
    description: "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
    image: "/premium.jpg",
    link: "/premium",
    template: "premium_section",
    type: "section",
    articles: premiumArticles
  },
  
];

// Commented not deleted because we may need the schema strucuture later in the future
// const sponsoredData: Section[] = [
//   {
//     title: "Featured",
//     description: "",
//     template: "research_section",
//     type: "section",
//     image: "/featured.jpg",
//     link: "/featured",
//     articles: articleData,
//   },
//   {
//     title: "Ads", 
//     description: "ads",
//     link: "/national",
//     template: "ads_section",
//     type: "ads",
//     image: "/assets/images/7.webp",
//   },

//   {
//     title: "Two Column Layout",
//     description: "Latest developments",
//     template: "two_column_layout",
//     type: "section",
//     articles: articleData,
//     image: "/featured-news.jpg",
//     link: "/featured-news",
//     sections: [
//       {
//         title: "Left Section",
//         description: "Latest developments",
//         template: "left_section",
//         type: "section",
//         articles: articleData,
//         image: "/featured-news.jpg",
//         link: "/featured-news",
//         sections: [
//           {
//             title: "LEADERSHIP",
//             description: "Latest developments",
//             template: "trending_section_left",
//             type: "section",
//             image: "/featured.jpg",
//             link: "/featured",
//             articles: articleData,
//           },
//           {
//             title: "Trending",
//             description: "Latest developments",
//             template: "trending_section_left",
//             type: "section",
//             image: "/trending.jpg",
//             link: "/trending",
//             articles: articleData,
//           },
//           {
//             title: "Ads",
//             description: "ads",
//             link: "/national",
//             template: "ads_section",
//             type: "ads",
//             image: "/assets/images/7.webp",
//           },
//           {
//             title: "Featured",
//             description: "Latest developments",
//             template: "current_section",
//             type: "section",
//             image: "/featured.jpg",
//             link: "/featured",
//             articles: articleData,
//           },
//         ],
//       },
//       {
//         title: "Right Section",
//         description: "Latest developments",
//         template: "right_section",
//         type: "section",
//         articles: articleData,
//         image: "/featured-news.jpg",
//         link: "/featured-news",
//         sections: [
//           {
//             title: "Ads",
//             description: "ads",
//             link: "/national",
//             template: "ads_section",
//             type: "ads",
//             image: "/assets/images/9.webp",
//           },
        
//         ],
//       },
//     ],
//   },

//   {
//     title: "Premium Content",
//     heading: "Level up your people game today!",
//     description: "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
//     image: "/premium.jpg",
//     link: "/premium",
//     template: "premium_section",
//     type: "section",
//     articles: premiumArticles
//   },
 
 
// ];


const researchArticlesData = [
  {
    title: "6 essentials for a seamless year-end payroll.",
    description: "Streamline your year-end payroll process with six essential steps to ensure accuracy, compliance, and employee satisfaction. Discover how to navigate this critical period efficiently.",
    image: "/assets/images/223.webp",
    link: "/research/payroll-essentials",
    category: "Employee Engagement",
    author: "Amit Kode",
    featured: true
  },
  {
    title: "Top 10 movies every HR Pro should watch: Valuable lessons in leadership, teamwork, and other critical HR skills.",
    description: "Essential viewing for HR professionals",
    image: "/assets/images/24.webp",
    link: "/research/hr-movies",
    category: "Watercooler",
    author: "Rakhi Sharma"
  },
  {
    title: "Accenture and Workera partner to advance skills intelligence in the AI era",
    description: "Strategic partnership for future skills",
    image: "/assets/images/12.webp",
    link: "/research/accenture-workera",
    category: "Business",
    author: "Yogita Tulsiani"
  },
  {
    title: "The power of flexibility: How self-motivation drives workplace success",
    description: "Understanding workplace dynamics",
    image: "/assets/images/17.webp",
    link: "/research/workplace-flexibility",
    category: "Business",
    author: "Yogita Tulsiani"
  },
  {
    title: "Accenture and Workera partner to advance skills intelligence in the AI era",
    description: "Strategic partnership for future skills",
    image: "/assets/images/4.webp",
    link: "/research/accenture-workera",
    category: "Business",
    author: "Yogita Tulsiani"
  }
];
const handpickedData = [
  {
    title: "Coursera",
    description: "Coursera is one of the largest online learning platforms in the world, with 124 million registered learners as of...",
    image: "/assets/images/coursera.png",
    logo: "/assets/images/Logo1.svg",
    link: "/tools/coursera",
    category: "Learning & Development",
    type: "Learning & Development"
  },
  {
    title: "HR Stop",
    description: "Save 50% time in HR/Payroll processes",
    image: "/assets/images/hr-stop.png",
    logo: "/assets/images/Logo3.svg",
    link: "/tools/hr-stop",
    category: "Recruiting",
    type: "Recruiting"
  },
  {
    title: "Boomerangs.ai",
    description: "Make alumni your brand advocates",
    image: "/assets/images/boomerangs.png",
    logo: "/assets/images/Logo1.svg",
    link: "/tools/boomerangs",
    category: "Recruiting",
    type: "Recruiting"
  },
  {
    title: "Advantage Club",
    description: "Advantage Club is a global employee engagement platform with features like rewards, recognition, communit...",
    image: "/assets/images/advantage.png",
    logo: "/assets/images/Logo3.svg",
    link: "/tools/advantage-club",
    category: "Total Rewards",
    type: "Total Rewards"
  },
  {
    title: "Atlas",
    description: "Atlas enables innovative companies to compete in a global economy, believing that businesses should e...",
    image: "/assets/images/atlas.png",
    logo: "/assets/images/Logo2.svg",
    link: "/tools/atlas",
    category: "Talent Management",
    type: "Talent Management"
  },
  {
    title: "Boomerangs.ai",
    description: "Make alumni your brand advocates",
    image: "/assets/images/boomerangs.png",
    logo: "/assets/images/Logo1.svg",
    link: "/tools/boomerangs",
    category: "Recruiting",
    type: "Recruiting"
  },
  {
    title: "Advantage Club",
    description: "Advantage Club is a global employee engagement platform with features like rewards, recognition, communit...",
    image: "/assets/images/advantage.png",
    logo: "/assets/images/Logo3.svg",
    link: "/tools/advantage-club",
    category: "Total Rewards",
    type: "Total Rewards"
  },
  {
    title: "Atlas",
    description: "Atlas enables innovative companies to compete in a global economy, believing that businesses should e...",
    image: "/assets/images/atlas.png",
    logo: "/assets/images/Logo2.svg",
    link: "/tools/atlas",
    category: "Talent Management",
    type: "Talent Management"
  }
];
const categorySectionPagesData3: Section[] = [
  {
    title: "Featured",
    description: "",
    template: "research_section",
    type: "section",
    image: "/featured.jpg",
    link: "/featured",

    articles: researchArticlesData as Article[],
  },
  {
    title: "Ads",
    description: "ads",
    link: "/national",
    template: "ads_section",
    type: "ads",
    image: "/assets/images/7.webp",
  },
  {
    title: "POPULAR VIDEOS",
    description: "Popular videos",
    template: "horizontal_long_section",
    type: "section",
    image: "/popular-videos.jpg",
    link: "/popular-videos",
    articles: videoArticleData,
  },
  {
    title: "Two Column Layout",
    description: "Latest developments",
    template: "two_column_layout",
    type: "section",
    articles: articleData,
    image: "/featured-news.jpg",
    link: "/featured-news",
    sections: [
      {
        title: "Left Section",
        description: "Latest developments",
        template: "left_section",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
          {
            title: "LEADERSHIP",
            description: "Latest developments",
            template: "trending_section_left",
            type: "section",
            image: "/featured.jpg",
            link: "/featured",
            articles: articleData,
          },
          {
            title: "Trending",
            description: "Latest developments",
            template: "trending_section_left",
            type: "section",
            image: "/trending.jpg",
            link: "/trending",
            articles: articleData,
          },
          {
            title: "Ads",
            description: "ads",
            link: "/national",
            template: "ads_section",
            type: "ads",
            image: "/assets/images/7.webp",
          },
        ],
      },
      {
        title: "Right Section",
        description: "Latest developments",
        template: "right_section",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
          {
            title: "Ads",
            description: "ads",
            link: "/national",
            template: "ads_section",
            type: "ads",
            image: "/assets/images/9.webp",
          },
          {
            title: "Hey You!",
            link: "/national",
            template: "newsletter_section",
            placeholder: "Your Email Address Here...",
            privacyText: "We promise we don't spam or use your data and sell it to others.",
            description: "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
            heading: "Subscribe to our newsletter",
            type: "newsletter",
            image: "/national.jpg",
          },
        ],
      },
    ],
  },

  {
    title: "Premium Content",
    heading: "Level up your people game today!",
    description: "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
    image: "/premium.jpg",
    link: "/premium",
    template: "premium_section",
    type: "section",
    articles: premiumArticles
  },
  {
    title: "RECENT APPOINTMENTS",
    heading: "Level up your people game today!",
    description: "Subscribe today and get access to our magazine, premium content, columns, event access, research findings and more...",
    image: "/premium.jpg",
    link: "/premium",
    template: "recent_appointments_section",
    type: "section",
    articles: recentAppointmentsArticles
  },
  {
    title: "Two Column Layout",
    description: "Latest developments",
    template: "two_column_layout",
    type: "section",
    articles: articleData,
    image: "/featured-news.jpg",
    link: "/featured-news",
    sections: [
      {
        title: "Left Section",
        description: "Latest developments",
        template: "left_section",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
          {
            title: "Featured",
            description: "Latest developments",
            template: "trending_section_left",
            type: "section",
            image: "/featured.jpg",
            link: "/featured",
            articles: articleData,
          },
          {
            title: "Trending",
            description: "Latest developments",
            template: "trending_section_left",
            type: "section",
            image: "/trending.jpg",
            link: "/trending",
            articles: articleData,
          },
        ],
      },
      {
        title: "Right Section",
        description: "Latest developments",
        template: "right_section",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
          
        ],
      },
    ],
  },
];

export const BrandReachoutSection: Section[] = [
  {
    title: "Two Column Layout",
    description: "Latest developments",
    template: "reverse_column_layout",
    type: "section",
    articles: articleData,
    image: "/featured-news.jpg",
    link: "/featured-news",
    sections: [
      {
        title: "Left Section",
        description: "Latest developments",
        template: "left_section",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
         
          {
            title: "SUGGESTED",
            description: "Recent Articles",
            image: "/national.jpg",
            link: "/national",
            heading: "Octopus Handpicked",
            template: "trending_section_right",
            type: "section",
            articles: handpickedData.map(article => ({
              ...article,
              date: new Date().toISOString()
            }))
          },
         
        ],
      },
      {
        title: "Right Section",
        description: "Latest developments",
        template: "right_section",
        type: "section",
        articles: articleData,
        image: "/featured-news.jpg",
        link: "/featured-news",
        sections: [
          {
            title: "Featured",
            description: "Latest developments",
            template: "current_section",
            type: "section",
            image: "/featured.jpg",
            link: "/featured",
            articles: articleData,
          }
        ],
      },
    ],
  },
  {
    title: "Ads",
    description: "ads",
    link: "/national",
    template: "ads_section",
    type: "ads",
    image: "/assets/images/7.webp",
  },

];

// Modify the categorySectionPagesData1 to include subcategory structure
// const subCategoryData: Section[] = [
//   {
//     title: "Featured",
//     description: "Latest developments",
//     template: "featured_section",
//     type: "section",
//     articles: articleData,
//     image: "/featured.jpg",
//     link: "/featured",
//   },
//   {
//     title: "Combined Section",
//     description: "Insights and analysis",
//     template: "category_section",
//     type: "section",
//     image: "/combined.jpg",
//     link: "/combined",
//     sections: [
//       {
//         title: "TRENDING",
//         description: "Most discussed topics",
//         template: "trending_section",
//         type: "section",
//         image: "/trending.jpg",
//         link: "/trending",
//         articles: articleData,
//       },
//       {
//         title: "LATEST",
//         description: "Recent updates",
//         template: "latest_section",
//         type: "section",
//         image: "/latest.jpg",
//         link: "/latest",
//         articles: articleData,
//       },
//     ],
//   },
// ];

const articleListData: Article[] = [
  {
    title: "The Future of Work: How AI is Transforming HR Practices",
    description: "Explore how artificial intelligence is revolutionizing human resources departments, from recruitment to employee engagement and retention strategies.",
    image: "/assets/images/1.webp",
    link: "/articles/future-of-work-ai",
    category: "Technology",
    author: "Priya Sharma",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Building Inclusive Leadership: Strategies for Diverse Teams",
    description: "Learn effective approaches to foster inclusive leadership and create environments where diverse teams can thrive and innovate.",
    image: "/assets/images/2.webp",
    link: "/articles/inclusive-leadership",
    category: "Leadership",
    author: "Rajiv Mehta",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Employee Wellbeing Programs That Actually Work",
    description: "Discover evidence-based wellbeing initiatives that deliver measurable results for both employees and organizations.",
    image: "/assets/images/3.webp",
    link: "/articles/effective-wellbeing-programs",
    category: "Employee Relations",
    author: "Ananya Desai",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Remote Work Policies: Balancing Flexibility and Productivity",
    description: "How leading companies are crafting remote work policies that maintain productivity while offering the flexibility employees demand.",
    image: "/assets/images/4.webp",
    link: "/articles/remote-work-policies",
    category: "Workplace",
    author: "Vikram Singh",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Compensation Trends: What Top Talent Expects in 2024",
    description: "Analysis of emerging compensation packages and benefits that are helping organizations attract and retain high-performing employees.",
    image: "/assets/images/5.webp",
    link: "/articles/compensation-trends-2024",
    category: "Compensation & Benefits",
    author: "Meera Kapoor",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "HR Analytics: Turning Data into Strategic Decisions",
    description: "How HR departments are leveraging data analytics to make more informed decisions about workforce planning and development.",
    image: "/assets/images/6.webp",
    link: "/articles/hr-analytics-strategic-decisions",
    category: "Technology",
    author: "Arjun Reddy",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "The Great Resignation: Lessons Learned and Moving Forward",
    description: "Examining the lasting impact of the Great Resignation and strategies companies are using to adapt to changing employee expectations.",
    image: "/assets/images/1.webp",
    link: "/articles/great-resignation-lessons",
    category: "Recruitment",
    author: "Neha Gupta",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Upskilling Your Workforce for the Digital Age",
    description: "Practical approaches to developing employee skills to meet the demands of digital transformation and technological advancement.",
    image: "/assets/images/2.webp",
    link: "/articles/upskilling-digital-age",
    category: "Learning & Development",
    author: "Sanjay Patel",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Creating Psychological Safety in High-Performance Teams",
    description: "How to build environments where team members feel safe to take risks, voice opinions, and innovate without fear of negative consequences.",
    image: "/assets/images/3.webp",
    link: "/articles/psychological-safety-teams",
    category: "Leadership",
    author: "Leela Krishnan",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "The Impact of Gen Z on Workplace Culture",
    description: "Understanding how the newest generation in the workforce is reshaping organizational values, communication styles, and work environments.",
    image: "/assets/images/4.webp",
    link: "/articles/gen-z-workplace-impact",
    category: "Culture",
    author: "Rohan Malhotra",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Ethical AI in HR: Navigating Bias and Privacy Concerns",
    description: "Addressing the ethical challenges of implementing AI in human resources while ensuring fairness, transparency, and data protection.",
    image: "/assets/images/5.webp",
    link: "/articles/ethical-ai-hr",
    category: "Technology",
    author: "Divya Sharma",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Performance Management Beyond Annual Reviews",
    description: "Modern approaches to performance management that focus on continuous feedback, development, and alignment with organizational goals.",
    image: "/assets/images/6.webp",
    link: "/articles/performance-management-evolution",
    category: "Performance",
    author: "Karan Ahuja",
    date: new Date().toLocaleDateString(),
  },
];



const articlesPageSections: Section[] = [

  {
    title: "Two Column Layout",
    description: "Explore more content",
    template: "two_column_layout",
    type: "section",
    image: "/articles-explore.jpg",
    link: "/articles/explore",
    sections: [
      {
        title: "Left Section",
        description: "Trending topics",
        template: "left_section",
        type: "section",
        image: "/articles-trending.jpg",
        link: "/articles/trending",
        sections: [
          {
            title: "Most Read",
            description: "Popular articles among our readers",
            template: "trending_section_left",
            type: "section",
            image: "/articles-most-read.jpg",
            link: "/articles/most-read",
            articles: articleListData.slice(4, 8),
          },
          {
            title: "Editor's Picks",
            description: "Handpicked by our editorial team",
            template: "trending_section_left",
            type: "section",
            image: "/articles-editors-picks.jpg",
            link: "/articles/editors-picks",
            articles: articleListData.slice(8, 12),
          },
        ],
      },
      {
        title: "Right Section",
        description: "Additional resources",
        template: "right_section",
        type: "section",
        image: "/articles-resources.jpg",
        link: "/articles/resources",
        sections: [
       
          {
            title: "SUGGESTED",
            description: "Recent Articles",
            image: "/national.jpg",
            link: "/national",
            heading: "Octopus Handpicked",
            template: "trending_section_right",
            type: "section",
            articles: handpickedData.map(article => ({
              ...article,
              date: new Date().toISOString()
            }))
          },
        ],
      },
    ],
  },

];

// Update the getPageData function to include the articles page
export async function getPageData(slug: string): Promise<Section[] | null> {
  if (!slug) return null;
  console.log("slug", slug);

  // For strategy page, fetch from politics API (or appropriate endpoint)
  if (slug.toLowerCase() === "strategy") {
    const data = await fetchData("politics");
    console.log("category data", data);
    return data || categorySectionPagesData1; // Fallback to static data if API fails
  } else if (slug.toLowerCase() === "leadership") {
    return categorySectionPagesData2;
  } else if (slug.toLowerCase() === "recruitment") {
    return categorySectionPagesData3;
  } else if (slug.toLowerCase() === "sponsored") {
    const data = await fetchData("sponsored");
    return data;
  } 
  
  else if (slug.toLowerCase() === "articles") {
    return articlesPageSections;
  }

  // For category pages, fetch from appropriate API endpoint
  if (categoryPages.includes(slug.toLowerCase())) {
    const data = await fetchData(slug.toLowerCase());
    return data || categorySectionPagesData1; // Fallback to static data if API fails
  }

  return null;
}


export const categoryData: Article[] = [
  {
    title: "Latest Political Developments",
    description: "Analysis of current political landscape and policy changes",
    image: "/assets/images/1.webp",
    link: "/politics/latest",
    category: "Politics",
    date: new Date().toLocaleDateString()
  },
  {
    title: "Economic Outlook 2024",
    description: "Expert insights on national economic trends and forecasts",
    image: "/assets/images/2.webp",
    link: "/economy/outlook",
    category: "Economy",
    date: new Date().toLocaleDateString()
  },
  {
    title: "Healthcare Reform Updates",
    description: "Recent changes and debates in national healthcare policy",
    image: "/assets/images/3.webp",
    link: "/healthcare/reform",
    category: "Health",
    date: new Date().toLocaleDateString()
  },
  {
    title: "Education System Analysis",
    description: "Examining challenges and innovations in national education",
    image: "/assets/images/4.webp",
    link: "/education/analysis",
    category: "Education",
    date: new Date().toLocaleDateString()
  },
  {
    title: "Environmental Initiatives",
    description: "Coverage of national environmental policies and conservation efforts",
    image: "/assets/images/5.webp",
    link: "/environment/initiatives",
    category: "Environment",
    date: new Date().toLocaleDateString()
  },
  {
    title: "Technology & Innovation",
    description: "Technological advancements shaping the nation's future",
    image: "/assets/images/6.webp",
    link: "/technology/innovation",
    category: "Technology",
    date: new Date().toLocaleDateString()
  },
  {
    title: "Cultural Heritage",
    description: "Celebrating national arts, traditions and cultural diversity",
    image: "/assets/images/1.webp",
    link: "/culture/heritage",
    category: "Culture",
    date: new Date().toLocaleDateString()
  },
  {
    title: "Infrastructure Development",
    description: "Updates on major national infrastructure projects",
    image: "/assets/images/2.webp",
    link: "/infrastructure/development",
    category: "Infrastructure",
    date: new Date().toLocaleDateString()
  },
  {
    title: "Sports & Athletics",
    description: "Coverage of national sports events and athlete achievements",
    image: "/assets/images/3.webp",
    link: "/sports/national",
    category: "Sports",
    date: new Date().toLocaleDateString()
  },
  {
    title: "Business & Industry",
    description: "Analysis of national business trends and industrial growth",
    image: "/assets/images/4.webp",
    link: "/business/industry",
    category: "Business",
    date: new Date().toLocaleDateString()
  },
  {
    title: "Defense & Security",
    description: "Updates on national security and defense strategies",
    image: "/assets/images/5.webp",
    link: "/defense/security",
    category: "Defense",
    date: new Date().toLocaleDateString()
  },
  {
    title: "Social Issues",
    description: "In-depth coverage of pressing social challenges and solutions",
    image: "/assets/images/6.webp",
    link: "/social/issues",
    category: "Social",
    date: new Date().toLocaleDateString()
  }
];


export const seasons: PodcastSeason[] = [
  {
    id: "season03",
    title: "Season 3",
    subtitle: "From inspiration to action",
  },
  {
    id: "season02",
    title: "Season 2",
    subtitle: "Kaleidoscope of Cultures",
  },
  {
    id: "season01",
    title: "Season 1",
    subtitle: "The Art of Impossible",
  },
];

export const episodes: PodcastEpisode[] = [
  {
    id: "1",
    number: "01",
    title: "Positive Workspace Attracts Top Talent",
    slug: "positive-workspace-attracts-top-talent",
    subtitle: "Positive Workspace Attracts Top Talent",
    play_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    speaker_name: "Ashwani Prashara",
    speaker_title: "CHRO, Reliance India",
    duration: "42 mis 27 secs",
    description:
      "A positive work environment, centered on safety, learning, and holistic well-being, is key to attracting top talent and ensuring that employees feel valued.",
    image: "/assets/images/dummy.jpg",
    season_id: "season01",
    date: "2024-01-01",
  },
  {
    id: "2",
    number: "02",
    title: "The Power of the Five B's Framework",
    slug: "the-power-of-the-five-b-s-framework",
    subtitle: "The Power of the Five B's Framework",
    play_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    speaker_name: "Khim Tan",
    speaker_title: "Former Group CHRO, Alliance Bank Malaysia",
    duration: "33 mis 19 secs",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis commodo magnis arcu erat erat. Amet tempus ornare inceptos aptent dignissim. Fermentum mi...",
    image: "/assets/images/dummy.jpg",
    season_id: "season01",
    date: "2024-01-01",
  },
  {
    id: "3",
    number: "03",
    title: "Corporate Culture is a Collective Creation",
    slug: "corporate-culture-is-a-collective-creation",
    subtitle: "Corporate Culture is a Collective Creation",
    play_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    speaker_name: "Sahil Mathur",
    speaker_title: "CHRO, InMobi Group",
    duration: "41 mis 44 secs",
    description:
      "An 'entity' that lives in every part of the company and in the vision that each member of the work team has of the business. Corporate culture is not an abst...",
    image: "/assets/images/dummy.jpg",
    season_id: "season01",
    date: "2024-01-01",
  },
  {
    id: "4",
    number: "01",
    title: "Season 2 Episode 1",
    slug: "season-2-episode-1",
    subtitle: "Season 2 Episode 1",
    play_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    speaker_name: "John Doe",
    speaker_title: "CEO, Example Corp",
    duration: "45 mis 00 secs",
    description: "Example quote for season 2 episode 1",
    image: "/assets/images/dummy.jpg",
    season_id: "season02",
    date: "2024-01-01",
  },
  {
    id: "5",
    number: "02",
    title: "Season 2 Episode 2",
    slug: "season-2-episode-2",
    subtitle: "Season 2 Episode 2",
    play_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    speaker_name: "Jane Smith",
    speaker_title: "CTO, Example Corp",
    duration: "38 mis 15 secs",
    description: "Example quote for season 2 episode 2",
    image: "/assets/images/dummy.jpg",
    season_id: "season02",
    date: "2024-01-01",
  },
  {
    id: "6",
    number: "01",
    title: "Season 1 Episode 1",
    slug: "season-1-episode-1",
    subtitle: "Season 1 Episode 1",
    play_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    speaker_name: "Bob Johnson",
    speaker_title: "Founder, Example Inc",
    duration: "50 mis 30 secs",
    description: "Example quote for season 1 episode 1",
    image: "/assets/images/dummy.jpg",
    season_id: "season03",
    date: "2024-02-01",
  },
];


