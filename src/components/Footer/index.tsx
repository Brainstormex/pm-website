import React from "react";
import MainFooter from "./MainFooter";
import { MainMenus } from "@/types/common";



const Footer = ({ type="main", menuItems }: { type?: string, menuItems: MainMenus }) => {
  if (type === "main") {
   
    return <MainFooter menuItems={menuItems} />;
  }
};

export default Footer;
