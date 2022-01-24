/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {InputHTMLAttributes, DetailedHTMLProps} from 'react';
import type {ColorVariant} from '@core/interfaces';

export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  variant?: ColorVariant;
};

export const Input = forwardRef((props: InputProps, ref): JSX.Element => {
  const {variant, className, type = 'text', ...other} = props;

  return (
    <input
      ref={ref}
      type={type}
      className={clsx(
        `input input-bordered dark:bg-gray-700 dark:text-gray-300 rounded-full`,
        other.disabled ? 'dark:text-gray-500' : '',
        variant ? `input-${variant}` : '',
        className,
      )}
      {...other}
    />
  );
}) as (props: InputProps) => JSX.Element;

/**
 * css classes required by Tailwindcss
 * input-primary input-secondary input-accent
 * input-success input-warning input-error input-info
 */
