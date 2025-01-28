import type React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { Header } from "./header"

export default {
  title: "Organisms/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as Meta

const Template: StoryFn<React.ComponentProps<typeof Header>> = (args:any) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  userName: "Alex",
  // userImage: "https://via.placeholder.com/40x40",
}

export const NoImage = Template.bind({})
NoImage.args = {
  userName: "John Doe",
}

