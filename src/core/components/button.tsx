/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = forwardRef((props: ButtonProps, ref): JSX.Element => {
  const {className = '', type = 'button', children, ...other} = props;

  return (
    <button
      ref={ref}
      type={type}
      className={clsx(
        `btn rounded-full min-w-10`,
        className.includes('btn-ghost') ? 'dark:hover:bg-gray-600' : '',
        other.disabled ? 'dark:text-gray-500' : '',
        className,
      )}
      {...other}
    >
      {children}
    </button>
  );
}) as (props: ButtonProps) => JSX.Element;
