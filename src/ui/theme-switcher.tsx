import type React from "react"
import { Moon, Sun } from "lucide-react"

export const ThemeSwitcher: React.FC = () => {
  const theme = "lavendarDawn";

  const toggleTheme = () => {
    setTheme(theme === "lavenderMoon" ? "lavenderDawn" : "lavenderMoon")
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full bg-${theme}-highlightLow hover:bg-${theme}-highlightMed transition-colors`}
      aria-label="Toggle theme"
    >
      {theme === "lavenderMoon" ? (
        <Sun className={`w-4 h-4 text-${theme}-text`} />
      ) : (
        <Moon className={`w-4 h-4 text-${theme}-text`} />
      )}
    </button>
  )
}

