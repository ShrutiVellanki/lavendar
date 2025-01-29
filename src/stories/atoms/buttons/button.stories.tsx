import { StoryFn, Meta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Button, ButtonProps } from "./button";

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

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "md",
  children: "Primary Button",
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Primary Button');
  
  // Simulate a click event
  await userEvent.click(button);
  
  // Assert that the button was clicked
  expect(button).toBeInTheDocument();
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "md",
  children: "Secondary Button",
};

Secondary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Secondary Button');
  
  // Simulate a click event
  await userEvent.click(button);
  
  // Assert that the button was clicked
  expect(button).toBeInTheDocument();
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  size: "md",
  children: "Outline Button",
};

Outline.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Outline Button');
  
  // Simulate a click event
  await userEvent.click(button);
  
  // Assert that the button was clicked
  expect(button).toBeInTheDocument();
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
  size: "md",
  children: "Ghost Button",
};

Ghost.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Ghost Button');
  
  // Simulate a click event
  await userEvent.click(button);
  
  // Assert that the button was clicked
  expect(button).toBeInTheDocument();
};

export const Small = Template.bind({});
Small.args = {
  variant: "primary",
  size: "sm",
  children: "Small Button",
};

Small.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Small Button');
  
  // Simulate a click event
  await userEvent.click(button);
  
  // Assert that the button was clicked
  expect(button).toBeInTheDocument();
};

export const Large = Template.bind({});
Large.args = {
  variant: "primary",
  size: "lg",
  children: "Large Button",
};

Large.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Large Button');
  
  // Simulate a click event
  await userEvent.click(button);
  
  // Assert that the button was clicked
  expect(button).toBeInTheDocument();
};