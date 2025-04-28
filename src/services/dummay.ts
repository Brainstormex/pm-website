import { Article, Event } from "@/types/common";

export const articleData: Article[] = [
    {
      title: "Latest Political Developments",
      description: "There's an increased focus on DEI and skill enablement as companies  navigate a new world of work. In this article, we look at some of the  steps companies can take to enable women at the workplace via learning.",
      image: "/assets/images/1.webp",
      link: "/politics/latest",
      category: "Politics",
      authorSlug: "/author/john-doe",
      categorySlug: "/category/leadership-strategy",
      author: "John Doe",
      date: new Date().toLocaleDateString()
    },
    {
    title: "Hire the right people, then manage them the right way.",
      description: "There's an increased focus on DEI and skill enablement as companies  navigate a new world of work. In this article, we look at some of the  steps companies can take to enable women at the workplace via learning",
      image: "/assets/images/2.webp",
        link: "/economy/outlook",
      category: "Economy",
      author: "John Doe",
      authorSlug: "/author/john-doe",
      categorySlug: "/category/leadership-strategy",
      date: new Date().toLocaleDateString()
    },
    {
      title: "Navigating the evolving workplace landscape.",
      description: "With priorities ranging from leveraging cutting-edge technologies like AI and ML to fostering employee well-being and redefining leadership, the HR ",
      link: "/healthcare/reform",
      author: "John Doe",
      category: "Health",
      authorSlug: "/author/john-doe",
      categorySlug: "/category/leadership-strategy",
      date: new Date().toLocaleDateString(),
      image: "/assets/images/3.webp"
    },
    {
      title: "Good news for UK employees! 200 companies sign up for",
      description: "Examining challenges and innovations in national education",
      link: "/education/analysis",
      image: "/assets/images/17.webp",
      author: "John Doe",
      authorSlug: "/author/john-doe",
      categorySlug: "/category/leadership-strategy",
      category: "Education",
      date: new Date().toLocaleDateString()
    },
    {
      title: "Environmental Initiatives",
      description: "Coverage of national environmental policies and conservation efforts",
      image: "/assets/images/5.webp",
      link: "/environment/initiatives",
      author: "John Doe",
      authorSlug: "/author/john-doe",
      categorySlug: "/category/leadership-strategy",
      category: "Environment",
      date: new Date().toLocaleDateString()
    },
    {
      title: "Technology & Innovation",
      description: "Technological advancements shaping the nation's future",
      image: "/assets/images/6.webp",
      link: "/technology/innovation",
      author: "John Doe",
      authorSlug: "/author/john-doe",
      categorySlug: "/category/leadership-strategy",
      category: "Technology",
      date: new Date().toLocaleDateString()
    },
    {
      title: "Cultural Heritage",
      description: "Celebrating national arts, traditions and cultural diversity",
      image: "/assets/images/1.webp",
      link: "/culture/heritage",
      category: "Culture",
      authorSlug: "/author/john-doe",
      categorySlug: "/category/leadership-strategy",
      author: "John Doe",
      date: new Date().toLocaleDateString()
    },{
      title: "Cultural Heritage",
      description: "Celebrating national arts, traditions and cultural diversity",
      image: "/assets/images/1.webp",
      link: "/culture/heritage",
      category: "Culture",
      authorSlug: "/author/john-doe",
      categorySlug: "/category/leadership-strategy",
      author: "John Doe",
      date: new Date().toLocaleDateString()
    },{
      title: "Cultural Heritage",
      description: "Celebrating national arts, traditions and cultural diversity",
      image: "/assets/images/1.webp",
      link: "/culture/heritage",
      category: "Culture",
      authorSlug: "/author/john-doe",
      categorySlug: "/category/leadership-strategy",
      author: "John Doe",
      date: new Date().toLocaleDateString()
    },{
      title: "Cultural Heritage",
      description: "Celebrating national arts, traditions and cultural diversity",
      image: "/assets/images/1.webp",
      link: "/culture/heritage",
      category: "Culture",
      authorSlug: "/author/john-doe",
      categorySlug: "/category/leadership-strategy",
      author: "John Doe",
      date: new Date().toLocaleDateString()
    }
  ];


  export const eventsData: Event[] = [
    {
      startDate: "25",
      endDate: "27",
      date:22,
      month: "February",
      days: "Fri, Sat, Sun",
      time: "9:00am - 5:00pm",
      title: "TechHR Pulse Mumbai",
      description: "Join us to explore leading innovations, future-proof your workforce, create impactful learning journeys, and accelerate business success.",
      location: "Grand Hyatt, Mumbai",
      audience: "CXOs, HR Leaders, IT Head of GCC Organisations",
      image: "/assets/images/13.webp",
      link: "/events/techhr-pulse-mumbai",
      slug: "techhr-pulse-mumbai",
      year: 2025
    },
    {
      date:22,
      startDate: "14",
      month: "March",
      days: "Sat",
      time: "9:00am - 5:00pm",
      title: "Talent Code for GCC",
      description: "Join us to explore leading innovations, future-proof your workforce, create impactful learning journeys, and accelerate business success.",
      location: "The Leela Palace, Bengaluru",
      audience: "CXOs, HR Leaders, IT Head of GCC Organisations",
      image: "/assets/images/13.webp",
      link: "/events/talent-code-gcc",
      slug: "talent-code-for-gcc",
      year: 2025
    }
  ];