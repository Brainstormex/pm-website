import Link from "next/link";
import Image from "next/image";
// import { MainMenus } from "@/types/common";
import { Button } from "../ui/Button";
import {  useState } from "react";
// import { MenuIcon } from "lucide-react";
import searchIcon from "@/assets/search.svg";
import { MainMenus } from "@/types/common";
interface HeaderProps {
  items: MainMenus;
  isScroll: boolean;
}

const StickyHeader = ({ items, isScroll }: HeaderProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`hidden lg:flex flex-col fixed top-0 z-50 w-full mx-auto ease-in-out 
        backdrop-blur-md bg-white border-b border-gray-200/20
        ${isScroll ? "translate-y-0 duration-300" : "-translate-y-full duration-300"}
      `}
    >
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex items-center py-4">
          <nav className="flex items-center gap-8 w-full">
            <Link href="/" className="flex items-center relative">
              <Image
                src="/assets/short-logo.png"
                alt="PM Logo"
                width={68}
                height={51}
                priority
                className="object-contain w-[40px] md:w-[50px] lg:w-[68px]"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex justify-between w-full">
              <ul className="flex items-center space-x-8">
                {items.HeaderLeft.map((item,index) => (
                  <li key={`HeaderLeft-${index}`}>
                    <Link
                      key={item.href}
                      href={item.href || "#"}
                      className={`text-sm font-medium hover:text-orange-500 transition-colors
                    ${
                      activeMenu === item.label
                        ? "text-orange-500"
                        : "text-gray-700"
                    }`}
                      onClick={() =>
                        setActiveMenu(item.children?.length ? item.label : null)
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex items-center space-x-6">
                {items.UpperNav.map((item,index) => (
                  <li key={`UpperNav-${index}`}>
                    {item.label === "Subscribe" ? (
                      <Button>{item.label}</Button>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className="text-sm font-medium hover:text-orange-500 transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile/Tablet Controls */}
            <div className="flex items-center gap-4 ml-auto lg:hidden">
              <button className="text-black p-2">
                <Image src={searchIcon} alt="Search" className="text-black" width={19} height={19} />
              </button>
              <button 
                className="text-gray-700 p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Image src="/assets/images/menu.svg" alt="Menu" className="text-black" width={28} height={21} />
                {/* <MenuIcon size={24} /> */}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed inset-0 bg-background/95 backdrop-blur-md z-50 
          transition-transform duration-300 ease-in-out p-6
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          lg:hidden
        `}>
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <Image
                src="/assets/short-logo.png"
                alt="PM Logo"
                width={50}
                height={38}
                priority
                className="object-contain w-[40px] md:w-[50px]"
              />
              <button 
                className="text-gray-700 p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col space-y-6">
              {items.HeaderLeft.map((item,index) => (
                <Link
                  key={`HeaderLeft-${index}`}
                  href={item.href || "#"}
                  className="text-gray-700 text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="border-gray-200 my-4" />
              {items.UpperNav.map((item,index) => (
                <div key={`UpperNav-${index}`}>
                  {item.label === "Subscribe" ? (
                    <Button 
                      className="w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="text-gray-700 text-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Child Navigation with Glassmorphism */}
        {activeMenu && (
          <nav className="relative w-full bg-background/80 backdrop-blur-md border-t border-gray-200/20">
            <div className="w-full max-w-7xl mx-auto px-4 py-4">
              <ul className="flex items-center gap-6">
                {items.HeaderLeft
                  .find((item) => item.label === activeMenu)
                  ?.children?.map((child,index) => (
                    <li key={`HeaderLeft-${index}`}>
                      <Link
                        href={child.href || "#"}
                        className="text-sm text-gray-700 hover:text-orange-500 transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </nav>
        )}
        <hr className="h-[3px] bg-indigo" />
      </div>
    </header>
  );
};
export default StickyHeader;
