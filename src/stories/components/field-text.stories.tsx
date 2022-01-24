/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {FieldText, FieldTextProps} from '@app/core/components/field-text';
import {ButtonGradient} from '@app/core/components/button-gradient';

export default {
  title: 'Components/FieldText',
  component: FieldText,
  argTypes: {
    disabled: {type: 'boolean'},
  },
} as ComponentMeta<typeof FieldText>;

const Form = (props: FieldTextProps): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: Yup.object({
      text: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, undefined, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FieldText {...props} formik={formik} />
      <div className='mt-2 justify-center flex'>
        <ButtonGradient type='submit'>Submit</ButtonGradient>
      </div>
    </form>
  );
};

const Template: ComponentStory<typeof FieldText> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'text',
  variant: 'primary',
  label: 'Field Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'text',
  variant: 'primary',
  label: 'Disabled',
  disabled: true,
};
