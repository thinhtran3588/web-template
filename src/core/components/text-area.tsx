/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {TextareaHTMLAttributes, DetailedHTMLProps} from 'react';
import type {ColorVariant} from '@core/interfaces';

export type TextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
  variant?: ColorVariant;
};

export const TextArea = forwardRef((props: TextAreaProps, ref): JSX.Element => {
  const {variant, className, children, ...other} = props;

  return (
    <textarea
      ref={ref}
      className={clsx(
        `textarea textarea-bordered rounded-3xl dark:bg-gray-700 dark:text-gray-300`,
        other.disabled ? ' dark:text-gray-500' : '',
        variant ? `textarea-${variant}` : '',
        className,
      )}
      {...other}
    >
      {children}
    </textarea>
  );
}) as (props: TextAreaProps) => JSX.Element;

/**
 * css classes required by Tailwindcss
 * textarea-primary textarea-secondary textarea-accent
 * textarea-success textarea-warning from-error from-info
 */
