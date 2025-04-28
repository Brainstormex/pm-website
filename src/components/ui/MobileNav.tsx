"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

interface MobileNavProps {
  items: NavItem[];
  initialSelectedItem?: string;
  className?: string;
}

const MobileNav = ({
  items,
  initialSelectedItem,
  className = "",
}: MobileNavProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>(
    initialSelectedItem || items[0]?.label || ""
  );

  useEffect(() => {
    const currentItem = items.find((item) => item.href === pathname);
    if (currentItem) {
      setSelectedItem(currentItem.label);
    }
  }, [pathname, items]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: NavItem) => {
    setSelectedItem(item.label);
    setIsOpen(false);
    router.push(item.href);
  };

  const dropdownItems = items.filter((item) => item.label !== selectedItem);

  //focus:ring-blue-500 focus:ring-2

  return (
    // <div className={`relative w-full max-w-md ${className}`}>
    //   <div
    //     className="flex cursor-pointer items-center justify-between rounded-t-md border border-gray-300 bg-white p-4"
    //     onClick={toggleDropdown}
    //   >
    //     <span className="font-medium">{selectedItem}</span>
    //     <ChevronDown
    //       className={`h-5 w-5 transition-transform duration-200 ${
    //         isOpen ? "rotate-180" : ""
    //       }`}
    //     />
    //   </div>

    //   {isOpen && (
    //     <div className="absolute z-10 w-full border border-gray-300 bg-white">
    //       {items.map((item) => (
    //         item.label !== selectedItem && (
    //           <button
    //             key={item.label}
    //             className="block w-full border-t-0 border-gray-200 px-4 py-3 text-left hover:bg-gray-50"
    //             onClick={() => handleItemClick(item)}
    //           >
    //             {item.label}
    //           </button>
    //         )
    //       ))}
    //     </div>
    //   )}
    // </div>
    <div className={`relative w-full ${className}`}>
      <div
        className={`flex cursor-pointer items-center justify-between border border-gray-300 bg-white px-4 py-4 ${
          isOpen ? "rounded-t-md" : "rounded-md"
        }`}
      >
        <div
          className="flex items-center justify-between w-full mx-2"
          onClick={toggleDropdown}
        >
          <span className="font-medium">{selectedItem}</span>
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full border border-t-0 border-gray-300 bg-white rounded-b-md">
          <div className="border-b border-gray-300"></div>
          {items.map(
            (item) =>
              item.label !== selectedItem && (
                <button
                  key={item.label}
                  className="block w-full px-6 py-4 text-left hover:bg-gray-50"
                  onClick={() => handleItemClick(item)}
                >
                  {item.label}
                </button>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
