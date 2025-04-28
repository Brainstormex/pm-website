// src/components/AuthorCard.tsx

import Link from "next/link";
import Image from "next/image";
import { Author } from "@/types/common";

// interface AuthorCardProps {
//   author: Author;
// }

const AuthorCard = ({ author }: { author: Author }) => {
  const {
    slug,
    firstName,
    lastName,
    position,
    company,
    email,
    profileImage,
    linkedin,
  } = author;

  return (
    <div className="block">
      {/* {JSON.stringify(author)} */}
      <div className="flex items-start w-full h-full space-x-5 p-4 hover:bg-gray-50 transition-colors rounded-lg">
        {/* <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0"> */}
        <div className="aspect-square h-full rounded-full overflow-hidden relative">
          <Link href={`/author/${slug}`}>
            <Image
              src={profileImage || "/assets/profile.svg"}
              alt={`${firstName} ${lastName}`}
              fill
              className="object-cover bg-gray-200"
            />
          </Link>
        </div>
        {/* </div> */}

        <div>
          <Link href={`/author/${slug}`}>
            <h3 className="text-base font-medium text-black">
              {firstName} {lastName}
            </h3>
          </Link>
          <p className="text-sm text-gray-500">{position}</p>
          <p className="text-sm font-medium mt-1">{company}</p>

          <div className="flex items-center mt-2 text-gray-400 text-sm">
            {linkedin && (
              <>
                <Link
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline self-end"
                >
                  <div className="relative h-3 w-3 mb-1">
                    <Image src="/assets/linkedIn.svg" alt="LinkedIn" fill />
                  </div>
                </Link>
              </>
            )}
            {email && (
              <>
                <span className="mx-2 text-gray-300">|</span>
                <span>{email}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
