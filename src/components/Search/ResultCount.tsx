// src/components/search/ResultCount.tsx
import React from 'react';

interface ResultCountProps {
  count: number;
}

export const ResultCount: React.FC<ResultCountProps> = ({ count }) => {
  return (
    <div className="text-borderGray font-medium text-sm">
      Showing <span className="font-bold text-black">{count}</span> Results
    </div>
  );
};