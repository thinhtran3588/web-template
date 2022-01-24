/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {DatePicker} from '@app/core/components/date-picker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {
    selected: {type: 'number', description: 'Test it by inputting unix timestamp value in milliseconds'},
    disabled: {type: 'boolean'},
  },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <div className='h-80'>
    <DatePicker {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  selected: new Date(),
};

export const CustomDateFormat = Template.bind({});
CustomDateFormat.args = {
  variant: 'primary',
  selected: new Date(),
  dateFormat: 'yyyy/MM/dd',
};

export const DateTimeInput = Template.bind({});
DateTimeInput.args = {
  variant: 'primary',
  selected: new Date(),
  timeInputLabel: 'Time:',
  dateFormat: 'MM/dd/yyyy h:mm aa',
  showTimeInput: true,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  selected: new Date(),
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  selected: new Date(),
};

export const Accent = Template.bind({});
Accent.args = {
  variant: 'accent',
  selected: new Date(),
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  selected: new Date(),
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  selected: new Date(),
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  selected: new Date(),
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  selected: new Date(),
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
  selected: new Date(),
};
