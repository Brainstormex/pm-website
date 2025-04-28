// src/app/authors/page.tsx
"use client";

import AuthorGrid from "@/app/authors/AuthorGrid";
// import { authors } from "@/app/authors/data";
import { AuthorHeader } from "./AuthorHeader";
import { CustomPagination } from "@/components/ui/CustomPagination";
import { useEffect, useState } from "react";
import { pageService } from "@/services/pageServices";
import { Author } from "@/types/common";

interface Response {
  data: {
    authors: Author[]
    totalPages: number
  }
}

export default function AuthorsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [totalPages, setTotalPages] = useState(10);
  const [sortBy, setSortBy] = useState("a-z");
  // const totalPages = 20 // Increased to show ellipsis behavior

  useEffect(() => {
    const fetchAuthors = async () => {
      const response:Response = await pageService.getAuthors(currentPage,9,sortBy);
      setAuthors(response.data.authors);
      setTotalPages(response.data.totalPages);
    };
    fetchAuthors();
  }, [currentPage,sortBy]);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <AuthorHeader sortBy={sortBy} setSortBy={setSortBy} />
      <AuthorGrid authors={authors} />
      <CustomPagination
        className="mt-8"
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
