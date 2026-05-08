import React, { createContext, useContext, useEffect } from 'react';
import { themeConfig, type ThemeConfig } from '../themeConfig';

const ThemeContext = createContext<ThemeConfig>(themeConfig);
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-font', themeConfig.fontFamily);
    document.documentElement.style.setProperty('--theme-size-hero', themeConfig.fontSizeHero);
    document.documentElement.style.setProperty('--theme-size-section', themeConfig.fontSizeSectionTitle);
    document.documentElement.style.setProperty('--theme-size-card', themeConfig.fontSizeCardTitle);
    document.documentElement.style.setProperty('--theme-size-body', themeConfig.fontSizeBody);
    document.documentElement.style.setProperty('--theme-size-meta', themeConfig.fontSizeMeta);
  }, []);

  return (
    <ThemeContext.Provider value={themeConfig}>
      {children}
    </ThemeContext.Provider>
  );
}
