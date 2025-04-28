// src/components/AuthorGrid.tsx

import { Author } from '@/types/common';
import AuthorCard from './AuthorCard';

interface AuthorGridProps {
  authors: Author[];
}

const AuthorGrid = ({ authors }: AuthorGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {authors.map((author) => (
        <AuthorCard key={author.id} author={author} />
      ))}
    </div>
  );
};

export default AuthorGrid;