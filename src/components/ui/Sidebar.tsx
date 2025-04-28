"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNavbar: React.FC<{ navItems: { label: string; href: string }[] }> = ({ navItems }) => {
  const pathname = usePathname();
 

  return (
    <nav className="sticky left-0 top-0 min-w-48 h-[calc(100vh-300px)] bg-white border-r border-inkBlack/40">
      <div className="pr-6 px sticky top-0">
        <ul className="space-y-2 flex flex-col">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`
                  block py-3 px-4 transition-all border-b duration-300
                  ${
                    pathname === item.href
                      ? "text-orange text-base font-medium border-orange"
                      : "text-inkBlack hover:text-orange text-base font-medium border-inkBlack/40"
                  }
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideNavbar;
