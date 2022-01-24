/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {FieldRange, FieldRangeProps} from '@app/core/components/field-range';
import {ButtonGradient} from '@app/core/components/button-gradient';

export default {
  title: 'Components/FieldRange',
  component: FieldRange,
  argTypes: {
    disabled: {type: 'boolean'},
  },
} as ComponentMeta<typeof FieldRange>;

const Form = (props: FieldRangeProps): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      range: 20,
    },
    validationSchema: Yup.object({
      range: Yup.number()
        .integer()
        .min(10, 'Must be larger than or equal to 10')
        .max(100, 'Must be smaller than or equal to 20')
        .required('Required'),
    }),
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, undefined, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='h-96'>
      <FieldRange {...props} formik={formik} />
      <div className='mt-2 justify-center flex'>
        <ButtonGradient type='submit'>Submit</ButtonGradient>
      </div>
    </form>
  );
};

const Template: ComponentStory<typeof FieldRange> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'range',
  label: 'Field Range',
  value: 20,
  max: 100,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'range',
  label: 'Disabled',
  value: 20,
  max: 100,
  disabled: true,
};
