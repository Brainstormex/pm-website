import MagazineCard from './MagazineCard';
import { Magazine } from './page';

interface MagazineGridProps {
  issues: Magazine[];
}

export default function MagazineGrid({ issues }: MagazineGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      {issues.map((issue) => (
        <MagazineCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
}