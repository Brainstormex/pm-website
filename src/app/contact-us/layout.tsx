import React from "react";
import StaticPageSidebar from "@/components/StaticPageSidebar";
const AboutLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StaticPageSidebar>{children}</StaticPageSidebar>;
};

export default AboutLayout;
