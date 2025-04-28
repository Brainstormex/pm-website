
import { PageRenderer } from "@/components/PageRenderer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Article, BreadcrumbData, PageProps } from "@/types/common";

export default async function TopicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  console.log("topic page", slug);

  const pageUIType = "topic";
  const topicData: Article[] = [
    {
      title: "Latest Political Developments",
      description: "Analysis of current political landscape and policy changes",
      image: "/assets/images/1.webp",
      link: "/politics/latest",
      category: "Politics",
      date: "2024-01-01"
    },
    {
      title: "Economic Outlook 2024",
      description: "Expert insights on national economic trends and forecasts",
      image: "/assets/images/2.webp",
      link: "/economy/outlook",
      category: "Economy",
      date: "2024-01-01"
    },
    {
      title: "Healthcare Reform Updates",
      description: "Recent changes and debates in national healthcare policy",
      image: "/assets/images/3.webp",
      link: "/healthcare/reform",
      category: "Healthcare",
      date: "2024-01-01"
    },
    {
      title: "Education System Analysis",
      description: "Examining challenges and innovations in national education",
      image: "/assets/images/4.webp",
      link: "/education/analysis",
      category: "Education",
      date: "2024-01-01"
    },
    {
      title: "Environmental Initiatives",
      description: "Coverage of national environmental policies and conservation efforts",
      image: "/assets/images/5.webp",
      link: "/environment/initiatives",
      category: "Environment",
      date: "2024-01-01"
    },
    {
      title: "Technology & Innovation",
      description: "Technological advancements shaping the nation's future",
      image: "/assets/images/6.webp",
      link: "/technology/innovation",
      category: "Technology",
      date: "2024-01-01"
    },
    {
      title: "Cultural Heritage",
      description: "Celebrating national arts, traditions and cultural diversity",
      image: "/assets/images/1.webp",
      link: "/culture/heritage",
      category: "Culture",
      date: "2024-01-01"
    },
    {
      title: "Infrastructure Development",
      description: "Updates on major national infrastructure projects",
      image: "/assets/images/2.webp",
      link: "/infrastructure/development",
      category: "Infrastructure",
      date: "2024-01-01"
    },
    {
      title: "Sports & Athletics",
      description: "Coverage of national sports events and athlete achievements",
      image: "/assets/images/3.webp",
      link: "/sports/national",
      category: "Sports",
      date: "2024-01-01"
    },
    {
      title: "Business & Industry",
      description: "Analysis of national business trends and industrial growth",
      image: "/assets/images/4.webp",
      link: "/business/industry",
      category: "Business",
      date: "2024-01-01"
    },
    {
      title: "Defense & Security",
      description: "Updates on national security and defense strategies",
      image: "/assets/images/5.webp",
      link: "/defense/security",
      category: "Defense",
      date: "2024-01-01"
    },
    {
      title: "Social Issues",
      description: "In-depth coverage of pressing social challenges and solutions",
      image: "/assets/images/6.webp",
      link: "/social/issues",
      category: "Social",
      date: "2024-01-01"
    }
  ];

  const breadcrumbData: BreadcrumbData[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Topic",
      link: `/topic`,
    },
    {
      title: `${slug}`
    },
  ];
  return (
    <>
      <Breadcrumb data={breadcrumbData} />
      <PageRenderer slug={slug} type={pageUIType} data={topicData} />
    </>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  return {
    title: "PageRenderer",
    description: "PageRenderer" + slug,
  };

  // return {
  //     title: data.seoData.title,
  //     description: data.seoData.description,
  //     openGraph: {
  //         title: data.seoData.title,
  //         description: data.seoData.description,
  //         url: data.seoData.canonical,
  //         siteName: data.seoData.siteName,
  //         locale: data.seoData.locale,
  //         type: data.seoData.type,
  //         images: [
  //             {
  //                 url: data.seoData.image,
  //                 width: Number(data.seoData.imageWidth),
  //                 height: Number(data.seoData.imageHeight),
  //                 alt: data.seoData.imageAlt,
  //                 type: data.seoData.imageType,
  //             },
  //         ],
  //     },
  // };
}
