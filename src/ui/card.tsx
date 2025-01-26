import type React from "react"
import { cn } from "../lib/utils"

export interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={cn("bg-white shadow-md rounded-lg overflow-hidden", className)}>{children}</div>
}

export const CardHeader: React.FC<CardProps> = ({ children, className }) => {
  return <div className={cn("px-6 py-4 border-b border-gray-200", className)}>{children}</div>
}

export const CardContent: React.FC<CardProps> = ({ children, className }) => {
  return <div className={cn("px-6 py-4", className)}>{children}</div>
}

