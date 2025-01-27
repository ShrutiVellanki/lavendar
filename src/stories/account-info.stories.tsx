import React from "react"
import type { Meta, Story } from "@storybook/react"
import { AccountInfo, type AccountInfoProps } from "..//ui/account-info"
import { BanknoteIcon as Bank, CreditCard, TrendingUp, TrendingDown, Wallet } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/core/accordion"

export default {
  title: "Components/AccountInfo",
  component: AccountInfo,
  parameters: {
    layout: "centered",
  },
} as Meta

const Template: Story<AccountInfoProps> = (args) => (
  <div className="w-[400px]">
    <Card>
      <CardContent>
        <AccountInfo {...args} />
      </CardContent>
    </Card>
  </div>
)

export const ChaseBank = Template.bind({})
ChaseBank.args = {
  name: "Chase Bank",
  logo: <Bank className="w-6 h-6 text-blue-600" />,
  balance: 12350.0,
  description: "Checking ****4523",
}

export const AmexPlatinum = Template.bind({})
AmexPlatinum.args = {
  name: "Amex Platinum",
  logo: <CreditCard className="w-6 h-6 text-purple-600" />,
  balance: -2180.0,
  description: "Credit Card ****7890",
}

export const TotalAssets = Template.bind({})
TotalAssets.args = {
  name: "Total Assets",
  logo: <TrendingUp className="w-6 h-6 text-green-600" />,
  balance: 32450.0,
  description: "4 accounts",
  balanceColor: "text-green-600",
}

export const TotalLiabilities = Template.bind({})
TotalLiabilities.args = {
  name: "Total Liabilities",
  logo: <TrendingDown className="w-6 h-6 text-red-600" />,
  balance: 7888.0,
  description: "2 accounts",
  balanceColor: "text-red-600",
}

export const FidelityInvestment = Template.bind({})
FidelityInvestment.args = {
  name: "Fidelity",
  logo: <Wallet className="w-6 h-6 text-green-600" />,
  balance: 15720.0,
  description: "Investment ****9981",
}

const AccordionTemplate: Story<AccountInfoProps> = (args) => (
  <div className="w-[400px]">
    <Accordion header={<AccountInfo {...args} showChevron />}>
      <p>Additional details about the account...</p>
    </Accordion>
  </div>
)

export const ExpandableAccount = AccordionTemplate.bind({})
ExpandableAccount.args = {
  name: "Chase Bank",
  logo: <Bank className="w-6 h-6 text-blue-600" />,
  balance: 12350.0,
  description: "Checking ****4523",
}

