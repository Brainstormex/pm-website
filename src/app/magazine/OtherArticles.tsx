// components/ArticleCard.tsx
import Image from "next/image";
import Link from "next/link";
import { OtherArticleCard } from "./OtherArticleCard";
import { Article } from "./page";

    // export interface Article {
    //   id: string;
    //   title: string;
    //   excerpt: string;
    //   coverImage: string;
    //   author: string;
    //   date: string;
    //   magazineId: string;
    //   slug: string;
    // }

interface OtherArticleListProps {
  articles: Article[];
}

export const OtherArticleList = ({ articles }: OtherArticleListProps) => {
  return (
    <div className="mx-auto px-4">
      <h1 className="text-2xl font-bold border-b border-black pb-2 mb-2">
        OTHER STORIES
      </h1>
      {articles.map((article) => (
        <OtherArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

// // pages/index.tsx
// import type { NextPage } from "next";
// import { ArticleList } from "../components/ArticleList";

// const Home: NextPage = () => {
//   const articles = [
//     {
//       id: 1,
//       title: "Finding Love In A Locked-Down Kashmir",
//       excerpt:
//         "Love was the greatest form of resistance in Kashmir during lockdowns.",
//       author: "MEHAK JAMAL",
//       date: "13 February 2025",
//       imageUrl: "/images/kashmir-love.jpg",
//       slug: "finding-love-in-locked-down-kashmir",
//     },
//     {
//       id: 2,
//       title: "Between Liberation And Loneliness: Queer Life In The City",
//       excerpt:
//         "Queer people find vibrancy and welcome anonymity in megacities but there is a limit to the choices they offer.",
//       author: "SANTANU BHATTACHARYA",
//       date: "13 February 2025",
//       imageUrl: "/images/queer-city-life.jpg",
//       slug: "between-liberation-and-loneliness",
//     },
//     {
//       id: 3,
//       title: "The Silent Weight Of Separation",
//       excerpt:
//         "My divorce came with a package deal—loneliness, depression and social isolation followed.",
//       author: "JAEISHA ARORA",
//       date: "13 February 2025",
//       imageUrl: "/images/separation.jpg",
//       slug: "the-silent-weight-of-separation",
//     },
//     {
//       id: 4,
//       title: "The World As The Body Of The Absent Lover",
//       excerpt:
//         "Visual artist Hari Katragadda's project 'I'll Be Looking At The Moon But I'll Be Seeing You' speaks of how desire is not just about the body but the entire world through the body.",
//       author: "HARI KATRAGADDA",
//       date: "12 February 2025",
//       imageUrl: "/images/absent-lover.jpg",
//       slug: "the-world-as-the-body-of-the-absent-lover",
//     },
//   ];

//   return (
//     <main className="py-8">
//       <ArticleList articles={articles} />
//     </main>
//   );
// };

// export default Home;
