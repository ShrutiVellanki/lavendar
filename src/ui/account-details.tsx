import type React from "react"
import { useTheme } from "./theme-provider"

interface AccountDetailsProps {
  accountType: string
  accountNumber: string
  balance: number
  transactions: Array<{
    date: string
    description: string
    amount: number
  }>
}

export const AccountDetails: React.FC<AccountDetailsProps> = ({
  accountType,
  accountNumber,
  balance,
  transactions,
}) => {
  const theme = "lavendarDawn";
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className={`text-lg font-semibold text-${theme}-text`}>{accountType}</h3>
        <p className={`text-${theme}-muted`}>Account: {accountNumber}</p>
      </div>
      <p className={`text-xl font-bold text-${theme}-pine`}>Balance: ${balance.toFixed(2)}</p>
      <div className={`bg-${theme}-overlay rounded-lg p-4`}>
        <h4 className={`text-md font-semibold mb-2 text-${theme}-text`}>Recent Transactions</h4>
        <ul className="space-y-2">
          {transactions.map((transaction, index) => (
            <li
              key={index}
              className={`flex justify-between items-center text-${theme}-text bg-${theme}-surface rounded-md p-2`}
            >
              <div>
                <p className={`text-sm text-${theme}-muted`}>{transaction.date}</p>
                <p>{transaction.description}</p>
              </div>
              <p className={transaction.amount < 0 ? `text-${theme}-love` : `text-${theme}-pine`}>
                ${Math.abs(transaction.amount).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

