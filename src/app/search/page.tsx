'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Head from 'next/head';
import { SearchBar } from '../../components/Search/SearchBar';
import { ResultCount } from '../../components/Search/ResultCount';
import { SortingOptions } from '../../components/Search/SortingOptions';
import { FilterSection } from '../../components/Search/FilterSection';
import { ArticleCard } from '../../components/Search/ArticleCard';
import useSearch from '../../services/useSearch';

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') || '';
  
  const {
    query: searchQuery,
    results,
    totalResults,
    filters,
    sortBy,
    expandedFilters,
    search,
    toggleFilter,
    toggleExpandedFilter,
    setSortBy
  } = useSearch(query);
  
  useEffect(() => {
    if (query && query !== searchQuery) {
      search(query);
    }
  }, [query, searchQuery, search]);
  
  const handleSearch = (newQuery: string) => {
    const params = new URLSearchParams();
    params.set('q', newQuery);
    router.push(`/search?${params.toString()}`);
  };
  
  return (
    <>
      <Head>
        <title>Search Results: {query || 'All'}</title>
      </Head>
      
      <div className="max-w-7xl w-full mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 w-full">
            <div className="flex-shrink-0">
              <ResultCount count={totalResults} />
            </div>
            
            <div className="lg:flex-grow w-full flex items-end justify-end gap-2">
              <div className="w-full lg:max-w-2xl max-w-full">
                <SearchBar initialQuery={searchQuery} onSearch={handleSearch} />
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <SortingOptions value={sortBy} onChange={setSortBy} />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters sidebar */}
            <div className="w-full md:w-64 flex-shrink-0">
              {Object.entries(filters).map(([category, categoryFilters]) => (
                <div className='flex flex-col md:border-r border-border' key={category}>
                  <FilterSection
                    title={category}
                    filters={categoryFilters}
                    isExpanded={expandedFilters.includes(category)}
                    onToggleFilter={(filterName) => toggleFilter(category, filterName)}
                    onToggleExpand={() => toggleExpandedFilter(category)}
                  />
                </div>
              ))}
            </div>
            
            {/* Results */}
            <div className="flex-grow">
              {results.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {results.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">No results found for &quot;{searchQuery}&quot;</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}