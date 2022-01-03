/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {InputHTMLAttributes, DetailedHTMLProps} from 'react';

export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = forwardRef((props: InputProps, ref): JSX.Element => {
  const {className = '', type = 'text', ...other} = props;

  return (
    <input
      ref={ref}
      type={type}
      className={clsx(
        `input input-bordered dark:bg-gray-700 rounded-full`,
        other.disabled ? 'dark:text-gray-500' : '',
        className,
      )}
      {...other}
    />
  );
}) as (props: InputProps) => JSX.Element;
