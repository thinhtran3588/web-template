/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Range} from '@app/core/components/range';

export default {
  title: 'Components/Range',
  component: Range,
  argTypes: {
    defaultValue: {defaultValue: 10, type: 'number'},
    value: {type: 'number'},
    max: {defaultValue: 100, type: 'number'},
    disabled: {type: 'boolean'},
  },
} as ComponentMeta<typeof Range>;

const Template: ComponentStory<typeof Range> = (args) => <Range {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  name: 'radio',
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
