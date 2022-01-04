/* eslint-disable react/jsx-props-no-spreading */
import {forwardRef, HTMLAttributes, LabelHTMLAttributes} from 'react';
import type {InputHTMLAttributes, DetailedHTMLProps} from 'react';
import clsx from 'clsx';
import {ColorVariant} from '@core/interfaces';

export type ToggleProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  title?: string;
  containerAttributes?: LabelHTMLAttributes<HTMLLabelElement>;
  titleAttributes?: HTMLAttributes<HTMLSpanElement>;
  variant?: ColorVariant;
};

export const Toggle = forwardRef<HTMLInputElement>((props: ToggleProps, ref): JSX.Element => {
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
        type='toggle'
        className={clsx(
          'toggle',
          other.disabled ? 'dark:bg-gray-300' : '',
          variant ? `toggle-${variant}` : '',
          className,
        )}
        {...other}
      />
      <span className={clsx('label-text ml-2 dark:text-gray-300', spanClassName)} {...otherTitleAttributes}>
        {title}
      </span>
    </label>
  );
}) as (props: ToggleProps) => JSX.Element;

/**
 * css classes required by Tailwindcss
 * toggle-primary toggle-secondary toggle-accent
 * toggle-success toggle-warning toggle-error toggle-info
 */
