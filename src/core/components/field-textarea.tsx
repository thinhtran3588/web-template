/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import {useFormik} from 'formik';
import type {ColorVariant} from '@core/interfaces';
import {TextArea} from './text-area';

export type FieldTextAreaProps = React.ComponentProps<typeof TextArea> & {
  label: string;
  name: string;
  showLabel?: boolean;
  showError?: boolean;
  variant?: ColorVariant;
  formik: unknown;
  containerClassName?: string;
  labelClassName?: string;
};

export const FieldTextArea = (props: FieldTextAreaProps): JSX.Element => {
  const {
    formik: inputFormik,
    label,
    name,
    containerClassName,
    labelClassName,
    showError = true,
    showLabel = true,
    variant,
    ...other
  } = props;
  const formik = inputFormik as ReturnType<typeof useFormik>;
  let inputVariant = variant;

  if (formik.touched[name]) {
    inputVariant = formik.errors[name] ? 'error' : 'success';
  }

  return (
    <div className={clsx('form-control pt-1', containerClassName)}>
      {showLabel && (
        <label className={clsx('label py-1', labelClassName)} htmlFor={other.id}>
          {label}
        </label>
      )}
      <TextArea
        {...other}
        className={clsx('w-full', other?.className)}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        variant={inputVariant}
      />
      {showError && formik.touched[name] && formik.errors[name] && (
        <span className='text-error mt-1'>{formik.errors[name]}</span>
      )}
    </div>
  );
};
