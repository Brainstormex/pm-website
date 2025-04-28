import React from 'react';

interface ViewMoreButtonProps {
  isExpanded: boolean;
  onClick: () => void;
}

export const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({ isExpanded, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-orange hover:text-orange-700 text-xs font-semibold flex items-center mt-4"
    >
      + VIEW {isExpanded ? 'LESS' : 'MORE'}
    </button>
  );
};
