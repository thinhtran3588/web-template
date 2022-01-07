/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import {useFormik} from 'formik';
import {Range} from './range';

export type FieldRangeProps = React.ComponentProps<typeof Range> & {
  label: string;
  name: string;
  showLabel?: boolean;
  showError?: boolean;
  formik: unknown;
  containerClassName?: string;
  labelClassName?: string;
};

export const FieldRange = (props: FieldRangeProps): JSX.Element => {
  const {
    formik: inputFormik,
    label,
    name,
    containerClassName,
    labelClassName,
    showError = true,
    showLabel = true,
    ...other
  } = props;
  const formik = inputFormik as ReturnType<typeof useFormik>;

  return (
    <div className={clsx('form-control pt-1', containerClassName)}>
      {showLabel && (
        <label className={clsx('label py-1', labelClassName)} htmlFor={other.id}>
          {label}
        </label>
      )}
      <div className='flex justify-center items-center'>
        <Range
          {...other}
          className={clsx('flex-1', other?.className)}
          name={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
        />
        <span className='ml-2'>{formik.values[name]}</span>
      </div>
      {showError && formik.touched[name] && formik.errors[name] && (
        <span className='text-error mt-1'>{formik.errors[name]}</span>
      )}
    </div>
  );
};
