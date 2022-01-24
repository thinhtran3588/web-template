/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Checkbox} from '@app/core/components/checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {type: 'boolean'},
    defaultChecked: {defaultValue: true, type: 'boolean'},
    disabled: {type: 'boolean'},
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  title: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  title: 'Secondary',
};

export const Accent = Template.bind({});
Accent.args = {
  variant: 'accent',
  title: 'Accent',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
  title: 'Disabled',
};
