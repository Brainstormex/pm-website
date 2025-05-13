// context/StickyHeaderContext.tsx
"use client";
import React, { createContext, useContext, useState } from "react";

type StickyHeaderContextType = {
  headerHeight: number;
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
};

const StickyHeaderContext = createContext<StickyHeaderContextType | undefined>(undefined);

export const StickyHeaderProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // const headerHeight = useStickyHeaderHeight(headerRef);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  return (
    <StickyHeaderContext.Provider value={{ headerHeight, setHeaderHeight }}>
      {children}
    </StickyHeaderContext.Provider>
  );
};

export const useStickyHeaderContext = () => {
  const context = useContext(StickyHeaderContext);
  if (!context) {
    throw new Error("useStickyHeaderContext must be used within a StickyHeaderProvider");
  }
  return context;
};
