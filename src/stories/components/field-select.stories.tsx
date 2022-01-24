/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {FieldSelect, FieldSelectProps} from '@app/core/components/field-select';
import {ButtonGradient} from '@app/core/components/button-gradient';
import type {Option} from '@app/core/interfaces';

export default {
  title: 'Components/FieldSelect',
  component: FieldSelect,
  argTypes: {
    // disabled: {type: 'boolean'},
  },
} as ComponentMeta<typeof FieldSelect>;

const options: Option[] = [
  {
    value: '1',
    text: 'Option 1',
  },
  {
    value: '2',
    text: 'Option 2',
  },
  {
    value: '3',
    text: 'Option 3',
  },
];

const Form = (props: FieldSelectProps): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      select: '',
    },
    validationSchema: Yup.object({
      select: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, undefined, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='h-52'>
      <FieldSelect {...props} formik={formik} />
      <div className='mt-2 justify-center flex'>
        <ButtonGradient type='submit'>Submit</ButtonGradient>
      </div>
    </form>
  );
};

const Template: ComponentStory<typeof FieldSelect> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'select',
  label: 'Field Select',
  variant: 'primary',
  options,
};

export const Dropdown = Template.bind({});
Dropdown.args = {
  name: 'select',
  label: 'Dropdown',
  type: 'dropdown',
  variant: 'primary',
  options,
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  name: 'select',
  label: 'Checkbox',
  type: 'checkbox',
  variant: 'primary',
  options,
};

export const Select = Template.bind({});
Select.args = {
  name: 'select',
  id: 'select',
  label: 'Select',
  type: 'select',
  variant: 'primary',
  options,
  placeholder: 'Please choose',
};

export const NativeSelectOnMobile = Template.bind({});
NativeSelectOnMobile.args = {
  name: 'select',
  label: 'Native Select on Mobile',
  variant: 'primary',
  options,
  nativeSelectOnMobile: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'select',
  label: 'Disabled',
  variant: 'primary',
  disabled: true,
  options,
};
