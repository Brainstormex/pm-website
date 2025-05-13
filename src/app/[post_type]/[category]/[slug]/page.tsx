"use client";
import TrendingSectionRight from "@/components/Sections/TrendingSectionRight";
import ArticleContent from "../../../../components/ArticleContent";
import ArticlePreview from "../../../../components/ArticlePreview";
import { useEffect, useState } from "react";
import { articleService } from "@/services/articleService";
import { useParams } from "next/navigation";
import { Section } from "@/types/common";
import { ArticleData } from "@/types/article.types";

const sampleArticleData: ArticleData = {
  "slug": "who-is-elon-musk",
  "fullpath": "/post type 2/employee-engagement/who-is-elon-musk",
  "post_type": {
      "post_type_id": 2,
      "name": "Post Type 2"
  },
  "meta_data": {
      "published_time": null,
      "modified_time": "2025-05-04T17:28:32.512Z",
      "section": "talent-management",
      "tags": [
          "Layoffs",
          "Future of Work",
          "Wellbeing"
      ],
      "seo": {
          "keywords": "",
          "description": ""
      },
      "og": {
          "title": "",
          "description": "",
          "image": "",
          "url": "/post type 2/employee-engagement/who-is-elon-musk",
          "type": "article"
      },
      "twitter": {
          "card": "summary_large_image",
          "title": "",
          "description": "",
          "image": "",
          "site": "@PeopleMatters2",
          "creator": "@PeopleMatters2"
      },
      "facebook": {
          "title": "",
          "description": "",
          "image": ""
      }
  },
  "post_id": "11",
  "title": "Who Is Elon Musk?",
  "description": "Few figures in modern business and technology have generated as much attention or controversy as Elon Musk. ",
  "hero_image": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/66b78975-85bb-4db4-8e5d-d370a3506117.jpg",
  "content": "",
  "json_content": [
      {
          "id": 1746374232475,
          "type": "paragraph",
          "content": "<span style=\"color: rgb(17, 17, 17); font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; font-size: 18px; letter-spacing: 0.05px; background-color: rgb(255, 255, 255);\">He is also now likely the world's most powerful. In what the&nbsp;</span><em style=\"color: rgb(17, 17, 17); font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; font-size: 18px; letter-spacing: 0.05px; background-color: rgb(255, 255, 255);\">Financial Times</em><span style=\"color: rgb(17, 17, 17); font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; font-size: 18px; letter-spacing: 0.05px; background-color: rgb(255, 255, 255);\">&nbsp;has called \"a hostile takeover of the U.S. government,\" Musk leveraged over $280 million in campaign donations and vocal support for Donald Trump during the 2024 election into a significant position as (unofficial) head of the so-called Department of Government Efficiency (DOGE), where he now wields unprecedented sway over federal policy and spending</span>",
          "comments": []
      },
      {
          "id": 1746374436497,
          "type": "header",
          "content": "Early Life and Education",
          "comments": []
      },
      {
          "id": 1746374462087,
          "type": "paragraph",
          "content": "<span style=\"color: rgb(17, 17, 17); font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; font-size: 18px; letter-spacing: 0.05px; background-color: rgb(255, 255, 255);\">Born in 1971 in Pretoria, South Africa, Elon Reeve Musk's early years were marked by privilege and personal challenges.</span><span class=\"mntl-inline-citation mntl-dynamic-tooltip--trigger wrapped\" data-id=\"#citation-1\" tabindex=\"0\" style=\"position: inherit; vertical-align: baseline; font-size: 14px; color: rgb(0, 0, 238); cursor: pointer; display: inline-flex; justify-content: center; align-items: baseline; margin-left: 2px; letter-spacing: 0.07em; line-height: 1; font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; background-color: rgb(255, 255, 255);\"><span style=\"pointer-events: none; position: relative; z-index: 89; top: -7px;\">5</span></span><span style=\"color: rgb(17, 17, 17); font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; font-size: 18px; letter-spacing: 0.05px; background-color: rgb(255, 255, 255);\">&nbsp;His father, Errol Musk, worked as an electromechanical engineer and property developer, while his mother, Maye Musk, was a model and dietitian. The family's considerable wealth came primarily from Errol's engineering consulting work and his stake in an emerald mine.</span><span class=\"mntl-inline-citation mntl-dynamic-tooltip--trigger wrapped\" data-id=\"#citation-34\" tabindex=\"0\" style=\"position: inherit; vertical-align: baseline; font-size: 14px; color: rgb(0, 0, 238); cursor: pointer; display: inline-flex; justify-content: center; align-items: baseline; margin-left: 2px; letter-spacing: 0.07em; line-height: 1; font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; background-color: rgb(255, 255, 255);\"><span style=\"pointer-events: none; position: relative; z-index: 89; top: -7px;\">6</span></span><span style=\"color: rgb(17, 17, 17); font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; font-size: 18px; letter-spacing: 0.05px; background-color: rgb(255, 255, 255);\">&nbsp;After his parents divorced in 1980, Musk lived with his father, a decision he would later describe as a mistake.</span>",
          "comments": []
      },
      {
          "id": 1746374469120,
          "type": "header",
          "content": "Early Career",
          "comments": []
      },
      {
          "id": 1746374481144,
          "type": "paragraph",
          "content": "<span style=\"color: rgb(17, 17, 17); font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; font-size: 18px; letter-spacing: 0.05px; background-color: rgb(255, 255, 255);\">Musk co-founded his first significant venture, Zip2, with his brother Kimbal in the mid-1990s. Initially operating from a small rented office in Palo Alto, CA, Zip2 provided business directories and maps for newspapers during the early days of the Internet. In 1999, Compaq acquired Zip2 for about $307 million, making Musk a multimillionaire in his late 20s.</span>",
          "comments": []
      },
      {
          "id": 1746374491054,
          "type": "paragraph",
          "content": "<span style=\"color: rgb(17, 17, 17); font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; font-size: 18px; letter-spacing: 0.05px; background-color: rgb(255, 255, 255);\">With this newfound capital, Musk was quick to launch X.com in 1999, an online financial portal.</span><span class=\"mntl-inline-citation mntl-dynamic-tooltip--trigger wrapped\" data-id=\"#citation-8\" tabindex=\"0\" style=\"position: inherit; vertical-align: baseline; font-size: 14px; color: rgb(0, 0, 238); cursor: pointer; display: inline-flex; justify-content: center; align-items: baseline; margin-left: 2px; letter-spacing: 0.07em; line-height: 1; font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; background-color: rgb(255, 255, 255);\"><span style=\"pointer-events: none; position: relative; z-index: 89; top: -7px;\">13</span></span><span style=\"color: rgb(17, 17, 17); font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; font-size: 18px; letter-spacing: 0.05px; background-color: rgb(255, 255, 255);\">&nbsp;Within a year, X.com merged with its primary competitor, Confinity, which had developed the online payment system,&nbsp;</span><a href=\"https://www.investopedia.com/the-paypal-mafia-8759491\" data-component=\"link\" data-source=\"inlineLink\" data-type=\"internalLink\" data-ordinal=\"1\" style=\"text-decoration-line: underline; color: rgb(44, 64, 208); font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; font-size: 18px; letter-spacing: 0.05px; background-color: rgb(255, 255, 255);\">PayPal</a><span style=\"color: rgb(17, 17, 17); font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; font-size: 18px; letter-spacing: 0.05px; background-color: rgb(255, 255, 255);\">.</span><span class=\"mntl-inline-citation mntl-dynamic-tooltip--trigger wrapped\" data-id=\"#citation-9\" tabindex=\"0\" style=\"position: inherit; vertical-align: baseline; font-size: 14px; color: rgb(0, 0, 238); cursor: pointer; display: inline-flex; justify-content: center; align-items: baseline; margin-left: 2px; letter-spacing: 0.07em; line-height: 1; font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; background-color: rgb(255, 255, 255);\"><span style=\"pointer-events: none; position: relative; z-index: 89; top: -7px;\">14</span></span><span style=\"color: rgb(17, 17, 17); font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; font-size: 18px; letter-spacing: 0.05px; background-color: rgb(255, 255, 255);\">&nbsp;When eBay Inc. (</span><a href=\"https://www.investopedia.com/markets/quote?tvwidgetsymbol=ebay\" data-component=\"link\" data-source=\"inlineLink\" data-type=\"internalLink\" data-ordinal=\"2\" style=\"text-decoration-line: underline; color: rgb(44, 64, 208); font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; font-size: 18px; letter-spacing: 0.05px; background-color: rgb(255, 255, 255);\">EBAY</a><span style=\"color: rgb(17, 17, 17); font-family: SourceSansPro, &quot;Source Sans Pro-fallback&quot;, sans-serif; font-size: 18px; letter-spacing: 0.05px; background-color: rgb(255, 255, 255);\">) acquired PayPal in 2002 for $1.5 billion, Musk received about $160 million after taxes for his stake.</span>",
          "comments": []
      },
      {
          "id": 1746374504049,
          "type": "gallery",
          "content": "",
          "images": [
              {
                  "media_url": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/66b78975-85bb-4db4-8e5d-d370a3506117.jpg",
                  "media_alt": ""
              },
              {
                  "media_url": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/e8225668-0c26-4cf7-a802-5ff736c074b0.jpg",
                  "media_alt": ""
              },
              {
                  "media_url": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/977cc265-be03-4335-aa2a-7f7be13bc483.jpg",
                  "media_alt": ""
              },
              {
                  "media_url": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/281012a5-1ac0-47fc-8955-f7c2100a460f.jpg",
                  "media_alt": ""
              },
              {
                  "media_url": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/6e6be36b-9b8c-409a-8395-bd948b635e82.jpg",
                  "media_alt": ""
              },
              {
                  "media_url": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/e2809cb8-7a40-448a-bcd0-90464ea7c050.png",
                  "media_alt": ""
              },
              {
                  "media_url": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/a634bcc6-3c86-45ca-89b5-9e3c510fe926.jpg",
                  "media_alt": ""
              }
          ],
          "galleryType": "grid",
          "comments": []
      },
      {
        "id": 174637450404922,
        "type": "slider",
        "content": "",
        "images": [
            {
                "media_url": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/66b78975-85bb-4db4-8e5d-d370a3506117.jpg",
                "media_alt": ""
            },
            {
                "media_url": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/e8225668-0c26-4cf7-a802-5ff736c074b0.jpg",
                "media_alt": ""
            },
            {
                "media_url": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/977cc265-be03-4335-aa2a-7f7be13bc483.jpg",
                "media_alt": ""
            },
            {
                "media_url": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/281012a5-1ac0-47fc-8955-f7c2100a460f.jpg",
                "media_alt": ""
            },
            {
                "media_url": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/6e6be36b-9b8c-409a-8395-bd948b635e82.jpg",
                "media_alt": ""
            },
            {
                "media_url": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/e2809cb8-7a40-448a-bcd0-90464ea7c050.png",
                "media_alt": ""
            },
            {
                "media_url": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/a634bcc6-3c86-45ca-89b5-9e3c510fe926.jpg",
                "media_alt": ""
            }
        ],
        "galleryType": "grid",
        "comments": []
    },
      {
          "id": 1746374611697,
          "type": "summary",
          "content": "SpaceX, founded by Musk in 2002, has built its $350 billion valuation largely through government contracts, receiving over $22 billion from NASA, the Department of Defense, and other federal agencies.\n17 While its early years were fraught with setbacks—its first three launches failed to reach space—the company has since achieved significant milestones in space exploration, becoming the first private company to send a spacecraft to the International Space Station.",
          "comments": []
      },
      {
          "id": 1746374639024,
          "type": "embedded",
          "content": "https://www.youtube.com/watch?v=9ocPm2eM_e8",
          "embed": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9ocPm2eM_e8\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
          "comments": []
      },
      {
          "id": 1746374669846,
          "type": "question",
          "content": "",
          "question": "No company is more closely associated with Elon Musk than Tesla. Although he was not one of the original founders, Musk was an early investor and quickly assumed a leadership role.?",
          "comments": []
      },
      {
          "id": 1746374689215,
          "type": "answer",
          "content": "",
          "answer": "Today, Tesla not only produces popular models like the Model S, 3, X, and Y, but is also a major producer of battery storage and solar systems since its 2016 acquisition of SolarCity. 22\n",
          "comments": []
      },
      {
          "id": 1746374709826,
          "type": "question-answer",
          "content": "",
          "question": "Despite numerous challenges, including production delays, regulatory scrutiny, and periodic financial pressures Tesla has been remarkably successful. ",
          "answer": "The company's market capitalization frequently exceeds that of all other major automotive manufacturers combined, reflecting investor confidence about its long-term vision, particularly in autonomous driving technology.",
          "comments": []
      },
      {
          "id": 1746374730495,
          "type": "cta",
          "content": "",
          "label": "Read full article here",
          "style": "primary",
          "href": "https://www.investopedia.com/articles/personal-finance/061015/how-elon-musk-became-elon-musk.asp",
          "target": "_blank",
          "comments": []
      },
      {
          "id": 1746374779408,
          "type": "attachment",
          "content": "image.jpg",
          "media_url": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/e8225668-0c26-4cf7-a802-5ff736c074b0.jpg",
          "target": "_blank",
          "comments": []
      },
      {
          "id": 1746374812040,
          "type": "blurb",
          "content": "He is also now likely the world's most powerful. In what the Financial Times has called \"a hostile takeover of the U.S. government,\" Musk leveraged over $280 million in campaign donations and vocal support for Donald Trump during the 2024 election into a significant position as (unofficial) head of the so-called Department of Government Efficiency (DOGE), where he now wields unprecedented sway over federal policy and spending.",
          "comments": []
      },
      {
          "id": 1746374845496,
          "type": "blockQuote",
          "content": "The company has also expanded into commercial satellite services through its Starlink constellation, which provides global broadband connectivity.",
          "comments": []
      },
      {
          "id": 1746374860236,
          "type": "fact",
          "content": "Did SpaceX begin with a spitting incident? That's the claim of several around Musk when he formed the company. After a Russian rocket designer spat on his shoes in 2001, \"this act so completely offended Elon that he decided on the flight home [from Russia] that he would start his own rocket company to compete with them,\" former NASA deputy administrator Lori Garver has written",
          "comments": []
      },
      {
          "id": 1746374882591,
          "type": "also-read",
          "content": "",
          "title": "Are you overlooking gamification as a talent strategy?",
          "slug": "are-you-overlooking-gamification-as-a-talent-strategy-44921",
          "article_id": 5,
          "comments": []
      }
  ],
  "category": [
      {
          "category_id": 17,
          "name": "employee-engagement",
          "slug": "employee-engagement",
          "parent": {
              "category_id": 18,
              "name": "talent-management",
              "slug": "talent-management"
          }
      }
  ],
  "topics": [
      {
          "tag_id": 8,
          "name": "Layoffs",
          "url": "layoffs"
      },
      {
          "tag_id": 7,
          "name": "Future of Work",
          "url": "futureofwork"
      },
      {
          "tag_id": 6,
          "name": "Wellbeing",
          "url": "wellbeing"
      }
  ],
  "authors": [
      {
          "user_id": 9,
          "username": "Editor",
          "url": "editor",
          "social_link": "www.linkedin.com/in/",
          "profile_image": null,
          "email": "editor1@gmail.com",
          "full_name": null,
          "first_name": "ed",
          "last_name": "tor",
          "bio": "ed",
          "position": "ba",
          "company": "na",
          "education": null,
          "hobbies": null
      },
      {
          "user_id": 10,
          "username": "JEditor",
          "url": "jeditor",
          "social_link": "www.linkdin.com",
          "profile_image": null,
          "email": "junioreditor1@gmail.com",
          "full_name": null,
          "first_name": "sam",
          "last_name": "band",
          "bio": "bio",
          "position": "wew",
          "company": "en",
          "education": null,
          "hobbies": null
      }
  ],
  "countries": [
      {
          "country_id": 1,
          "name": "India"
      },
      {
          "country_id": 3,
          "name": "Australia"
      },
      {
          "country_id": 2,
          "name": "Global"
      }
  ],
  "contentWall": {
      "content_wall_id": 3,
      "name": "premium",
      "code": "PREM"
  },
  "currency": {
      "currency_id": 1,
      "name": "US Dollar",
      "code": "USD"
  },
  "postPrice": 99,
  "attachments": "https://dev-data-enpointe.s3.ap-southeast-1.amazonaws.com/images/9815085a-a366-4776-b088-94dab0f918f5.jpg",
  "status": "DRAFT",
  "visibility": "PUBLIC",
  "author": [
      {
          "author": {
              "image": null,
              "social_link": "www.linkedin.com/in/",
              "email": "editor1@gmail.com",
              "user_slug": "editor",
              "first_name": "ed",
              "last_name": "tor"
          },
          "name": "ed tor",
          "slug": "editor",
          "profileImage": null,
          "social_link": "www.linkedin.com/in/",
          "email": "editor1@gmail.com"
      },
      {
          "author": {
              "image": null,
              "social_link": "www.linkdin.com",
              "email": "junioreditor1@gmail.com",
              "user_slug": "jeditor",
              "first_name": "sam",
              "last_name": "band"
          },
          "name": "sam band",
          "slug": "jeditor",
          "profileImage": null,
          "social_link": "www.linkdin.com",
          "email": "junioreditor1@gmail.com"
      }
  ]
}

export default function ArticlePage() {
  const params = useParams();

  const postType = params?.post_type as string;
  const category = params?.category as string;
  const slug = params?.slug as string;

  const fullPath = `${postType}/${category}/${slug}`;

  const [articleData, setArticleData] = useState<ArticleData | null>(null);

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
      setTrendingArticle({
        label: "Trending",
        template: "trending_section_right",
        type: "trending",
        articles: trendingResponse?.data || [],
        description: "",
        image: "",
      });
      // setArticleData(response.data);

      const relatedResponse = await articleService.getRelatedArticle(slug);
      console.log(relatedResponse, "relatedResponse");
      setRelatedArticle({
        label: "Related",
        template: "trending_section_right",
        type: "trending",
        articles: relatedResponse?.data || [],
        description: "",
        image: "",
      });
    };
    getArticleData();
  }, []);

  if (!articleData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-12">
      <div className="flex lg:flex-row relative flex-col gap-8 w-full">
        <div className="w-full lg:w-2/3">
          <ArticlePreview data={articleData} />
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
