import type React from "react"
import { X } from "lucide-react"
import { useTheme } from "../theme-provider"

interface PageNotAvailablePopupProps {
  isOpen: boolean
  onClose: () => void
}

export const PageNotAvailablePopup: React.FC<PageNotAvailablePopupProps> = ({ isOpen, onClose }) => {
  const theme = "lavendarDawn";

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-${theme}-surface p-6 rounded-lg shadow-lg max-w-sm w-full`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-${theme}-text text-xl font-semibold`}>Page Not Available</h2>
          <button onClick={onClose} className={`text-${theme}-muted hover:text-${theme}-text transition-colors`}>
            <X size={24} />
          </button>
        </div>
        <p className={`text-${theme}-text mb-4`}>
          We're sorry, but this page is not available yet. We're working hard to bring you new features soon!
        </p>
        <button
          onClick={onClose}
          className={`bg-${theme}-iris text-${theme}-base px-4 py-2 rounded hover:bg-${theme}-love transition-colors w-full`}
        >
          Close
        </button>
      </div>
    </div>
  )
}

