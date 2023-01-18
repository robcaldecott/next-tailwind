import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Details, DetailsLoading } from ".";

export default {
  title: "Components/Details",
  component: Details,
  args: {
    vehicle: {
      id: "5e0562c5-a50b-42ff-83e5-4c004c5b639a",
      manufacturer: "Volkswagen",
      model: "Explorer",
      type: "Cargo Van",
      fuel: "Gasoline",
      vin: "1USTAN9Z5MNT86399",
      color: "teal",
      mileage: 70609,
      registrationDate: "2005-07-08T16:58:36.380Z",
      registrationNumber: "TE52 HWW",
    },
  },
} as ComponentMeta<typeof Details>;

const Template: ComponentStory<typeof Details> = (args) => (
  <Details {...args} />
);

export const Data = Template.bind({});

export const Loading = () => <DetailsLoading />;

export const DeleteError = Template.bind({});
DeleteError.args = {
  error: new Error("An error has occurred!"),
};
