import TeamMemberCard from "./TeamMemberCard";
import { TeamMember } from "./types";

const members: TeamMember[] = [
  {
    id: 1,
    name: "First & Last Name",
    designation: "Designation",
    email: "email@peoplematters.com",
    linkedin: "https://linkedin.com/in/username",
    image: "/assets/images/1.webp",
  },
  {
    id: 2,
    name: "First & Last Name",
    designation: "Designation",
    email: "email@peoplematters.com",
    linkedin: "https://linkedin.com/in/username",
    image: "/assets/images/1.webp",
  },
  {
    id: 3,
    name: "First & Last Name",
    designation: "Designation",
    email: "email@peoplematters.com",
    linkedin: "https://linkedin.com/in/username",
    image: "/assets/images/1.webp",
  },
  {
    id: 4,
    name: "First & Last Name",
    designation: "Designation",
    email: "email@peoplematters.com",
    linkedin: "https://linkedin.com/in/username",
    image: "/assets/images/1.webp",
  },
  {
    id: 5,
    name: "First & Last Name",
    designation: "Designation",
    email: "email@peoplematters.com",
    linkedin: "https://linkedin.com/in/username",
    image: "/assets/images/1.webp",
  },
  {
    id: 6,
    name: "First & Last Name",
    designation: "Designation",
    email: "email@peoplematters.com",
    linkedin: "https://linkedin.com/in/username",
    image: "/assets/images/1.webp",
  },
  {
    id: 7,
    name: "First & Last Name",
    designation: "Designation",
    email: "email@peoplematters.com",
    linkedin: "https://linkedin.com/in/username",
    image: "/assets/images/1.webp",
  },
  {
    id: 8,
    name: "First & Last Name",
    designation: "Designation",
    email: "email@peoplematters.com",
    linkedin: "https://linkedin.com/in/username",
    image: "/assets/images/1.webp",
  },
  {
    id: 9,
    name: "First & Last Name",
    designation: "Designation",
    email: "email@peoplematters.com",
    linkedin: "https://linkedin.com/in/username",
    image: "/assets/images/1.webp",
  },
];

export default function MeetTheTeamPage() {
  return (
    <div className="container mx-auto space-y-16">
      <div className="w-full bg-white">
        <div className="flex flex-col lg:flex-row items-start lg:space-x-24 space-y-4 lg:space-y-0">
          <h1 className="text-3xl flex-shrink-0 font-medium text-inkBlack tracking-tight">
            Meet The Team.
          </h1>
          <div className="lg:flex-grow w-full">
            <p className="text-base font-normal text-inkBlack leading-relaxed">
              We are a team of passionate professionals dedicated to shaping the
              future of impactful HR and leadership journalism in Asia. We
              deliver in-depth analyses with clarity, develop innovative digital
              products, and employ strategic, data-driven approaches to reach
              our audience.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
