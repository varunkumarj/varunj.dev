"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { theme } from '../styles/theme';
import { themeToVars } from '../styles/utils';

// Create theme context
type ThemeContextType = {
  theme: typeof theme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme provider component
interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Convert theme object to CSS variables
  const cssVars = React.useMemo(() => {
    return themeToVars(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div style={cssVars as React.CSSProperties}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
