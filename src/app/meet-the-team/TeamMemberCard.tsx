import Link from "next/link";
import Image from "next/image";
import { TeamMember } from "./types";



interface TeamMemberCardProps {
    member: TeamMember;
  }
  
  const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
    return (
      <div className="flex flex-col sm:max-w-xs w-full">
        <div className="relative w-full aspect-square rounded-full overflow-hidden mb-2 bg-gray-100">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200"></div>
          )}
        </div>
        <div className="py-2">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-900">{member.name}</h3>
            <Link href={member.linkedin} className="text-gray-500 hover:text-gray-700">
              <span>in</span>
            </Link>
          </div>
          <p className="text-sm text-gray-600">{member.designation}</p>
          <a href={`mailto:${member.email}`} className="text-xs text-gray-400">
            {member.email}
          </a>
        </div>
      </div>
    );
  };
  
  export default TeamMemberCard;