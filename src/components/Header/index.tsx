import React, { useEffect, useRef, useState } from "react";
import MainHeader from "./MainHeader";
import { MainMenus } from "@/types/common";
import StickyHeader from "./StickyHeader";
import useScrollbarWidth from "@/hooks/useScrollbarWidth";

const Header = ({ type = "main", menuItems }: { type?: string; menuItems: MainMenus }) => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const scrollbarWidth = useScrollbarWidth();


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0, // Trigger when even a bit of the header goes out of view
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  if (type === "main") {
    return (
      <>
        <div ref={headerRef}>
          <MainHeader items={menuItems} />
        </div>
        <StickyHeader items={menuItems} isScroll={isSticky} scrollbarWidth={scrollbarWidth} />
      </>
    );
  }

  return null; // handle other types if needed
};

export default Header;
