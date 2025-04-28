import SideNavbar from '@/components/ui/Sidebar';
import React from 'react';
import MobileNav from '@/components/ui/MobileNav';

const StaticPageSidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navItems = [
    { href: '/about-us', label: 'About us' },
    { href: '/our-initiatives', label: 'Our Initiatives' },
    { href: '/meet-the-team', label: 'Meet The Team' },
    { href: '/careers', label: 'Careers' },
    { href: '/advertise-with-us', label: 'Advertise With Us' },
    { href: '/contact-us', label: 'Contact Us' },
  ];
  return (
    <div className="flex max-w-7xl relative mx-auto lg:flex-row flex-col px-8 py-10 lg:px-0">
      <div className="lg:block hidden">
        <SideNavbar navItems={navItems} />
      </div>
      <div className="lg:hidden block"> 
        <MobileNav items={navItems} />
      </div>
      <div className="flex-grow lg:pl-8 lg:py-16 pl-0 py-8">
        {children}
      </div>
    </div>
  );
};

export default StaticPageSidebar;