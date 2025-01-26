import type React from "react"
import { Bell, User } from "lucide-react"
import { useTheme } from "./theme-provider"
import { ThemeSwitcher } from "./theme-switcher"

interface HeaderProps {
  /** The name of the user */
  userName: string
  /** The URL of the user's profile image */
  userImage?: string
}

/**
 * Header component displaying user information and a notification bell
 */
export const Header: React.FC<HeaderProps> = ({ userName, userImage }) => {
  const theme = "lavendarDawn";

  return (
    <header
      className={`w-full h-16 px-6 py-2 bg-${theme}-surface flex justify-between items-center fixed top-0 left-0 right-0 z-10 shadow-sm`}
    >
      <div className="flex items-center gap-2">
        <div className={`w-10 h-10 rounded-full overflow-hidden bg-${theme}-overlay flex items-center justify-center`}>
          {userImage ? (
            <img className="w-full h-full object-cover" src={userImage || "/placeholder.svg"} alt={userName} />
          ) : (
            <User className={`w-6 h-6 text-${theme}-subtle`} />
          )}
        </div>
        <div className="flex flex-col">
          <div className={`text-lg font-semibold leading-tight text-${theme}-text`}>Hi, {userName}</div>
          <div className={`text-sm text-${theme}-subtle leading-tight`}>Welcome back!</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <div className={`w-8 h-8 bg-${theme}-overlay rounded-full flex items-center justify-center`}>
          <Bell className={`w-4 h-4 text-${theme}-text`} />
        </div>
      </div>
    </header>
  )
}

