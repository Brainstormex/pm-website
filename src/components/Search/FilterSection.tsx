// src/components/search/FilterSection.tsx
import React from 'react';
import { FilterCategory } from '../../types/podcast';
import { FilterOption } from './FilterOption';
import { ViewMoreButton } from './ViewMoreButton';

interface FilterSectionProps {
  title: string;
  filters: FilterCategory[];
  isExpanded: boolean;
  onToggleFilter: (filterName: string) => void;
  onToggleExpand: () => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({ 
  title, 
  filters, 
  isExpanded, 
  onToggleFilter, 
  onToggleExpand 
}) => {
  // Show first 5 filters, or all if expanded
  const visibleFilters = isExpanded ? filters : filters.slice(0, 5);
  const hasMoreFilters = filters.length > 5;
  
  return (
    <div className="mb-6">
      <h3 className="text-borderGray text-xs font-semibold mb-3">{title}</h3>
      <div>
        {visibleFilters.map((filter) => (
          <FilterOption
            key={filter.name}
            filter={filter}
            onToggle={() => onToggleFilter(filter.name)}
          />
        ))}
      </div>
      {hasMoreFilters && (
        <ViewMoreButton
          isExpanded={isExpanded}
          onClick={onToggleExpand}
        />
      )}
    </div>
  );
};
