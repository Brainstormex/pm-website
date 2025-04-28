'use client'
import React, { useState, useRef, useEffect } from 'react';

interface FilterOption {
  id: string;
  label: string;
}

interface DropdownOption {
  value: string;
  label: string;
}

interface ResearchPageProps {
  title?: string;
  filterTags?: FilterOption[];
  showingOptions?: DropdownOption[];
  sortByOptions?: DropdownOption[];
  defaultShowingOption?: string;
  defaultSortByOption?: string;
  defaultActiveFilters?: string[];
  onFilterChange?: (filters: string[]) => void;
  onShowingChange?: (option: string) => void;
  onSortByChange?: (option: string) => void;
  children?: React.ReactNode;
}

const ResearchHeader: React.FC<ResearchPageProps> = ({
  title = 'Research',
  filterTags = [
    { id: 'SHRA', label: 'SHRA' },
    { id: 'PMI', label: 'People Matters Initiative' },
    { id: 'CB', label: 'Co-Branded' }
  ],
  showingOptions = [
    { value: 'all', label: 'All' },
    { value: 'reports', label: 'Reports' },
    { value: 'articles', label: 'Articles' },
    { value: 'case_studies', label: 'Case Studies' }
  ],
  sortByOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'date', label: 'Date' },
    { value: 'title', label: 'Title' },
    { value: 'author', label: 'Author' }
  ],
  defaultShowingOption = 'all',
  defaultSortByOption = 'relevance',
  defaultActiveFilters = [],
  onFilterChange = () => {},
  onShowingChange = () => {},
  onSortByChange = () => {},
  children
}) => {
  // State for tracking filters and dropdown selections
  const [showingFilter, setShowingFilter] = useState(defaultShowingOption);
  const [sortByFilter, setSortByFilter] = useState(defaultSortByOption);
  const [activeFilters, setActiveFilters] = useState<string[]>(defaultActiveFilters);
  
  // State for controlling dropdown visibility
  const [isShowingOpen, setIsShowingOpen] = useState(false);
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  
  // Refs for handling click outside to close dropdowns
  const showingDropdownRef = useRef<HTMLDivElement>(null);
  const sortByDropdownRef = useRef<HTMLDivElement>(null);

  // Handle toggling filter tags
  const toggleFilter = (filterId: string) => {
    const updatedFilters = activeFilters.includes(filterId)
      ? activeFilters.filter(item => item !== filterId)
      : [...activeFilters, filterId];
    
    setActiveFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  // Handle showing filter change
  const handleShowingChange = (option: string) => {
    setShowingFilter(option);
    setIsShowingOpen(false);
    onShowingChange(option);
  };

  // Handle sort by filter change
  const handleSortByChange = (option: string) => {
    setSortByFilter(option);
    setIsSortByOpen(false);
    onSortByChange(option);
  };

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showingDropdownRef.current && 
        !showingDropdownRef.current.contains(event.target as Node)
      ) {
        setIsShowingOpen(false);
      }
      
      if (
        sortByDropdownRef.current && 
        !sortByDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSortByOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-5xl font-bold mb-6 md:mb-0">
          {title}<span className="text-orange">.</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Showing Dropdown */}
          <div className="relative" ref={showingDropdownRef}>
            <button 
              className="flex items-center justify-between w-48 px-4 py-2 border border-gray-300 rounded-md"
              onClick={() => setIsShowingOpen(!isShowingOpen)}
            >
              <span>Showing: {showingOptions.find(opt => opt.value === showingFilter)?.label || showingFilter}</span>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isShowingOpen && (
              <div className="absolute z-10 w-48 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul>
                  {showingOptions.map(option => (
                    <li 
                      key={option.value}
                      className="px-4 py-2  cursor-pointer"
                      onClick={() => handleShowingChange(option.value)}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Sort By Dropdown */}
          <div className="relative" ref={sortByDropdownRef}>
            <button 
              className="flex items-center justify-between w-48 px-4 py-2 border border-gray-300 rounded-md"
              onClick={() => setIsSortByOpen(!isSortByOpen)}
            >
              <span>Sort By {sortByOptions.find(opt => opt.value === sortByFilter)?.label || sortByFilter}</span>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isSortByOpen && (
              <div className="absolute z-10 w-48 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul>
                  {sortByOptions.map(option => (
                    <li 
                      key={option.value}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSortByChange(option.value)}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {filterTags.map((tag) => (
          <button
            key={tag.id}
            className={`px-4 py-2 rounded-full border ${
              activeFilters.includes(tag.id)
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-800 border-borderGray'
            } transition-colors `}
            onClick={() => toggleFilter(tag.id)}
          >
            {tag.label}
          </button>
        ))}
      </div>

      {/* <div className="min-h-[300px] border-t border-gray-200 pt-8">
        {children || (
          <div className="flex items-center justify-center text-gray-500 h-32">
            Research content would be displayed here based on the selected filters.
          </div>
        )}
      </div> */}
    </div>
  );
};

export default ResearchHeader;


// How to Use
// 1. Import the ResearchHeader component
//   const researchItems = [
//     { id: '1', title: 'The Future of Work', type: 'report', tags: ['SHRA', 'PMI'] },
//     { id: '2', title: 'Sustainability Practices', type: 'article', tags: ['CB'] },
//     { id: '3', title: 'Leadership in Digital Age', type: 'case_study', tags: ['PMI'] }
//   ];

//   // Filter options
//   const filterTags = [
//     { id: 'SHRA', label: 'SHRA' },
//     { id: 'PMI', label: 'People Matters Initiative' },
//     { id: 'CB', label: 'Co-Branded' }
//   ];

//   // Dropdown options
//   const showingOptions = [
//     { value: 'all', label: 'All' },
//     { value: 'report', label: 'Reports' },
//     { value: 'article', label: 'Articles' },
//     { value: 'case_study', label: 'Case Studies' }
//   ];

//   const sortByOptions = [
//     { value: 'relevance', label: 'Relevance' },
//     { value: 'date', label: 'Date' },
//     { value: 'title', label: 'Title' },
//     { value: 'author', label: 'Author' }
//   ];

//   // State handlers (you would implement these based on your needs)
//   const handleFilterChange = (filters: string[]) => {
//     console.log('Active filters:', filters);
//     // Filter your research items based on these filters
//   };

//   const handleShowingChange = (option: string) => {
//     console.log('Showing:', option);
//     // Filter your research items based on type
//   };

//   const handleSortByChange = (option: string) => {
//     console.log('Sort by:', option);
//     // Sort your research items
//   };

{/* <ResearchHeader
title="Research"
filterTags={filterTags}
showingOptions={showingOptions}
sortByOptions={sortByOptions}
defaultActiveFilters={['SHRA']}
onFilterChange={handleFilterChange}
onShowingChange={handleShowingChange}
onSortByChange={handleSortByChange}
> */}