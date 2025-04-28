import React, { useEffect, useRef, useState } from "react";
import MainHeader from "./MainHeader";
import { MainMenus } from "@/types/common";
import StickyHeader from "./StickyHeader";
// import { usePathname } from "next/navigation";

const Header = ({ type = "main", menuItems }: { type?: string; menuItems: MainMenus }) => {

  const [isScroll, setIsScroll] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  console.log(menuItems);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollThreshold = headerRef.current.offsetHeight;
        setIsScroll(window.scrollY > scrollThreshold);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (type === "main") {

    return (
      <div className="">
        <div ref={headerRef}>
          <MainHeader items={menuItems} />
        </div>
        <StickyHeader items={menuItems} isScroll={isScroll} />
      </div>
    );
  }
};
export default Header;
