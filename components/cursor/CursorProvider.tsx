"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

type CursorRect = DOMRect | null;

type CursorContextType = {
  hoveredRect: CursorRect;
  setHoveredRect: (rect: CursorRect) => void;
};

const CursorContext = createContext<CursorContextType | null>(null);

export function CursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hoveredRect, setHoveredRect] =
    useState<CursorRect>(null);

  return (
    <CursorContext.Provider
      value={{
        hoveredRect,
        setHoveredRect,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);

  if (!context) {
    throw new Error(
      "useCursor must be used inside CursorProvider"
    );
  }

  return context;
}