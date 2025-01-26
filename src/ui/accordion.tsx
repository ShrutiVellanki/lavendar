import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface AccordionProps {
  header: React.ReactNode
  children: React.ReactNode
  className?: string
}

export const Accordion: React.FC<AccordionProps> = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = "lavendarDawn";

  return (
    <div className={`border border-${theme}-overlay rounded-lg overflow-hidden`}>
      <button
        className={`w-full text-left p-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-${theme}-pine focus:ring-opacity-50`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-grow">{header}</div>
        {isOpen ? (
          <ChevronUp className={`w-5 h-5 text-${theme}-subtle flex-shrink-0 ml-2`} />
        ) : (
          <ChevronDown className={`w-5 h-5 text-${theme}-subtle flex-shrink-0 ml-2`} />
        )}
      </button>
      {isOpen && <div className={`p-4 bg-${theme}-overlay`}>{children}</div>}
    </div>
  )
}

