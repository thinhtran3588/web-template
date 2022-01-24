/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ButtonGradient} from '@app/core/components/button-gradient';

export default {
  title: 'Components/ButtonGradient',
  component: ButtonGradient,
  argTypes: {
    children: {type: 'string'},
    disabled: {type: 'boolean'},
  },
} as ComponentMeta<typeof ButtonGradient>;

const Template: ComponentStory<typeof ButtonGradient> = (args) => <ButtonGradient {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Custom = Template.bind({});
Custom.args = {
  variantFrom: 'accent',
  variantTo: 'info',
  children: 'Custom',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled',
};

export const Loading = Template.bind({});
Loading.args = {
  className: 'loading',
  children: 'Loading',
};
