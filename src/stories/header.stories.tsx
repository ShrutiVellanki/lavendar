import type React from "react"
import type { Meta, Story } from "@storybook/react"
import { Header } from "../ui/header"

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as Meta

const Template: Story<React.ComponentProps<typeof Header>> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  userName: "Alex",
  userImage: "https://via.placeholder.com/40x40",
}

export const NoImage = Template.bind({})
NoImage.args = {
  userName: "John Doe",
}

