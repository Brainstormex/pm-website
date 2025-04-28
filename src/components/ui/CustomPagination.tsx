"use client";

import React from "react";
import { cn } from "@/utils/utils";

const PaginationContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center", className)}
      {...props}
    />
  );
});
PaginationContent.displayName = "PaginationContent";

const PaginationLink = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-[active=true]:bg-gray-100 data-[active=true]:text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:focus:ring-gray-700 dark:data-[active=true]:bg-gray-700 dark:data-[active=true]:text-gray-100",
        className
      )}
      {...props}
    />
  );
});
PaginationLink.displayName = "PaginationLink";

const PaginationEllipsis = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "h-9 w-9 items-center justify-center rounded-md text-sm font-medium",
        className
      )}
      {...props}
    >
      ...
    </span>
  );
});
PaginationEllipsis.displayName = "PaginationEllipsis";

const PaginationPrevious = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:focus:ring-gray-700",
        className
      )}
      {...props}
    />
  );
});
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:focus:ring-gray-700",
        className
      )}
      {...props}
    />
  );
});
PaginationNext.displayName = "PaginationNext";

const PaginationItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-[active=true]:bg-gray-100 data-[active=true]:text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:focus:ring-gray-700 dark:data-[active=true]:bg-gray-700 dark:data-[active=true]:text-gray-100",
        className
      )}
      {...props}
    />
  );
});
PaginationItem.displayName = "PaginationItem";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showEllipsis?: boolean;
  maxVisiblePages?: number;
  className?: string;
}

const CustomPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  showEllipsis = true,
  maxVisiblePages = 5,
  className,
}: CustomPaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Update the renderPageNumbers function to better handle ellipsis and large page counts
  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Always show first page
    pageNumbers.push(
      <button
        key={1}
        onClick={() => onPageChange(1)}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors",
          currentPage === 1
            ? "bg-black text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        )}
        aria-current={currentPage === 1 ? "page" : undefined}
      >
        1
      </button>
    );

    // Logic for showing ellipsis and page numbers
    if (totalPages <= 7) {
      // If we have 7 or fewer pages, show all pages without ellipsis
      for (let i = 2; i < totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors",
              currentPage === i
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
            aria-current={currentPage === i ? "page" : undefined}
          >
            {i}
          </button>
        );
      }
    } else {
      // We have more than 7 pages, need to use ellipsis

      // Case 1: Current page is close to the beginning
      if (currentPage < 5) {
        for (let i = 2; i <= 5; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => onPageChange(i)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors",
                currentPage === i
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
              aria-current={currentPage === i ? "page" : undefined}
            >
              {i}
            </button>
          );
        }
        pageNumbers.push(
          <span
            key="ellipsis1"
            className="flex h-10 w-10 items-center justify-center"
          >
            ...
          </span>
        );
      }
      // Case 2: Current page is close to the end
      else if (currentPage > totalPages - 4) {
        pageNumbers.push(
          <span
            key="ellipsis1"
            className="flex h-10 w-10 items-center justify-center"
          >
            ...
          </span>
        );
        for (let i = totalPages - 4; i < totalPages; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => onPageChange(i)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors",
                currentPage === i
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
              aria-current={currentPage === i ? "page" : undefined}
            >
              {i}
            </button>
          );
        }
      }
      // Case 3: Current page is in the middle
      else {
        pageNumbers.push(
          <span
            key="ellipsis1"
            className="flex h-10 w-10 items-center justify-center"
          >
            ...
          </span>
        );
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => onPageChange(i)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors",
                currentPage === i
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
              aria-current={currentPage === i ? "page" : undefined}
            >
              {i}
            </button>
          );
        }
        pageNumbers.push(
          <span
            key="ellipsis2"
            className="flex h-10 w-10 items-center justify-center"
          >
            ...
          </span>
        );
      }
    }

    // Always show last page if we have more than 1 page
    if (totalPages > 1) {
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors",
            currentPage === totalPages
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
          aria-current={currentPage === totalPages ? "page" : undefined}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <nav aria-label="Pagination" className={cn("mx-auto flex w-full justify-center", className)}>
      <PaginationContent className="flex items-center gap-1">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-md text-gray-600 transition-colors",
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          )}
          aria-label="Go to previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {renderPageNumbers()}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-md text-gray-600 transition-colors",
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          )}
          aria-label="Go to next page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </PaginationContent>
    </nav>
  );
};

export {
  PaginationContent,
  PaginationLink,
  PaginationEllipsis,
  PaginationPrevious,
  PaginationNext,
  CustomPagination,
  PaginationItem,
};
