"use client";
import TrendingSectionRight from "@/components/Sections/TrendingSectionRight";
import ArticleContent from "../../../../components/ArticleContent";
import ArticlePreview from "../../../../components/ArticlePreview";
import { useEffect, useState } from "react";
import { articleService } from "@/services/articleService";
import { useParams } from "next/navigation";
import { Category, Section, Topics } from "@/types/common";
import { Author } from "@/types/common";




// export interface Author {
//   name: string;
//   slug: string;
//   id: number;
//   profileImage?: string;
// }
export interface ArticleData {
  slug: string;
  fullpath: string;
  post_type: string;
  meta_data: {
    published_time: string;
    modified_time: string;
    section: string;
    tags: string[];
    seo: {
      keywords: string;
      description: string;
    };
    og: {
      title: string;
      description: string;
      image: string;
      url: string;
      type: string;
    };
    twitter: {
      title: string;
      description: string;
      image: string;
      card: string;
      site: string;
      creator: string;
    };
    facebook: {
      title: string;
      description: string;
      image: string;
    };
  };
  title: string;
  description: string;
  hero_image: string;
  json_content: any[];
  content: string;
  topics: Topics[];
  category: Category[];
  author: Author[];
  authors: Author[];
  // Add other properties of articleData here if needed
}

export default function ArticlePage() {
  const params = useParams();

  const postType = params?.post_type as string;
  const category = params?.category as string;
  const slug = params?.slug as string;

  const fullPath = `${postType}/${category}/${slug}`;

  const [articleData, setArticleData] = useState<ArticleData>({
    slug: "",
    fullpath: "",
    post_type: "",
    meta_data: {
      published_time: "",
      modified_time: "",
      section: "",
      tags: [],
      seo: {
        keywords: "",
        description: "",
      },
      og: {
        title: "",
        description: "",
        image: "",
        url: "",
        type: "",
      },
      twitter: {
        title: "",
        description: "",
        image: "",
        card: "",
        site: "",
        creator: "",
      },
      facebook: {
        title: "",
        description: "",
        image: "",
      },
    },
    title: "",
    description: "",
    hero_image: "",
    json_content: [],
    content: "",
    topics: [],
    category: [],
    author: [],
    authors: [],
  });

  if (articleData.fullpath !== fullPath && articleData.fullpath) {
    // return {
    //   redirect: {
    //     destination: `/${articleData.fullpath}`,
    //     permanent: true, // This makes it a 301 redirect
    //   },
    // };
  }

  const [trendingArticle, setTrendingArticle] = useState<Section>({
    label: "",
    template: "",
    type: "",
    articles: [],
    description: "",
    image: "",
     buttontext:""
  });
  const [relatedArticle, setRelatedArticle] = useState<Section>({
    label: "",
    template: "",
    type: "",
    articles: [],
    description: "",
    image: "",
  });
  useEffect(() => {
    const getArticleData = async () => {
      console.log("articleData", fullPath);
      const response = await articleService.getArticleDataByFullPath(slug);
      setArticleData(response.data);
      // console.log(response.data, "articleData");

        const trendingResponse = await articleService.getTrendingArticle(slug);
        console.log(trendingResponse, "response");
        setTrendingArticle({label: "Trending", template: "trending_section_right", type: "trending", articles: trendingResponse?.data || [], description: "", image: ""});
      // setArticleData(response.data);

      const relatedResponse = await articleService.getRelatedArticle(slug);
      console.log(relatedResponse, "relatedResponse");
      setRelatedArticle({label: "Related", template: "trending_section_right", type: "trending", articles: relatedResponse?.data || [], description: "", image: ""});
    };
    getArticleData();
  }, []);


  if(!articleData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-12">
      <div className="flex lg:flex-row relative flex-col gap-8 w-full">
        <div className="w-full lg:w-2/3">
         <ArticlePreview
            data={articleData}
          />
          <ArticleContent
            data={articleData}
            trendingData={trendingArticle}
          />
        </div>
        <div className="w-full lg:w-1/3 sticky top-24 h-fit">
          <TrendingSectionRight data={relatedArticle} />
        </div>
      </div>
    </section>
  );
}
