/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {InputHTMLAttributes, DetailedHTMLProps} from 'react';

export type RangeProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  variant?: 'primary' | 'secondary' | 'accent';
};

export const Range = forwardRef((props: RangeProps, ref): JSX.Element => {
  const {variant, className, ...other} = props;

  return (
    <input
      ref={ref}
      type='range'
      className={clsx(
        `range dark:bg-gray-600 rounded-full`,
        other.disabled ? 'dark:text-gray-500' : '',
        variant ? `range-${variant}` : '',
        className,
      )}
      {...other}
    />
  );
}) as (props: RangeProps) => JSX.Element;

/**
 * css classes required by Tailwindcss
 * range-primary range-secondary range-accent
 */
