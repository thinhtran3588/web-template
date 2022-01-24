/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Radio} from '@app/core/components/radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    checked: {type: 'boolean'},
    defaultChecked: {type: 'boolean'},
    disabled: {type: 'boolean'},
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  name: 'radio',
  defaultChecked: true,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  title: 'Primary',
  name: 'radio',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  title: 'Secondary',
  name: 'radio',
};

export const Accent = Template.bind({});
Accent.args = {
  variant: 'accent',
  title: 'Accent',
  name: 'radio',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
  title: 'Disabled',
  name: 'radio',
};
