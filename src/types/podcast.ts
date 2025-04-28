// src/types/index.ts

export interface Article {
    id: string;
    title: string;
    category: string;
    author: string;
    imageSrc: string;
    url: string;
  }
  
  export interface FilterCategory {
    name: string;
    count: number;
    selected: boolean;
  }
  
  export type FilterCategoryMap = {
    [key: string]: FilterCategory[];
  };
  
  export interface SearchState {
    query: string;
    results: Article[];
    totalResults: number;
    filters: FilterCategoryMap;
    sortBy: 'relevance' | 'date' | 'popularity';
    expandedFilters: string[];
  }