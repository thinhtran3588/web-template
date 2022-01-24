/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {TextArea} from '@app/core/components/text-area';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    value: {type: 'string'},
    defaultValue: {type: 'string'},
    disabled: {type: 'boolean'},
    rows: {defaultValue: 5, type: 'number'},
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'Input value',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  defaultValue: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  defaultValue: 'Secondary',
};

export const Accent = Template.bind({});
Accent.args = {
  variant: 'accent',
  defaultValue: 'Accent',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  defaultValue: 'Success',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  defaultValue: 'Warning',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  defaultValue: 'Error',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  defaultValue: 'Info',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
  defaultValue: 'Disabled',
};
