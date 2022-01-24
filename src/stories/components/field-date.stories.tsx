/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {FieldDate, FieldDateProps} from '@app/core/components/field-date';
import {ButtonGradient} from '@app/core/components/button-gradient';

export default {
  title: 'Components/FieldDate',
  component: FieldDate,
  argTypes: {
    disabled: {type: 'boolean'},
  },
} as ComponentMeta<typeof FieldDate>;

const Form = (props: FieldDateProps): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      date: new Date(),
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Required'),
    }),
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, undefined, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='h-96'>
      <FieldDate {...props} formik={formik} />
      <div className='mt-2 justify-center flex'>
        <ButtonGradient type='submit'>Submit</ButtonGradient>
      </div>
    </form>
  );
};

const Template: ComponentStory<typeof FieldDate> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'date',
  label: 'Field Date',
  variant: 'primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'date',
  label: 'Field Date',
  variant: 'primary',
  disabled: true,
};
