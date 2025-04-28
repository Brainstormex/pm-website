"use client";

import Header from "./Header/index";
import Footer from "./Footer/index";
import { useLayout } from "@/context/LayoutContext";

import { pageService } from "@/services/pageServices";
import { MainMenus } from "@/types/common";
import React,{ useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { showHeader, showFooter } = useLayout();

  const [menus, setMenus] = useState<MainMenus | null>(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await pageService.getMenus();
        if (response && response.data) {
          setMenus(response.data as MainMenus);
        } else {
          // If API doesn't return valid data, use dummy data
          setMenus(getDummyMenuData());
        }
      } catch (error) {
        console.error("Error fetching menus:", error);
        // Use dummy data on error
        setMenus(getDummyMenuData());
      }
    };

    fetchMenus();
  }, []);
  
  // Function to generate dummy menu data following the MainMenus structure
  const getDummyMenuData = (): MainMenus => {
    return {
      HeaderLeft: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" }
      ],
      HeaderRight: [
        { label: "Contact", href: "/contact" },
        { label: "Login", href: "/auth/login" }
      ],
      UpperNav: [
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/faq" }
      ],
      BottomMenu: [
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" }
      ],
      OurEvents: [
        { label: "Conferences", href: "/events/conferences" },
        { label: "Webinars", href: "/events/webinars" }
      ],
      OurProducts: [
        { label: "Product A", href: "/products/a" },
        { label: "Product B", href: "/products/b" }
      ],
      FooterCol1: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" }
      ],
      FooterCol2: [
        { label: "Careers", href: "/careers" },
        { label: "Jobs", href: "/jobs" }
      ],
      FooterCol3: [
        { label: "Support", href: "/support" },
        { label: "Help Center", href: "/help" }
      ],
      FooterCol4: [
        { label: "Resources", href: "/resources" },
        { label: "Guides", href: "/guides" }
      ],
      FooterCol5: [
        { label: "Partners", href: "/partners" },
        { label: "Become a Partner", href: "/become-partner" }
      ],
      FooterCol6: [
        { label: "Legal", href: "/legal" },
        { label: "Terms of Service", href: "/terms" }
      ],
      SocialMenu: [
        { label: "Twitter", href: "https://twitter.com/company", icon: "twitter" },
        { label: "Facebook", href: "https://facebook.com/company", icon: "facebook" },
        { label: "LinkedIn", href: "https://linkedin.com/company", icon: "linkedin" }
      ]
    };
  };
  
  if(!menus) return null;

  return (
    <div className="flex flex-col min-h-screen">
      {showHeader && <Header menuItems={menus} />}
      <main className="">{children}</main>
      {showFooter && <Footer menuItems={menus} />}
    </div>
  );
}
