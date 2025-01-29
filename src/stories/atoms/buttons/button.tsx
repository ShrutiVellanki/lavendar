import type React from "react";
import { useTheme } from "../../../theme-provider";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  as?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  as: Component = "button",
  ...props
}) => {
  const { theme } = useTheme();
  console.log(theme);

  const baseStyles = "font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50";
  const variantStyles = {
    primary: `bg-${theme}-iris text-${theme}-base hover:bg-${theme}-love`,
    secondary: `bg-${theme}-surface text-${theme}-text hover:bg-${theme}-overlay`,
    outline: `border border-${theme}-subtle text-${theme}-text hover:bg-${theme}-overlay`,
    ghost: `text-${theme}-text hover:bg-${theme}-overlay`,
  };
  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <Component className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </Component>
  );
};