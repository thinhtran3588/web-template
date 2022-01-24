/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Select} from '@app/core/components/select';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    value: {type: 'string'},
    defaultValue: {type: 'string'},
    disabled: {type: 'boolean'},
    children: {
      defaultValue: (
        <>
          <option value='' disabled>
            Choose your superpower
          </option>
          <option value='1'>telekinesis</option>
          <option value='2'>time travel</option>
          <option value='3'>invisibility</option>
        </>
      ),
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'Input value',
};

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
