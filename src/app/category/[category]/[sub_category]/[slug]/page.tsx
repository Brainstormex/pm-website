import { PageRenderer } from "@/components/PageRenderer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Article, BreadcrumbData, PageProps } from "@/types/common";
import { getPageType } from "@/utils/function";
import StaticRenderer from "@/components/StaticRenderer";

export default async function TopicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { sub_category,category,slug } = resolvedParams;

  const pageUIType = await getPageType(slug || "");

  if (pageUIType === "static") {
    return <StaticRenderer showHeader={true} showFooter={true} html={`<h1>Static Page</h1>`} />;
  }

  // const pageUIType = "category";
  const categoryData: Article[] = [
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

  const breadcrumbData: BreadcrumbData[] = [
    {
      title: "Home",
      link: "/",
    }, {
      title: category || "",
      link: `/${category}`,
    },
    {
      title: `${sub_category}`,
      link: `/${category}/${sub_category}`
    },
    {
      title: `${slug}`,
    }
  ];
  return (
    <>
      <Breadcrumb data={breadcrumbData} />
      <PageRenderer slug={category} type={pageUIType} data={categoryData} />
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
