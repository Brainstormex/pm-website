import React from 'react';

interface SortingOptionsProps {
  value: 'relevance' | 'date' | 'popularity';
  onChange: (value: 'relevance' | 'date' | 'popularity') => void;
}

export const SortingOptions: React.FC<SortingOptionsProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center w-full sm:w-full md:w-auto">
      <label className="text-gray-500 mr-2 text-sm">Sort By</label>
      <div className="relative flex-grow md:flex-grow-0">
        <select 
          value={value}
          onChange={(e) => onChange(e.target.value as 'relevance' | 'date' | 'popularity')}
          className="block w-full md:w-40 appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-blue-500 text-sm"
        >
          <option value="relevance">Relevance</option>
          <option value="date">Date</option>
          <option value="popularity">Popularity</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};