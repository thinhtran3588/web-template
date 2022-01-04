/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {SelectHTMLAttributes, DetailedHTMLProps} from 'react';
import type {ColorVariant} from '@core/interfaces';

export type SelectProps = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
  variant?: ColorVariant;
};

export const Select = forwardRef((props: SelectProps, ref): JSX.Element => {
  const {variant, className, children, ...other} = props;

  return (
    <select
      ref={ref}
      className={clsx(
        `select select-bordered rounded-full dark:bg-gray-700`,
        other.disabled ? ' dark:text-gray-500' : '',
        variant ? `select-${variant}` : '',
        className,
      )}
      {...other}
    >
      {children}
    </select>
  );
}) as (props: SelectProps) => JSX.Element;
