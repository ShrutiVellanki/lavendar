import type React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  as?: React.ElementType
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  as: Component = "button",
  ...props
}) => {
  // const theme = "lavenderDawn";
 
  const baseStyles = "font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
  const variantStyles = {
    primary: `bg-lavenderDawn-iris text-lavenderDawn-base hover:bg-lavenderDawn-love`,
    secondary: `bg-lavenderDawn-surface text-lavenderDawn-text hover:bg-lavenderDawn-overlay`,
    outline: `border border-lavenderDawn-subtle text-lavenderDawn-text hover:bg-lavenderDawn-overlay`,
    ghost: `text-lavenderDawn-text hover:bg-lavenderDawn-overlay`,
  }
  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <Component className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </Component>
  )
}

