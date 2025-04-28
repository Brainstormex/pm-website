"use client";
import TrendingSectionRight from "@/components/Sections/TrendingSectionRight";
import ArticleContent from "@/components/ArticleContent";
import ArticlePreview from "@/components/ArticlePreview";
import { useEffect, useState } from "react";
import { articleService } from "@/services/articleService";
import { useParams } from "next/navigation";
import { ArticleData, Section } from "@/types/common";
import { Author } from "@/types/common";
import crypto from 'crypto';


export default function ArticlePage() {
  const params = useParams();

  const postType = params?.post_type as string;
  const category = params?.category as string;
  const slug = params?.slug as string;

  const fullPath = `test`;

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

  // if (articleData.fullpath !== fullPath && articleData.fullpath) {
  //   // return {
  //   //   redirect: {
  //   //     destination: `/${articleData.fullpath}`,
  //   //     permanent: true, // This makes it a 301 redirect
  //   //   },
  //   // };
  // }

  const postId = decodeURIComponent(params?.post_id as string);

const algorithm = "aes-256-cbc";
  const secretKey = crypto
    .createHash("sha256")
    .update(String(process.env.SECRET_KEY || "your-32-byte-key"))
    .digest("base64")
    .substring(0, 32); // AES-256 needs a 32-byte key

  function decrypt(encryptedText: string): string {
    const [ivHex, encryptedHex] = encryptedText.split(":");
    const iv = Buffer.from(ivHex, "hex");
    const encrypted = Buffer.from(encryptedHex, "hex");
    const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
    const decrypted = Buffer.concat([
      decipher.update(encrypted),
      decipher.final(),
    ]);
    return decrypted.toString();
  }
  const decryptedPostId = decrypt(postId);

  const [trendingArticle, setTrendingArticle] = useState<Section>({
    label: "",
    template: "",
    type: "",
    articles: [],
    description: "",
    image: "",
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
      // console.log("articleData", fullPath);
      // const response = await articleService.getArticleDataByFullPath(slug);
      // setArticleData(response.data);
      // console.log(response.data, "articleData");
      const response = await articleService.getArticlePreview(decryptedPostId);
      console.log(response.data, "articleData");
      setArticleData(response.data);

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
