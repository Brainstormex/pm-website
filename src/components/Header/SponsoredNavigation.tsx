import React from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationData {
  navItems: Array<NavItem>;
}

export const navigationData: NavigationData = {
  navItems: [
    { label: "Featured", href: "/featured" },
    { label: "In Focus", href: "/in-focus" },
    { label: "Leadership Interviews", href: "/leadership-interviews" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Infographics", href: "/infographics" },
    { label: "Virtual Reflection", href: "/virtual-reflection" },
    { label: "Research & Report", href: "/research-report" },
    { label: "Learning Strategy", href: "/learning-strategy" },
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
            href={item.href}
            className={`text-gray-800 whitespace-nowrap hover:text-orange-500 transition-colors ${
              index === 0 ? "font-bold" : "font-medium"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SponsoredNavigation;