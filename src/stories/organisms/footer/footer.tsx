import type React from "react"
import { useState } from "react"
import { Home, PieChart, ArrowLeftRight, User } from "lucide-react"
import { cn } from "../../../lib/utils"
import { PageNotAvailablePopup } from "../../../ui/page-not-available-popup"

interface FooterItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
  onClick: () => void
}

const FooterItem: React.FC<FooterItemProps> = ({ icon, label, isActive, onClick }) => {
  // const theme = "lavenderDawn";
  return (
    <button
      className={`flex flex-col items-center gap-1 focus:outline-none focus:ring-2 focus:ring-lavenderDawn-pine rounded-lg p-2`}
      onClick={onClick}
    >
      <div className={cn("h-5 w-5", isActive ? `text-lavenderDawn-pine` : `text-lavenderDawn-subtle`)}>{icon}</div>
      <div className={cn("text-xs", isActive ? `text-lavenderDawn-pine` : `text-lavenderDawn-subtle`)}>{label}</div>
    </button>
  )
}

interface FooterProps {
  onHomeClick: () => void
}

export const Footer: React.FC<FooterProps> = ({ onHomeClick }) => {
  // const theme = "lavenderDawn";
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleUnavailableClick = () => {
    setIsPopupOpen(true)
  }

  return (
    <>
      <footer
        className={`w-full h-16 px-6 py-3 bg-lavenderDawn-surface border-t border-lavenderDawn-overlay flex justify-center items-center`}
      >
        <div className="w-full max-w-screen-xl flex justify-between items-start">
          <FooterItem icon={<Home />} label="Home" isActive onClick={onHomeClick} />
          <FooterItem icon={<PieChart />} label="Budget" onClick={handleUnavailableClick} />
          <FooterItem icon={<ArrowLeftRight />} label="Transfer" onClick={handleUnavailableClick} />
          <FooterItem icon={<User />} label="Profile" onClick={handleUnavailableClick} />
        </div>
      </footer>
      <PageNotAvailablePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}

