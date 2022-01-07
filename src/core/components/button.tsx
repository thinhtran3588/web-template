/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import type {ColorVariant} from '@core/interfaces';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: ColorVariant | 'ghost' | 'link';
};

export const Button = forwardRef((props: ButtonProps, ref): JSX.Element => {
  const {variant, className = '', type = 'button', children, ...other} = props;

  return (
    <button
      ref={ref}
      type={type}
      className={clsx(
        `btn rounded-full min-w-10`,
        className.includes('btn-ghost') ? 'dark:hover:bg-gray-600' : '',
        other.disabled ? 'dark:text-gray-500' : '',
        variant ? `btn-${variant}` : '',
        className,
      )}
      {...other}
    >
      {children}
    </button>
  );
}) as (props: ButtonProps) => JSX.Element;

/**
 * css classes required by Tailwindcss
 * btn-primary btn-secondary btn-accent
 * btn-success btn-warning btn-error btn-info
 * btn-ghost btn-link
 */
