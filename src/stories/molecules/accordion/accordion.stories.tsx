import { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Accordion } from "./accordion"; // Adjust the import path as needed
import { Star } from "lucide-react";
import { Button } from "../../atoms/buttons/button";

export default {
  title: "Molecules/Accordion",
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
      <div className="mb-4 space-x-4">
        <Button onClick={() => toggleAll(true)} variant="primary" size="md">
          Expand All
        </Button>
        <Button onClick={() => toggleAll(false)} variant="secondary" size="md">
          Collapse
        </Button>
      </div>
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