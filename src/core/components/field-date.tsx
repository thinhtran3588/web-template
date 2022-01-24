/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import {useFormik} from 'formik';
import {DatePicker} from './date-picker';
import {Input} from './input';

export type FieldDateProps = React.ComponentProps<typeof Input> & {
  label: string;
  name: string;
  disabled?: boolean;
  showLabel?: boolean;
  showError?: boolean;
  formik: unknown;
  containerClassName?: string;
  labelClassName?: string;
};

export const FieldDate = (props: FieldDateProps): JSX.Element => {
  const {
    formik: inputFormik,
    label,
    name,
    containerClassName,
    labelClassName,
    showError = true,
    showLabel = true,
    variant,
    disabled,
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
      <DatePicker
        className={clsx('w-full', other?.className)}
        name={name}
        onChange={(date) => formik.setFieldValue(name, date)}
        onBlur={formik.handleBlur}
        selected={formik.values[name] as Date}
        variant={inputVariant}
        disabled={disabled}
      />
      {showError && formik.touched[name] && formik.errors[name] && (
        <span className='text-error mt-1'>{formik.errors[name]}</span>
      )}
    </div>
  );
};
