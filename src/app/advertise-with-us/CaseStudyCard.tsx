import Image from "next/image";
import { ChevronRight } from "lucide-react";

export interface CaseStudyProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const CaseStudyCard = ({
  date,
  title,
  description,
  imageUrl,
}: CaseStudyProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 h-48 w-full mb-4 relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
        <div className="flex gap-6 mb-3">
          <div className="h-14 w-14 bg-gray-600" />
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold text-gray-600 uppercase">
              {date}
            </p>
            <h3 className="text-lg font-medium">{title}</h3>
          </div>
        </div>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <button className="flex items-center text-sm font-medium">
          READ MORE <ChevronRight className="ml-2" />
        </button>
      </div>
  );
};

export default CaseStudyCard;
