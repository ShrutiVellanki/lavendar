import type React from "react"
import type { Meta, Story } from "@storybook/react"
import { AccountOverview } from "../ui/account-overview"

export default {
  title: "Components/AccountOverview",
  component: AccountOverview,
  parameters: {
    layout: "centered",
  },
} as Meta

const Template: Story<React.ComponentProps<typeof AccountOverview>> = (args) => <AccountOverview {...args} />

export const Default = Template.bind({})
Default.args = {
  balance: 24562.0,
  percentageChange: 2.3,
}

export const NegativeChange = Template.bind({})
NegativeChange.args = {
  balance: 18750.5,
  percentageChange: -1.5,
}

export const LargeBalance = Template.bind({})
LargeBalance.args = {
  balance: 1234567.89,
  percentageChange: 5.7,
}

