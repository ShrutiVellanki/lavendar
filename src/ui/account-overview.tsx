import type React from "react"
import { cn } from "../lib/utils"
import { TrendingUp } from "lucide-react"
import { useTheme } from "./theme-provider"

interface AccountOverviewProps {
  /** The current account balance */
  balance: number
  /** The percentage change from the previous period */
  percentageChange: number
  /** Optional className for custom styling */
  className?: string
}

/**
 * AccountOverview component displaying the total balance and percentage change
 */
export const AccountOverview: React.FC<AccountOverviewProps> = ({ balance, percentageChange, className }) => {
  const theme = "lavendarDawn";
  const formattedBalance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(balance)

  const formattedPercentage = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(percentageChange / 100)

  return (
    <div className={cn(`w-full bg-${theme}-iris rounded-2xl p-6 text-${theme}-base`, className)}>
      <div className="space-y-2">
        <p className="text-sm opacity-90">Total Balance</p>
        <p className="text-2xl font-bold">{formattedBalance}</p>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <p className="text-sm">
          {percentageChange >= 0 ? "+" : ""}
          {formattedPercentage} from last month
        </p>
        <TrendingUp className="w-4 h-4" />
      </div>
    </div>
  )
}

