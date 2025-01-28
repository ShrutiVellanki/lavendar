import { StoryFn, Meta } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'outline', 'ghost'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
} as Meta;

const Template: StoryFn<any> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "md",
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "md",
  children: "Secondary Button",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  size: "md",
  children: "Outline Button",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
  size: "md",
  children: "Ghost Button",
};

export const Small = Template.bind({});
Small.args = {
  variant: "primary",
  size: "sm",
  children: "Small Button",
};

export const Large = Template.bind({});
Large.args = {
  variant: "primary",
  size: "lg",
  children: "Large Button",
};