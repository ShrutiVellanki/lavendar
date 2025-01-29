"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "lavenderMoon" | "lavenderDawn"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  console.log(context);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export const ThemeProvider = ({ children, initialTheme }: any) => {
    const [theme, setTheme] = useState(initialTheme);
    useEffect(() => {
        setTheme(initialTheme);
      }, [initialTheme]);
  
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
