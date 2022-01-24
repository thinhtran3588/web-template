/* eslint-disable react/jsx-props-no-spreading */
import React, {useEffect, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import type {Option} from '@core/interfaces';
import {Dropdown, DropdownProps} from '@app/core/components/dropdown';

const options: Option[] = [
  {value: '1', text: 'Option 1'},
  {value: '2', text: 'Option 2'},
  {value: '3', text: 'Option 3'},
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: {type: 'symbol', defaultValue: options},
    disabled: {type: 'boolean'},
    value: {type: 'string', defaultValue: '1'},
  },
} as ComponentMeta<typeof Dropdown>;

const DropdownContainer = (props: DropdownProps): JSX.Element => {
  const {value, ...other} = props;
  const [valueDropdown, setValueDropdown] = useState(value);

  useEffect(() => {
    setValueDropdown(value);
  }, [value]);

  return (
    <div>
      <Dropdown {...other} value={valueDropdown} setValue={setValueDropdown} />
    </div>
  );
};

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <div className='h-52'>
    <DropdownContainer {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Accent = Template.bind({});
Accent.args = {
  variant: 'accent',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
};
