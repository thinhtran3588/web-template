/* eslint-disable react/jsx-props-no-spreading */
import {forwardRef, HTMLAttributes, LabelHTMLAttributes} from 'react';
import type {InputHTMLAttributes, DetailedHTMLProps} from 'react';
import clsx from 'clsx';

export type CheckboxProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  title?: string;
  containerAttributes?: LabelHTMLAttributes<HTMLLabelElement>;
  titleAttributes?: HTMLAttributes<HTMLSpanElement>;
  variant?: 'primary' | 'secondary' | 'accent';
};

export const Checkbox = forwardRef((props: CheckboxProps, ref): JSX.Element => {
  const {variant, containerAttributes, titleAttributes, title, id, className, ...other} = props;
  const {className: labelClassName, htmlFor, ...otherContainerAttributes} = containerAttributes || {};
  const {className: spanClassName, ...otherTitleAttributes} = titleAttributes || {};
  return (
    <label
      className={clsx(
        'cursor-pointer flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700',
        labelClassName || '',
      )}
      htmlFor={htmlFor || id}
      {...otherContainerAttributes}
    >
      <input
        ref={ref}
        id={id}
        type='checkbox'
        className={clsx('checkbox dark:border-gray-600', variant ? `checkbox-${variant}` : '', className)}
        {...other}
      />
      <span className={clsx('label-text ml-2 dark:text-gray-300', spanClassName || '')} {...otherTitleAttributes}>
        {title}
      </span>
    </label>
  );
}) as (props: CheckboxProps) => JSX.Element;

/**
 * css classes required by Tailwindcss
 * checkbox-primary checkbox-secondary checkbox-accent
 */
