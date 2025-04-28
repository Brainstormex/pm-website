"use client";

import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";

import { usePathname } from "next/navigation";
import searchIcon from "@/assets/search.svg";
import { MainMenus } from "@/types/common";
// import { Menu as MenuIcon } from "lucide-react";
import { useState } from "react";
import { sessionOptions } from "@/pages/api/getAccessToken";
import { getIronSession } from "iron-session";
import { useRouter } from "next/navigation";
import SearchModal from "./SearchModal";
import CountrySelector from "../ui/CountrySelector";
const headerVariants = cva("top-0 z-50 w-full bg-indigo border-gray-800", {
  variants: {
    size: {
      sm: "px-4 lg:px-10",
      md: "px-4 lg:px-8",
      lg: "px-4 lg:px-40",
    },
  },
  defaultVariants: { size: "md" },
});

const navVariants = cva("text-sm font-medium", {
  variants: {
    active: {
      true: "text-orange underline",
      false: "text-background",
    },
  },
  defaultVariants: { active: false },
});

export interface HeaderProps extends VariantProps<typeof headerVariants> {
  className?: string;
  items: MainMenus;
}

const MainHeader = ({ items, size, className }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const pathname = usePathname();

  const router = useRouter();
  type SessionUser = {
    accessToken?: string;
    subscriber_id?: number;
    user_email?: string;
    user_mobile?: string;
    first_name?: string;
    last_name?: string;
    company_name?: string;
    designation?: string;
    fk_country_id?: number;
    country_name?: string;
    is_subscribe_news_letter?: boolean;
    is_accept_terms?: boolean;
    is_user_type?: string;
    userData?: any;
  };

  const [sessionUser, setSessionUser] = useState<SessionUser | null>(null);

  const logoutHandler = async () => {
    try {
      const res = await fetch("/api/logoutToken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (res.ok) {
        setSessionUser(null);
        document.cookie = "website_session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
        router.push("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("/api/getAccessToken", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // important!
        });

        const data = await res.json();
        console.log("data PS Main =>", data);
        setSessionUser(data.user); // your state setter
      } catch (err) {
        console.error("Failed to fetch session:", err);
      }
    };

    fetchSession();
  }, []);

  // Control body overflow when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY;

      // Prevent scroll on the body
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      // Clean up
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isMobileMenuOpen]);
  // useEffect(() => {
  //   if (isMobileMenuOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = '';
  //   }
  
  //   // Clean up when component unmounts
  //   return () => {
  //     document.body.style.overflow = '';
  //   };
  // }, [isMobileMenuOpen]);

  const sections = [
    { key: "HeaderLeft", className: "text-background text-xl font-medium" },
    { key: "HeaderRight", className: "text-background text-xl font-normal" },
    {
      key: "FooterCol1",
      className: "text-background/60 text-base font-normal font-inter",
    },
  ];

  return (
    <header className={twMerge(headerVariants({ size }), className)}>
      <div className="flex flex-col max-w-7xl mx-auto px-0 lg:px-0">
        <nav className="flex justify-between lg:py-0 py-6 items-center w-full">
          <Link href="/" className="flex items-center space-x-2 pt-4 pb-2">
            <Image
              src="/assets/logo.png"
              alt="People Matters Logo"
              width={649}
              height={110}
              className="w-[150px] md:w-[180px] lg:w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
            <CountrySelector />
            <ul className="hidden lg:flex justify-between items-center flex-row gap-x-3 text-background">
              {items?.UpperNav?.map((item: any, index) => (
                <li key={`UpperNav-${index}`}>
                  {item.label === "Subscribe" ? (
                    <Button key={item.href} capitalize={true} size="sm">
                      {item.label}
                    </Button>
                  ) : (
                    <>
                      {(item as any).label === "Login / Signup" &&
                      (sessionUser as any)?.user_email &&
                      (sessionUser as any)?.token ? (
                        <>
                          {" "}
                          <button
                            onClick={logoutHandler}
                            className="text-background text-sm font-medium hover:underline transition-all duration-300"
                          >
                            Logout (
                            {(sessionUser as any)?.first_name ||
                            (sessionUser as any)?.last_name
                              ? `${(sessionUser as any)?.first_name || ""} ${
                                  (sessionUser as any)?.last_name || ""
                                }`.trim()
                              : (sessionUser as any)?.user_email || "User"}
                            )
                          </button>
                        </>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href || "#"}
                          className={twMerge(
                            navVariants({ active: pathname === item.href }),
                            " transition-all duration-300"
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile/Tablet Controls */}
          <div className="flex items-center gap-4 lg:hidden">
            <button className="text-background p-2">
              <Image
                src={searchIcon}
                alt="Search"
                width={19}
                height={19}
                onClick={() => setIsSearchModalOpen(true)}
              />
            </button>
            <button
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Image
                src="/assets/images/menu.svg"
                className="text-white"
                alt="Menu"
                width={28}
                height={21}
              />
              {/* <MenuIcon size={24} /> */}
            </button>
          </div>
        </nav>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <hr className="border-background height-[0.2px] opacity-20 pt-[10px] pb-5" />
          <nav className="flex pb-8 justify-between">
            <ul className="flex items-center space-x-[54px]">
              {items?.HeaderLeft?.map((item, index) => (
                <li key={`HeaderLeft-${index}`}>
                  <Link
                    key={item.href}
                    href={item.href || "#"}
                    className={twMerge(
                      navVariants({ active: pathname === item.href }),
                      " transition-all duration-300"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <Image
                src={searchIcon}
                alt="Search"
                width={19}
                className="cursor-pointer"
                height={19}
                onClick={() => setIsSearchModalOpen(true)}
              />
            </ul>
            <ul className="hidden items-center space-x-6 md:flex">
              {items?.HeaderRight?.map((item, index) => (
                <li key={`HeaderRight-${index}`}>
                  <Link
                    key={item.href}
                    href={item.href || "#"}
                    className={twMerge(
                      navVariants({ active: pathname === item.href }),
                      " transition-all duration-300"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`
          fixed inset-0 bg-indigo z-50 transition-transform duration-300 ease-in-out p-6
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden   
        `}
        >
          <div className="flex flex-col h-full p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/assets/Short Logo.png"
                  alt="People Matters Logo"
                  width={70}
                  height={20}
                  className="w-[70px] md:w-[100px] lg:w-[120px]"
                  priority
                />
              </Link>
              <div className="flex items-center space-x-4">
                <Image
                  src={searchIcon}
                  alt="Search"
                  width={19}
                  className="cursor-pointer"
                  height={19}
                  onClick={() => setIsSearchModalOpen(true)}
                />
                <button
                  className="text-background p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col space-y-6">
              {/* {JSON.stringify(items)} */}
              {/* Show only items with href="auth/login" */}
              <div className="flex items-center justify-between">
                {items.UpperNav.map(
                  (item, index) =>
                    item.href === "/auth/login" && (
                      <Link
                        key={`UpperNav-${index}`}
                        href={item.href || "#"}
                        className="text-background text-xl font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                )}
                <CountrySelector />
              </div>
              <hr className="border-background opacity-80 my-4" />
              {/* {items.HeaderLeft.map((item, index) => (
                <Link
                  key={`HeaderLeft-${index}`}
                  href={item.href || "#"}
                  className="text-background text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="border-background opacity-80 my-4" />
              {items.HeaderRight.map((item, index) => (
                <Link
                  key={`HeaderRight-${index}`}
                  href={item.href || "#"}
                  className="text-background text-base font-normal"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="border-background opacity-80 my-4" />
              {items.FooterCol1.map((item, index) => (
                <Link
                  key={`FooterCol1-${index}`}
                  href={item.href || "#"}
                  className="text-background/60 text-base font-normal font-inter"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))} */}
              {sections.map((section, sectionIndex) => (
                <React.Fragment key={section.key}>
                  {(items[section.key as keyof MainMenus] || []).map(
                    (item, itemIndex) => (
                      <Link
                        key={`${section.key}-${itemIndex}`}
                        href={item.href || "#"}
                        className={section.className}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  {/* Add <hr> after each section except the last */}
                  {sectionIndex < sections.length - 1 && (
                    <hr className="border-background opacity-80 my-4" />
                  )}
                </React.Fragment>
              ))}

              <hr className="border-background opacity-80 my-4" />
              <div className="flex flex-col items-start gap-2 pb-10">
                <span className="text-background text-base font-normal font-inter">
                  Find us:
                </span>
                <div className="flex items-center justify-between w-full">
                  {items.SocialMenu.map((item, index) => (
                    <Link
                      key={`SocialMenu-${index}`}
                      href={item.href || "#"}
                      className="text-gray-300 hover:text-white transition-colors relative items-center"
                    >
                      {item.icon ? (
                        <div className="flex items-center justify-center h-6 w-6">
                          <Image
                            src={item.icon}
                            alt={item.label}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          {item.label}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* {items.UpperNav.map((item, index) => (
                <div key={`UpperNav-${index}`}>
                  {item.label === "Subscribe" ? (
                    <Button
                      capitalize={true}
                      size="sm"
                      className="w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="text-background text-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))} */}
              {/* if title is subcribe then stick the button to the bottom of the menu */}
              {/* stick the button to the bottom of the menu */}
              {items.UpperNav.map(
                (item, index) =>
                  item.label === "Subscribe" && (
                    <Button
                      key={item.href}
                      borderVariant="none"
                      className="w-full bg-orange text-white text-lg font-medium py-4 px-4 fixed bottom-0 left-0 right-0"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Button>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </header>
  );
};

export default MainHeader;
