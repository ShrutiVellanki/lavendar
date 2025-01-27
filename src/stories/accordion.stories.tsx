import { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Accordion } from "../ui/core/accordion"; // Adjust the import path as needed
import { Star } from "lucide-react";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as Meta;

const Template: StoryFn<any> = (args:any) => (
  <>
    <Accordion {...args} header="Accordion 1">
      <div>
        <p>This is the content of the first accordion.</p>
        <p>It can contain any elements you want.</p>
      </div>
    </Accordion>
    <Accordion {...args} header="Accordion 2">
      <div>
        <p>This is the content of the second accordion.</p>
        <p>It can contain any elements you want.</p>
      </div>
    </Accordion>
  </>
);

export const Default = Template.bind({});
Default.args = {
  variant: "default",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <Star className="w-5 h-5" />,
};

export const Controlled = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleAll = (isOpen: boolean) => {
    setIsOpen1(isOpen);
    setIsOpen2(isOpen);
  };

  return (
    <>
      <button
        onClick={() => toggleAll(true)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Expand All
      </button>
      <button
        onClick={() => toggleAll(false)}
        className="mb-4 ml-2 px-4 py-2 bg-red-500 text-white rounded"
      >
        Collapse All
      </button>
      <Accordion
        header="Controlled Accordion 1"
        isOpen={isOpen1}
        onToggle={() => setIsOpen1(!isOpen1)}
      >
        <div>
          <p>This is the content of the first controlled accordion.</p>
          <p>It can contain any elements you want.</p>
        </div>
      </Accordion>
      <Accordion
        header="Controlled Accordion 2"
        isOpen={isOpen2}
        onToggle={() => setIsOpen2(!isOpen2)}
      >
        <div>
          <p>This is the content of the second controlled accordion.</p>
          <p>It can contain any elements you want.</p>
        </div>
      </Accordion>
    </>
  );
};