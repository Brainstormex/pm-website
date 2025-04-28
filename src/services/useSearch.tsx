import { useState, useEffect, useCallback } from 'react';
import { SearchState } from '../types/podcast';
import { articles, initialFilters } from '../data/mockData.json';

export default function useSearch(initialQuery: string = '') {
  const [state, setState] = useState<SearchState>({
    query: initialQuery,
    results: [],
    totalResults: 0,
    filters: initialFilters,
    sortBy: 'relevance',
    expandedFilters: []
  });

  const search = useCallback((query: string) => {
    setState(prev => ({ ...prev, query }));
  }, []);

  const toggleFilter = useCallback((category: string, filterName: string) => {
    setState(prev => {
      const newFilters = { ...prev.filters };
      const categoryFilters = [...newFilters[category]];
      const index = categoryFilters.findIndex(f => f.name === filterName);
      
      if (index !== -1) {
        categoryFilters[index] = {
          ...categoryFilters[index],
          selected: !categoryFilters[index].selected
        };
        newFilters[category] = categoryFilters;
      }
      
      return { ...prev, filters: newFilters };
    });
  }, []);

  const toggleExpandedFilter = useCallback((category: string) => {
    setState(prev => {
      const expandedFilters = [...prev.expandedFilters];
      const index = expandedFilters.indexOf(category);
      
      if (index === -1) {
        expandedFilters.push(category);
      } else {
        expandedFilters.splice(index, 1);
      }
      
      return { ...prev, expandedFilters };
    });
  }, []);

  const setSortBy = useCallback((sortBy: 'relevance' | 'date' | 'popularity') => {
    setState(prev => ({ ...prev, sortBy }));
  }, []);

  // Process filters and search
  useEffect(() => {
    // Filter articles based on selected filters and search query
    let filteredResults = [...articles];
    
    // Apply search query
    if (state.query) {
      const query = state.query.toLowerCase();
      filteredResults = filteredResults.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.category.toLowerCase().includes(query) || 
        article.author.toLowerCase().includes(query)
      );
    }
    
    // Apply filters
    const activeFilters: Record<string, string[]> = {};
    
    Object.entries(state.filters).forEach(([category, filters]) => {
      const selectedFilters = filters.filter(f => f.selected).map(f => f.name);
      if (selectedFilters.length > 0) {
        activeFilters[category] = selectedFilters;
      }
    });
    
    // Apply FORMAT filters
    if (activeFilters.FORMAT && activeFilters.FORMAT.length > 0) {
      filteredResults = filteredResults.filter(article => {
        // Map category to FORMAT filter (simplified for demo)
        const format = article.category === 'Technology' ? 'Articles' : 
                      article.category === 'Leadership' ? 'Podcasts' : 'Articles';
        return activeFilters.FORMAT.includes(format);
      });
    }
    
    // Apply CATEGORIES filters
    if (activeFilters.CATEGORIES && activeFilters.CATEGORIES.length > 0) {
      filteredResults = filteredResults.filter(article => {
        // Map category to CATEGORIES filter (simplified for demo)
        return activeFilters.CATEGORIES.includes(article.category) ||
               activeFilters.CATEGORIES.includes('Strategic HR'); // Default fallback
      });
    }
    
    // Apply sorting
    if (state.sortBy === 'date') {
      // For demo, we'll just reverse the list to simulate date sorting
      filteredResults.reverse();
    } else if (state.sortBy === 'popularity') {
      // For demo, we'll sort by id to simulate popularity
      filteredResults.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    }
    
    setState(prev => ({
      ...prev,
      results: filteredResults,
      totalResults: filteredResults.length
    }));
  }, [state.query, state.filters, state.sortBy]);
  
  return {
    ...state,
    search,
    toggleFilter,
    toggleExpandedFilter,
    setSortBy
  };
}