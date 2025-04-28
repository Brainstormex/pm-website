'use client'
import { Search,ChevronRight } from 'lucide-react';
import React, { useState, FormEvent } from 'react';

interface SearchBarProps {
  initialQuery: string;
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ initialQuery, onSearch }) => {
  const [query, setQuery] = useState(initialQuery);
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full">
      <div className="relative w-full">
        <div className="absolute inset-y-0 -left-3 flex items-center pl-3 pointer-events-none">
         <Search className='w-5 h-5 md:w-6 md:h-6 text-borderGray' />
        </div>
        <input 
          type="search" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" w-full py-2 md:py-2.5 ring-0 pl-8 md:pl-10 pr-16 md:pr-20 text-sm text-gray-900 border-b border-border active:ring-none focus:ring-0 " 
          placeholder="Google Layoffs" 
        />
      <div className='absolute inset-y-0 -right-3'>
        <button type="submit" className="flex items-center justify-end gap-x-1 px-3 md:px-4 py-2 md:py-2.5 ml-2 text-sm font-medium text-gray-700 bg-white whitespace-nowrap">
          <span className='text-foreground text-xs hidden md:inline'>↵</span> 
          <span className='text-xs md:text-sm'>TO SEARCH</span> 
          <ChevronRight className='w-3 h-3 md:w-4 md:h-4 text-foreground' />
        </button>
      </div>
      </div>
    </form>
  );
};








