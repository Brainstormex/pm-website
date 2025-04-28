"use client";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const Pagination = () => {
    const [totalPages, setTotalPages] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
  
    const handlePageClick = (page: number) => {
      setCurrentPage(page);
    };
  
    return (
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-center gap-[42px]">
          <button
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="disabled:opacity-20"
          >
            <ChevronLeft />
          </button>
  
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`w-10 h-10 rounded-md flex items-center justify-center 
                  ${currentPage === page ? "bg-black text-white" : "bg-inactiveGray opacity-40 text-[#141414BF] "}`}
              >
                {page}
              </button>
            ))}
          </div>
  
          <button
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            className="disabled:opacity-20"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    );
  };
  
  export default Pagination;