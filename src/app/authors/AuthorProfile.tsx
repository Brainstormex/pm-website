// src/components/AuthorProfile.tsx

import Image from "next/image";
import Link from "next/link";
import { Author } from "@/types/common";

interface AuthorProfileProps {
  author: Author;
}

const AuthorProfile = ({ author }: AuthorProfileProps) => {
  const {
    firstName,
    lastName,
    position,
    company,
    email,
    profileImage,
    linkedin,
  } = author;

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
      <div className="flex-1">
        <h1 className="text-7xl font-medium">
          {firstName} {lastName}
          <span className="text-orange">.</span>
        </h1>

        <div className="flex flex-wrap gap-6 mt-7 justify-start">
          {(position || company || email) && (
            <div className="flex justify-between gap-4">
              {position && (
                <div>
                  <p className="text-xs font-semibold text-inkBlack/40">
                    Position
                  </p>
                  <p className="text-inkBlack">{position}</p>
                </div>
              )}
              {company && (
                <div>
                  <p className="text-xs font-semibold text-inkBlack/40">
                    Company
                  </p>
                  <p className="text-inkBlack">{company}</p>
                </div>
              )}
              {email && (
                <div>
                  <p className="text-xs font-semibold text-inkBlack/40">
                    Email
                  </p>
                  <p className="text-inkBlack">{email}</p>
                </div>
              )}
            </div>
          )}
          {linkedin && (
            <div className="flex items-baseline self-end">
              <Link
                href={linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-inactiveGray relative hover:text-blue-600"
              >
                <div className="relative h-4 w-4 mb-1">
                  <Image src="/assets/linkedIn.svg" alt="LinkedIn" fill />
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="md:w-1/6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          {profileImage && (
            <Image
              src={profileImage || "/assets/profile.svg"}
              alt={`${firstName} ${lastName}`}
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
