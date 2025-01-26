import type React from "react"
import type { Meta, Story } from "@storybook/react"
import { Footer } from "../ui/footer"
import { action } from "@storybook/addon-actions"

export default {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} as Meta

const Template: Story<React.ComponentProps<typeof Footer>> = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  onHomeClick: action("Home clicked"),
  onBudgetClick: action("Budget clicked"),
  onTransferClick: action("Transfer clicked"),
  onProfileClick: action("Profile clicked"),
}

