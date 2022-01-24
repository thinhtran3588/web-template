/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import {useFormik} from 'formik';
import type {ColorVariant, Option} from '@core/interfaces';
import {Checkbox} from './checkbox';
import {Dropdown} from './dropdown';
import {Select} from './select';

export type FieldSelectProps = {
  label: string;
  name: string;
  options: Option[];
  disabled?: boolean;
  showLabel?: boolean;
  showError?: boolean;
  variant?: 'primary' | 'secondary' | 'accent';
  formik: unknown;
  containerClassName?: string;
  labelClassName?: string;
  id?: string;
  className?: string;
  type?: 'dropdown' | 'checkbox' | 'select';
  nativeSelectOnMobile?: boolean;
  placeholder?: string;
};

export const isMobile = (): boolean => {
  let hasTouchScreen = false;
  if (typeof navigator !== 'undefined' && 'maxTouchPoints' in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  } else if (typeof navigator !== 'undefined' && 'msMaxTouchPoints' in navigator) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hasTouchScreen = (navigator as any).msMaxTouchPoints > 0;
  } else if (typeof window !== 'undefined') {
    const mQ = Boolean(window.matchMedia) && matchMedia('(pointer:coarse)');
    if (mQ && mQ.media === '(pointer:coarse)') {
      hasTouchScreen = !!mQ.matches;
    } else if ('orientation' in window) {
      hasTouchScreen = true; // deprecated, but good fallback
    } else {
      // Only as a last resort, fall back to user agent sniffing
      hasTouchScreen =
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(navigator.userAgent) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(navigator.userAgent);
    }
  }
  return hasTouchScreen;
};

export const FieldSelect = (props: FieldSelectProps): JSX.Element => {
  const {
    formik: inputFormik,
    label,
    name,
    containerClassName,
    labelClassName,
    showError = true,
    showLabel = true,
    variant,
    className,
    type = 'dropdown',
    nativeSelectOnMobile = false,
    placeholder,
    options,
    disabled,
    ...other
  } = props;
  const formik = inputFormik as ReturnType<typeof useFormik>;
  let validationVariant: ColorVariant | undefined = variant;

  if (formik.touched[name]) {
    validationVariant = formik.errors[name] ? 'error' : 'success';
  }

  const renderDropdown = (): JSX.Element => (
    <Dropdown
      {...other}
      className={clsx('w-full', className)}
      name={name}
      setValue={(value) => formik.setFieldValue(name, value)}
      value={formik.values[name]}
      variant={validationVariant}
      placeholder={placeholder}
      options={options}
      disabled={disabled}
    />
  );

  const renderSelect = (): JSX.Element => (
    <Select
      {...other}
      className={clsx('w-full', className)}
      name={name}
      onChange={formik.handleChange}
      value={formik.values[name] || ''}
      variant={validationVariant}
      placeholder={placeholder}
      disabled={disabled}
    >
      {placeholder && (
        <option value='' disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </Select>
  );
  const renderCheckbox = (): JSX.Element => (
    <>
      {placeholder && (
        <option value='' disabled>
          {placeholder}
        </option>
      )}
      {options.map((option, index) => (
        <Checkbox
          title={option.text}
          id={`${name}-${index}`}
          variant={variant}
          checked={option.value === formik.values[name]}
          onChange={() => formik.setFieldValue(name, option.value)}
          name={name}
          value={option.value}
          key={option.value}
          disabled={disabled}
        />
      ))}
    </>
  );

  return (
    <div className={clsx('form-control pt-1', containerClassName)}>
      {showLabel && (
        <label className={clsx('label py-1', labelClassName)} htmlFor={other.id}>
          {label}
        </label>
      )}
      {type === 'dropdown' && !nativeSelectOnMobile && renderDropdown()}
      {type === 'dropdown' && nativeSelectOnMobile && (isMobile() ? renderSelect() : renderDropdown())}
      {type === 'select' && renderSelect()}
      {type === 'checkbox' && renderCheckbox()}
      {showError && formik.touched[name] && formik.errors[name] && (
        <span className='text-error mt-1'>{formik.errors[name]}</span>
      )}
    </div>
  );
};
