import { StoryFn, Meta } from "@storybook/react";
import { Card, CardHeader, CardContent } from "../ui/card"; // Adjust the import path as needed

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: StoryFn<any> = (args: any) => (
  <Card {...args}>
    <CardHeader>Card Header</CardHeader>
    <CardContent>
      <p>This is the content of the card.</p>
      <p>It can contain any elements you want.</p>
    </CardContent>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  className: "",
  children: (
    <>
      <CardHeader>Card Header</CardHeader>
      <CardContent>
        <p>This is the content of the card.</p>
        <p>It can contain any elements you want.</p>
      </CardContent>
    </>
  ),
};