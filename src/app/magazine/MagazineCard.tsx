import Link from 'next/link';
import Image from 'next/image';
import { Magazine } from './page';

interface MagazineCardProps {
  issue: Magazine;
}

export default function MagazineCard({ issue }: MagazineCardProps) {
  // Format the date to show just the day and month
  const date = new Date(issue.date);
  const formattedDate = `${date.getDate()} ${date.toLocaleString('en-US', { month: 'long' })} ${date.getFullYear()}`;

  return (
    <Link href={`/magazine/${issue.id}`} className="group">
      <div className="flex flex-col h-full">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
          <Image
            src={issue.coverImage}
            alt={`${issue.title} - ${formattedDate}`}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            className="object-cover transition-transform group-hover:scale-105 duration-300"
          />
        </div>
        <div className="mt-2 text-center">
          <p className="text-sm text-gray-600">{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
}