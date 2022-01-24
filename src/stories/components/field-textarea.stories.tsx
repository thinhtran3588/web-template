/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {FieldTextArea, FieldTextAreaProps} from '@app/core/components/field-textarea';
import {ButtonGradient} from '@app/core/components/button-gradient';

export default {
  title: 'Components/FieldTextArea',
  component: FieldTextArea,
  argTypes: {
    disabled: {type: 'boolean'},
  },
} as ComponentMeta<typeof FieldTextArea>;

const Form = (props: FieldTextAreaProps): JSX.Element => {
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
      <FieldTextArea {...props} formik={formik} />
      <div className='mt-2 justify-center flex'>
        <ButtonGradient type='submit'>Submit</ButtonGradient>
      </div>
    </form>
  );
};

const Template: ComponentStory<typeof FieldTextArea> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'text',
  variant: 'primary',
  label: 'Field TextArea',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'text',
  variant: 'primary',
  label: 'Disabled',
  disabled: true,
};
