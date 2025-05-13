'use strict';
import React, { useEffect, useState } from 'react';
// import footerData from '../../data/footer.json';
import Image from 'next/image';
import smallLogo from '../../assets/smallLogo.svg'
import { MainMenus, MenuItem } from '@/types/common';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { adsService } from '@/services/adsService';

// Separate components for better organization and reusability
const SocialLinks = ({ links }: { links:MenuItem[]}) => (
  <div className="mb-8 flex justify-center space-x-6 lg:flex-row flex-wrap">
    {links.map((item,index) => (
      <Link
        key={`SocialMenu-${index}`}
        href={item.href || "#"}
        className="text-gray-300 hover:text-white transition-colors h-6 w-6 relative items-center"
      >
        {item.icon ? (
          <Image 
            // src={`/assets/${item.icon}`} 
            src={item.icon}
            alt={item.label}
            fill
            className='object-contain'
          />
        ) : (
        ""
        )}
      </Link>
    ))}
  </div>
);

const FooterSection = ({ 
  links
}: {
  links: MenuItem[];
}) => (
  <div>
    <h3 className="text-white font-semibold mb-4">{links[0].label}</h3>
    {/* <ul className={`space-y-2 ${!isLastSection ? ' lg:border-r pr-4 border-white/20' : ''}`}> */}
    <ul className={`space-y-2`}>

      {links.map((item,index) => {
        if(index === 0) return null;
        return (
        <li key={`FooterSection-${index}`}>
          <Link href={item.href || "#"} className="text-gray-300 hover:text-white text-opacity-70 transition-colors">
            {item.label}
          </Link>
        </li>
        )
      })}
    </ul>
  </div>
);

const CircularImage = ({ 
  menuItem
}: {
  menuItem: MenuItem;
}) => (
  <a href={menuItem.href || "#"} className="block">
    <div className="aspect-square rounded-full w-24 bg-gray-800 overflow-hidden">
      <Image
        src={menuItem.icon || ""}
        alt={menuItem.label}
        width={96}
        height={96}
        className="w-40 object-cover hover:opacity-75 transition-opacity"
      />
    </div>
  </a>
);
const MainFooter = ({ menuItems }: { menuItems: MainMenus }) => {
  // const { headerText, sections, copyright, bottomLinks } = footerData.footerData;

  const pathname = usePathname();
  console.log("Current page:", pathname);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const adsData = await adsService.getAdsJs(pathname as string);
        console.log("Ads data:", adsData);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchAds();
  }, []);

  const [sectionsData] = useState<MenuItem[][]>(
    [menuItems.FooterCol1,menuItems.FooterCol2,menuItems.FooterCol3,menuItems.FooterCol4,menuItems.FooterCol5,menuItems.FooterCol6]);

  return (
    <div className="bg-indigo px-4 sm:px-6 lg:px-0">
      <footer className="bg-indigo text-gray-300 py-12 max-w-7xl mx-auto w-full">
        <div className="pb-10">
          <Image
            src={smallLogo}
            alt="logo"
            width={96}
            height={96}
            className="mx-auto"
            priority={false}
          />
        </div>

        <p className="text-white text-center mb-8 max-w-3xl mx-auto">{menuItems.FooterCol1[0].label}</p>
        <SocialLinks links={menuItems.SocialMenu} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {sectionsData.map((section:MenuItem[], index:number) => (
            <FooterSection
              key={`FooterSection-${index}`}
              links={section}
            />
          ))}
        </div>
        {/* Other Links */}
        {menuItems.OtherLinks && (
          <div className='flex gap-4 items-center'>
            <div className='flex items-center gap-16 mb-8'>
              <h3 className='text-white font-semibold'>Other Links:</h3>
            <div className='flex gap-8'>
              {menuItems?.OtherLinks?.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href || "#"}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
              </div>
            </div>
          </div>
        )}

        <div className="border-t border-gray-800 pt-8">
          <div className="flex lg:flex-row flex-col justify-between gap-8 pb-5">
            {menuItems.OurProducts && menuItems.OurProducts.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Products</h3>
                <div className="flex gap-8">
                  {menuItems.OurProducts.map((product, index: number) => (
                    <CircularImage key={`OurProducts-${index}`} menuItem={product} />
                  ))}
                </div>
              </div>
            )}

            {menuItems.OurEvents && menuItems.OurEvents.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Events</h3>
                <div className="flex lg:flex-row flex-wrap gap-4">
                  {menuItems.OurEvents?.map((event, index: number) => (
                    <CircularImage key={`OurEvents-${index}`} menuItem={event} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-8">
            <div className="lg:w-1/2">
              <p className="text-[10px] md:text-xs text-white/60">{`Copyright ${new Date().getFullYear()} People Matters Media Pvt. Ltd. All rights reserved.`}</p>
            </div>
            <div className="flex space-x-6 lg:w-1/2 flex-row justify-between mb-4 md:mb-0">
              {menuItems.BottomMenu.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[10px] md:text-xs text-white/60 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
