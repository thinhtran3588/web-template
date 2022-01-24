/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button} from '@app/core/components/button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: {type: 'boolean'},
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Default',
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
};

export const Accent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Accent.args = {
  variant: 'accent',
  children: 'Accent',
};

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  variant: 'success',
  children: 'Success',
};

export const Warning = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {
  variant: 'warning',
  children: 'Warning',
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  variant: 'error',
  children: 'Error',
};

export const Info = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
  variant: 'info',
  children: 'Info',
};

export const Ghost = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Ghost.args = {
  variant: 'ghost',
  children: 'Ghost',
};

export const Link = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Link.args = {
  variant: 'link',
  children: 'Link',
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  variant: 'primary',
  disabled: true,
  children: 'Disabled',
};

export const Loading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loading.args = {
  variant: 'primary',
  className: 'loading',
  children: 'Loading',
};
