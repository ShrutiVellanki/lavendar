import type React from "react"
import type { Meta, Story } from "@storybook/react"
import { AccountDetails } from "../ui/account-details"

export default {
  title: "Components/AccountDetails",
  component: AccountDetails,
  parameters: {
    layout: "centered",
  },
} as Meta

const Template: Story<React.ComponentProps<typeof AccountDetails>> = (args) => <AccountDetails {...args} />

export const CheckingAccount = Template.bind({})
CheckingAccount.args = {
  accountType: "Checking Account",
  accountNumber: "****4523",
  balance: 12350.0,
  transactions: [
    { date: "2023-04-15", description: "Grocery Store", amount: -120.5 },
    { date: "2023-04-14", description: "Salary Deposit", amount: 3000.0 },
    { date: "2023-04-13", description: "Electric Bill", amount: -85.2 },
  ],
}

export const CreditCard = Template.bind({})
CreditCard.args = {
  accountType: "Credit Card",
  accountNumber: "****7890",
  balance: -2180.0,
  transactions: [
    { date: "2023-04-15", description: "Restaurant", amount: -75.2 },
    { date: "2023-04-14", description: "Online Shopping", amount: -150.3 },
    { date: "2023-04-12", description: "Gas Station", amount: -40.0 },
  ],
}

