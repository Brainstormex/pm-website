import React from "react";

export interface NavigationData {
  navItems: Array<string>;
}

export const navigationData: NavigationData = {
  navItems: [
    "Featured",
    "In Focus",
    "Leadership Interviews",
    "Case Studies",
    "Infographics",
    "Virtual Reflection",
    "Research & Report",
    "Learning Strategy",
  ],
};
interface SponsoredNavigationProps {
  data: NavigationData;
}

const SponsoredNavigation: React.FC<SponsoredNavigationProps> = ({ data }) => {
  return (
    <nav className="w-full">
      <div className="flex space-x-8 overflow-x-auto">
        {data.navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`text-gray-800 whitespace-nowrap hover:text-orange-500 transition-colors ${
              index === 0 ? "font-bold" : "font-medium"
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SponsoredNavigation;
