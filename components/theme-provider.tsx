"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    // Remove preload class after initial page load
    const timeout = setTimeout(() => {
      document.documentElement.classList.remove("preload");
    }, 300);

    // Optimize animations by adding animate-gpu class to body
    document.body.classList.add("animate-gpu");

    return () => {
      clearTimeout(timeout);
      document.body.classList.remove("animate-gpu");
    };
  }, []);

  return (
    <NextThemesProvider {...props} defaultTheme="dark">
      {children}
    </NextThemesProvider>
  );
}
