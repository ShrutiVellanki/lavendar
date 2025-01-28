import type React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionProps {
  header: React.ReactNode;
  children: React.ReactNode;
  icon?: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  variant?: "default" | "secondary" | "destructive";
  headerClassName?: string;
  contentClassName?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  header,
  children,
  icon,
  isOpen: controlledIsOpen,
  onToggle,
  variant = "default",
  headerClassName,
  contentClassName,
}) => {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);
  // const theme = "lavenderDawn";

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;
  console.log(isOpen);

  const handleToggle = () => {
    if (isControlled) {
      onToggle?.();
    } else {
      setUncontrolledIsOpen(!uncontrolledIsOpen);
    }
  };

  const variantClasses = {
    default: `border-lavenderDawn-overlay text-lavenderDawn-text`,
    secondary: `border-lavenderDawn-muted text-lavenderDawn-subtle`,
    destructive: `border-lavenderDawn-love text-lavenderDawn-love`,
  };

  return (
    <div className={`border rounded-lg overflow-hidden ${variantClasses[variant]}`}>
      <button
        className={`w-full text-left p-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-lavenderDawn-pine focus:ring-opacity-50 ${headerClassName}`}
        onClick={handleToggle}
      >
        <div className="flex-grow">{header}</div>
        {icon ? (
          <div className="flex-shrink-0 ml-2">{icon}</div>
        ) : isOpen ? (
          <ChevronUp className="w-5 h-5 flex-shrink-0 ml-2" />
        ) : (
          <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
        )}
      </button>
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"} ${contentClassName ?? ""}`}
      >
        <div className="p-4 bg-lavenderDawn-overlay">{children}</div>
      </div>
    </div>
  );
};