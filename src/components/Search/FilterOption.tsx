// src/components/search/FilterOption.tsx
import React from 'react';
import { FilterCategory } from '../../types/podcast';

interface FilterOptionProps {
  filter: FilterCategory;
  onToggle: () => void;
}

export const FilterOption: React.FC<FilterOptionProps> = ({ filter, onToggle }) => {
  return (
    <div className="flex items-center mb-2">
      <input
        id={`filter-${filter.name}`}
        type="checkbox"
        checked={filter.selected}
        onChange={onToggle}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      />
      <label htmlFor={`filter-${filter.name}`} className="ml-2 text-sm font-medium text-foreground flex justify-start gap-x-1 w-full">
        <span>{filter.name}</span>
        <span className="text-foreground font-medium">({filter.count})</span>
      </label>
    </div>
  );
};
