/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Card} from '@app/core/components/card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card title',
  children: 'Card content',
};

export const Custom = Template.bind({});
Custom.args = {
  CustomHeader: <div className='block p-4 bg-primary w-full text-primary-content'>Custom header</div>,
  children: <div className='p-4'>Card content</div>,
};
