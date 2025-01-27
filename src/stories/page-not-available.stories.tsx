import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { PageNotAvailablePopup, PageNotAvailablePopupProps } from "../ui/page-not-available-popup"; // Adjust the import path as needed

export default {
  title: "Components/PageNotAvailablePopup",
  component: PageNotAvailablePopup,
} as Meta;

const Template: Story<PageNotAvailablePopupProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <PageNotAvailablePopup
      {...args}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => {},
};