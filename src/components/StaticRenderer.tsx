"use client";

import { useLayout } from "@/context/LayoutContext";
import React, { useEffect } from "react";

interface StaticRendererProps {
  html?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

const StaticRenderer = ({
  html,
  showHeader = true,
  showFooter = true,
}: StaticRendererProps) => {
  const { setShowHeader, setShowFooter } = useLayout();

  useEffect(() => {
    setShowHeader(showHeader);
    setShowFooter(showFooter);

    // Cleanup function to reset the header and footer when component unmounts
    return () => {
      setShowHeader(true);
      setShowFooter(true);
    };
  }, [showHeader, showFooter, setShowHeader, setShowFooter]);

  return <div dangerouslySetInnerHTML={{ __html: html || "" }} />;
};

export default StaticRenderer;
