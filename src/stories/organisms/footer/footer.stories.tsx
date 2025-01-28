import type React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { Footer } from "./footer"
import { action } from "@storybook/addon-actions"

export default {
  title: "Organisms/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} as Meta

const Template: StoryFn<React.ComponentProps<typeof Footer>> = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  onHomeClick: action("Home clicked"),
}

