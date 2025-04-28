"use client"
import AuthorProfile from "@/app/authors/AuthorProfile";
import { pageService } from "@/services/pageServices";
import { Article, Author, PageRendererProps } from "@/types/common";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { articleData } from "@/services/dummay";
import ArticleList from "@/app/authors/ArticleList";
import { CustomPagination } from "@/components/ui/CustomPagination";

interface Response {
  data: {
    stories: Article[]
    totalPages: number
    currentPage: number
  }
}

export default function AuthorArticles({ slug }: PageRendererProps) {


  const [authorData, setAuthorData] = useState<Author | null>(null);
  const [authorArticles, setAuthorArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  // const totalPages = 20 // Increased to show ellipsis behavior

  useEffect(() => {
    const fetchData = async () => {


        try {
          const authorResponse = await pageService.getAuthor(slug || "");
          setAuthorData(authorResponse.data);
          
          console.log(authorResponse.data, "authorData");
          
          if (!authorResponse.data) {
            notFound();
          }
          
          const storiesResponse:Response = await pageService.getAuthorStories(slug || "");
          
          if (!storiesResponse.data || storiesResponse.data.stories.length === 0) {
            setAuthorArticles(articleData );
          } else {
            setAuthorArticles(storiesResponse.data.stories);
          }
          setTotalPages(storiesResponse.data.totalPages || 1)
        } catch (error) {
          console.error("Error fetching author data:", error);
        } finally {
          setLoading(false);
        }
      
    };
    
    fetchData();
  }, [currentPage]);

  if (loading) {
    return <div className="max-w-7xl mx-auto py-9">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-9">
      <Link href="/authors" className="text-xs font-bold text-inkBlack">
        GO BACK
      </Link>
      {authorData && (
        <AuthorProfile author={authorData as Author} />
      )}

      <ArticleList articles={authorArticles} />

      <CustomPagination className="mt-8" currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}
