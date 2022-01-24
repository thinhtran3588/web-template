/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {FieldBoolean, FieldBooleanProps} from '@app/core/components/field-boolean';
import {ButtonGradient} from '@app/core/components/button-gradient';

export default {
  title: 'Components/FieldBoolean',
  component: FieldBoolean,
  argTypes: {
    disabled: {type: 'boolean'},
  },
} as ComponentMeta<typeof FieldBoolean>;

const Form = (props: FieldBooleanProps): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      bool: false,
    },
    validationSchema: Yup.object({
      bool: Yup.boolean(),
    }),
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, undefined, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FieldBoolean {...props} formik={formik} />
      <div className='mt-2 justify-center flex'>
        <ButtonGradient type='submit'>Submit</ButtonGradient>
      </div>
    </form>
  );
};

const Template: ComponentStory<typeof FieldBoolean> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'bool',
  label: 'Field Boolean',
  variant: 'primary',
};

export const Toggle = Template.bind({});
Toggle.args = {
  name: 'bool',
  label: 'Toggle',
  type: 'toggle',
  variant: 'primary',
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  name: 'bool',
  label: 'Checkbox',
  type: 'checkbox',
  variant: 'primary',
};

export const Radio = Template.bind({});
Radio.args = {
  name: 'bool',
  id: 'bool',
  label: 'Radio',
  type: 'radio',
  variant: 'primary',
  falseLabel: 'False',
  trueLabel: 'True',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'bool',
  label: 'Disabled',
  variant: 'primary',
  disabled: true,
};
